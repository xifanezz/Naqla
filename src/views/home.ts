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

// Subcategories for each main category
const subcategoriesMap: Record<string, { id: string; name_ar: string; slug: string }[]> = {
  'community': [
    { id: 'activities', name_ar: 'أنشطة', slug: 'activities' },
    { id: 'artists', name_ar: 'فنانون', slug: 'artists' },
    { id: 'childcare', name_ar: 'رعاية أطفال', slug: 'childcare' },
    { id: 'classes', name_ar: 'دورات تعليمية', slug: 'classes' },
    { id: 'events', name_ar: 'فعاليات', slug: 'events' },
    { id: 'general', name_ar: 'عام', slug: 'general-community' },
    { id: 'groups', name_ar: 'مجموعات', slug: 'groups' },
    { id: 'local-news', name_ar: 'أخبار محلية', slug: 'local-news' },
    { id: 'lost-found', name_ar: 'مفقودات', slug: 'lost-found' },
    { id: 'musicians', name_ar: 'موسيقيون', slug: 'musicians' },
    { id: 'pets', name_ar: 'حيوانات أليفة', slug: 'pets' },
    { id: 'politics', name_ar: 'سياسة', slug: 'politics' },
    { id: 'rideshare', name_ar: 'مشاركة رحلات', slug: 'rideshare' },
    { id: 'volunteers', name_ar: 'تطوع', slug: 'volunteers' },
  ],
  'for-sale': [
    { id: 'antiques', name_ar: 'تحف وآثار', slug: 'antiques' },
    { id: 'appliances', name_ar: 'أجهزة منزلية', slug: 'appliances' },
    { id: 'arts-crafts', name_ar: 'فنون وحرف', slug: 'arts-crafts' },
    { id: 'auto-parts', name_ar: 'قطع سيارات', slug: 'auto-parts' },
    { id: 'baby-kids', name_ar: 'أطفال ورضع', slug: 'baby-kids' },
    { id: 'beauty-health', name_ar: 'جمال وصحة', slug: 'beauty-health' },
    { id: 'bikes', name_ar: 'دراجات', slug: 'bikes' },
    { id: 'boats', name_ar: 'قوارب', slug: 'boats' },
    { id: 'books', name_ar: 'كتب', slug: 'books' },
    { id: 'cars-trucks', name_ar: 'سيارات وشاحنات', slug: 'cars-trucks' },
    { id: 'cell-phones', name_ar: 'جوالات', slug: 'cell-phones' },
    { id: 'clothing', name_ar: 'ملابس', slug: 'clothing' },
    { id: 'computers', name_ar: 'كمبيوترات', slug: 'computers' },
    { id: 'electronics', name_ar: 'إلكترونيات', slug: 'electronics' },
    { id: 'furniture', name_ar: 'أثاث', slug: 'furniture' },
    { id: 'jewelry', name_ar: 'مجوهرات', slug: 'jewelry' },
    { id: 'materials', name_ar: 'مواد بناء', slug: 'materials' },
    { id: 'motorcycles', name_ar: 'دراجات نارية', slug: 'motorcycles' },
    { id: 'music-instruments', name_ar: 'آلات موسيقية', slug: 'music-instruments' },
    { id: 'photo-video', name_ar: 'كاميرات', slug: 'photo-video' },
    { id: 'sporting', name_ar: 'رياضة', slug: 'sporting' },
    { id: 'tools', name_ar: 'أدوات', slug: 'tools' },
    { id: 'toys-games', name_ar: 'ألعاب', slug: 'toys-games' },
    { id: 'free', name_ar: 'مجاني', slug: 'free' },
    { id: 'wanted', name_ar: 'مطلوب', slug: 'wanted' },
  ],
  'gigs': [
    { id: 'computer-gigs', name_ar: 'كمبيوتر', slug: 'computer-gigs' },
    { id: 'creative-gigs', name_ar: 'إبداعي', slug: 'creative-gigs' },
    { id: 'crew-gigs', name_ar: 'طاقم عمل', slug: 'crew-gigs' },
    { id: 'domestic-gigs', name_ar: 'منزلي', slug: 'domestic-gigs' },
    { id: 'event-gigs', name_ar: 'فعاليات', slug: 'event-gigs' },
    { id: 'labor-gigs', name_ar: 'عمالة', slug: 'labor-gigs' },
    { id: 'talent-gigs', name_ar: 'مواهب', slug: 'talent-gigs' },
    { id: 'writing-gigs', name_ar: 'كتابة', slug: 'writing-gigs' },
  ],
  'housing': [
    { id: 'apartments', name_ar: 'شقق للإيجار', slug: 'apartments' },
    { id: 'houses-rent', name_ar: 'بيوت للإيجار', slug: 'houses-rent' },
    { id: 'rooms', name_ar: 'غرف للإيجار', slug: 'rooms' },
    { id: 'sublets', name_ar: 'إيجار مؤقت', slug: 'sublets' },
    { id: 'housing-wanted', name_ar: 'مطلوب سكن', slug: 'housing-wanted' },
    { id: 'real-estate-sale', name_ar: 'عقارات للبيع', slug: 'real-estate-sale' },
    { id: 'office-commercial', name_ar: 'مكاتب ومحلات', slug: 'office-commercial' },
    { id: 'parking-storage', name_ar: 'مواقف ومخازن', slug: 'parking-storage' },
    { id: 'vacation-rentals', name_ar: 'إيجار سياحي', slug: 'vacation-rentals' },
  ],
  'jobs': [
    { id: 'accounting', name_ar: 'محاسبة', slug: 'accounting' },
    { id: 'admin-office', name_ar: 'إداري ومكتبي', slug: 'admin-office' },
    { id: 'arch-engineering', name_ar: 'هندسة', slug: 'arch-engineering' },
    { id: 'art-design', name_ar: 'تصميم', slug: 'art-design' },
    { id: 'customer-service', name_ar: 'خدمة عملاء', slug: 'customer-service' },
    { id: 'education', name_ar: 'تعليم', slug: 'education' },
    { id: 'food-hospitality', name_ar: 'ضيافة ومطاعم', slug: 'food-hospitality' },
    { id: 'general-labor', name_ar: 'عمالة عامة', slug: 'general-labor' },
    { id: 'government', name_ar: 'حكومي', slug: 'government' },
    { id: 'healthcare', name_ar: 'صحي وطبي', slug: 'healthcare' },
    { id: 'hr', name_ar: 'موارد بشرية', slug: 'hr' },
    { id: 'legal', name_ar: 'قانوني', slug: 'legal' },
    { id: 'manufacturing', name_ar: 'تصنيع', slug: 'manufacturing' },
    { id: 'marketing', name_ar: 'تسويق', slug: 'marketing' },
    { id: 'media', name_ar: 'إعلام', slug: 'media' },
    { id: 'nonprofit', name_ar: 'غير ربحي', slug: 'nonprofit' },
    { id: 'real-estate-jobs', name_ar: 'عقارات', slug: 'real-estate-jobs' },
    { id: 'retail', name_ar: 'تجزئة', slug: 'retail' },
    { id: 'sales', name_ar: 'مبيعات', slug: 'sales' },
    { id: 'salon-spa', name_ar: 'صالون وسبا', slug: 'salon-spa' },
    { id: 'science', name_ar: 'علوم', slug: 'science' },
    { id: 'security', name_ar: 'أمن', slug: 'security' },
    { id: 'software', name_ar: 'برمجة', slug: 'software' },
    { id: 'tech-support', name_ar: 'دعم فني', slug: 'tech-support' },
    { id: 'transport', name_ar: 'نقل', slug: 'transport' },
    { id: 'tv-film', name_ar: 'تلفزيون وأفلام', slug: 'tv-film' },
    { id: 'web-info', name_ar: 'ويب ومعلومات', slug: 'web-info' },
    { id: 'writing-editing', name_ar: 'كتابة وتحرير', slug: 'writing-editing' },
  ],
  'services': [
    { id: 'automotive', name_ar: 'سيارات', slug: 'automotive-services' },
    { id: 'beauty', name_ar: 'تجميل', slug: 'beauty-services' },
    { id: 'cell-mobile', name_ar: 'جوالات', slug: 'cell-mobile-services' },
    { id: 'computer', name_ar: 'كمبيوتر', slug: 'computer-services' },
    { id: 'creative', name_ar: 'إبداعي', slug: 'creative-services' },
    { id: 'event', name_ar: 'فعاليات', slug: 'event-services' },
    { id: 'financial', name_ar: 'مالي', slug: 'financial-services' },
    { id: 'household', name_ar: 'منزلي', slug: 'household-services' },
    { id: 'labor-moving', name_ar: 'نقل وعمالة', slug: 'labor-moving' },
    { id: 'legal-services', name_ar: 'قانوني', slug: 'legal-services' },
    { id: 'lessons', name_ar: 'دروس', slug: 'lessons' },
    { id: 'real-estate-services', name_ar: 'عقارات', slug: 'real-estate-services' },
    { id: 'skilled-trade', name_ar: 'حرف مهنية', slug: 'skilled-trade' },
    { id: 'travel', name_ar: 'سفر', slug: 'travel-services' },
    { id: 'writing-services', name_ar: 'كتابة', slug: 'writing-services' },
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
        color: #00c;
        text-decoration: none;
        font-size: 14px;
        width: calc(33.33% - 12px);
      }

      .cl-sub-cat:visited {
        color: #551a8b;
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
        color: #00c;
        text-decoration: none;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .cl-title:visited {
        color: #551a8b;
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
