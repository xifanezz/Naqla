import { Hono } from 'hono';
import { sql } from '../db';
import { auth } from '../lib/auth';
import { sendMessage, notifyUser } from '../services/realtime';

const chat = new Hono();

// Helper to get legacy user ID from Better Auth session
async function getLegacyUserId(headers: Headers): Promise<number | null> {
  try {
    const session = await auth.api.getSession({ headers });
    if (!session) return null;

    const [legacyUser] = await sql`
      SELECT id FROM users WHERE better_auth_id = ${session.user.id}
    `;
    return legacyUser?.id || null;
  } catch {
    return null;
  }
}

// Get user's conversations
chat.get('/conversations', async (c) => {
  const userId = await getLegacyUserId(c.req.raw.headers);
  if (!userId) {
    return c.json({ error: 'يجب تسجيل الدخول أولاً' }, 401);
  }

  const conversations = await sql`
    SELECT
      c.*,
      l.title as listing_title,
      l.images as listing_images,
      l.price as listing_price,
      CASE WHEN c.buyer_id = ${userId} THEN s.name ELSE b.name END as other_user_name,
      CASE WHEN c.buyer_id = ${userId} THEN s.avatar_url ELSE b.avatar_url END as other_user_avatar,
      CASE WHEN c.buyer_id = ${userId} THEN c.seller_id ELSE c.buyer_id END as other_user_id,
      (
        SELECT content FROM messages m
        WHERE m.conversation_id = c.id
        ORDER BY m.created_at DESC LIMIT 1
      ) as last_message,
      (
        SELECT COUNT(*) FROM messages m
        WHERE m.conversation_id = c.id
        AND m.sender_id != ${userId}
        AND m.is_read = FALSE
      ) as unread_count
    FROM conversations c
    LEFT JOIN listings l ON c.listing_id = l.id
    LEFT JOIN users b ON c.buyer_id = b.id
    LEFT JOIN users s ON c.seller_id = s.id
    WHERE c.buyer_id = ${userId} OR c.seller_id = ${userId}
    ORDER BY c.last_message_at DESC
  `;

  return c.json({ conversations });
});

// Get or create conversation
chat.post('/conversations', async (c) => {
  const userId = await getLegacyUserId(c.req.raw.headers);
  if (!userId) {
    return c.json({ error: 'يجب تسجيل الدخول أولاً' }, 401);
  }

  const { listing_id, seller_id } = await c.req.json();

  if (!listing_id || !seller_id) {
    return c.json({ error: 'بيانات غير صحيحة' }, 400);
  }

  if (seller_id === userId) {
    return c.json({ error: 'لا يمكنك مراسلة نفسك' }, 400);
  }

  // Check if conversation exists
  let [conversation] = await sql`
    SELECT * FROM conversations
    WHERE listing_id = ${listing_id}
    AND buyer_id = ${userId}
    AND seller_id = ${seller_id}
  `;

  if (!conversation) {
    [conversation] = await sql`
      INSERT INTO conversations (listing_id, buyer_id, seller_id)
      VALUES (${listing_id}, ${userId}, ${seller_id})
      RETURNING *
    `;
  }

  return c.json({ conversation });
});

// Get messages for a conversation
chat.get('/conversations/:id/messages', async (c) => {
  const userId = await getLegacyUserId(c.req.raw.headers);
  const conversationId = parseInt(c.req.param('id'));

  if (!userId) {
    return c.json({ error: 'يجب تسجيل الدخول أولاً' }, 401);
  }

  // Verify user is part of conversation
  const [conv] = await sql`
    SELECT * FROM conversations
    WHERE id = ${conversationId}
    AND (buyer_id = ${userId} OR seller_id = ${userId})
  `;

  if (!conv) {
    return c.json({ error: 'المحادثة غير موجودة' }, 404);
  }

  const messages = await sql`
    SELECT m.*, u.name as sender_name, u.avatar_url as sender_avatar
    FROM messages m
    LEFT JOIN users u ON m.sender_id = u.id
    WHERE m.conversation_id = ${conversationId}
    ORDER BY m.created_at ASC
  `;

  // Mark messages as read
  await sql`
    UPDATE messages
    SET is_read = TRUE
    WHERE conversation_id = ${conversationId}
    AND sender_id != ${userId}
    AND is_read = FALSE
  `;

  return c.json({ messages });
});

// Send message
chat.post('/conversations/:id/messages', async (c) => {
  const userId = await getLegacyUserId(c.req.raw.headers);
  const conversationId = parseInt(c.req.param('id'));

  if (!userId) {
    return c.json({ error: 'يجب تسجيل الدخول أولاً' }, 401);
  }

  const { content } = await c.req.json();

  if (!content || !content.trim()) {
    return c.json({ error: 'الرسالة فارغة' }, 400);
  }

  // Verify user is part of conversation
  const [conv] = await sql`
    SELECT * FROM conversations
    WHERE id = ${conversationId}
    AND (buyer_id = ${userId} OR seller_id = ${userId})
  `;

  if (!conv) {
    return c.json({ error: 'المحادثة غير موجودة' }, 404);
  }

  // Insert message
  const [message] = await sql`
    INSERT INTO messages (conversation_id, sender_id, content)
    VALUES (${conversationId}, ${userId}, ${content.trim()})
    RETURNING *
  `;

  // Update conversation last_message_at
  await sql`
    UPDATE conversations
    SET last_message_at = NOW()
    WHERE id = ${conversationId}
  `;

  // Get sender info
  const [sender] = await sql`SELECT name, avatar_url FROM users WHERE id = ${userId}`;

  const messageWithSender = {
    ...message,
    sender_name: sender.name,
    sender_avatar: sender.avatar_url,
  };

  // Send real-time message via Soketi
  await sendMessage(conversationId, messageWithSender);

  // Notify the other user
  const otherUserId = conv.buyer_id === userId ? conv.seller_id : conv.buyer_id;
  await notifyUser(otherUserId, {
    type: 'new_message',
    title: 'رسالة جديدة',
    body: `${sender.name}: ${content.substring(0, 50)}...`,
    data: { conversation_id: conversationId },
  });

  return c.json({ message: messageWithSender }, 201);
});

export default chat;
