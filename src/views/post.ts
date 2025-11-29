import { layout } from './layout';

export function postListingPage(categories: any[], user?: any) {
  return layout(`
    <div class="box" style="max-width:500px;margin:0 auto;">
      <h2>أضف إعلان</h2>
      <form id="post-form">
        <p><label>القسم: *</label><select name="category_id" required><option value="">اختر</option>${categories.map(c => `<option value="${c.id}">${c.name_ar}</option>`).join('')}</select></p>
        <p><label>العنوان: *</label><input type="text" name="title" required maxlength="200"></p>
        <p><label>الوصف:</label><textarea name="description" rows="4"></textarea></p>
        <p><label>السعر (ر.س):</label><input type="number" name="price" min="0" step="0.01" dir="ltr" style="width:150px;"></p>
        <p><label>نوع السعر:</label><select name="price_type" style="width:150px;"><option value="fixed">ثابت</option><option value="negotiable">قابل للتفاوض</option><option value="contact">اتصل</option></select></p>
        <p><label>المدينة: *</label><select name="city" required><option value="">اختر</option><option>الرياض</option><option>جدة</option><option>مكة</option><option>المدينة</option><option>الدمام</option><option>الخبر</option></select></p>
        <p><label>الحي:</label><input type="text" name="neighborhood"></p>
        <p><label>الصور:</label><input type="file" id="imgs" multiple accept="image/*" onchange="preview(this)"><br><span class="meta">5 صور كحد أقصى</span></p>
        <div id="prev" style="display:flex;gap:5px;flex-wrap:wrap;margin-top:5px;"></div>
        <div id="err" class="err" style="display:none;"></div>
        <p><button type="submit" class="btn">نشر</button> <span id="load" style="display:none;">جاري...</span></p>
      </form>
    </div>
    <script>
      const t = localStorage.getItem('token'); if (!t) location.href = '/login?redirect=/post';
      let uploaded = [];
      function preview(inp) {
        const c = document.getElementById('prev'); c.innerHTML = '';
        Array.from(inp.files).slice(0, 5).forEach((f, i) => {
          const r = new FileReader();
          r.onload = e => { uploaded[i] = e.target.result; c.innerHTML += '<img src="' + e.target.result + '" style="width:60px;height:60px;object-fit:cover;border:1px solid #ccc;">'; };
          r.readAsDataURL(f);
        });
      }
      document.getElementById('post-form').onsubmit = async e => {
        e.preventDefault();
        const f = e.target, err = document.getElementById('err'), load = document.getElementById('load');
        f.querySelector('button').disabled = true; load.style.display = 'inline'; err.style.display = 'none';
        try {
          const r = await fetch('/api/listings', { method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + t }, body: JSON.stringify({ category_id: +f.category_id.value, title: f.title.value, description: f.description.value, price: f.price.value ? +f.price.value : null, price_type: f.price_type.value, city: f.city.value, neighborhood: f.neighborhood.value, images: uploaded }) });
          const d = await r.json();
          if (!r.ok) throw new Error(d.error || 'خطأ');
          location.href = '/listing/' + d.listing.id;
        } catch (e) { err.textContent = e.message; err.style.display = 'block'; f.querySelector('button').disabled = false; load.style.display = 'none'; }
      };
    </script>
  `, { title: 'أضف إعلان | نقلة', user });
}
