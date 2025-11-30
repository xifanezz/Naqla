import { sql } from '../db';

async function addContactFields() {
  console.log('Adding contact fields to listings table...');

  // Add contact_phone field
  await sql`
    ALTER TABLE listings
    ADD COLUMN IF NOT EXISTS contact_phone VARCHAR(20)
  `;
  console.log('  + Added contact_phone');

  // Add contact_method field (whatsapp, call, both)
  await sql`
    ALTER TABLE listings
    ADD COLUMN IF NOT EXISTS contact_method VARCHAR(20) DEFAULT 'both'
  `;
  console.log('  + Added contact_method');

  console.log('Done!');
  process.exit(0);
}

addContactFields().catch((err) => {
  console.error('Migration failed:', err);
  process.exit(1);
});
