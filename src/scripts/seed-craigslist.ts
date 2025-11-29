/**
 * Seed Craigslist-style categories
 * Run: bun run src/scripts/seed-craigslist.ts
 */

import postgres from 'postgres';
import { config } from '../config';
import { categories } from '../data/craigslist-categories';

const sql = postgres({
  host: config.db.host,
  port: config.db.port,
  user: config.db.user,
  password: config.db.password,
  database: config.db.database,
});

async function seed() {
  console.log('🗑️  Clearing old categories...');

  // Clear subcategories first (have parent_id), then main categories
  await sql`DELETE FROM categories WHERE parent_id IS NOT NULL`;
  await sql`DELETE FROM categories WHERE parent_id IS NULL`;

  console.log('🌱 Seeding Craigslist-style categories...\n');

  for (let i = 0; i < categories.length; i++) {
    const cat = categories[i];

    // Insert main category
    const [inserted] = await sql`
      INSERT INTO categories (name_ar, name_en, slug, sort_order)
      VALUES (${cat.name_ar}, ${cat.name_en}, ${cat.slug}, ${i + 1})
      RETURNING id
    `;

    console.log(`✓ ${cat.name_ar} (${cat.name_en})`);

    // Insert subcategories
    if (cat.subs && cat.subs.length > 0) {
      for (let j = 0; j < cat.subs.length; j++) {
        const sub = cat.subs[j];
        await sql`
          INSERT INTO categories (name_ar, name_en, slug, parent_id, sort_order)
          VALUES (${sub.name_ar}, ${sub.slug}, ${sub.slug}, ${inserted.id}, ${j + 1})
        `;
      }
      console.log(`  └─ ${cat.subs.length} subcategories`);
    }
  }

  // Count totals
  const [mainCount] = await sql`SELECT COUNT(*) as count FROM categories WHERE parent_id IS NULL`;
  const [subCount] = await sql`SELECT COUNT(*) as count FROM categories WHERE parent_id IS NOT NULL`;

  console.log(`\n✅ Done! ${mainCount.count} main categories, ${subCount.count} subcategories`);

  await sql.end();
}

seed().catch(err => {
  console.error('❌ Seed failed:', err);
  process.exit(1);
});
