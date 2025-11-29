import { Hono } from 'hono';
import { sql } from '../db';

const categories = new Hono();

// Get all categories
categories.get('/', async (c) => {
  const items = await sql`
    SELECT c.*,
      (SELECT COUNT(*) FROM listings l WHERE l.category_id = c.id AND l.status = 'active') as listing_count
    FROM categories c
    ORDER BY c.sort_order ASC
  `;

  return c.json({ categories: items });
});

// Get category by slug
categories.get('/:slug', async (c) => {
  const slug = c.req.param('slug');

  const [category] = await sql`
    SELECT * FROM categories WHERE slug = ${slug}
  `;

  if (!category) {
    return c.json({ error: 'القسم غير موجود' }, 404);
  }

  return c.json({ category });
});

export default categories;
