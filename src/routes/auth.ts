import { Hono } from 'hono';
import { auth } from '../lib/auth';
import { sql } from '../db';

const authRoutes = new Hono();

// Get current user (custom endpoint) - must be before the catch-all
authRoutes.get('/me', async (c) => {
  const session = await auth.api.getSession({
    headers: c.req.raw.headers,
  });

  if (!session) {
    return c.json({ error: 'غير مصرح' }, 401);
  }

  // Get additional user data from legacy users table if linked
  const [legacyUser] = await sql`
    SELECT id, phone, city, avatar_url, is_verified
    FROM users WHERE better_auth_id = ${session.user.id}
  `;

  return c.json({
    user: {
      id: session.user.id,
      name: session.user.name,
      email: session.user.email,
      phone: session.user.phone || legacyUser?.phone,
      city: session.user.city || legacyUser?.city,
      avatar_url: session.user.image || legacyUser?.avatar_url,
      is_verified: session.user.emailVerified || legacyUser?.is_verified,
      legacy_id: legacyUser?.id,
    },
  });
});

// Better Auth handler - handles all /api/auth/* routes (catch-all, must be last)
authRoutes.on(['GET', 'POST'], '/*', async (c) => {
  return auth.handler(c.req.raw);
});

export default authRoutes;
