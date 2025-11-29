import { sql } from './index';

async function migrate() {
  console.log('Running migrations...');

  // Enable TimescaleDB extension
  await sql`CREATE EXTENSION IF NOT EXISTS timescaledb`;

  // Better Auth tables
  await sql`
    CREATE TABLE IF NOT EXISTS "user" (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      "emailVerified" BOOLEAN DEFAULT FALSE,
      image TEXT,
      phone VARCHAR(20),
      city VARCHAR(100),
      "createdAt" TIMESTAMPTZ DEFAULT NOW(),
      "updatedAt" TIMESTAMPTZ DEFAULT NOW()
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS "session" (
      id TEXT PRIMARY KEY,
      "expiresAt" TIMESTAMPTZ NOT NULL,
      token TEXT UNIQUE NOT NULL,
      "createdAt" TIMESTAMPTZ DEFAULT NOW(),
      "updatedAt" TIMESTAMPTZ DEFAULT NOW(),
      "ipAddress" TEXT,
      "userAgent" TEXT,
      "userId" TEXT NOT NULL REFERENCES "user"(id) ON DELETE CASCADE
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS "account" (
      id TEXT PRIMARY KEY,
      "accountId" TEXT NOT NULL,
      "providerId" TEXT NOT NULL,
      "userId" TEXT NOT NULL REFERENCES "user"(id) ON DELETE CASCADE,
      "accessToken" TEXT,
      "refreshToken" TEXT,
      "idToken" TEXT,
      "accessTokenExpiresAt" TIMESTAMPTZ,
      "refreshTokenExpiresAt" TIMESTAMPTZ,
      scope TEXT,
      password TEXT,
      "createdAt" TIMESTAMPTZ DEFAULT NOW(),
      "updatedAt" TIMESTAMPTZ DEFAULT NOW()
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS "verification" (
      id TEXT PRIMARY KEY,
      identifier TEXT NOT NULL,
      value TEXT NOT NULL,
      "expiresAt" TIMESTAMPTZ NOT NULL,
      "createdAt" TIMESTAMPTZ DEFAULT NOW(),
      "updatedAt" TIMESTAMPTZ DEFAULT NOW()
    )
  `;

  // Legacy users table (keeping for reference/migration)
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      phone VARCHAR(20) UNIQUE,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(255) UNIQUE,
      password_hash VARCHAR(255),
      avatar_url VARCHAR(500),
      city VARCHAR(100),
      is_verified BOOLEAN DEFAULT FALSE,
      better_auth_id TEXT REFERENCES "user"(id),
      created_at TIMESTAMPTZ DEFAULT NOW(),
      updated_at TIMESTAMPTZ DEFAULT NOW()
    )
  `;

  // Categories table
  await sql`
    CREATE TABLE IF NOT EXISTS categories (
      id SERIAL PRIMARY KEY,
      name_ar VARCHAR(100) NOT NULL,
      name_en VARCHAR(100) NOT NULL,
      slug VARCHAR(100) UNIQUE NOT NULL,
      icon VARCHAR(50),
      parent_id INTEGER REFERENCES categories(id),
      sort_order INTEGER DEFAULT 0
    )
  `;

  // Listings table
  await sql`
    CREATE TABLE IF NOT EXISTS listings (
      id SERIAL PRIMARY KEY,
      user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
      category_id INTEGER REFERENCES categories(id),
      title VARCHAR(200) NOT NULL,
      description TEXT,
      price DECIMAL(12, 2),
      price_type VARCHAR(20) DEFAULT 'fixed',
      city VARCHAR(100) NOT NULL,
      neighborhood VARCHAR(100),
      latitude DECIMAL(10, 8),
      longitude DECIMAL(11, 8),
      images TEXT[],
      status VARCHAR(20) DEFAULT 'active',
      views_count INTEGER DEFAULT 0,
      created_at TIMESTAMPTZ DEFAULT NOW(),
      updated_at TIMESTAMPTZ DEFAULT NOW(),
      expires_at TIMESTAMPTZ DEFAULT NOW() + INTERVAL '30 days'
    )
  `;

  // Convert listings to hypertable for time-series optimization
  await sql`
    SELECT create_hypertable('listings', 'created_at',
      if_not_exists => TRUE,
      migrate_data => TRUE
    )
  `.catch(() => console.log('Hypertable already exists or migration skipped'));

  // Conversations table
  await sql`
    CREATE TABLE IF NOT EXISTS conversations (
      id SERIAL PRIMARY KEY,
      listing_id INTEGER REFERENCES listings(id) ON DELETE SET NULL,
      buyer_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
      seller_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
      last_message_at TIMESTAMPTZ DEFAULT NOW(),
      created_at TIMESTAMPTZ DEFAULT NOW(),
      UNIQUE(listing_id, buyer_id, seller_id)
    )
  `;

  // Messages table (time-series)
  await sql`
    CREATE TABLE IF NOT EXISTS messages (
      id SERIAL,
      conversation_id INTEGER REFERENCES conversations(id) ON DELETE CASCADE,
      sender_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
      content TEXT NOT NULL,
      is_read BOOLEAN DEFAULT FALSE,
      created_at TIMESTAMPTZ DEFAULT NOW(),
      PRIMARY KEY (id, created_at)
    )
  `;

  // Convert messages to hypertable
  await sql`
    SELECT create_hypertable('messages', 'created_at',
      if_not_exists => TRUE,
      migrate_data => TRUE
    )
  `.catch(() => console.log('Messages hypertable already exists'));

  // Favorites table
  await sql`
    CREATE TABLE IF NOT EXISTS favorites (
      user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
      listing_id INTEGER REFERENCES listings(id) ON DELETE CASCADE,
      created_at TIMESTAMPTZ DEFAULT NOW(),
      PRIMARY KEY (user_id, listing_id)
    )
  `;

  // Listing views (for analytics - time-series)
  await sql`
    CREATE TABLE IF NOT EXISTS listing_views (
      listing_id INTEGER REFERENCES listings(id) ON DELETE CASCADE,
      viewer_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
      viewed_at TIMESTAMPTZ DEFAULT NOW()
    )
  `;

  await sql`
    SELECT create_hypertable('listing_views', 'viewed_at',
      if_not_exists => TRUE,
      migrate_data => TRUE
    )
  `.catch(() => console.log('Listing views hypertable already exists'));

  // Indexes for performance
  await sql`CREATE INDEX IF NOT EXISTS idx_listings_user ON listings(user_id)`;
  await sql`CREATE INDEX IF NOT EXISTS idx_listings_category ON listings(category_id)`;
  await sql`CREATE INDEX IF NOT EXISTS idx_listings_city ON listings(city)`;
  await sql`CREATE INDEX IF NOT EXISTS idx_listings_status ON listings(status)`;
  await sql`CREATE INDEX IF NOT EXISTS idx_messages_conversation ON messages(conversation_id)`;
  await sql`CREATE INDEX IF NOT EXISTS idx_conversations_buyer ON conversations(buyer_id)`;
  await sql`CREATE INDEX IF NOT EXISTS idx_conversations_seller ON conversations(seller_id)`;

  // Insert default categories
  await sql`
    INSERT INTO categories (name_ar, name_en, slug, icon, sort_order)
    VALUES
      ('سيارات', 'Cars', 'cars', 'car', 1),
      ('عقارات', 'Real Estate', 'real-estate', 'home', 2),
      ('إلكترونيات', 'Electronics', 'electronics', 'smartphone', 3),
      ('أثاث', 'Furniture', 'furniture', 'sofa', 4),
      ('وظائف', 'Jobs', 'jobs', 'briefcase', 5),
      ('خدمات', 'Services', 'services', 'wrench', 6),
      ('ملابس', 'Clothing', 'clothing', 'shirt', 7),
      ('أخرى', 'Other', 'other', 'grid', 8)
    ON CONFLICT (slug) DO NOTHING
  `;

  console.log('Migrations completed successfully!');
  process.exit(0);
}

migrate().catch((err) => {
  console.error('Migration failed:', err);
  process.exit(1);
});
