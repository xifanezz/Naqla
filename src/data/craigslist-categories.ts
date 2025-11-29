/**
 * Craigslist-style categories for Saudi Arabia
 * Complete replacement - unique approach
 */

export const categories = [
  // COMMUNITY - مجتمع
  {
    name_ar: 'مجتمع',
    name_en: 'community',
    slug: 'community',
    subs: [
      { name_ar: 'أنشطة', slug: 'activities' },
      { name_ar: 'فنانين', slug: 'artists' },
      { name_ar: 'رعاية أطفال', slug: 'childcare' },
      { name_ar: 'دروس', slug: 'classes' },
      { name_ar: 'فعاليات', slug: 'events' },
      { name_ar: 'عام', slug: 'general' },
      { name_ar: 'مجموعات', slug: 'groups' },
      { name_ar: 'مفقودات', slug: 'lost-found' },
      { name_ar: 'موسيقيين', slug: 'musicians' },
      { name_ar: 'حيوانات أليفة', slug: 'pets' },
      { name_ar: 'متطوعين', slug: 'volunteers' },
    ]
  },

  // HOUSING - سكن
  {
    name_ar: 'سكن',
    name_en: 'housing',
    slug: 'housing',
    subs: [
      { name_ar: 'شقق للإيجار', slug: 'apts-rent' },
      { name_ar: 'شقق للبيع', slug: 'apts-sale' },
      { name_ar: 'فلل للإيجار', slug: 'villas-rent' },
      { name_ar: 'فلل للبيع', slug: 'villas-sale' },
      { name_ar: 'غرف مشتركة', slug: 'rooms' },
      { name_ar: 'سكن مؤقت', slug: 'temporary' },
      { name_ar: 'مكاتب تجارية', slug: 'commercial' },
      { name_ar: 'أراضي', slug: 'land' },
      { name_ar: 'مطلوب سكن', slug: 'housing-wanted' },
    ]
  },

  // FOR SALE - للبيع
  {
    name_ar: 'للبيع',
    name_en: 'for sale',
    slug: 'forsale',
    subs: [
      { name_ar: 'تحف', slug: 'antiques' },
      { name_ar: 'أجهزة', slug: 'appliances' },
      { name_ar: 'فنون وحرف', slug: 'arts-crafts' },
      { name_ar: 'أطفال', slug: 'baby-kids' },
      { name_ar: 'جمال وصحة', slug: 'beauty-health' },
      { name_ar: 'دراجات', slug: 'bikes' },
      { name_ar: 'قوارب', slug: 'boats' },
      { name_ar: 'كتب', slug: 'books' },
      { name_ar: 'ملابس', slug: 'clothing' },
      { name_ar: 'مقتنيات', slug: 'collectibles' },
      { name_ar: 'كمبيوتر', slug: 'computers' },
      { name_ar: 'إلكترونيات', slug: 'electronics' },
      { name_ar: 'أثاث', slug: 'furniture' },
      { name_ar: 'منزل وحديقة', slug: 'household' },
      { name_ar: 'مجوهرات', slug: 'jewelry' },
      { name_ar: 'مواد بناء', slug: 'materials' },
      { name_ar: 'آلات موسيقية', slug: 'musical' },
      { name_ar: 'جوالات', slug: 'phones' },
      { name_ar: 'تصوير', slug: 'photo-video' },
      { name_ar: 'رياضة', slug: 'sporting' },
      { name_ar: 'تذاكر', slug: 'tickets' },
      { name_ar: 'أدوات', slug: 'tools' },
      { name_ar: 'ألعاب', slug: 'toys' },
      { name_ar: 'ألعاب فيديو', slug: 'video-gaming' },
    ]
  },

  // VEHICLES - سيارات
  {
    name_ar: 'سيارات',
    name_en: 'cars+trucks',
    slug: 'cars',
    subs: [
      { name_ar: 'سيارات للبيع', slug: 'cars-sale' },
      { name_ar: 'سيارات للإيجار', slug: 'cars-rent' },
      { name_ar: 'دراجات نارية', slug: 'motorcycles' },
      { name_ar: 'شاحنات', slug: 'trucks' },
      { name_ar: 'معدات ثقيلة', slug: 'heavy-equipment' },
      { name_ar: 'قطع غيار', slug: 'auto-parts' },
      { name_ar: 'إطارات', slug: 'wheels-tires' },
      { name_ar: 'مطلوب سيارات', slug: 'cars-wanted' },
    ]
  },

  // JOBS - وظائف
  {
    name_ar: 'وظائف',
    name_en: 'jobs',
    slug: 'jobs',
    subs: [
      { name_ar: 'محاسبة', slug: 'accounting' },
      { name_ar: 'إدارة', slug: 'admin' },
      { name_ar: 'معمارية', slug: 'architect' },
      { name_ar: 'فنون وتصميم', slug: 'art-design' },
      { name_ar: 'خدمة عملاء', slug: 'customer-service' },
      { name_ar: 'تعليم', slug: 'education' },
      { name_ar: 'هندسة', slug: 'engineering' },
      { name_ar: 'مالية', slug: 'finance' },
      { name_ar: 'طعام', slug: 'food' },
      { name_ar: 'حكومية', slug: 'government' },
      { name_ar: 'صحة', slug: 'healthcare' },
      { name_ar: 'موارد بشرية', slug: 'hr' },
      { name_ar: 'قانونية', slug: 'legal' },
      { name_ar: 'تصنيع', slug: 'manufacturing' },
      { name_ar: 'تسويق', slug: 'marketing' },
      { name_ar: 'إعلام', slug: 'media' },
      { name_ar: 'غير ربحية', slug: 'nonprofit' },
      { name_ar: 'بترول وغاز', slug: 'oil-gas' },
      { name_ar: 'تجزئة', slug: 'retail' },
      { name_ar: 'مبيعات', slug: 'sales' },
      { name_ar: 'أمن', slug: 'security' },
      { name_ar: 'تقنية', slug: 'tech' },
      { name_ar: 'نقل', slug: 'transportation' },
      { name_ar: 'كتابة', slug: 'writing' },
    ]
  },

  // GIGS - أعمال مؤقتة
  {
    name_ar: 'أعمال مؤقتة',
    name_en: 'gigs',
    slug: 'gigs',
    subs: [
      { name_ar: 'كمبيوتر', slug: 'gigs-computer' },
      { name_ar: 'إبداعي', slug: 'gigs-creative' },
      { name_ar: 'توصيل', slug: 'gigs-delivery' },
      { name_ar: 'منزلي', slug: 'gigs-domestic' },
      { name_ar: 'فعاليات', slug: 'gigs-event' },
      { name_ar: 'عمالة', slug: 'gigs-labor' },
      { name_ar: 'تعليم', slug: 'gigs-talent' },
      { name_ar: 'كتابة', slug: 'gigs-writing' },
    ]
  },

  // SERVICES - خدمات
  {
    name_ar: 'خدمات',
    name_en: 'services',
    slug: 'services',
    subs: [
      { name_ar: 'سيارات', slug: 'services-auto' },
      { name_ar: 'جمال', slug: 'services-beauty' },
      { name_ar: 'هواتف', slug: 'services-cell' },
      { name_ar: 'كمبيوتر', slug: 'services-computer' },
      { name_ar: 'إبداعي', slug: 'services-creative' },
      { name_ar: 'فعاليات', slug: 'services-event' },
      { name_ar: 'مالية', slug: 'services-financial' },
      { name_ar: 'منزلية', slug: 'services-household' },
      { name_ar: 'عمالة', slug: 'services-labor' },
      { name_ar: 'قانونية', slug: 'services-legal' },
      { name_ar: 'دروس', slug: 'services-lessons' },
      { name_ar: 'نقل', slug: 'services-moving' },
      { name_ar: 'حيوانات', slug: 'services-pet' },
      { name_ar: 'عقارات', slug: 'services-real-estate' },
      { name_ar: 'إصلاح', slug: 'services-skilled' },
      { name_ar: 'سفر', slug: 'services-travel' },
      { name_ar: 'كتابة', slug: 'services-writing' },
    ]
  },

  // FREE - مجاني
  {
    name_ar: 'مجاني',
    name_en: 'free',
    slug: 'free',
    subs: []
  },

  // WANTED - مطلوب
  {
    name_ar: 'مطلوب',
    name_en: 'wanted',
    slug: 'wanted',
    subs: []
  },

  // RESUMES - سير ذاتية
  {
    name_ar: 'سير ذاتية',
    name_en: 'resumes',
    slug: 'resumes',
    subs: []
  },

  // DISCUSSION FORUMS - منتديات
  {
    name_ar: 'منتديات',
    name_en: 'discussion',
    slug: 'forums',
    subs: []
  },
];

// Column layout for Craigslist-style display
export const columns = [
  ['community', 'housing', 'forsale'],
  ['cars', 'jobs', 'gigs'],
  ['services', 'resumes', 'forums'],
];

// Special categories (shown separately)
export const specialCategories = ['free', 'wanted'];
