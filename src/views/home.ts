import { layout } from './layout';

const catIcons: Record<string, string> = {
  'cars': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 17a2 2 0 104 0 2 2 0 00-4 0zM15 17a2 2 0 104 0 2 2 0 00-4 0z"/><path d="M5 17H3v-6l2-5h10l2 5v6h-2m-8 0h4"/></svg>',
  'real-estate': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><path d="M9 22V12h6v10"/></svg>',
  'electronics': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>',
  'furniture': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 9V6a2 2 0 00-2-2H6a2 2 0 00-2 2v3m16 0a2 2 0 00-2 2v4H6v-4a2 2 0 00-2-2m16 0v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6"/></svg>',
  'jobs': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>',
  'fashion': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.47a2 2 0 00-1.34-2.23z"/></svg>',
  'services': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>',
  'default': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',
};

export function homePage(data: { categories: any[]; listings: any[]; user?: any }) {
  const { categories, listings, user } = data;

  return layout(`
    <div class="box">
      <h2><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>الأقسام</h2>
      <div class="cat-grid">
        ${categories.map(cat => `
          <a href="/category/${cat.slug}" class="cat-item">
            ${catIcons[cat.slug] || catIcons.default}
            <span>${cat.name_ar}</span>
            <span class="count">(${cat.listing_count})</span>
          </a>
        `).join('')}
      </div>
    </div>

    <div class="box">
      <h2><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>أحدث الإعلانات</h2>
      ${listings.length > 0 ? `
        <div id="listings">
          ${listings.map(listing => listingRow(listing)).join('')}
        </div>
        <p style="margin-top:12px;"><button hx-get="/api/listings?page=2" hx-target="#listings" hx-swap="beforeend" class="btn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>المزيد</button></p>
      ` : `
        <p class="meta">لا توجد إعلانات. <a href="/post">أضف إعلان</a></p>
      `}
    </div>
  `, { user });
}

export function listingRow(listing: any) {
  const price = listing.price ? new Intl.NumberFormat('ar-SA').format(listing.price) + ' ر.س' : 'اتصل';
  const timeAgo = getTimeAgo(new Date(listing.created_at));

  return `
    <div class="listing">
      <a href="/listing/${listing.id}" class="listing-title">${listing.title}</a>
      <span class="listing-price">${price}</span>
      <div class="listing-meta">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
        ${listing.city}
        <span style="margin:0 4px;">·</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
        ${timeAgo}
      </div>
    </div>
  `;
}

export function listingCard(listing: any) {
  return listingRow(listing);
}

function getTimeAgo(date: Date): string {
  const diff = Date.now() - date.getTime();
  const mins = Math.floor(diff / 60000);
  const hrs = Math.floor(mins / 60);
  const days = Math.floor(hrs / 24);
  if (mins < 60) return `${mins} دقيقة`;
  if (hrs < 24) return `${hrs} ساعة`;
  if (days < 7) return `${days} يوم`;
  return `${Math.floor(days / 7)} أسبوع`;
}
