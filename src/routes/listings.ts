import { Hono } from 'hono';
import { sql } from '../db';
import { indexListing, removeListing, searchListings } from '../services/search';

const listings = new Hono();

// Search listings
listings.get('/search', async (c) => {
  const query = c.req.query('q') || '';
  const category_id = c.req.query('category') ? parseInt(c.req.query('category')!) : undefined;
  const city = c.req.query('city');
  const minPrice = c.req.query('minPrice') ? parseFloat(c.req.query('minPrice')!) : undefined;
  const maxPrice = c.req.query('maxPrice') ? parseFloat(c.req.query('maxPrice')!) : undefined;
  const page = parseInt(c.req.query('page') || '1');

  const results = await searchListings(query, { category_id, city, minPrice, maxPrice }, page);
  return c.json(results);
});

// Get all listings (paginated)
listings.get('/', async (c) => {
  const page = parseInt(c.req.query('page') || '1');
  const limit = parseInt(c.req.query('limit') || '20');
  const category = c.req.query('category');
  const city = c.req.query('city');
  const offset = (page - 1) * limit;

  let query = sql`
    SELECT l.*, c.name_ar as category_name, u.name as user_name, u.phone as user_phone
    FROM listings l
    LEFT JOIN categories c ON l.category_id = c.id
    LEFT JOIN users u ON l.user_id = u.id
    WHERE l.status = 'active'
  `;

  if (category) {
    query = sql`${query} AND c.slug = ${category}`;
  }
  if (city) {
    query = sql`${query} AND l.city = ${city}`;
  }

  query = sql`${query} ORDER BY l.created_at DESC LIMIT ${limit} OFFSET ${offset}`;

  const items = await query;

  const [{ count }] = await sql`SELECT COUNT(*) FROM listings WHERE status = 'active'`;

  return c.json({
    items,
    page,
    limit,
    total: parseInt(count),
    pages: Math.ceil(parseInt(count) / limit),
  });
});

// Get single listing
listings.get('/:id', async (c) => {
  const id = parseInt(c.req.param('id'));
  const userId = c.get('userId');

  const [listing] = await sql`
    SELECT l.*, c.name_ar as category_name, c.slug as category_slug,
           u.name as user_name, u.phone as user_phone, u.avatar_url as user_avatar
    FROM listings l
    LEFT JOIN categories c ON l.category_id = c.id
    LEFT JOIN users u ON l.user_id = u.id
    WHERE l.id = ${id}
  `;

  if (!listing) {
    return c.json({ error: 'الإعلان غير موجود' }, 404);
  }

  // Track view
  await sql`
    INSERT INTO listing_views (listing_id, viewer_id)
    VALUES (${id}, ${userId || null})
  `;

  // Update view count
  await sql`UPDATE listings SET views_count = views_count + 1 WHERE id = ${id}`;

  return c.json({ listing });
});

// Create listing
listings.post('/', async (c) => {
  const userId = c.get('userId');
  if (!userId) {
    return c.json({ error: 'يجب تسجيل الدخول أولاً' }, 401);
  }

  const body = await c.req.json();
  const { title, description, price, price_type, category_id, city, neighborhood, latitude, longitude, images } = body;

  if (!title || !city || !category_id) {
    return c.json({ error: 'الرجاء إدخال جميع البيانات المطلوبة' }, 400);
  }

  const [listing] = await sql`
    INSERT INTO listings (user_id, category_id, title, description, price, price_type, city, neighborhood, latitude, longitude, images)
    VALUES (${userId}, ${category_id}, ${title}, ${description || null}, ${price || null}, ${price_type || 'fixed'}, ${city}, ${neighborhood || null}, ${latitude || null}, ${longitude || null}, ${images || []})
    RETURNING *
  `;

  // Index in Meilisearch
  await indexListing({
    id: listing.id,
    title: listing.title,
    description: listing.description,
    price: listing.price,
    city: listing.city,
    neighborhood: listing.neighborhood,
    category_id: listing.category_id,
    status: listing.status,
    user_id: listing.user_id,
    created_at: listing.created_at,
    views_count: 0,
  });

  return c.json({ listing }, 201);
});

// Update listing
listings.put('/:id', async (c) => {
  const id = parseInt(c.req.param('id'));
  const userId = c.get('userId');

  const [existing] = await sql`SELECT user_id FROM listings WHERE id = ${id}`;
  if (!existing || existing.user_id !== userId) {
    return c.json({ error: 'غير مصرح' }, 403);
  }

  const body = await c.req.json();
  const { title, description, price, price_type, category_id, city, neighborhood, images, status } = body;

  const [listing] = await sql`
    UPDATE listings SET
      title = COALESCE(${title}, title),
      description = COALESCE(${description}, description),
      price = COALESCE(${price}, price),
      price_type = COALESCE(${price_type}, price_type),
      category_id = COALESCE(${category_id}, category_id),
      city = COALESCE(${city}, city),
      neighborhood = COALESCE(${neighborhood}, neighborhood),
      images = COALESCE(${images}, images),
      status = COALESCE(${status}, status),
      updated_at = NOW()
    WHERE id = ${id}
    RETURNING *
  `;

  // Re-index in Meilisearch
  await indexListing({
    id: listing.id,
    title: listing.title,
    description: listing.description,
    price: listing.price,
    city: listing.city,
    neighborhood: listing.neighborhood,
    category_id: listing.category_id,
    status: listing.status,
    user_id: listing.user_id,
    created_at: listing.created_at,
    views_count: listing.views_count,
  });

  return c.json({ listing });
});

// Delete listing
listings.delete('/:id', async (c) => {
  const id = parseInt(c.req.param('id'));
  const userId = c.get('userId');

  const [existing] = await sql`SELECT user_id FROM listings WHERE id = ${id}`;
  if (!existing || existing.user_id !== userId) {
    return c.json({ error: 'غير مصرح' }, 403);
  }

  await sql`DELETE FROM listings WHERE id = ${id}`;
  await removeListing(id);

  return c.json({ success: true });
});

export default listings;
