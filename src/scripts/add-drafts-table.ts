import { sql } from '../db';

async function addDraftsTable() {
  console.log('Creating listing_drafts table...');

  await sql`
    CREATE TABLE IF NOT EXISTS listing_drafts (
      id SERIAL PRIMARY KEY,
      user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      draft_data JSONB NOT NULL,
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW(),
      UNIQUE(user_id)
    )
  `;
  console.log('  + Created listing_drafts table');

  // Create index for faster lookups
  await sql`
    CREATE INDEX IF NOT EXISTS idx_listing_drafts_user_id ON listing_drafts(user_id)
  `;
  console.log('  + Created index on user_id');

  console.log('Done!');
  process.exit(0);
}

addDraftsTable().catch((err) => {
  console.error('Migration failed:', err);
  process.exit(1);
});
