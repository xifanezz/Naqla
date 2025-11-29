import { layout } from './layout';
import { saudiCities, cityCoordinates, getCitiesJson } from '../data/cities';

export function loginPage(redirect?: string) {
  const redirectParam = redirect ? `?redirect=${encodeURIComponent(redirect)}` : '';

  return layout(`
    <div class="box" style="max-width:400px;margin:0 auto;">
      <h2 style="text-align:center;border:none;padding-bottom:0;">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:24px;height:24px;vertical-align:middle;">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
        </svg>
        تسجيل الدخول
      </h2>

      <div style="margin:20px 0;">
        <button onclick="signInWithGoogle()" class="btn" style="width:100%;background:#fff;color:#333;border:1px solid #ddd;justify-content:center;gap:10px;">
          <svg viewBox="0 0 24 24" width="18" height="18">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          الدخول بحساب Google
        </button>
      </div>

      <div style="display:flex;align-items:center;gap:10px;margin:20px 0;">
        <div style="flex:1;height:1px;background:#ddd;"></div>
        <span class="meta">أو</span>
        <div style="flex:1;height:1px;background:#ddd;"></div>
      </div>

      <form id="login-form">
        <p style="margin-bottom:12px;">
          <label>البريد الإلكتروني:</label>
          <input type="email" name="email" placeholder="example@email.com" required dir="ltr">
        </p>
        <p style="margin-bottom:12px;">
          <label>كلمة المرور:</label>
          <input type="password" name="password" required>
        </p>
        <p style="margin-bottom:12px;">
          <label style="display:flex;align-items:center;gap:6px;cursor:pointer;">
            <input type="checkbox" name="remember" style="width:auto;">
            تذكرني
          </label>
        </p>
        <div id="err" class="err" style="display:none;"></div>
        <p>
          <button type="submit" class="btn" style="width:100%;justify-content:center;">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px;">
              <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 17l5-5-5-5M13.8 12H3"/>
            </svg>
            دخول
          </button>
          <span id="load" class="meta" style="display:none;margin-right:10px;">جاري...</span>
        </p>
      </form>

      <hr style="margin:20px 0;border:none;border-top:1px solid #eee;">
      <p class="meta" style="text-align:center;">
        <a href="/forgot-password">نسيت كلمة المرور؟</a>
        <span style="margin:0 8px;">|</span>
        ليس لديك حساب؟ <a href="/register${redirectParam}">سجل الآن</a>
      </p>
    </div>

    <script>
      async function signInWithGoogle() {
        try {
          const r = await fetch('/api/auth/sign-in/social', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              provider: 'google',
              callbackURL: new URLSearchParams(location.search).get('redirect') || '/'
            })
          });
          const d = await r.json();
          if (d.url) {
            window.location.href = d.url;
          } else if (d.redirect) {
            window.location.href = d.redirect;
          }
        } catch (e) {
          console.error('Google sign in error:', e);
          alert('حدث خطأ أثناء تسجيل الدخول بـ Google');
        }
      }

      document.getElementById('login-form').onsubmit = async e => {
        e.preventDefault();
        const f = e.target, err = document.getElementById('err'), load = document.getElementById('load');
        const btn = f.querySelector('button[type="submit"]');
        btn.disabled = true; load.style.display = 'inline'; err.style.display = 'none';

        try {
          const r = await fetch('/api/auth/sign-in/email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: f.email.value,
              password: f.password.value,
              rememberMe: f.remember.checked
            })
          });
          const d = await r.json();
          if (!r.ok) throw new Error(d.message || d.error || 'خطأ في تسجيل الدخول');

          // Store session info
          localStorage.setItem('user', JSON.stringify(d.user));
          location.href = new URLSearchParams(location.search).get('redirect') || '/';
        } catch (e) {
          err.textContent = e.message;
          err.style.display = 'block';
          btn.disabled = false;
          load.style.display = 'none';
        }
      };
    </script>
  `, { title: 'دخول | نقلة' });
}

export function registerPage(redirect?: string) {
  const redirectParam = redirect ? `?redirect=${encodeURIComponent(redirect)}` : '';

  return layout(`
    <div class="box" style="max-width:400px;margin:0 auto;">
      <h2 style="text-align:center;border:none;padding-bottom:0;">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:24px;height:24px;vertical-align:middle;">
          <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="M20 8v6M23 11h-6"/>
        </svg>
        إنشاء حساب جديد
      </h2>

      <div style="margin:20px 0;">
        <button onclick="signInWithGoogle()" class="btn" style="width:100%;background:#fff;color:#333;border:1px solid #ddd;justify-content:center;gap:10px;">
          <svg viewBox="0 0 24 24" width="18" height="18">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          التسجيل بحساب Google
        </button>
      </div>

      <div style="display:flex;align-items:center;gap:10px;margin:20px 0;">
        <div style="flex:1;height:1px;background:#ddd;"></div>
        <span class="meta">أو</span>
        <div style="flex:1;height:1px;background:#ddd;"></div>
      </div>

      <form id="reg-form">
        <p style="margin-bottom:12px;">
          <label>الاسم: <span style="color:#c00;">*</span></label>
          <input type="text" name="name" placeholder="اسمك الكامل" required>
        </p>
        <p style="margin-bottom:12px;">
          <label>البريد الإلكتروني: <span style="color:#c00;">*</span></label>
          <input type="email" name="email" placeholder="example@email.com" required dir="ltr">
        </p>
        <p style="margin-bottom:12px;">
          <label>رقم الجوال: <span class="meta">(اختياري)</span></label>
          <input type="tel" name="phone" placeholder="05xxxxxxxx" dir="ltr">
        </p>
        <p style="margin-bottom:18px;">
          <label>المدينة: <span class="meta">(اختياري)</span></label>
          <div style="position:relative;">
            <div style="display:flex;gap:8px;align-items:center;">
              <div style="flex:1;position:relative;">
                <input type="text" id="city-search" placeholder="ابحث عن مدينتك..." autocomplete="off" style="width:100%;">
                <input type="hidden" name="city" id="city-value">
                <div id="city-dropdown" style="display:none;position:absolute;top:100%;right:0;left:0;max-height:200px;overflow-y:auto;background:#fff;border:1px solid #ccc5bb;border-top:none;border-radius:0 0 4px 4px;z-index:100;box-shadow:0 4px 6px rgba(0,0,0,0.1);">
                  ${saudiCities.map(c => `<div class="city-option" data-city="${c}" style="padding:6px 10px;cursor:pointer;border-bottom:1px solid #f0ebe5;font-size:12px;">${c}</div>`).join('')}
                </div>
              </div>
              <button type="button" id="detect-location" class="btn" style="padding:8px 10px;white-space:nowrap;" title="تحديد موقعي">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px;">
                  <circle cx="12" cy="12" r="3"/><path d="M12 2v4m0 12v4m10-10h-4M6 12H2"/>
                </svg>
              </button>
            </div>
          </div>
        </p>
        <p style="margin-bottom:12px;margin-top:8px;">
          <label>كلمة المرور: <span style="color:#c00;">*</span></label>
          <input type="password" name="password" required>
        </p>
        <p style="margin-bottom:12px;">
          <label>تأكيد كلمة المرور: <span style="color:#c00;">*</span></label>
          <input type="password" name="password_confirm" required>
        </p>
        <p style="margin-bottom:12px;">
          <label style="display:flex;align-items:flex-start;gap:6px;cursor:pointer;">
            <input type="checkbox" name="terms" required style="width:auto;margin-top:3px;">
            <span>أوافق على <a href="/terms" target="_blank">شروط الاستخدام</a> و <a href="/privacy" target="_blank">سياسة الخصوصية</a></span>
          </label>
        </p>
        <div id="err" class="err" style="display:none;"></div>
        <p>
          <button type="submit" class="btn" style="width:100%;justify-content:center;">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:16px;height:16px;">
              <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="M20 8v6M23 11h-6"/>
            </svg>
            إنشاء حساب
          </button>
          <span id="load" class="meta" style="display:none;margin-right:10px;">جاري...</span>
        </p>
      </form>

      <hr style="margin:20px 0;border:none;border-top:1px solid #eee;">
      <p class="meta" style="text-align:center;">
        لديك حساب؟ <a href="/login${redirectParam}">تسجيل الدخول</a>
      </p>
    </div>

    <script>
      async function signInWithGoogle() {
        try {
          const r = await fetch('/api/auth/sign-in/social', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              provider: 'google',
              callbackURL: new URLSearchParams(location.search).get('redirect') || '/'
            })
          });
          const d = await r.json();
          if (d.url) {
            window.location.href = d.url;
          } else if (d.redirect) {
            window.location.href = d.redirect;
          }
        } catch (e) {
          console.error('Google sign in error:', e);
          alert('حدث خطأ أثناء تسجيل الدخول بـ Google');
        }
      }

      // City search functionality
      const citySearch = document.getElementById('city-search');
      const cityValue = document.getElementById('city-value');
      const cityDropdown = document.getElementById('city-dropdown');
      const cityOptions = document.querySelectorAll('.city-option');

      // Show dropdown on focus
      citySearch.addEventListener('focus', () => {
        cityDropdown.style.display = 'block';
        filterCities('');
      });

      // Hide dropdown on click outside
      document.addEventListener('click', (e) => {
        if (!e.target.closest('#city-search') && !e.target.closest('#city-dropdown')) {
          cityDropdown.style.display = 'none';
        }
      });

      // Filter cities on input
      citySearch.addEventListener('input', (e) => {
        filterCities(e.target.value);
        cityDropdown.style.display = 'block';
      });

      function filterCities(query) {
        const q = query.trim().toLowerCase();
        cityOptions.forEach(opt => {
          const city = opt.dataset.city;
          if (!q || city.includes(q)) {
            opt.style.display = 'block';
          } else {
            opt.style.display = 'none';
          }
        });
      }

      // Select city on click
      cityOptions.forEach(opt => {
        opt.addEventListener('click', () => {
          selectCity(opt.dataset.city);
          cityDropdown.style.display = 'none';
        });
        // Hover effect
        opt.addEventListener('mouseenter', () => opt.style.background = '#f5f0eb');
        opt.addEventListener('mouseleave', () => opt.style.background = '#fff');
      });

      function selectCity(city) {
        citySearch.value = city;
        cityValue.value = city;
      }

      // Saudi cities with approximate coordinates (from centralized module)
      const saudiCitiesCoords = ${JSON.stringify(cityCoordinates)};

      // Auto-detect location on page load
      detectLocation();

      // Detect location button click
      document.getElementById('detect-location').onclick = () => detectLocation(true);

      async function detectLocation(manual = false) {
        // List of IP geolocation APIs to try (free, no API key required)
        const geoApis = [
          { url: 'https://ip-api.com/json/?fields=lat,lon,city,country', parse: d => ({ lat: d.lat, lng: d.lon, country: d.country }) },
          { url: 'https://ipwho.is/', parse: d => ({ lat: d.latitude, lng: d.longitude, country: d.country }) },
          { url: 'https://freeipapi.com/api/json', parse: d => ({ lat: d.latitude, lng: d.longitude, country: d.countryName }) },
        ];

        for (const api of geoApis) {
          try {
            const response = await fetch(api.url);
            const data = await response.json();
            const geo = api.parse(data);

            if (geo.lat && geo.lng) {
              // Check if user is in Saudi Arabia region (roughly)
              const inSaudi = geo.lat >= 16 && geo.lat <= 33 && geo.lng >= 34 && geo.lng <= 56;

              if (inSaudi) {
                const nearestCity = findNearestCity(geo.lat, geo.lng);
                if (nearestCity) {
                  selectCity(nearestCity);
                  return;
                }
              } else if (geo.country && (geo.country.includes('Saudi') || geo.country === 'SA')) {
                // Country is Saudi but coords outside, default to Riyadh
                selectCity('الرياض');
                return;
              }
            }
          } catch (e) {
            // Try next API
            continue;
          }
        }

        // Fallback: try timezone-based detection
        try {
          const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
          if (timezone && (timezone.includes('Riyadh') || timezone.includes('Arabia'))) {
            if (!cityValue.value) {
              selectCity('الرياض');
            }
            return;
          }
        } catch (e) {}
      }

      function findNearestCity(lat, lng) {
        let nearest = null;
        let minDist = Infinity;

        for (const [city, coords] of Object.entries(saudiCitiesCoords)) {
          const dist = Math.sqrt(
            Math.pow(lat - coords.lat, 2) +
            Math.pow(lng - coords.lng, 2)
          );
          if (dist < minDist) {
            minDist = dist;
            nearest = city;
          }
        }

        // Only return if within reasonable distance (roughly 200km = ~1.8 degrees)
        return minDist < 1.8 ? nearest : null;
      }

      document.getElementById('reg-form').onsubmit = async e => {
        e.preventDefault();
        const f = e.target, err = document.getElementById('err'), load = document.getElementById('load');
        const btn = f.querySelector('button[type="submit"]');

        // Validate passwords match
        if (f.password.value !== f.password_confirm.value) {
          err.textContent = 'كلمتا المرور غير متطابقتين';
          err.style.display = 'block';
          return;
        }

        // Validate terms
        if (!f.terms.checked) {
          err.textContent = 'يجب الموافقة على شروط الاستخدام';
          err.style.display = 'block';
          return;
        }

        btn.disabled = true; load.style.display = 'inline'; err.style.display = 'none';

        try {
          const r = await fetch('/api/auth/sign-up/email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name: f.name.value,
              email: f.email.value,
              password: f.password.value,
              phone: f.phone.value || undefined,
              city: f.city.value || undefined
            })
          });
          const d = await r.json();
          if (!r.ok) throw new Error(d.message || d.error || 'خطأ في التسجيل');

          // Store session info
          localStorage.setItem('user', JSON.stringify(d.user));
          location.href = new URLSearchParams(location.search).get('redirect') || '/';
        } catch (e) {
          err.textContent = e.message;
          err.style.display = 'block';
          btn.disabled = false;
          load.style.display = 'none';
        }
      };
    </script>
  `, { title: 'تسجيل | نقلة' });
}
