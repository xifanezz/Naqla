import { Hono } from 'hono';
import { sql } from '../db';
import { auth } from '../lib/auth';
import * as fs from 'fs';
import * as path from 'path';

const user = new Hono();

// Get current user profile
user.get('/profile', async (c) => {
  const session = await auth.api.getSession({ headers: c.req.raw.headers });
  if (!session) return c.json({ error: 'غير مصرح' }, 401);

  const [userData] = await sql`
    SELECT * FROM "user" WHERE id = ${session.user.id}
  `;

  return c.json({ user: userData });
});

// Update user profile
user.put('/profile', async (c) => {
  const session = await auth.api.getSession({ headers: c.req.raw.headers });
  if (!session) return c.json({ error: 'غير مصرح' }, 401);

  const { name, phone, city } = await c.req.json();

  if (!name || name.trim().length < 2) {
    return c.json({ error: 'الاسم مطلوب' }, 400);
  }

  await sql`
    UPDATE "user" SET
      name = ${name.trim()},
      phone = ${phone || null},
      city = ${city || null},
      "updatedAt" = NOW()
    WHERE id = ${session.user.id}
  `;

  return c.json({ success: true });
});

// Upload avatar
user.post('/avatar', async (c) => {
  const session = await auth.api.getSession({ headers: c.req.raw.headers });
  if (!session) return c.json({ error: 'غير مصرح' }, 401);

  const formData = await c.req.formData();
  const file = formData.get('avatar') as File;

  if (!file) {
    return c.json({ error: 'لم يتم اختيار صورة' }, 400);
  }

  // Validate file type
  const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
  if (!allowedTypes.includes(file.type)) {
    return c.json({ error: 'نوع الملف غير مدعوم' }, 400);
  }

  // Validate file size (max 5MB)
  if (file.size > 5 * 1024 * 1024) {
    return c.json({ error: 'حجم الملف كبير جداً (الحد الأقصى 5MB)' }, 400);
  }

  try {
    // Create uploads directory if not exists
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads', 'avatars');
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    // Generate unique filename
    const ext = file.type.split('/')[1] === 'jpeg' ? 'jpg' : file.type.split('/')[1];
    const filename = `${session.user.id}_${Date.now()}.${ext}`;
    const filepath = path.join(uploadsDir, filename);

    // Save file
    const buffer = await file.arrayBuffer();
    fs.writeFileSync(filepath, Buffer.from(buffer));

    // Update user avatar URL
    const avatarUrl = `/uploads/avatars/${filename}`;
    await sql`
      UPDATE "user" SET
        image = ${avatarUrl},
        "updatedAt" = NOW()
      WHERE id = ${session.user.id}
    `;

    return c.json({ avatar_url: avatarUrl });
  } catch (err) {
    console.error('Avatar upload error:', err);
    return c.json({ error: 'فشل رفع الصورة' }, 500);
  }
});

// Change password
user.put('/password', async (c) => {
  const session = await auth.api.getSession({ headers: c.req.raw.headers });
  if (!session) return c.json({ error: 'غير مصرح' }, 401);

  const { currentPassword, newPassword } = await c.req.json();

  if (!currentPassword || !newPassword) {
    return c.json({ error: 'كلمة المرور مطلوبة' }, 400);
  }

  try {
    // Use Better Auth's password change
    await auth.api.changePassword({
      body: {
        currentPassword,
        newPassword,
      },
      headers: c.req.raw.headers,
    });

    return c.json({ success: true });
  } catch (err: any) {
    return c.json({ error: err.message || 'فشل تغيير كلمة المرور' }, 400);
  }
});

// Get user stats
user.get('/stats', async (c) => {
  const session = await auth.api.getSession({ headers: c.req.raw.headers });
  if (!session) return c.json({ error: 'غير مصرح' }, 401);

  // Get legacy user ID if linked
  const [legacyUser] = await sql`
    SELECT id FROM users WHERE better_auth_id = ${session.user.id}
  `;
  const legacyId = legacyUser?.id;

  const stats: any = {};

  if (legacyId) {
    // Listings count
    const [listingsCount] = await sql`
      SELECT COUNT(*) as count FROM listings WHERE user_id = ${legacyId}
    `;
    stats.listings = parseInt(listingsCount?.count || '0');

    // Total views
    const [viewsCount] = await sql`
      SELECT COALESCE(SUM(views_count), 0) as count FROM listings WHERE user_id = ${legacyId}
    `;
    stats.views = parseInt(viewsCount?.count || '0');

    // Messages count
    const [messagesCount] = await sql`
      SELECT COUNT(*) as count FROM messages m
      JOIN conversations c ON m.conversation_id = c.id
      WHERE c.buyer_id = ${legacyId} OR c.seller_id = ${legacyId}
    `;
    stats.messages = parseInt(messagesCount?.count || '0');

    // Unread messages
    const [unreadMessages] = await sql`
      SELECT COUNT(*) as count FROM messages m
      JOIN conversations c ON m.conversation_id = c.id
      WHERE (c.buyer_id = ${legacyId} OR c.seller_id = ${legacyId})
      AND m.sender_id != ${legacyId}
      AND m.is_read = FALSE
    `;
    stats.unread_messages = parseInt(unreadMessages?.count || '0');

    // Favorites count
    const [favoritesCount] = await sql`
      SELECT COUNT(*) as count FROM favorites WHERE user_id = ${legacyId}
    `;
    stats.favorites = parseInt(favoritesCount?.count || '0');
  } else {
    stats.listings = 0;
    stats.views = 0;
    stats.messages = 0;
    stats.unread_messages = 0;
    stats.favorites = 0;
  }

  // Notifications count (would need notifications table)
  stats.unread_notifications = 0;

  return c.json(stats);
});

// Get notifications
user.get('/notifications', async (c) => {
  const session = await auth.api.getSession({ headers: c.req.raw.headers });
  if (!session) return c.json({ error: 'غير مصرح' }, 401);

  // For now return empty - notifications table needs to be created
  return c.json({ notifications: [] });
});

// Mark all notifications as read
user.post('/notifications/read-all', async (c) => {
  const session = await auth.api.getSession({ headers: c.req.raw.headers });
  if (!session) return c.json({ error: 'غير مصرح' }, 401);

  // Would update notifications table
  return c.json({ success: true });
});

export default user;
