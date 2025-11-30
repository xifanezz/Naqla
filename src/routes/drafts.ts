import { Hono } from 'hono';
import { sql } from '../db';

const drafts = new Hono();

// Get user's draft
drafts.get('/', async (c) => {
  const userId = c.get('userId');
  if (!userId) {
    return c.json({ error: 'يجب تسجيل الدخول' }, 401);
  }

  const [draft] = await sql`
    SELECT draft_data, updated_at
    FROM listing_drafts
    WHERE user_id = ${userId}
  `;

  if (!draft) {
    return c.json({ draft: null });
  }

  return c.json({
    draft: draft.draft_data,
    updatedAt: draft.updated_at
  });
});

// Save/update draft
drafts.post('/', async (c) => {
  const userId = c.get('userId');
  if (!userId) {
    return c.json({ error: 'يجب تسجيل الدخول' }, 401);
  }

  const body = await c.req.json();
  const { draft } = body;

  if (!draft) {
    return c.json({ error: 'البيانات مطلوبة' }, 400);
  }

  // Upsert - insert or update
  await sql`
    INSERT INTO listing_drafts (user_id, draft_data, updated_at)
    VALUES (${userId}, ${JSON.stringify(draft)}, NOW())
    ON CONFLICT (user_id)
    DO UPDATE SET draft_data = ${JSON.stringify(draft)}, updated_at = NOW()
  `;

  return c.json({ success: true });
});

// Delete draft
drafts.delete('/', async (c) => {
  const userId = c.get('userId');
  if (!userId) {
    return c.json({ error: 'يجب تسجيل الدخول' }, 401);
  }

  await sql`DELETE FROM listing_drafts WHERE user_id = ${userId}`;

  return c.json({ success: true });
});

export default drafts;
