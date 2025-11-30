import { layout } from './layout';

// SVG icons for categories
const categoryIcons = {
  'community': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  'for-sale': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>',
  'gigs': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
  'housing': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
  'jobs': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
  'services': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
};

// Main categories for left sidebar (Craigslist style)
const mainCategoryGroups = [
  { id: 'community', name_ar: 'مجتمع' },
  { id: 'for-sale', name_ar: 'للبيع' },
  { id: 'gigs', name_ar: 'أعمال مؤقتة' },
  { id: 'housing', name_ar: 'عقارات' },
  { id: 'jobs', name_ar: 'وظائف' },
  { id: 'services', name_ar: 'خدمات' },
];

// Subcategories for each main category - clearer Arabic names with more options
const subcategoriesMap: Record<string, { id: string; name_ar: string; slug: string }[]> = {
  'community': [
    { id: 'activities', name_ar: 'أنشطة ترفيهية', slug: 'activities' },
    { id: 'artists', name_ar: 'فنانون ومصممون', slug: 'artists' },
    { id: 'childcare', name_ar: 'رعاية الأطفال', slug: 'childcare' },
    { id: 'classes', name_ar: 'دورات تدريبية', slug: 'classes' },
    { id: 'events', name_ar: 'فعاليات ومناسبات', slug: 'events' },
    { id: 'general-community', name_ar: 'منوعات', slug: 'general-community' },
    { id: 'groups', name_ar: 'مجموعات ونوادي', slug: 'groups' },
    { id: 'lost-found', name_ar: 'مفقودات ومعثورات', slug: 'lost-found' },
    { id: 'musicians', name_ar: 'موسيقى وفنون', slug: 'musicians' },
    { id: 'pets', name_ar: 'حيوانات أليفة', slug: 'pets' },
    { id: 'rideshare', name_ar: 'توصيل ومشاوير', slug: 'rideshare' },
    { id: 'volunteers', name_ar: 'فرص تطوعية', slug: 'volunteers' },
    { id: 'carpool', name_ar: 'مشاركة سيارة', slug: 'carpool' },
    { id: 'recommendations', name_ar: 'توصيات ونصائح', slug: 'recommendations' },
  ],
  'for-sale': [
    { id: 'antiques', name_ar: 'تحف وأنتيكات', slug: 'antiques' },
    { id: 'appliances', name_ar: 'أجهزة منزلية', slug: 'appliances' },
    { id: 'arts-crafts', name_ar: 'أعمال يدوية وحرفية', slug: 'arts-crafts' },
    { id: 'auto-parts', name_ar: 'قطع غيار سيارات', slug: 'auto-parts' },
    { id: 'baby-kids', name_ar: 'مستلزمات الأطفال', slug: 'baby-kids' },
    { id: 'beauty-health', name_ar: 'مستحضرات تجميل وعناية', slug: 'beauty-health' },
    { id: 'bikes', name_ar: 'دراجات هوائية', slug: 'bikes' },
    { id: 'boats', name_ar: 'قوارب ويخوت', slug: 'boats' },
    { id: 'books', name_ar: 'كتب ومجلات', slug: 'books' },
    { id: 'cars-trucks', name_ar: 'سيارات وشاحنات', slug: 'cars-trucks' },
    { id: 'cell-phones', name_ar: 'جوالات وأجهزة ذكية', slug: 'cell-phones' },
    { id: 'clothing', name_ar: 'ملابس وأزياء', slug: 'clothing' },
    { id: 'computers', name_ar: 'أجهزة كمبيوتر ولابتوب', slug: 'computers' },
    { id: 'electronics', name_ar: 'إلكترونيات', slug: 'electronics' },
    { id: 'furniture', name_ar: 'أثاث منزلي ومكتبي', slug: 'furniture' },
    { id: 'jewelry', name_ar: 'مجوهرات وساعات', slug: 'jewelry' },
    { id: 'materials', name_ar: 'مواد بناء وتشطيب', slug: 'materials' },
    { id: 'motorcycles', name_ar: 'دراجات نارية', slug: 'motorcycles' },
    { id: 'music-instruments', name_ar: 'آلات موسيقية', slug: 'music-instruments' },
    { id: 'photo-video', name_ar: 'كاميرات ومعدات تصوير', slug: 'photo-video' },
    { id: 'sporting', name_ar: 'مستلزمات رياضية', slug: 'sporting' },
    { id: 'tools', name_ar: 'عدد وأدوات', slug: 'tools' },
    { id: 'toys-games', name_ar: 'ألعاب أطفال وبلايستيشن', slug: 'toys-games' },
    { id: 'free', name_ar: 'أغراض مجانية', slug: 'free' },
    { id: 'wanted', name_ar: 'مطلوب شراء', slug: 'wanted' },
    { id: 'camping', name_ar: 'مستلزمات رحلات وتخييم', slug: 'camping' },
    { id: 'watches', name_ar: 'ساعات', slug: 'watches' },
    { id: 'perfumes', name_ar: 'عطور', slug: 'perfumes' },
    { id: 'bags', name_ar: 'حقائب ومحافظ', slug: 'bags' },
    { id: 'kitchen', name_ar: 'أدوات مطبخ', slug: 'kitchen' },
    { id: 'ac-cooling', name_ar: 'مكيفات وتبريد', slug: 'ac-cooling' },
    { id: 'tv-audio', name_ar: 'تلفزيونات وصوتيات', slug: 'tv-audio' },
    { id: 'garden', name_ar: 'حدائق ونباتات', slug: 'garden' },
  ],
  'gigs': [
    { id: 'computer-gigs', name_ar: 'خدمات كمبيوتر وتقنية', slug: 'computer-gigs' },
    { id: 'creative-gigs', name_ar: 'أعمال إبداعية وتصميم', slug: 'creative-gigs' },
    { id: 'crew-gigs', name_ar: 'طاقم عمل ومساعدين', slug: 'crew-gigs' },
    { id: 'domestic-gigs', name_ar: 'أعمال منزلية', slug: 'domestic-gigs' },
    { id: 'event-gigs', name_ar: 'تنظيم فعاليات وحفلات', slug: 'event-gigs' },
    { id: 'labor-gigs', name_ar: 'أعمال يدوية وصيانة', slug: 'labor-gigs' },
    { id: 'talent-gigs', name_ar: 'مواهب وفنون', slug: 'talent-gigs' },
    { id: 'writing-gigs', name_ar: 'كتابة وترجمة', slug: 'writing-gigs' },
    { id: 'delivery-gigs', name_ar: 'توصيل طلبات', slug: 'delivery-gigs' },
    { id: 'photography-gigs', name_ar: 'تصوير فوتو وفيديو', slug: 'photography-gigs' },
    { id: 'marketing-gigs', name_ar: 'تسويق وإعلان', slug: 'marketing-gigs' },
    { id: 'teaching-gigs', name_ar: 'دروس خصوصية', slug: 'teaching-gigs' },
  ],
  'housing': [
    { id: 'apartments', name_ar: 'شقق للإيجار', slug: 'apartments' },
    { id: 'houses-rent', name_ar: 'فلل وبيوت للإيجار', slug: 'houses-rent' },
    { id: 'rooms', name_ar: 'غرف للإيجار', slug: 'rooms' },
    { id: 'sublets', name_ar: 'إيجار مؤقت وشهري', slug: 'sublets' },
    { id: 'housing-wanted', name_ar: 'مطلوب سكن', slug: 'housing-wanted' },
    { id: 'real-estate-sale', name_ar: 'عقارات للبيع', slug: 'real-estate-sale' },
    { id: 'apartments-sale', name_ar: 'شقق للبيع', slug: 'apartments-sale' },
    { id: 'villas-sale', name_ar: 'فلل للبيع', slug: 'villas-sale' },
    { id: 'land', name_ar: 'أراضي للبيع', slug: 'land' },
    { id: 'office-commercial', name_ar: 'مكاتب ومحلات تجارية', slug: 'office-commercial' },
    { id: 'warehouses', name_ar: 'مستودعات ومخازن', slug: 'warehouses' },
    { id: 'parking-storage', name_ar: 'مواقف سيارات', slug: 'parking-storage' },
    { id: 'vacation-rentals', name_ar: 'شاليهات واستراحات', slug: 'vacation-rentals' },
    { id: 'roommates', name_ar: 'شريك سكن', slug: 'roommates' },
    { id: 'furnished', name_ar: 'سكن مفروش', slug: 'furnished' },
  ],
  'jobs': [
    { id: 'accounting', name_ar: 'محاسبة ومالية', slug: 'accounting' },
    { id: 'admin-office', name_ar: 'إدارة ومكتبية', slug: 'admin-office' },
    { id: 'arch-engineering', name_ar: 'هندسة وعمارة', slug: 'arch-engineering' },
    { id: 'art-design', name_ar: 'تصميم جرافيك', slug: 'art-design' },
    { id: 'customer-service', name_ar: 'خدمة عملاء', slug: 'customer-service' },
    { id: 'education', name_ar: 'تعليم وتدريس', slug: 'education' },
    { id: 'food-hospitality', name_ar: 'مطاعم وضيافة', slug: 'food-hospitality' },
    { id: 'general-labor', name_ar: 'عمالة وحرف', slug: 'general-labor' },
    { id: 'government', name_ar: 'وظائف حكومية', slug: 'government' },
    { id: 'healthcare', name_ar: 'طب وتمريض', slug: 'healthcare' },
    { id: 'hr', name_ar: 'موارد بشرية', slug: 'hr' },
    { id: 'legal', name_ar: 'قانون ومحاماة', slug: 'legal' },
    { id: 'manufacturing', name_ar: 'تصنيع ومصانع', slug: 'manufacturing' },
    { id: 'marketing', name_ar: 'تسويق ودعاية', slug: 'marketing' },
    { id: 'media', name_ar: 'إعلام وصحافة', slug: 'media' },
    { id: 'nonprofit', name_ar: 'قطاع غير ربحي', slug: 'nonprofit' },
    { id: 'real-estate-jobs', name_ar: 'وظائف عقارية', slug: 'real-estate-jobs' },
    { id: 'retail', name_ar: 'مبيعات تجزئة', slug: 'retail' },
    { id: 'sales', name_ar: 'مبيعات وتسويق', slug: 'sales' },
    { id: 'salon-spa', name_ar: 'تجميل وعناية', slug: 'salon-spa' },
    { id: 'security', name_ar: 'أمن وحراسة', slug: 'security' },
    { id: 'software', name_ar: 'برمجة وتطوير', slug: 'software' },
    { id: 'tech-support', name_ar: 'دعم فني وتقني', slug: 'tech-support' },
    { id: 'transport', name_ar: 'نقل وتوصيل', slug: 'transport' },
    { id: 'writing-editing', name_ar: 'كتابة وتحرير', slug: 'writing-editing' },
    { id: 'drivers', name_ar: 'سائقين', slug: 'drivers' },
    { id: 'construction', name_ar: 'بناء ومقاولات', slug: 'construction' },
    { id: 'oil-gas', name_ar: 'نفط وغاز', slug: 'oil-gas' },
    { id: 'banking', name_ar: 'بنوك وتأمين', slug: 'banking' },
    { id: 'part-time', name_ar: 'دوام جزئي', slug: 'part-time' },
    { id: 'remote', name_ar: 'عمل عن بعد', slug: 'remote' },
    { id: 'internship', name_ar: 'تدريب وتأهيل', slug: 'internship' },
  ],
  'services': [
    { id: 'automotive', name_ar: 'صيانة وخدمات سيارات', slug: 'automotive-services' },
    { id: 'beauty', name_ar: 'تجميل وعناية شخصية', slug: 'beauty-services' },
    { id: 'cell-mobile', name_ar: 'صيانة جوالات', slug: 'cell-mobile-services' },
    { id: 'computer', name_ar: 'صيانة كمبيوتر وشبكات', slug: 'computer-services' },
    { id: 'creative', name_ar: 'تصميم وإبداع', slug: 'creative-services' },
    { id: 'event', name_ar: 'تنظيم مناسبات وأفراح', slug: 'event-services' },
    { id: 'financial', name_ar: 'خدمات مالية ومحاسبية', slug: 'financial-services' },
    { id: 'household', name_ar: 'خدمات منزلية وتنظيف', slug: 'household-services' },
    { id: 'labor-moving', name_ar: 'نقل عفش وأثاث', slug: 'labor-moving' },
    { id: 'legal-services', name_ar: 'خدمات قانونية', slug: 'legal-services' },
    { id: 'lessons', name_ar: 'دروس خصوصية وتعليم', slug: 'lessons' },
    { id: 'real-estate-services', name_ar: 'خدمات عقارية', slug: 'real-estate-services' },
    { id: 'skilled-trade', name_ar: 'سباكة وكهرباء وصيانة', slug: 'skilled-trade' },
    { id: 'travel', name_ar: 'سفر وسياحة وتأشيرات', slug: 'travel-services' },
    { id: 'writing-services', name_ar: 'كتابة وترجمة', slug: 'writing-services' },
    { id: 'ac-services', name_ar: 'صيانة مكيفات', slug: 'ac-services' },
    { id: 'photography', name_ar: 'تصوير فوتو وفيديو', slug: 'photography-services' },
    { id: 'delivery', name_ar: 'خدمات توصيل', slug: 'delivery-services' },
    { id: 'printing', name_ar: 'طباعة ودعاية', slug: 'printing-services' },
    { id: 'catering', name_ar: 'ضيافة وطبخ', slug: 'catering-services' },
    { id: 'pet-services', name_ar: 'خدمات حيوانات أليفة', slug: 'pet-services' },
    { id: 'renovation', name_ar: 'ترميم وتجديد', slug: 'renovation-services' },
    { id: 'gardening', name_ar: 'تنسيق حدائق', slug: 'gardening-services' },
    { id: 'security-systems', name_ar: 'كاميرات وأنظمة أمان', slug: 'security-systems' },
  ],
};

export function homePage(data: { categories: any[]; listings: any[]; user?: any }) {
  const { listings, user } = data;

  // Generate subcategories JSON for JavaScript
  const subcatsJson = JSON.stringify(subcategoriesMap);

  return layout(`
    <div class="cl-home">
      <!-- Two-column Craigslist-style layout -->
      <div class="cl-browse">
        <!-- Left sidebar: Main categories -->
        <div class="cl-main-cats">
          ${mainCategoryGroups.map((cat, idx) => `
            <div class="cl-main-cat ${idx === 0 ? 'active' : ''}" data-cat="${cat.id}">
              <span class="cl-cat-icon">${categoryIcons[cat.id as keyof typeof categoryIcons]}</span>
              <span class="cl-cat-name-ar">${cat.name_ar}</span>
            </div>
          `).join('')}
        </div>

        <!-- Right sidebar: Subcategories -->
        <div class="cl-sub-cats" id="subcategories">
          ${subcategoriesMap['community'].map(sub => `
            <a href="/category/${sub.slug}" class="cl-sub-cat">${sub.name_ar}</a>
          `).join('')}
        </div>
      </div>

      <!-- Latest listings section -->
      <div class="cl-listings">
        <h3 class="cl-section-title">أحدث الإعلانات</h3>
        ${listings.length > 0 ? `
          <div class="cl-list">
            ${listings.map(listing => listingRow(listing)).join('')}
          </div>
        ` : `
          <p class="cl-empty">لا توجد إعلانات بعد. <a href="/post">أضف أول إعلان</a></p>
        `}
      </div>
    </div>

    <style>
      .cl-home {
        font-family: 'Readex Pro', sans-serif;
      }

      /* Two-column browse section */
      .cl-browse {
        display: flex;
        gap: 0;
        background: #fff;
        border: 1px solid #ddd5cc;
        border-radius: 6px;
        overflow: hidden;
        margin-bottom: 24px;
      }

      /* Left sidebar - Main categories */
      .cl-main-cats {
        width: 180px;
        background: #f8f5f0;
        border-left: 1px solid #ddd5cc;
        flex-shrink: 0;
      }

      .cl-main-cat {
        padding: 12px 16px;
        cursor: pointer;
        border-bottom: 1px solid #ebe5de;
        transition: background 0.15s;
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .cl-main-cat:last-child {
        border-bottom: none;
      }

      .cl-main-cat:hover {
        background: #ebe5de;
      }

      .cl-main-cat.active {
        background: #5f4a82;
        color: #fff;
      }

      .cl-cat-icon {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .cl-cat-icon svg {
        width: 20px;
        height: 20px;
        flex-shrink: 0;
        stroke: #5f4a82;
      }

      .cl-main-cat.active .cl-cat-icon svg {
        stroke: #fff;
      }

      .cl-cat-name-ar {
        font-size: 15px;
        font-weight: 500;
      }

      /* Right sidebar - Subcategories */
      .cl-sub-cats {
        flex: 1;
        padding: 16px 20px;
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        gap: 8px 16px;
        min-height: 280px;
      }

      .cl-sub-cat {
        display: inline-block;
        padding: 6px 0;
        color: #5f4a82;
        text-decoration: none;
        font-size: 14px;
        width: calc(33.33% - 12px);
      }

      .cl-sub-cat:visited {
        color: #4a3868;
      }

      .cl-sub-cat:hover {
        text-decoration: underline;
      }

      /* Listings section */
      .cl-listings {
        background: #fff;
        border: 1px solid #ddd5cc;
        border-radius: 6px;
        padding: 16px;
      }

      .cl-section-title {
        font-size: 14px;
        font-weight: 600;
        color: #5f4a82;
        margin-bottom: 12px;
        padding-bottom: 8px;
        border-bottom: 1px solid #eee8e0;
      }

      .cl-list {
        display: flex;
        flex-direction: column;
      }

      .cl-row {
        display: flex;
        padding: 8px 0;
        border-bottom: 1px solid #f5f0eb;
        font-size: 14px;
        gap: 12px;
        align-items: center;
      }

      .cl-row:last-child {
        border-bottom: none;
      }

      .cl-row:hover {
        background: #faf8f5;
      }

      .cl-date {
        color: #999;
        font-size: 12px;
        min-width: 55px;
      }

      .cl-title {
        flex: 1;
        color: #5f4a82;
        text-decoration: none;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .cl-title:visited {
        color: #4a3868;
      }

      .cl-title:hover {
        text-decoration: underline;
      }

      .cl-price {
        color: #090;
        font-weight: 600;
        min-width: 90px;
        text-align: left;
      }

      .cl-loc {
        color: #666;
        font-size: 12px;
        min-width: 70px;
      }

      .cl-empty {
        color: #666;
        font-size: 14px;
        padding: 30px;
        text-align: center;
      }

      .cl-empty a {
        color: #5f4a82;
        font-weight: 500;
      }

      /* Responsive */
      @media (max-width: 700px) {
        .cl-browse {
          flex-direction: column;
        }

        .cl-main-cats {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          border-left: none;
          border-bottom: 1px solid #ddd5cc;
        }

        .cl-main-cat {
          flex: 1;
          min-width: 50%;
          text-align: center;
          border-bottom: none;
          border-left: 1px solid #ebe5de;
        }

        .cl-main-cat:first-child,
        .cl-main-cat:nth-child(2) {
          border-left: none;
        }

        .cl-sub-cat {
          width: calc(50% - 8px);
        }
      }
    </style>

    <script>
      (function() {
        const subcategories = ${subcatsJson};
        const mainCats = document.querySelectorAll('.cl-main-cat');
        const subCatsContainer = document.getElementById('subcategories');

        mainCats.forEach(cat => {
          cat.addEventListener('click', function() {
            // Remove active from all
            mainCats.forEach(c => c.classList.remove('active'));
            // Add active to clicked
            this.classList.add('active');

            // Get subcategories for this category
            const catId = this.dataset.cat;
            const subs = subcategories[catId] || [];

            // Update subcategories display
            subCatsContainer.innerHTML = subs.map(sub =>
              '<a href="/category/' + sub.slug + '" class="cl-sub-cat">' + sub.name_ar + '</a>'
            ).join('');
          });
        });
      })();
    </script>
  `, { user });
}

function listingRow(listing: any) {
  const price = listing.price ? new Intl.NumberFormat('ar-SA').format(listing.price) + ' ر.س' : '-';
  const date = new Date(listing.created_at);
  const timeStr = date.toLocaleDateString('ar-SA', { month: 'short', day: 'numeric' });

  return `
    <div class="cl-row">
      <span class="cl-date">${timeStr}</span>
      <a href="/listing/${listing.id}" class="cl-title">${listing.title}</a>
      <span class="cl-price">${price}</span>
      <span class="cl-loc">${listing.city || ''}</span>
    </div>
  `;
}

export function listingCard(listing: any) {
  return listingRow(listing);
}
