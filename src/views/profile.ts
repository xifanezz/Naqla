import { layout } from './layout';
import { saudiCities, getCitiesJson } from '../data/cities';

export function profilePage(user: any, stats: any, listings: any[]) {
  const avatar = user.avatar_url || user.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=5f4a82&color=fff&size=150`;
  const joinDate = new Date(user.createdAt || user.created_at).toLocaleDateString('ar-SA', { year: 'numeric', month: 'long' });

  return layout(`
    <div class="box">
      <div style="display:flex;gap:20px;align-items:flex-start;flex-wrap:wrap;">
        <div style="position:relative;">
          <img src="${avatar}" alt="${user.name}" style="width:100px;height:100px;border-radius:50%;object-fit:cover;border:3px solid #5f4a82;">
          <a href="/settings" style="position:absolute;bottom:0;right:0;background:#5f4a82;color:#fff;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;border:2px solid #fff;" title="تعديل">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          </a>
        </div>
        <div style="flex:1;min-width:200px;">
          <h2 style="font-size:20px;font-weight:600;margin-bottom:4px;border:none;padding:0;">${user.name}</h2>
          <p class="meta" style="margin-bottom:8px;">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;vertical-align:middle;"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            ${user.city || 'غير محدد'}
            <span style="margin:0 8px;">·</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;vertical-align:middle;"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            عضو منذ ${joinDate}
          </p>
          ${user.phone ? `<p class="meta"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;vertical-align:middle;"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg> ${user.phone}</p>` : ''}
        </div>
        <div style="display:flex;gap:10px;">
          <a href="/settings" class="btn" style="background:#f5e6c8;color:#5f4a82;">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px;"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/></svg>
            الإعدادات
          </a>
        </div>
      </div>
    </div>

    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:16px;">
      <div class="box" style="text-align:center;margin:0;">
        <div style="font-size:24px;font-weight:600;color:#5f4a82;">${stats.listings || 0}</div>
        <div class="meta">إعلان</div>
      </div>
      <div class="box" style="text-align:center;margin:0;">
        <div style="font-size:24px;font-weight:600;color:#5f4a82;">${stats.views || 0}</div>
        <div class="meta">مشاهدة</div>
      </div>
      <div class="box" style="text-align:center;margin:0;">
        <div style="font-size:24px;font-weight:600;color:#5f4a82;">${stats.messages || 0}</div>
        <div class="meta">رسالة</div>
      </div>
      <div class="box" style="text-align:center;margin:0;">
        <div style="font-size:24px;font-weight:600;color:#5f4a82;">${stats.favorites || 0}</div>
        <div class="meta">مفضلة</div>
      </div>
    </div>

    <div class="box">
      <h2>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
        إعلاناتي
        <a href="/my-listings" style="margin-right:auto;font-size:12px;font-weight:normal;">عرض الكل</a>
      </h2>
      ${listings.length > 0 ? `
        ${listings.slice(0, 5).map(l => `
          <div class="listing">
            <a href="/listing/${l.id}" class="listing-title">${l.title}</a>
            <span class="listing-price">${l.price ? new Intl.NumberFormat('ar-SA').format(l.price) + ' ر.س' : 'اتصل'}</span>
            <div class="listing-meta">
              <span style="padding:2px 6px;border-radius:3px;font-size:11px;background:${l.status === 'active' ? '#e8f5e9;color:#2e7d32' : '#fff3e0;color:#e65100'};">${l.status === 'active' ? 'نشط' : 'معلق'}</span>
              <span style="margin:0 4px;">·</span>
              ${l.views_count || 0} مشاهدة
              <span style="margin:0 4px;">·</span>
              <a href="/listing/${l.id}/edit" style="color:#5f4a82;">تعديل</a>
            </div>
          </div>
        `).join('')}
      ` : `
        <p class="meta" style="text-align:center;padding:20px;">لا توجد إعلانات. <a href="/post">أضف إعلانك الأول</a></p>
      `}
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
      <a href="/chat" class="box" style="text-decoration:none;display:flex;align-items:center;gap:12px;margin:0;">
        <div style="width:40px;height:40px;background:#e8e4f0;border-radius:8px;display:flex;align-items:center;justify-content:center;">
          <svg viewBox="0 0 24 24" fill="none" stroke="#5f4a82" stroke-width="2" style="width:20px;height:20px;"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
        </div>
        <div>
          <div style="font-weight:500;color:#333;">الرسائل</div>
          <div class="meta">${stats.unread_messages || 0} غير مقروءة</div>
        </div>
      </a>
      <a href="/notifications" class="box" style="text-decoration:none;display:flex;align-items:center;gap:12px;margin:0;">
        <div style="width:40px;height:40px;background:#e8e4f0;border-radius:8px;display:flex;align-items:center;justify-content:center;">
          <svg viewBox="0 0 24 24" fill="none" stroke="#5f4a82" stroke-width="2" style="width:20px;height:20px;"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/></svg>
        </div>
        <div>
          <div style="font-weight:500;color:#333;">الإشعارات</div>
          <div class="meta">${stats.unread_notifications || 0} جديدة</div>
        </div>
      </a>
    </div>
  `, { title: 'حسابي | نقلة', user });
}

export function settingsPage(user: any, hasPassword: boolean = true) {
  const avatar = user.avatar_url || user.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=5f4a82&color=fff&size=150`;
  const citiesJson = getCitiesJson();

  return layout(`
    <div class="box" style="max-width:500px;margin:0 auto;">
      <h2>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/></svg>
        الإعدادات
      </h2>

      <form id="settings-form">
        <div style="text-align:center;margin-bottom:20px;">
          <div style="position:relative;display:inline-block;">
            <img id="avatar-preview" src="${avatar}" alt="الصورة الشخصية" style="width:100px;height:100px;border-radius:50%;object-fit:cover;border:3px solid #5f4a82;">
            <label for="avatar-input" style="position:absolute;bottom:0;right:0;background:#5f4a82;color:#fff;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;border:2px solid #fff;">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px;"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>
            </label>
            <input type="file" id="avatar-input" accept="image/*" style="display:none;">
          </div>
          <p class="meta" style="margin-top:8px;">اضغط لتغيير الصورة</p>
          <div id="upload-status" style="display:none;margin-top:8px;"></div>
        </div>

        <p style="margin-bottom:12px;">
          <label>الاسم: <span style="color:#c00;">*</span></label>
          <input type="text" name="name" value="${user.name || ''}" required>
        </p>

        <p style="margin-bottom:12px;">
          <label>البريد الإلكتروني:</label>
          <input type="email" value="${user.email || ''}" disabled style="background:#f5f5f5;color:#666;">
          <span class="meta">لا يمكن تغيير البريد الإلكتروني</span>
        </p>

        <p style="margin-bottom:12px;">
          <label>رقم الجوال:</label>
          <input type="tel" name="phone" value="${user.phone || ''}" placeholder="05xxxxxxxx" dir="ltr">
        </p>

        <p style="margin-bottom:12px;">
          <label>المدينة:</label>
          <div style="display:flex;gap:8px;">
            <div style="flex:1;position:relative;">
              <input type="text" id="city-search" name="city" value="${user.city || ''}" placeholder="ابحث عن مدينتك..." autocomplete="off">
              <div id="city-dropdown" style="display:none;position:absolute;top:100%;left:0;right:0;background:#fff;border:1px solid #ddd;border-radius:4px;max-height:200px;overflow-y:auto;z-index:100;box-shadow:0 4px 12px rgba(0,0,0,0.15);"></div>
            </div>
            <button type="button" id="detect-city" style="background:#5f4a82;color:#fff;border:none;border-radius:4px;padding:8px 12px;cursor:pointer;display:flex;align-items:center;gap:4px;white-space:nowrap;" title="اكتشاف الموقع">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px;"><circle cx="12" cy="12" r="10"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/><circle cx="12" cy="12" r="3"/></svg>
              <span id="detect-text">اكتشاف</span>
            </button>
          </div>
          <span class="meta" id="city-hint" style="display:none;color:#2e7d32;margin-top:4px;"></span>
        </p>

        <div id="err" class="err" style="display:none;"></div>
        <div id="success" style="display:none;background:#e8f5e9;border:1px solid #c8e6c9;color:#2e7d32;padding:10px;border-radius:4px;margin-bottom:12px;"></div>

        <p>
          <button type="submit" class="btn" style="width:100%;justify-content:center;">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px;"><path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"/><polyline points="17,21 17,13 7,13 7,21"/><polyline points="7,3 7,8 15,8"/></svg>
            حفظ التغييرات
          </button>
        </p>
      </form>

      ${hasPassword ? `
      <hr style="margin:20px 0;border:none;border-top:1px solid #eee;">

      <h3 style="font-size:14px;font-weight:600;color:#c00;margin-bottom:12px;">تغيير كلمة المرور</h3>
      <form id="password-form">
        <p style="margin-bottom:12px;">
          <label>كلمة المرور الحالية:</label>
          <input type="password" name="current_password" required>
        </p>
        <p style="margin-bottom:12px;">
          <label>كلمة المرور الجديدة:</label>
          <input type="password" name="new_password" required>
        </p>
        <p style="margin-bottom:12px;">
          <label>تأكيد كلمة المرور:</label>
          <input type="password" name="confirm_password" required>
        </p>
        <div id="pwd-err" class="err" style="display:none;"></div>
        <div id="pwd-success" style="display:none;background:#e8f5e9;border:1px solid #c8e6c9;color:#2e7d32;padding:10px;border-radius:4px;margin-bottom:12px;"></div>
        <p>
          <button type="submit" class="btn" style="background:#c00;">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px;"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
            تغيير كلمة المرور
          </button>
        </p>
      </form>
      ` : `
      <hr style="margin:20px 0;border:none;border-top:1px solid #eee;">
      <div style="background:#e3f2fd;border:1px solid #90caf9;color:#1565c0;padding:12px;border-radius:8px;display:flex;align-items:center;gap:10px;">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:20px;height:20px;flex-shrink:0;"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
        <span>أنت مسجل بحساب Google. كلمة المرور تُدار عبر حسابك في Google.</span>
      </div>
      `}
    </div>

    <script>
      // Cities data
      const cities = ${citiesJson};

      // Searchable city dropdown
      const cityInput = document.getElementById('city-search');
      const cityDropdown = document.getElementById('city-dropdown');
      const cityHint = document.getElementById('city-hint');

      function showCityDropdown(filter = '') {
        const filtered = filter
          ? cities.filter(c => c.includes(filter))
          : cities;

        if (filtered.length === 0) {
          cityDropdown.innerHTML = '<div style="padding:10px;color:#666;">لا توجد نتائج</div>';
        } else {
          cityDropdown.innerHTML = filtered.slice(0, 10).map(c =>
            '<div style="padding:8px 12px;cursor:pointer;border-bottom:1px solid #eee;" onmouseover="this.style.background=\\'#f5f5f5\\'" onmouseout="this.style.background=\\'#fff\\'" onclick="selectCity(\\'' + c + '\\')">' + c + '</div>'
          ).join('');
        }
        cityDropdown.style.display = 'block';
      }

      function selectCity(city) {
        cityInput.value = city;
        cityDropdown.style.display = 'none';
      }

      cityInput.onfocus = () => showCityDropdown(cityInput.value);
      cityInput.oninput = (e) => showCityDropdown(e.target.value);

      document.addEventListener('click', (e) => {
        if (!e.target.closest('#city-search') && !e.target.closest('#city-dropdown')) {
          cityDropdown.style.display = 'none';
        }
      });

      // City detection button
      document.getElementById('detect-city').onclick = async function() {
        const btn = this;
        const textSpan = document.getElementById('detect-text');
        const originalText = textSpan.textContent;

        btn.disabled = true;
        textSpan.textContent = 'جاري...';

        try {
          // Try IP-based geolocation first (faster)
          const ipResponse = await fetch('https://ipapi.co/json/');
          if (ipResponse.ok) {
            const ipData = await ipResponse.json();
            if (ipData.city) {
              // Map English city names to Arabic
              const cityMap = {
                'Riyadh': 'الرياض',
                'Jeddah': 'جدة',
                'Mecca': 'مكة المكرمة',
                'Medina': 'المدينة المنورة',
                'Dammam': 'الدمام',
                'Khobar': 'الخبر',
                'Dhahran': 'الظهران',
                'Taif': 'الطائف',
                'Tabuk': 'تبوك',
                'Buraidah': 'بريدة',
                'Hail': 'حائل',
                'Najran': 'نجران',
                'Jizan': 'جازان',
                'Jazan': 'جازان',
                'Abha': 'أبها',
                'Khamis Mushait': 'خميس مشيط',
                'Al Bahah': 'الباحة',
                'Arar': 'عرعر',
                'Sakaka': 'سكاكا',
                'Yanbu': 'ينبع',
                'Jubail': 'الجبيل',
                'Al-Ahsa': 'الأحساء',
                'Hofuf': 'الأحساء',
                'Qatif': 'القطيف',
                'Hafar Al-Batin': 'حفر الباطن',
              };

              const arabicCity = cityMap[ipData.city] || cities.find(c =>
                c.toLowerCase().includes(ipData.city.toLowerCase()) ||
                ipData.city.toLowerCase().includes(c.toLowerCase())
              );

              if (arabicCity && cities.includes(arabicCity)) {
                cityInput.value = arabicCity;
                cityHint.textContent = 'تم اكتشاف موقعك: ' + arabicCity;
                cityHint.style.display = 'block';
                setTimeout(() => cityHint.style.display = 'none', 3000);
                btn.disabled = false;
                textSpan.textContent = originalText;
                return;
              }
            }
          }

          // Fallback to browser geolocation
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              async (position) => {
                const { latitude, longitude } = position.coords;

                // Use reverse geocoding
                try {
                  const geoRes = await fetch(
                    'https://nominatim.openstreetmap.org/reverse?format=json&lat=' + latitude + '&lon=' + longitude + '&accept-language=ar'
                  );
                  const geoData = await geoRes.json();
                  const cityName = geoData.address?.city || geoData.address?.town || geoData.address?.village;

                  if (cityName) {
                    const matchedCity = cities.find(c =>
                      c.includes(cityName) || cityName.includes(c)
                    );
                    if (matchedCity) {
                      cityInput.value = matchedCity;
                      cityHint.textContent = 'تم اكتشاف موقعك: ' + matchedCity;
                      cityHint.style.display = 'block';
                      setTimeout(() => cityHint.style.display = 'none', 3000);
                    } else {
                      cityHint.textContent = 'لم نتمكن من تحديد مدينتك بدقة';
                      cityHint.style.color = '#e65100';
                      cityHint.style.display = 'block';
                    }
                  }
                } catch (e) {
                  console.error(e);
                }

                btn.disabled = false;
                textSpan.textContent = originalText;
              },
              (error) => {
                cityHint.textContent = 'فشل تحديد الموقع. تأكد من السماح بالوصول للموقع.';
                cityHint.style.color = '#c00';
                cityHint.style.display = 'block';
                btn.disabled = false;
                textSpan.textContent = originalText;
              }
            );
          } else {
            cityHint.textContent = 'المتصفح لا يدعم تحديد الموقع';
            cityHint.style.color = '#c00';
            cityHint.style.display = 'block';
            btn.disabled = false;
            textSpan.textContent = originalText;
          }
        } catch (e) {
          console.error(e);
          btn.disabled = false;
          textSpan.textContent = originalText;
        }
      };

      // Avatar upload with compression
      document.getElementById('avatar-input').onchange = async function(e) {
        const file = e.target.files[0];
        if (!file) return;

        const status = document.getElementById('upload-status');
        const preview = document.getElementById('avatar-preview');

        status.style.display = 'block';
        status.textContent = 'جاري رفع الصورة...';
        status.style.color = '#666';

        try {
          // Compress image
          const compressed = await compressImage(file, 400, 0.8);

          // Upload
          const formData = new FormData();
          formData.append('avatar', compressed);

          const r = await fetch('/api/user/avatar', {
            method: 'POST',
            body: formData,
            credentials: 'include'
          });

          const d = await r.json();
          if (!r.ok) throw new Error(d.error || 'فشل رفع الصورة');

          preview.src = d.avatar_url + '?t=' + Date.now();
          status.textContent = 'تم رفع الصورة بنجاح';
          status.style.color = '#2e7d32';

          setTimeout(() => status.style.display = 'none', 3000);
        } catch (err) {
          status.textContent = err.message;
          status.style.color = '#c00';
        }
      };

      async function compressImage(file, maxSize, quality) {
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
              const canvas = document.createElement('canvas');
              let w = img.width, h = img.height;

              if (w > h) {
                if (w > maxSize) { h = h * maxSize / w; w = maxSize; }
              } else {
                if (h > maxSize) { w = w * maxSize / h; h = maxSize; }
              }

              canvas.width = w;
              canvas.height = h;

              const ctx = canvas.getContext('2d');
              ctx.drawImage(img, 0, 0, w, h);

              canvas.toBlob((blob) => {
                resolve(new File([blob], file.name, { type: 'image/jpeg' }));
              }, 'image/jpeg', quality);
            };
            img.src = e.target.result;
          };
          reader.readAsDataURL(file);
        });
      }

      // Settings form
      document.getElementById('settings-form').onsubmit = async function(e) {
        e.preventDefault();
        const f = this;
        const err = document.getElementById('err');
        const success = document.getElementById('success');

        err.style.display = 'none';
        success.style.display = 'none';

        try {
          const r = await fetch('/api/user/profile', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
              name: f.name.value,
              phone: f.phone.value,
              city: f.city.value
            })
          });

          const d = await r.json();
          if (!r.ok) throw new Error(d.error || 'فشل حفظ البيانات');

          success.textContent = 'تم حفظ التغييرات بنجاح';
          success.style.display = 'block';

          // Update localStorage
          const user = JSON.parse(localStorage.getItem('user') || '{}');
          user.name = f.name.value;
          user.phone = f.phone.value;
          user.city = f.city.value;
          localStorage.setItem('user', JSON.stringify(user));
        } catch (err) {
          document.getElementById('err').textContent = err.message;
          document.getElementById('err').style.display = 'block';
        }
      };

      // Password form (only if element exists)
      const pwdForm = document.getElementById('password-form');
      if (pwdForm) {
        pwdForm.onsubmit = async function(e) {
          e.preventDefault();
          const f = this;
          const err = document.getElementById('pwd-err');
          const success = document.getElementById('pwd-success');

          err.style.display = 'none';
          success.style.display = 'none';

          if (f.new_password.value !== f.confirm_password.value) {
            err.textContent = 'كلمتا المرور غير متطابقتين';
            err.style.display = 'block';
            return;
          }

          try {
            const r = await fetch('/api/user/password', {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              credentials: 'include',
              body: JSON.stringify({
                currentPassword: f.current_password.value,
                newPassword: f.new_password.value
              })
            });

            const d = await r.json();
            if (!r.ok) throw new Error(d.error || 'فشل تغيير كلمة المرور');

            success.textContent = 'تم تغيير كلمة المرور بنجاح';
            success.style.display = 'block';
            f.reset();
          } catch (err) {
            document.getElementById('pwd-err').textContent = err.message;
            document.getElementById('pwd-err').style.display = 'block';
          }
        };
      }
    </script>
  `, { title: 'الإعدادات | نقلة', user });
}

export function notificationsPage(notifications: any[], user: any) {
  return layout(`
    <div class="box">
      <h2>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/></svg>
        الإشعارات
        ${notifications.some(n => !n.is_read) ? `<button onclick="markAllRead()" style="margin-right:auto;font-size:12px;font-weight:normal;background:none;border:none;color:#5f4a82;cursor:pointer;">تحديد الكل كمقروء</button>` : ''}
      </h2>

      ${notifications.length > 0 ? `
        <div id="notifications-list">
          ${notifications.map(n => `
            <div class="listing" style="background:${n.is_read ? 'transparent' : '#faf8f5'};">
              <div style="display:flex;gap:12px;align-items:flex-start;">
                <div style="width:36px;height:36px;background:#e8e4f0;border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                  ${getNotificationIcon(n.type)}
                </div>
                <div style="flex:1;">
                  <div style="font-weight:${n.is_read ? 'normal' : '500'};">${n.title}</div>
                  <div class="meta">${n.body}</div>
                  <div class="meta" style="margin-top:4px;">${formatTimeAgo(n.created_at)}</div>
                </div>
                ${n.link ? `<a href="${n.link}" class="btn" style="padding:4px 8px;font-size:12px;">عرض</a>` : ''}
              </div>
            </div>
          `).join('')}
        </div>
      ` : `
        <p class="meta" style="text-align:center;padding:40px;">
          <svg viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="2" style="width:48px;height:48px;margin-bottom:12px;"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/></svg>
          <br>لا توجد إشعارات
        </p>
      `}
    </div>

    <script>
      async function markAllRead() {
        await fetch('/api/notifications/read-all', { method: 'POST', credentials: 'include' });
        location.reload();
      }

      function formatTimeAgo(date) {
        const diff = Date.now() - new Date(date).getTime();
        const mins = Math.floor(diff / 60000);
        const hrs = Math.floor(mins / 60);
        const days = Math.floor(hrs / 24);
        if (mins < 60) return mins + ' دقيقة';
        if (hrs < 24) return hrs + ' ساعة';
        if (days < 7) return days + ' يوم';
        return Math.floor(days / 7) + ' أسبوع';
      }
    </script>
  `, { title: 'الإشعارات | نقلة', user });
}

function getNotificationIcon(type: string): string {
  switch (type) {
    case 'message':
      return '<svg viewBox="0 0 24 24" fill="none" stroke="#5f4a82" stroke-width="2" style="width:18px;height:18px;"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>';
    case 'listing':
      return '<svg viewBox="0 0 24 24" fill="none" stroke="#5f4a82" stroke-width="2" style="width:18px;height:18px;"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>';
    case 'favorite':
      return '<svg viewBox="0 0 24 24" fill="none" stroke="#5f4a82" stroke-width="2" style="width:18px;height:18px;"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>';
    default:
      return '<svg viewBox="0 0 24 24" fill="none" stroke="#5f4a82" stroke-width="2" style="width:18px;height:18px;"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/></svg>';
  }
}

function formatTimeAgo(date: string): string {
  const diff = Date.now() - new Date(date).getTime();
  const mins = Math.floor(diff / 60000);
  const hrs = Math.floor(mins / 60);
  const days = Math.floor(hrs / 24);
  if (mins < 60) return `${mins} دقيقة`;
  if (hrs < 24) return `${hrs} ساعة`;
  if (days < 7) return `${days} يوم`;
  return `${Math.floor(days / 7)} أسبوع`;
}

export function myListingsPage(listings: any[], user: any) {
  return layout(`
    <div class="box">
      <h2>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
        إعلاناتي
        <a href="/post" class="btn" style="margin-right:auto;font-size:12px;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;"><path d="M12 5v14M5 12h14"/></svg>
          إعلان جديد
        </a>
      </h2>

      ${listings.length > 0 ? `
        <table>
          <tr>
            <th>الإعلان</th>
            <th>السعر</th>
            <th>الحالة</th>
            <th>المشاهدات</th>
            <th>الإجراءات</th>
          </tr>
          ${listings.map(l => `
            <tr>
              <td>
                <a href="/listing/${l.id}" style="font-weight:500;">${l.title}</a>
                <div class="meta">${l.category_name || ''} · ${l.city}</div>
              </td>
              <td class="price">${l.price ? new Intl.NumberFormat('ar-SA').format(l.price) + ' ر.س' : 'اتصل'}</td>
              <td>
                <span style="padding:3px 8px;border-radius:4px;font-size:11px;background:${l.status === 'active' ? '#e8f5e9;color:#2e7d32' : l.status === 'sold' ? '#e3f2fd;color:#1565c0' : '#fff3e0;color:#e65100'};">
                  ${l.status === 'active' ? 'نشط' : l.status === 'sold' ? 'مباع' : 'معلق'}
                </span>
              </td>
              <td class="meta">${l.views_count || 0}</td>
              <td>
                <div style="display:flex;gap:6px;">
                  <a href="/listing/${l.id}/edit" title="تعديل" style="color:#5f4a82;">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px;"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                  </a>
                  <button onclick="toggleStatus(${l.id}, '${l.status}')" title="${l.status === 'active' ? 'إيقاف' : 'تفعيل'}" style="background:none;border:none;cursor:pointer;color:${l.status === 'active' ? '#e65100' : '#2e7d32'};">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px;">${l.status === 'active' ? '<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>' : '<polygon points="5,3 19,12 5,21 5,3"/>'}</svg>
                  </button>
                  <button onclick="deleteListing(${l.id})" title="حذف" style="background:none;border:none;cursor:pointer;color:#c00;">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px;"><polyline points="3,6 5,6 21,6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>
                  </button>
                </div>
              </td>
            </tr>
          `).join('')}
        </table>
      ` : `
        <p class="meta" style="text-align:center;padding:40px;">
          <svg viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="2" style="width:48px;height:48px;margin-bottom:12px;"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
          <br>لا توجد إعلانات
          <br><br>
          <a href="/post" class="btn">أضف إعلانك الأول</a>
        </p>
      `}
    </div>

    <script>
      async function toggleStatus(id, currentStatus) {
        const newStatus = currentStatus === 'active' ? 'paused' : 'active';
        const r = await fetch('/api/listings/' + id + '/status', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify({ status: newStatus })
        });
        if (r.ok) location.reload();
        else alert('فشل تحديث الحالة');
      }

      async function deleteListing(id) {
        if (!confirm('هل أنت متأكد من حذف هذا الإعلان؟')) return;
        const r = await fetch('/api/listings/' + id, {
          method: 'DELETE',
          credentials: 'include'
        });
        if (r.ok) location.reload();
        else alert('فشل حذف الإعلان');
      }
    </script>
  `, { title: 'إعلاناتي | نقلة', user });
}
