import { sql } from '../db';

// Main categories matching home.ts
const mainCategories = [
  { id: 'community', name_ar: 'مجتمع', name_en: 'Community', icon: 'users', sort_order: 1 },
  { id: 'for-sale', name_ar: 'للبيع', name_en: 'For Sale', icon: 'shopping-cart', sort_order: 2 },
  { id: 'gigs', name_ar: 'أعمال مؤقتة', name_en: 'Gigs', icon: 'wrench', sort_order: 3 },
  { id: 'housing', name_ar: 'عقارات', name_en: 'Housing', icon: 'home', sort_order: 4 },
  { id: 'jobs', name_ar: 'وظائف', name_en: 'Jobs', icon: 'briefcase', sort_order: 5 },
  { id: 'services', name_ar: 'خدمات', name_en: 'Services', icon: 'settings', sort_order: 6 },
];

// Subcategories matching home.ts
const subcategoriesMap: Record<string, { slug: string; name_ar: string; name_en: string }[]> = {
  'community': [
    { slug: 'activities', name_ar: 'أنشطة', name_en: 'Activities' },
    { slug: 'artists', name_ar: 'فنانون', name_en: 'Artists' },
    { slug: 'childcare', name_ar: 'رعاية أطفال', name_en: 'Childcare' },
    { slug: 'classes', name_ar: 'دورات تعليمية', name_en: 'Classes' },
    { slug: 'events', name_ar: 'فعاليات', name_en: 'Events' },
    { slug: 'general-community', name_ar: 'عام', name_en: 'General' },
    { slug: 'groups', name_ar: 'مجموعات', name_en: 'Groups' },
    { slug: 'local-news', name_ar: 'أخبار محلية', name_en: 'Local News' },
    { slug: 'lost-found', name_ar: 'مفقودات', name_en: 'Lost & Found' },
    { slug: 'musicians', name_ar: 'موسيقيون', name_en: 'Musicians' },
    { slug: 'pets', name_ar: 'حيوانات أليفة', name_en: 'Pets' },
    { slug: 'politics', name_ar: 'سياسة', name_en: 'Politics' },
    { slug: 'rideshare', name_ar: 'مشاركة رحلات', name_en: 'Rideshare' },
    { slug: 'volunteers', name_ar: 'تطوع', name_en: 'Volunteers' },
  ],
  'for-sale': [
    { slug: 'antiques', name_ar: 'تحف وآثار', name_en: 'Antiques' },
    { slug: 'appliances', name_ar: 'أجهزة منزلية', name_en: 'Appliances' },
    { slug: 'arts-crafts', name_ar: 'فنون وحرف', name_en: 'Arts & Crafts' },
    { slug: 'auto-parts', name_ar: 'قطع سيارات', name_en: 'Auto Parts' },
    { slug: 'baby-kids', name_ar: 'أطفال ورضع', name_en: 'Baby & Kids' },
    { slug: 'beauty-health', name_ar: 'جمال وصحة', name_en: 'Beauty & Health' },
    { slug: 'bikes', name_ar: 'دراجات', name_en: 'Bikes' },
    { slug: 'boats', name_ar: 'قوارب', name_en: 'Boats' },
    { slug: 'books', name_ar: 'كتب', name_en: 'Books' },
    { slug: 'cars-trucks', name_ar: 'سيارات وشاحنات', name_en: 'Cars & Trucks' },
    { slug: 'cell-phones', name_ar: 'جوالات', name_en: 'Cell Phones' },
    { slug: 'clothing', name_ar: 'ملابس', name_en: 'Clothing' },
    { slug: 'computers', name_ar: 'كمبيوترات', name_en: 'Computers' },
    { slug: 'electronics', name_ar: 'إلكترونيات', name_en: 'Electronics' },
    { slug: 'furniture', name_ar: 'أثاث', name_en: 'Furniture' },
    { slug: 'jewelry', name_ar: 'مجوهرات', name_en: 'Jewelry' },
    { slug: 'materials', name_ar: 'مواد بناء', name_en: 'Materials' },
    { slug: 'motorcycles', name_ar: 'دراجات نارية', name_en: 'Motorcycles' },
    { slug: 'music-instruments', name_ar: 'آلات موسيقية', name_en: 'Music Instruments' },
    { slug: 'photo-video', name_ar: 'كاميرات', name_en: 'Photo & Video' },
    { slug: 'sporting', name_ar: 'رياضة', name_en: 'Sporting' },
    { slug: 'tools', name_ar: 'أدوات', name_en: 'Tools' },
    { slug: 'toys-games', name_ar: 'ألعاب', name_en: 'Toys & Games' },
    { slug: 'free', name_ar: 'مجاني', name_en: 'Free' },
    { slug: 'wanted', name_ar: 'مطلوب', name_en: 'Wanted' },
  ],
  'gigs': [
    { slug: 'computer-gigs', name_ar: 'كمبيوتر', name_en: 'Computer' },
    { slug: 'creative-gigs', name_ar: 'إبداعي', name_en: 'Creative' },
    { slug: 'crew-gigs', name_ar: 'طاقم عمل', name_en: 'Crew' },
    { slug: 'domestic-gigs', name_ar: 'منزلي', name_en: 'Domestic' },
    { slug: 'event-gigs', name_ar: 'فعاليات', name_en: 'Event' },
    { slug: 'labor-gigs', name_ar: 'عمالة', name_en: 'Labor' },
    { slug: 'talent-gigs', name_ar: 'مواهب', name_en: 'Talent' },
    { slug: 'writing-gigs', name_ar: 'كتابة', name_en: 'Writing' },
  ],
  'housing': [
    { slug: 'apartments', name_ar: 'شقق للإيجار', name_en: 'Apartments' },
    { slug: 'houses-rent', name_ar: 'بيوت للإيجار', name_en: 'Houses for Rent' },
    { slug: 'rooms', name_ar: 'غرف للإيجار', name_en: 'Rooms' },
    { slug: 'sublets', name_ar: 'إيجار مؤقت', name_en: 'Sublets' },
    { slug: 'housing-wanted', name_ar: 'مطلوب سكن', name_en: 'Housing Wanted' },
    { slug: 'real-estate-sale', name_ar: 'عقارات للبيع', name_en: 'Real Estate for Sale' },
    { slug: 'office-commercial', name_ar: 'مكاتب ومحلات', name_en: 'Office & Commercial' },
    { slug: 'parking-storage', name_ar: 'مواقف ومخازن', name_en: 'Parking & Storage' },
    { slug: 'vacation-rentals', name_ar: 'إيجار سياحي', name_en: 'Vacation Rentals' },
  ],
  'jobs': [
    { slug: 'accounting', name_ar: 'محاسبة', name_en: 'Accounting' },
    { slug: 'admin-office', name_ar: 'إداري ومكتبي', name_en: 'Admin & Office' },
    { slug: 'arch-engineering', name_ar: 'هندسة', name_en: 'Architecture & Engineering' },
    { slug: 'art-design', name_ar: 'تصميم', name_en: 'Art & Design' },
    { slug: 'customer-service', name_ar: 'خدمة عملاء', name_en: 'Customer Service' },
    { slug: 'education', name_ar: 'تعليم', name_en: 'Education' },
    { slug: 'food-hospitality', name_ar: 'ضيافة ومطاعم', name_en: 'Food & Hospitality' },
    { slug: 'general-labor', name_ar: 'عمالة عامة', name_en: 'General Labor' },
    { slug: 'government', name_ar: 'حكومي', name_en: 'Government' },
    { slug: 'healthcare', name_ar: 'صحي وطبي', name_en: 'Healthcare' },
    { slug: 'hr', name_ar: 'موارد بشرية', name_en: 'Human Resources' },
    { slug: 'legal', name_ar: 'قانوني', name_en: 'Legal' },
    { slug: 'manufacturing', name_ar: 'تصنيع', name_en: 'Manufacturing' },
    { slug: 'marketing', name_ar: 'تسويق', name_en: 'Marketing' },
    { slug: 'media', name_ar: 'إعلام', name_en: 'Media' },
    { slug: 'nonprofit', name_ar: 'غير ربحي', name_en: 'Nonprofit' },
    { slug: 'real-estate-jobs', name_ar: 'عقارات', name_en: 'Real Estate' },
    { slug: 'retail', name_ar: 'تجزئة', name_en: 'Retail' },
    { slug: 'sales', name_ar: 'مبيعات', name_en: 'Sales' },
    { slug: 'salon-spa', name_ar: 'صالون وسبا', name_en: 'Salon & Spa' },
    { slug: 'science', name_ar: 'علوم', name_en: 'Science' },
    { slug: 'security', name_ar: 'أمن', name_en: 'Security' },
    { slug: 'software', name_ar: 'برمجة', name_en: 'Software' },
    { slug: 'tech-support', name_ar: 'دعم فني', name_en: 'Tech Support' },
    { slug: 'transport', name_ar: 'نقل', name_en: 'Transport' },
    { slug: 'tv-film', name_ar: 'تلفزيون وأفلام', name_en: 'TV & Film' },
    { slug: 'web-info', name_ar: 'ويب ومعلومات', name_en: 'Web & Info' },
    { slug: 'writing-editing', name_ar: 'كتابة وتحرير', name_en: 'Writing & Editing' },
  ],
  'services': [
    { slug: 'automotive-services', name_ar: 'سيارات', name_en: 'Automotive' },
    { slug: 'beauty-services', name_ar: 'تجميل', name_en: 'Beauty' },
    { slug: 'cell-mobile-services', name_ar: 'جوالات', name_en: 'Cell & Mobile' },
    { slug: 'computer-services', name_ar: 'كمبيوتر', name_en: 'Computer' },
    { slug: 'creative-services', name_ar: 'إبداعي', name_en: 'Creative' },
    { slug: 'event-services', name_ar: 'فعاليات', name_en: 'Event' },
    { slug: 'financial-services', name_ar: 'مالي', name_en: 'Financial' },
    { slug: 'household-services', name_ar: 'منزلي', name_en: 'Household' },
    { slug: 'labor-moving', name_ar: 'نقل وعمالة', name_en: 'Labor & Moving' },
    { slug: 'legal-services', name_ar: 'قانوني', name_en: 'Legal' },
    { slug: 'lessons', name_ar: 'دروس', name_en: 'Lessons' },
    { slug: 'real-estate-services', name_ar: 'عقارات', name_en: 'Real Estate' },
    { slug: 'skilled-trade', name_ar: 'حرف مهنية', name_en: 'Skilled Trade' },
    { slug: 'travel-services', name_ar: 'سفر', name_en: 'Travel' },
    { slug: 'writing-services', name_ar: 'كتابة', name_en: 'Writing' },
  ],
};

async function seedCategories() {
  console.log('Seeding new categories...');

  // First, delete all existing categories (this will cascade to listings category_id being NULL)
  console.log('Clearing existing categories...');
  await sql`DELETE FROM categories`;

  // Reset the sequence
  await sql`ALTER SEQUENCE categories_id_seq RESTART WITH 1`;

  // Insert main categories
  console.log('Inserting main categories...');
  const parentIds: Record<string, number> = {};

  for (const cat of mainCategories) {
    const [inserted] = await sql`
      INSERT INTO categories (name_ar, name_en, slug, icon, sort_order, parent_id)
      VALUES (${cat.name_ar}, ${cat.name_en}, ${cat.id}, ${cat.icon}, ${cat.sort_order}, NULL)
      RETURNING id
    `;
    parentIds[cat.id] = inserted.id;
    console.log(`  + ${cat.name_ar} (${cat.id}) -> id: ${inserted.id}`);
  }

  // Insert subcategories
  console.log('Inserting subcategories...');
  let sortOrder = 1;

  for (const [parentSlug, subs] of Object.entries(subcategoriesMap)) {
    const parentId = parentIds[parentSlug];
    console.log(`  Parent: ${parentSlug} (id: ${parentId})`);

    for (const sub of subs) {
      await sql`
        INSERT INTO categories (name_ar, name_en, slug, icon, sort_order, parent_id)
        VALUES (${sub.name_ar}, ${sub.name_en}, ${sub.slug}, NULL, ${sortOrder}, ${parentId})
      `;
      sortOrder++;
    }
    console.log(`    Added ${subs.length} subcategories`);
  }

  const [count] = await sql`SELECT COUNT(*) as total FROM categories`;
  console.log(`\nDone! Total categories: ${count.total}`);

  process.exit(0);
}

seedCategories().catch((err) => {
  console.error('Seeding failed:', err);
  process.exit(1);
});
