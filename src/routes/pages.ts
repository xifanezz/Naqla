import { Hono } from 'hono';
import { sql } from '../db';
import { auth } from '../lib/auth';
import { homePage, listingCard } from '../views/home';
import { listingPage } from '../views/listing';
import { loginPage, registerPage } from '../views/auth';
import { postListingPage } from '../views/post';
import { chatListPage, chatRoomPage } from '../views/chat';
import { profilePage, settingsPage, notificationsPage, myListingsPage } from '../views/profile';
import { layout } from '../views/layout';
import { searchListings } from '../services/search';

const pages = new Hono();

// Homepage
pages.get('/', async (c) => {
  // Get main categories (parent_id IS NULL) with their subcategories
  const mainCategories = await sql`
    SELECT c.*,
      (SELECT COUNT(*) FROM listings l
       JOIN categories sub ON l.category_id = sub.id
       WHERE (sub.parent_id = c.id OR sub.id = c.id) AND l.status = 'active') as listing_count
    FROM categories c
    WHERE c.parent_id IS NULL
    ORDER BY c.sort_order ASC
  `;

  // Get all subcategories grouped by parent
  const subcategories = await sql`
    SELECT c.*,
      (SELECT COUNT(*) FROM listings l WHERE l.category_id = c.id AND l.status = 'active') as listing_count
    FROM categories c
    WHERE c.parent_id IS NOT NULL
    ORDER BY c.parent_id, c.sort_order ASC
  `;

  // Group subcategories by parent_id
  const subsByParent: Record<number, any[]> = {};
  for (const sub of subcategories) {
    if (!subsByParent[sub.parent_id]) {
      subsByParent[sub.parent_id] = [];
    }
    subsByParent[sub.parent_id].push(sub);
  }

  // Attach subcategories to main categories
  const categories = mainCategories.map((cat: any) => ({
    ...cat,
    subcategories: subsByParent[cat.id] || []
  }));

  const listings = await sql`
    SELECT l.*, c.name_ar as category_name
    FROM listings l
    LEFT JOIN categories c ON l.category_id = c.id
    WHERE l.status = 'active'
    ORDER BY l.created_at DESC
    LIMIT 12
  `;

  const user = c.get('userId') ? { id: c.get('userId'), name: 'مستخدم' } : null;

  return c.html(homePage({ categories, listings, user }));
});

// Search page
pages.get('/search', async (c) => {
  const q = c.req.query('q') || '';
  const category = c.req.query('category');
  const city = c.req.query('city');
  const page = parseInt(c.req.query('page') || '1');

  const results = await searchListings(q, {
    category_id: category ? parseInt(category) : undefined,
    city
  }, page);

  const user = c.get('userId') ? { id: c.get('userId') } : null;

  return c.html(layout(`
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="mb-8">
        <h1 class="text-2xl font-bold text-dark-900 mb-2">نتائج البحث: "${q}"</h1>
        <p class="text-dark-500">${results.estimatedTotalHits} نتيجة</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        ${results.hits.length > 0
          ? results.hits.map((hit: any) => listingCard(hit)).join('')
          : `<div class="col-span-full text-center py-16">
              <div class="w-20 h-20 bg-dark-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i data-lucide="search-x" class="w-10 h-10 text-dark-300"></i>
              </div>
              <h3 class="text-xl font-bold text-dark-700 mb-2">لا توجد نتائج</h3>
              <p class="text-dark-400">جرب كلمات بحث أخرى</p>
            </div>`
        }
      </div>
    </div>
    <script>lucide.createIcons();</script>
  `, { title: `بحث: ${q} | نقلة`, user }));
});

// Category page
pages.get('/category/:slug', async (c) => {
  const slug = c.req.param('slug');

  const [category] = await sql`SELECT * FROM categories WHERE slug = ${slug}`;
  if (!category) {
    return c.html(layout(`
      <div class="text-center py-16">
        <h1 class="text-2xl font-bold">القسم غير موجود</h1>
      </div>
    `), 404);
  }

  const listings = await sql`
    SELECT l.*, c.name_ar as category_name
    FROM listings l
    LEFT JOIN categories c ON l.category_id = c.id
    WHERE l.category_id = ${category.id} AND l.status = 'active'
    ORDER BY l.created_at DESC
    LIMIT 20
  `;

  const user = c.get('userId') ? { id: c.get('userId') } : null;

  return c.html(layout(`
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="mb-8">
        <h1 class="text-2xl font-bold text-dark-900 mb-2">${category.name_ar}</h1>
        <p class="text-dark-500">${listings.length} إعلان</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        ${listings.length > 0
          ? listings.map((l: any) => listingCard(l)).join('')
          : `<div class="col-span-full text-center py-16">
              <div class="w-20 h-20 bg-dark-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i data-lucide="package-open" class="w-10 h-10 text-dark-300"></i>
              </div>
              <h3 class="text-xl font-bold text-dark-700 mb-2">لا توجد إعلانات في هذا القسم</h3>
              <a href="/post" class="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white font-bold rounded-xl mt-4">
                <i data-lucide="plus" class="w-5 h-5"></i>
                أضف إعلان
              </a>
            </div>`
        }
      </div>
    </div>
    <script>lucide.createIcons();</script>
  `, { title: `${category.name_ar} | نقلة`, user }));
});

// Listing detail page
pages.get('/listing/:id', async (c) => {
  const id = parseInt(c.req.param('id'));

  const [listing] = await sql`
    SELECT l.*, c.name_ar as category_name, c.slug as category_slug,
           u.name as user_name, u.phone as user_phone, u.avatar_url as user_avatar
    FROM listings l
    LEFT JOIN categories c ON l.category_id = c.id
    LEFT JOIN users u ON l.user_id = u.id
    WHERE l.id = ${id}
  `;

  if (!listing) {
    return c.html(layout(`
      <div class="text-center py-16">
        <h1 class="text-2xl font-bold">الإعلان غير موجود</h1>
      </div>
    `), 404);
  }

  // Track view
  const userId = c.get('userId');
  await sql`INSERT INTO listing_views (listing_id, viewer_id) VALUES (${id}, ${userId || null})`;
  await sql`UPDATE listings SET views_count = views_count + 1 WHERE id = ${id}`;

  const user = userId ? { id: userId, name: 'مستخدم' } : null;

  return c.html(listingPage({ listing, user }));
});

// Auth pages
pages.get('/login', (c) => {
  const redirect = c.req.query('redirect');
  return c.html(loginPage(redirect));
});

pages.get('/register', (c) => {
  const redirect = c.req.query('redirect');
  return c.html(registerPage(redirect));
});

// Post listing page
pages.get('/post', async (c) => {
  const categories = await sql`SELECT * FROM categories ORDER BY sort_order`;
  const session = await auth.api.getSession({ headers: c.req.raw.headers });

  let user = null;
  if (session) {
    // Fetch full user data including phone and city
    const [userData] = await sql`SELECT id, name, phone, city FROM "user" WHERE id = ${session.user.id}`;
    user = userData || { id: session.user.id, name: session.user.name };
  }

  return c.html(postListingPage(categories, user));
});

// Chat pages
pages.get('/chat', async (c) => {
  const session = await auth.api.getSession({ headers: c.req.raw.headers });
  if (!session) {
    return c.redirect('/login?redirect=/chat');
  }

  // For new Better Auth users, show empty conversations
  const conversations: any[] = [];
  const user = { id: session.user.id, name: session.user.name };

  return c.html(chatListPage(conversations, user));
});

pages.get('/chat/:id', async (c) => {
  const session = await auth.api.getSession({ headers: c.req.raw.headers });
  if (!session) {
    return c.redirect('/login?redirect=/chat');
  }

  // For new Better Auth users, redirect to chat list (no conversations yet)
  return c.redirect('/chat');
});

// Profile page
pages.get('/profile', async (c) => {
  const session = await auth.api.getSession({ headers: c.req.raw.headers });
  if (!session) {
    return c.redirect('/login?redirect=/profile');
  }

  const user = session.user;

  // Stats - for now empty since new users don't have legacy data
  const stats: any = { listings: 0, views: 0, messages: 0, favorites: 0, unread_messages: 0, unread_notifications: 0 };
  const listings: any[] = [];

  return c.html(profilePage(user, stats, listings));
});

// Settings page
pages.get('/settings', async (c) => {
  const session = await auth.api.getSession({ headers: c.req.raw.headers });
  if (!session) {
    return c.redirect('/login?redirect=/settings');
  }

  // Check if user has a password (credential account) vs only OAuth
  const [credentialAccount] = await sql`
    SELECT id FROM account
    WHERE "userId" = ${session.user.id} AND "providerId" = 'credential'
    LIMIT 1
  `;
  const hasPassword = !!credentialAccount;

  return c.html(settingsPage(session.user, hasPassword));
});

// Notifications page
pages.get('/notifications', async (c) => {
  const session = await auth.api.getSession({ headers: c.req.raw.headers });
  if (!session) {
    return c.redirect('/login?redirect=/notifications');
  }

  // For now, empty notifications
  const notifications: any[] = [];

  return c.html(notificationsPage(notifications, session.user));
});

// My listings page (updated)
pages.get('/my-listings', async (c) => {
  const session = await auth.api.getSession({ headers: c.req.raw.headers });
  if (!session) {
    return c.redirect('/login?redirect=/my-listings');
  }

  // For now empty listings for new Better Auth users
  const listings: any[] = [];

  return c.html(myListingsPage(listings, session.user));
});

export default pages;
