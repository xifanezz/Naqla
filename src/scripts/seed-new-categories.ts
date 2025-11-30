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

// Subcategories matching home.ts - clearer Arabic names with more options
const subcategoriesMap: Record<string, { slug: string; name_ar: string; name_en: string }[]> = {
  'community': [
    { slug: 'activities', name_ar: 'أنشطة ترفيهية', name_en: 'Activities' },
    { slug: 'artists', name_ar: 'فنانون ومصممون', name_en: 'Artists' },
    { slug: 'childcare', name_ar: 'رعاية الأطفال', name_en: 'Childcare' },
    { slug: 'classes', name_ar: 'دورات تدريبية', name_en: 'Classes' },
    { slug: 'events', name_ar: 'فعاليات ومناسبات', name_en: 'Events' },
    { slug: 'general-community', name_ar: 'منوعات', name_en: 'General' },
    { slug: 'groups', name_ar: 'مجموعات ونوادي', name_en: 'Groups' },
    { slug: 'lost-found', name_ar: 'مفقودات ومعثورات', name_en: 'Lost & Found' },
    { slug: 'musicians', name_ar: 'موسيقى وفنون', name_en: 'Musicians' },
    { slug: 'pets', name_ar: 'حيوانات أليفة', name_en: 'Pets' },
    { slug: 'rideshare', name_ar: 'توصيل ومشاوير', name_en: 'Rideshare' },
    { slug: 'volunteers', name_ar: 'فرص تطوعية', name_en: 'Volunteers' },
    { slug: 'carpool', name_ar: 'مشاركة سيارة', name_en: 'Carpool' },
    { slug: 'recommendations', name_ar: 'توصيات ونصائح', name_en: 'Recommendations' },
  ],
  'for-sale': [
    { slug: 'antiques', name_ar: 'تحف وأنتيكات', name_en: 'Antiques' },
    { slug: 'appliances', name_ar: 'أجهزة منزلية', name_en: 'Appliances' },
    { slug: 'arts-crafts', name_ar: 'أعمال يدوية وحرفية', name_en: 'Arts & Crafts' },
    { slug: 'auto-parts', name_ar: 'قطع غيار سيارات', name_en: 'Auto Parts' },
    { slug: 'baby-kids', name_ar: 'مستلزمات الأطفال', name_en: 'Baby & Kids' },
    { slug: 'beauty-health', name_ar: 'مستحضرات تجميل وعناية', name_en: 'Beauty & Health' },
    { slug: 'bikes', name_ar: 'دراجات هوائية', name_en: 'Bikes' },
    { slug: 'boats', name_ar: 'قوارب ويخوت', name_en: 'Boats' },
    { slug: 'books', name_ar: 'كتب ومجلات', name_en: 'Books' },
    { slug: 'cars-trucks', name_ar: 'سيارات وشاحنات', name_en: 'Cars & Trucks' },
    { slug: 'cell-phones', name_ar: 'جوالات وأجهزة ذكية', name_en: 'Cell Phones' },
    { slug: 'clothing', name_ar: 'ملابس وأزياء', name_en: 'Clothing' },
    { slug: 'computers', name_ar: 'أجهزة كمبيوتر ولابتوب', name_en: 'Computers' },
    { slug: 'electronics', name_ar: 'إلكترونيات', name_en: 'Electronics' },
    { slug: 'furniture', name_ar: 'أثاث منزلي ومكتبي', name_en: 'Furniture' },
    { slug: 'jewelry', name_ar: 'مجوهرات وساعات', name_en: 'Jewelry' },
    { slug: 'materials', name_ar: 'مواد بناء وتشطيب', name_en: 'Materials' },
    { slug: 'motorcycles', name_ar: 'دراجات نارية', name_en: 'Motorcycles' },
    { slug: 'music-instruments', name_ar: 'آلات موسيقية', name_en: 'Music Instruments' },
    { slug: 'photo-video', name_ar: 'كاميرات ومعدات تصوير', name_en: 'Photo & Video' },
    { slug: 'sporting', name_ar: 'مستلزمات رياضية', name_en: 'Sporting' },
    { slug: 'tools', name_ar: 'عدد وأدوات', name_en: 'Tools' },
    { slug: 'toys-games', name_ar: 'ألعاب أطفال وبلايستيشن', name_en: 'Toys & Games' },
    { slug: 'free', name_ar: 'أغراض مجانية', name_en: 'Free' },
    { slug: 'wanted', name_ar: 'مطلوب شراء', name_en: 'Wanted' },
    { slug: 'camping', name_ar: 'مستلزمات رحلات وتخييم', name_en: 'Camping' },
    { slug: 'watches', name_ar: 'ساعات', name_en: 'Watches' },
    { slug: 'perfumes', name_ar: 'عطور', name_en: 'Perfumes' },
    { slug: 'bags', name_ar: 'حقائب ومحافظ', name_en: 'Bags' },
    { slug: 'kitchen', name_ar: 'أدوات مطبخ', name_en: 'Kitchen' },
    { slug: 'ac-cooling', name_ar: 'مكيفات وتبريد', name_en: 'AC & Cooling' },
    { slug: 'tv-audio', name_ar: 'تلفزيونات وصوتيات', name_en: 'TV & Audio' },
    { slug: 'garden', name_ar: 'حدائق ونباتات', name_en: 'Garden' },
  ],
  'gigs': [
    { slug: 'computer-gigs', name_ar: 'خدمات كمبيوتر وتقنية', name_en: 'Computer' },
    { slug: 'creative-gigs', name_ar: 'أعمال إبداعية وتصميم', name_en: 'Creative' },
    { slug: 'crew-gigs', name_ar: 'طاقم عمل ومساعدين', name_en: 'Crew' },
    { slug: 'domestic-gigs', name_ar: 'أعمال منزلية', name_en: 'Domestic' },
    { slug: 'event-gigs', name_ar: 'تنظيم فعاليات وحفلات', name_en: 'Event' },
    { slug: 'labor-gigs', name_ar: 'أعمال يدوية وصيانة', name_en: 'Labor' },
    { slug: 'talent-gigs', name_ar: 'مواهب وفنون', name_en: 'Talent' },
    { slug: 'writing-gigs', name_ar: 'كتابة وترجمة', name_en: 'Writing' },
    { slug: 'delivery-gigs', name_ar: 'توصيل طلبات', name_en: 'Delivery' },
    { slug: 'photography-gigs', name_ar: 'تصوير فوتو وفيديو', name_en: 'Photography' },
    { slug: 'marketing-gigs', name_ar: 'تسويق وإعلان', name_en: 'Marketing' },
    { slug: 'teaching-gigs', name_ar: 'دروس خصوصية', name_en: 'Teaching' },
  ],
  'housing': [
    { slug: 'apartments', name_ar: 'شقق للإيجار', name_en: 'Apartments for Rent' },
    { slug: 'houses-rent', name_ar: 'فلل وبيوت للإيجار', name_en: 'Houses for Rent' },
    { slug: 'rooms', name_ar: 'غرف للإيجار', name_en: 'Rooms' },
    { slug: 'sublets', name_ar: 'إيجار مؤقت وشهري', name_en: 'Sublets' },
    { slug: 'housing-wanted', name_ar: 'مطلوب سكن', name_en: 'Housing Wanted' },
    { slug: 'real-estate-sale', name_ar: 'عقارات للبيع', name_en: 'Real Estate for Sale' },
    { slug: 'apartments-sale', name_ar: 'شقق للبيع', name_en: 'Apartments for Sale' },
    { slug: 'villas-sale', name_ar: 'فلل للبيع', name_en: 'Villas for Sale' },
    { slug: 'land', name_ar: 'أراضي للبيع', name_en: 'Land' },
    { slug: 'office-commercial', name_ar: 'مكاتب ومحلات تجارية', name_en: 'Office & Commercial' },
    { slug: 'warehouses', name_ar: 'مستودعات ومخازن', name_en: 'Warehouses' },
    { slug: 'parking-storage', name_ar: 'مواقف سيارات', name_en: 'Parking' },
    { slug: 'vacation-rentals', name_ar: 'شاليهات واستراحات', name_en: 'Vacation Rentals' },
    { slug: 'roommates', name_ar: 'شريك سكن', name_en: 'Roommates' },
    { slug: 'furnished', name_ar: 'سكن مفروش', name_en: 'Furnished' },
  ],
  'jobs': [
    { slug: 'accounting', name_ar: 'محاسبة ومالية', name_en: 'Accounting' },
    { slug: 'admin-office', name_ar: 'إدارة ومكتبية', name_en: 'Admin & Office' },
    { slug: 'arch-engineering', name_ar: 'هندسة وعمارة', name_en: 'Engineering' },
    { slug: 'art-design', name_ar: 'تصميم جرافيك', name_en: 'Art & Design' },
    { slug: 'customer-service', name_ar: 'خدمة عملاء', name_en: 'Customer Service' },
    { slug: 'education', name_ar: 'تعليم وتدريس', name_en: 'Education' },
    { slug: 'food-hospitality', name_ar: 'مطاعم وضيافة', name_en: 'Food & Hospitality' },
    { slug: 'general-labor', name_ar: 'عمالة وحرف', name_en: 'General Labor' },
    { slug: 'government', name_ar: 'وظائف حكومية', name_en: 'Government' },
    { slug: 'healthcare', name_ar: 'طب وتمريض', name_en: 'Healthcare' },
    { slug: 'hr', name_ar: 'موارد بشرية', name_en: 'Human Resources' },
    { slug: 'legal', name_ar: 'قانون ومحاماة', name_en: 'Legal' },
    { slug: 'manufacturing', name_ar: 'تصنيع ومصانع', name_en: 'Manufacturing' },
    { slug: 'marketing', name_ar: 'تسويق ودعاية', name_en: 'Marketing' },
    { slug: 'media', name_ar: 'إعلام وصحافة', name_en: 'Media' },
    { slug: 'nonprofit', name_ar: 'قطاع غير ربحي', name_en: 'Nonprofit' },
    { slug: 'real-estate-jobs', name_ar: 'وظائف عقارية', name_en: 'Real Estate' },
    { slug: 'retail', name_ar: 'مبيعات تجزئة', name_en: 'Retail' },
    { slug: 'sales', name_ar: 'مبيعات وتسويق', name_en: 'Sales' },
    { slug: 'salon-spa', name_ar: 'تجميل وعناية', name_en: 'Salon & Spa' },
    { slug: 'security', name_ar: 'أمن وحراسة', name_en: 'Security' },
    { slug: 'software', name_ar: 'برمجة وتطوير', name_en: 'Software' },
    { slug: 'tech-support', name_ar: 'دعم فني وتقني', name_en: 'Tech Support' },
    { slug: 'transport', name_ar: 'نقل وتوصيل', name_en: 'Transport' },
    { slug: 'writing-editing', name_ar: 'كتابة وتحرير', name_en: 'Writing & Editing' },
    { slug: 'drivers', name_ar: 'سائقين', name_en: 'Drivers' },
    { slug: 'construction', name_ar: 'بناء ومقاولات', name_en: 'Construction' },
    { slug: 'oil-gas', name_ar: 'نفط وغاز', name_en: 'Oil & Gas' },
    { slug: 'banking', name_ar: 'بنوك وتأمين', name_en: 'Banking & Insurance' },
    { slug: 'part-time', name_ar: 'دوام جزئي', name_en: 'Part Time' },
    { slug: 'remote', name_ar: 'عمل عن بعد', name_en: 'Remote' },
    { slug: 'internship', name_ar: 'تدريب وتأهيل', name_en: 'Internship' },
  ],
  'services': [
    { slug: 'automotive-services', name_ar: 'صيانة وخدمات سيارات', name_en: 'Automotive' },
    { slug: 'beauty-services', name_ar: 'تجميل وعناية شخصية', name_en: 'Beauty' },
    { slug: 'cell-mobile-services', name_ar: 'صيانة جوالات', name_en: 'Cell & Mobile' },
    { slug: 'computer-services', name_ar: 'صيانة كمبيوتر وشبكات', name_en: 'Computer' },
    { slug: 'creative-services', name_ar: 'تصميم وإبداع', name_en: 'Creative' },
    { slug: 'event-services', name_ar: 'تنظيم مناسبات وأفراح', name_en: 'Event' },
    { slug: 'financial-services', name_ar: 'خدمات مالية ومحاسبية', name_en: 'Financial' },
    { slug: 'household-services', name_ar: 'خدمات منزلية وتنظيف', name_en: 'Household' },
    { slug: 'labor-moving', name_ar: 'نقل عفش وأثاث', name_en: 'Labor & Moving' },
    { slug: 'legal-services', name_ar: 'خدمات قانونية', name_en: 'Legal' },
    { slug: 'lessons', name_ar: 'دروس خصوصية وتعليم', name_en: 'Lessons' },
    { slug: 'real-estate-services', name_ar: 'خدمات عقارية', name_en: 'Real Estate' },
    { slug: 'skilled-trade', name_ar: 'سباكة وكهرباء وصيانة', name_en: 'Skilled Trade' },
    { slug: 'travel-services', name_ar: 'سفر وسياحة وتأشيرات', name_en: 'Travel' },
    { slug: 'writing-services', name_ar: 'كتابة وترجمة', name_en: 'Writing' },
    { slug: 'ac-services', name_ar: 'صيانة مكيفات', name_en: 'AC Services' },
    { slug: 'photography-services', name_ar: 'تصوير فوتو وفيديو', name_en: 'Photography' },
    { slug: 'delivery-services', name_ar: 'خدمات توصيل', name_en: 'Delivery' },
    { slug: 'printing-services', name_ar: 'طباعة ودعاية', name_en: 'Printing' },
    { slug: 'catering-services', name_ar: 'ضيافة وطبخ', name_en: 'Catering' },
    { slug: 'pet-services', name_ar: 'خدمات حيوانات أليفة', name_en: 'Pet Services' },
    { slug: 'renovation-services', name_ar: 'ترميم وتجديد', name_en: 'Renovation' },
    { slug: 'gardening-services', name_ar: 'تنسيق حدائق', name_en: 'Gardening' },
    { slug: 'security-systems', name_ar: 'كاميرات وأنظمة أمان', name_en: 'Security Systems' },
  ],
};

async function seedCategories() {
  console.log('Seeding new categories with clearer names...');

  // First, delete all existing categories
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
