import Pusher from 'pusher';
import { config } from '../config';

export const pusher = new Pusher({
  appId: config.soketi.appId,
  key: config.soketi.key,
  secret: config.soketi.secret,
  host: config.soketi.host,
  port: String(config.soketi.port),
  useTLS: false,
});

// Send message to conversation channel
export function sendMessage(conversationId: number, message: {
  id: number;
  sender_id: number;
  content: string;
  created_at: Date;
}) {
  return pusher.trigger(`conversation-${conversationId}`, 'new-message', message);
}

// Notify user of new message
export function notifyUser(userId: number, notification: {
  type: string;
  title: string;
  body: string;
  data?: any;
}) {
  return pusher.trigger(`user-${userId}`, 'notification', notification);
}

// Update listing in real-time (price change, sold, etc.)
export function updateListing(listingId: number, data: any) {
  return pusher.trigger(`listing-${listingId}`, 'update', data);
}
