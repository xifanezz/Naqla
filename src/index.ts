import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { config } from './config';
import { auth } from './lib/auth';
import { initSearch } from './services/search';

// Routes
import authRoutes from './routes/auth';
import listings from './routes/listings';
import categories from './routes/categories';
import chat from './routes/chat';
import user from './routes/user';
import pages from './routes/pages';
import { serveStatic } from 'hono/bun';

const app = new Hono();

// Middleware
app.use('*', logger());
app.use('*', cors({
  origin: ['https://buyervoice.net', 'https://naqla.buyervoice.net', 'http://localhost:3000'],
  credentials: true,
}));

// Auth middleware - extract user from Better Auth session
app.use('*', async (c, next) => {
  try {
    const session = await auth.api.getSession({
      headers: c.req.raw.headers,
    });
    if (session) {
      c.set('userId', session.user.id);
      c.set('user', session.user);
      c.set('session', session.session);
    }
  } catch (e) {
    // No valid session, continue as guest
  }
  await next();
});

// Serve static files (uploads)
app.use('/uploads/*', serveStatic({ root: './public' }));

// Health check
app.get('/health', (c) => c.json({ status: 'ok', time: new Date().toISOString() }));

// API Routes
app.route('/api/auth', authRoutes);
app.route('/api/listings', listings);
app.route('/api/categories', categories);
app.route('/api/chat', chat);
app.route('/api/user', user);

// Page Routes
app.route('/', pages);

// 404 handler
app.notFound((c) => c.json({ error: 'الصفحة غير موجودة' }, 404));

// Error handler
app.onError((err, c) => {
  console.error('Error:', err);
  return c.json({ error: 'حدث خطأ في الخادم' }, 500);
});

// Initialize and start
async function start() {
  try {
    // Initialize Meilisearch
    await initSearch();
    console.log('Meilisearch initialized');

    console.log(`
╔═══════════════════════════════════════╗
║           نقلة - Naqla API            ║
║    Running on port ${config.port}              ║
╚═══════════════════════════════════════╝
    `);

    Bun.serve({
      port: config.port as number,
      fetch: app.fetch,
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

start();
