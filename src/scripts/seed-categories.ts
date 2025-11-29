/**
 * Seed script for comprehensive categories and car data
 * Run with: bun run src/scripts/seed-categories.ts
 */

import postgres from 'postgres';
import { config } from '../config';
import { mainCategories, carBrands, carSubcategories, realEstateSubcategories, electronicsSubcategories, furnitureSubcategories, animalsSubcategories, servicesSubcategories, jobsSubcategories, personalItemsSubcategories, businessIndustrialSubcategories } from '../data/categories';

const sql = postgres({
  host: config.db.host,
  port: config.db.port,
  user: config.db.user,
  password: config.db.password,
  database: config.db.database,
});

async function seedCategories() {
  console.log('🌱 Seeding categories...');

  // Delete existing categories (except those with listings)
  await sql`DELETE FROM categories WHERE id NOT IN (SELECT DISTINCT category_id FROM listings WHERE category_id IS NOT NULL)`;

  // Category icons
  const icons: Record<string, string> = {
    'cars': 'car',
    'real-estate': 'home',
    'electronics': 'smartphone',
    'furniture': 'sofa',
    'animals': 'cat',
    'services': 'wrench',
    'jobs': 'briefcase',
    'personal-items': 'shopping-bag',
    'fashion': 'shirt',
    'business-industrial': 'factory'
  };

  // Subcategories mapping
  const subcategories: Record<string, any[]> = {
    'cars': carSubcategories,
    'real-estate': realEstateSubcategories,
    'electronics': electronicsSubcategories,
    'furniture': furnitureSubcategories,
    'animals': animalsSubcategories,
    'services': servicesSubcategories,
    'jobs': jobsSubcategories,
    'personal-items': personalItemsSubcategories,
    'business-industrial': businessIndustrialSubcategories
  };

  // Insert main categories
  for (let i = 0; i < mainCategories.length; i++) {
    const cat = mainCategories[i];

    // Check if slug exists
    const [existing] = await sql`SELECT id FROM categories WHERE slug = ${cat.slug}`;

    let parentId: number;
    if (existing) {
      parentId = existing.id;
      // Update existing
      await sql`UPDATE categories SET name_ar = ${cat.name_ar}, name_en = ${cat.name_en}, icon = ${icons[cat.slug] || 'grid'}, sort_order = ${i + 1} WHERE id = ${parentId}`;
    } else {
      // Insert new
      const [inserted] = await sql`
        INSERT INTO categories (name_ar, name_en, slug, icon, sort_order)
        VALUES (${cat.name_ar}, ${cat.name_en}, ${cat.slug}, ${icons[cat.slug] || 'grid'}, ${i + 1})
        RETURNING id
      `;
      parentId = inserted.id;
    }

    // Insert subcategories
    const subs = subcategories[cat.slug];
    if (subs) {
      for (let j = 0; j < subs.length; j++) {
        const sub = subs[j];
        const subSlug = `${cat.slug}-${sub.slug}`;

        const [existingSub] = await sql`SELECT id FROM categories WHERE slug = ${subSlug}`;
        if (!existingSub) {
          await sql`
            INSERT INTO categories (name_ar, name_en, slug, parent_id, sort_order)
            VALUES (${sub.name_ar}, ${sub.name_en}, ${subSlug}, ${parentId}, ${j + 1})
          `;
        }
      }
    }

    console.log(`  ✓ ${cat.name_ar} (${cat.name_en})`);
  }

  console.log('✅ Categories seeded successfully!');
}

async function seedCarBrands() {
  console.log('🚗 Seeding car brands and models...');

  // Clear existing data
  await sql`DELETE FROM car_models`;
  await sql`DELETE FROM car_brands`;

  for (let i = 0; i < carBrands.length; i++) {
    const brand = carBrands[i];

    // Insert brand
    const [insertedBrand] = await sql`
      INSERT INTO car_brands (name_ar, name_en, slug, sort_order)
      VALUES (${brand.name_ar}, ${brand.name_en}, ${brand.slug}, ${i + 1})
      RETURNING id
    `;

    // Insert models
    if (brand.models) {
      for (const model of brand.models) {
        await sql`
          INSERT INTO car_models (brand_id, name_ar, name_en, slug)
          VALUES (${insertedBrand.id}, ${model.name_ar}, ${model.name_en}, ${model.slug})
        `;
      }
    }

    if (i % 10 === 0) {
      console.log(`  ✓ Seeded ${i + 1}/${carBrands.length} brands...`);
    }
  }

  const [brandCount] = await sql`SELECT COUNT(*) as count FROM car_brands`;
  const [modelCount] = await sql`SELECT COUNT(*) as count FROM car_models`;

  console.log(`✅ Seeded ${brandCount.count} brands with ${modelCount.count} models!`);
}

async function main() {
  try {
    console.log('🚀 Starting database seed...\n');

    await seedCategories();
    console.log('');
    await seedCarBrands();

    console.log('\n🎉 All data seeded successfully!');
  } catch (error) {
    console.error('❌ Seed failed:', error);
    process.exit(1);
  } finally {
    await sql.end();
  }
}

main();
