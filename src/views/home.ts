import { layout } from './layout';

export function homePage(data: { categories: any[]; listings: any[]; user?: any }) {
  const { categories, listings, user } = data;

  // Group categories by column (Craigslist style)
  const columnSlugs = [
    ['community', 'housing', 'forsale'],
    ['cars', 'jobs', 'gigs'],
    ['services', 'resumes', 'forums'],
  ];

  // Special categories
  const specialSlugs = ['free', 'wanted'];

  // Build category map
  const catMap: Record<string, any> = {};
  for (const cat of categories) {
    catMap[cat.slug] = cat;
  }

  return layout(`
    <div class="cl-container">
      <!-- City selector like Craigslist -->
      <div class="cl-city">
        <span class="cl-city-name">الرياض</span>
        <a href="#" class="cl-city-link">تغيير المدينة</a>
      </div>

      <!-- Special categories bar -->
      <div class="cl-special">
        ${specialSlugs.map(slug => {
          const cat = catMap[slug];
          if (!cat) return '';
          return `<a href="/category/${cat.slug}" class="cl-special-link cl-${slug}">${cat.name_ar}</a>`;
        }).join('')}
        <a href="/post" class="cl-post-btn">+ أضف إعلان</a>
      </div>

      <!-- Main categories in columns -->
      <div class="cl-columns">
        ${columnSlugs.map(colSlugs => `
          <div class="cl-column">
            ${colSlugs.map(slug => {
              const cat = catMap[slug];
              if (!cat) return '';
              return `
                <div class="cl-cat">
                  <a href="/category/${cat.slug}" class="cl-cat-title">${cat.name_ar}</a>
                  ${cat.subcategories && cat.subcategories.length > 0 ? `
                    <div class="cl-subs">
                      ${cat.subcategories.map((sub: any) =>
                        `<a href="/category/${sub.slug}">${sub.name_ar}</a>`
                      ).join(' · ')}
                    </div>
                  ` : ''}
                </div>
              `;
            }).join('')}
          </div>
        `).join('')}
      </div>

      <!-- Latest listings - Craigslist style -->
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
      .cl-container {
        max-width: 900px;
        margin: 0 auto;
        padding: 16px;
        font-family: arial, helvetica, sans-serif;
      }

      /* City selector */
      .cl-city {
        text-align: center;
        padding: 8px 0 16px;
        border-bottom: 1px solid #ddd;
        margin-bottom: 16px;
      }
      .cl-city-name {
        font-size: 24px;
        font-weight: bold;
        color: #00c;
      }
      .cl-city-link {
        display: block;
        font-size: 12px;
        color: #666;
        margin-top: 4px;
      }

      /* Special categories */
      .cl-special {
        display: flex;
        justify-content: center;
        gap: 20px;
        padding: 12px 0;
        border-bottom: 1px solid #ddd;
        margin-bottom: 20px;
      }
      .cl-special-link {
        font-size: 14px;
        font-weight: bold;
        text-decoration: none;
        padding: 4px 12px;
        border-radius: 4px;
      }
      .cl-free { background: #0a0; color: #fff; }
      .cl-wanted { background: #c00; color: #fff; }
      .cl-post-btn {
        background: #5f4a82;
        color: #fff;
        padding: 6px 16px;
        border-radius: 4px;
        font-weight: bold;
        text-decoration: none;
      }
      .cl-post-btn:hover { background: #4a3866; }

      /* Columns */
      .cl-columns {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
        padding-bottom: 20px;
        border-bottom: 1px solid #ddd;
      }
      @media (max-width: 700px) {
        .cl-columns { grid-template-columns: 1fr; }
      }

      /* Category blocks */
      .cl-cat {
        margin-bottom: 16px;
      }
      .cl-cat-title {
        font-size: 15px;
        font-weight: bold;
        color: #5f4a82;
        text-decoration: none;
        display: block;
        margin-bottom: 6px;
      }
      .cl-cat-title:hover { text-decoration: underline; }
      .cl-subs {
        font-size: 12px;
        line-height: 1.6;
        color: #555;
      }
      .cl-subs a {
        color: #00c;
        text-decoration: none;
      }
      .cl-subs a:hover { text-decoration: underline; }

      /* Listings section */
      .cl-listings {
        margin-top: 20px;
      }
      .cl-section-title {
        font-size: 14px;
        color: #333;
        margin-bottom: 12px;
        padding-bottom: 6px;
        border-bottom: 1px solid #eee;
      }
      .cl-list {
        display: flex;
        flex-direction: column;
      }
      .cl-row {
        display: flex;
        padding: 6px 0;
        border-bottom: 1px solid #f5f5f5;
        font-size: 14px;
        gap: 8px;
      }
      .cl-row:hover { background: #f8f8f8; }
      .cl-date {
        color: #999;
        font-size: 12px;
        min-width: 50px;
      }
      .cl-title {
        flex: 1;
        color: #00c;
        text-decoration: none;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .cl-title:hover { text-decoration: underline; }
      .cl-price {
        color: #090;
        font-weight: bold;
        min-width: 80px;
        text-align: left;
      }
      .cl-loc {
        color: #666;
        font-size: 12px;
        min-width: 60px;
      }
      .cl-empty {
        color: #666;
        font-size: 14px;
        padding: 20px;
        text-align: center;
      }
      .cl-empty a { color: #00c; }
    </style>
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
