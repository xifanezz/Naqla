export function layout(content: string, options: { title?: string; user?: any } = {}) {
  const { title = 'نقلة - سوق الإعلانات المبوبة', user } = options;

  return `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Readex+Pro:wght@400;500;600&display=swap" rel="stylesheet">
  <script src="https://unpkg.com/htmx.org@1.9.10"></script>
  <script src="https://js.pusher.com/8.2.0/pusher.min.js"></script>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html, body { height: 100%; }
    body { font: 14px/1.6 'Readex Pro', sans-serif; background: #f6f2ef; color: #333; display: flex; flex-direction: column; }

    /* Custom text selection - purple theme instead of default blue */
    ::selection { background: #5f4a82; color: #fff; }
    ::-moz-selection { background: #5f4a82; color: #fff; }

    /* Disable text selection on interactive elements */
    button, .btn, .cat-item, .nav a, .contact-opt, .subcat-item { user-select: none; -webkit-user-select: none; }

    a { color: #5f4a82; text-decoration: none; }
    a:visited { color: #4a3868; }
    a:hover { text-decoration: underline; color: #7a5fa8; }

    .header { background: #5f4a82; padding: 10px 0; }
    .header .wrap { display: flex; align-items: center; justify-content: space-between; }
    .logo, .logo:visited, .logo:hover { color: #fff !important; font-size: 22px; font-weight: 600; text-decoration: none !important; }
    .logo span { color: #f90 !important; }
    .btn-post { background: #f5e6c8; color: #5f4a82 !important; padding: 6px 14px; border-radius: 4px; font-weight: 500; }
    .nav { display: flex; align-items: center; gap: 18px; }
    .nav a { color: rgba(255,255,255,0.9); font-size: 13px; text-decoration: none; display: flex; align-items: center; gap: 5px; }
    .nav a:hover { color: #fff; }
    .nav a:visited { color: rgba(255,255,255,0.9); }
    .nav svg { width: 16px; height: 16px; }

    .wrap { max-width: 920px; margin: 0 auto; padding: 0 15px; }

    .search-bar { background: #ebe5de; padding: 10px 0; border-bottom: 1px solid #d5cfc5; }
    .search-bar form { display: flex; gap: 8px; }
    .search-bar input { flex: 1; padding: 8px 12px; border: 1px solid #c5bfb5; border-radius: 4px; font: inherit; background: #fff; }
    .search-bar input:focus { outline: none; border-color: #5f4a82; }
    .search-bar button { padding: 8px 20px; background: #5f4a82; color: #fff; border: none; border-radius: 4px; font: inherit; cursor: pointer; display: flex; align-items: center; gap: 6px; }
    .search-bar button:hover { background: #4a3868; }
    .search-bar svg { width: 16px; height: 16px; }

    .main { flex: 1; padding: 20px 0; }

    .box { background: #fff; border: 1px solid #ddd5cc; border-radius: 6px; padding: 16px; margin-bottom: 16px; box-shadow: 0 1px 3px rgba(0,0,0,0.04); }
    .box h2 { font-size: 14px; font-weight: 600; color: #5f4a82; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px solid #eee8e0; display: flex; align-items: center; gap: 8px; }
    .box h2 svg { width: 18px; height: 18px; }

    .cat-grid { column-count: 4; column-gap: 20px; }
    .cat-item { display: flex; align-items: center; gap: 6px; padding: 5px 0; text-decoration: none; }
    .cat-item:hover { text-decoration: underline; }
    .cat-item svg { width: 16px; height: 16px; color: #5f4a82; flex-shrink: 0; }
    .cat-item span { color: #5f4a82; }
    .cat-item .count { color: #888; font-size: 12px; margin-right: auto; }

    .listing { padding: 10px 0; border-bottom: 1px solid #f0ebe5; }
    .listing:last-child { border: none; }
    .listing-title { color: #5f4a82; }
    .listing-title:hover { text-decoration: underline; }
    .listing-meta { font-size: 12px; color: #888; margin-top: 3px; display: flex; align-items: center; gap: 6px; }
    .listing-meta svg { width: 14px; height: 14px; }
    .listing-price { color: #090; font-weight: 600; }

    .footer { background: #5f4a82; color: rgba(255,255,255,0.8); padding: 15px 0; text-align: center; font-size: 12px; margin-top: auto; }
    .footer a { color: #f5d88a; }
    .footer a:visited { color: #f5d88a; }

    table { width: 100%; border-collapse: collapse; }
    th, td { padding: 8px 10px; text-align: right; border-bottom: 1px solid #f0ebe5; }
    th { background: #f8f5f0; font-weight: 600; font-size: 12px; color: #666; }

    input, select, textarea { padding: 8px 10px; border: 1px solid #ccc5bb; border-radius: 4px; font: inherit; width: 100%; }
    input:focus, select:focus, textarea:focus { outline: none; border-color: #5f4a82; }
    label { font-size: 13px; font-weight: 500; display: block; margin-bottom: 4px; }

    .btn { padding: 8px 16px; background: #5f4a82; color: #fff; border: none; border-radius: 4px; font: inherit; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; }
    .btn:hover { background: #4a3868; }
    .btn svg { width: 16px; height: 16px; }

    .meta { color: #888; font-size: 12px; }
    .price { color: #090; font-weight: 600; }
    .err { background: #fef5f5; border: 1px solid #e8c8c8; color: #a04040; padding: 10px; border-radius: 4px; margin-bottom: 12px; }
    .warn { background: #fefcf5; border: 1px solid #e8dfc0; color: #806020; padding: 10px; border-radius: 4px; margin-bottom: 12px; font-size: 12px; }

    @media(max-width:600px) { .cat-grid { column-count: 2; } .nav span { display: none; } }
  </style>
</head>
<body>
  <div class="header">
    <div class="wrap">
      <a href="/" class="logo">نقلة<span>.</span></a>
      <nav class="nav">
        ${user ? `
          <a href="/notifications"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/></svg><span>الإشعارات</span></a>
          <a href="/chat"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg><span>الرسائل</span></a>
          <a href="/profile"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg><span>حسابي</span></a>
        ` : `
          <a href="/login"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg><span>حسابي</span></a>
        `}
        <a href="/post" class="btn-post">أضف إعلان</a>
      </nav>
    </div>
  </div>

  <div class="search-bar">
    <div class="wrap">
      <form action="/search">
        <input type="text" name="q" placeholder="بحث في الإعلانات...">
        <button type="submit"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>بحث</button>
      </form>
    </div>
  </div>

  <div class="main">
    <div class="wrap">${content}</div>
  </div>

  <div class="footer">
    <div class="wrap">
      <a href="/about">عن نقلة</a> · <a href="/terms">الشروط</a> · <a href="/privacy">الخصوصية</a> · <a href="/contact">اتصل بنا</a>
      <p style="margin-top:8px;">© ${new Date().getFullYear()} نقلة - جميع الحقوق محفوظة</p>
    </div>
  </div>

  <script>
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    async function logout() {
      try {
        await fetch('/api/auth/sign-out', { method: 'POST', credentials: 'include' });
      } catch (e) {}
      localStorage.removeItem('user');
      location.href = '/';
    }
    ${user ? `
    const pusher = new Pusher('naqla_app_key', { wsHost: location.hostname, wsPort: 443, wssPort: 443, forceTLS: true, enabledTransports: ['ws', 'wss'] });
    pusher.subscribe('user-${user?.id || ''}').bind('notification', d => { if (Notification.permission === 'granted') new Notification(d.title, { body: d.body }); });
    ` : ''}
  </script>
</body>
</html>`;
}

export const icons = {
  car: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 17h2l.64-2.54a6 6 0 000-2.92L19 4H5l-2.64 7.54a6 6 0 000 2.92L5 17h2m8 0H9m10 0a2 2 0 11-4 0 2 2 0 014 0zm-10 0a2 2 0 11-4 0 2 2 0 014 0z"/></svg>',
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><path d="M12 18h.01"/></svg>',
  sofa: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 9V6a2 2 0 00-2-2H6a2 2 0 00-2 2v3m16 0a2 2 0 00-2 2v4H6v-4a2 2 0 00-2-2m16 0v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6"/></svg>',
  briefcase: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>',
  shirt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.47a2 2 0 00-1.34-2.23z"/></svg>',
  wrench: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>',
  grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',
  location: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
};
