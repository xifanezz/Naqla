import { layout } from './layout';

export function listingPage(data: { listing: any; user?: any }) {
  const { listing, user } = data;
  const price = listing.price ? new Intl.NumberFormat('ar-SA').format(listing.price) + ' ر.س' : 'اتصل للسعر';
  const images = listing.images?.length > 0 ? listing.images : [];
  const isOwner = user?.id === listing.user_id;

  return layout(`
    <p class="meta"><a href="/">الرئيسية</a> &gt; <a href="/category/${listing.category_slug}">${listing.category_name}</a> &gt; ${listing.title.substring(0, 30)}...</p>

    <div class="box">
      <h2>${listing.title}</h2>
      <table>
        <tr><th width="100">السعر</th><td><b class="price">${price}</b></td></tr>
        <tr><th>الموقع</th><td>${listing.city}${listing.neighborhood ? ' - ' + listing.neighborhood : ''}</td></tr>
        <tr><th>التاريخ</th><td>${new Date(listing.created_at).toLocaleDateString('ar-SA')}</td></tr>
        <tr><th>المشاهدات</th><td>${listing.views_count || 0}</td></tr>
      </table>

      ${images.length > 0 ? `
        <p style="margin-top:10px;"><b>الصور:</b></p>
        <p>${images.map((img: string) => `<a href="${img}" target="_blank"><img src="${img}" style="max-width:100px;max-height:80px;border:1px solid #ccc;margin-left:5px;"></a>`).join('')}</p>
      ` : ''}

      ${listing.description ? `<p style="margin-top:10px;"><b>الوصف:</b><br>${listing.description}</p>` : ''}

      <hr style="margin:15px 0;border:none;border-top:1px solid #ddd;">
      <p><b>البائع:</b> ${listing.user_name}</p>

      ${!isOwner ? `
        <p style="margin-top:10px;">
          <button onclick="startChat(${listing.id},${listing.user_id})" class="btn">مراسلة</button>
          <a href="tel:${listing.user_phone}" class="btn" style="background:#060;">اتصال</a>
        </p>
      ` : `
        <p style="margin-top:10px;">
          <a href="/listing/${listing.id}/edit" class="btn">تعديل</a>
          <button onclick="del(${listing.id})" class="btn" style="background:#900;">حذف</button>
        </p>
      `}
    </div>

    <div class="warn">نصيحة: قابل البائع في مكان عام وافحص المنتج قبل الدفع</div>

    <div class="box">
      <b>مشاركة:</b>
      <a href="https://wa.me/?text=${encodeURIComponent(listing.title + ' https://buyervoice.net/listing/' + listing.id)}" target="_blank">واتساب</a> |
      <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(listing.title + ' https://buyervoice.net/listing/' + listing.id)}" target="_blank">تويتر</a> |
      <a href="#" onclick="navigator.clipboard.writeText(location.href);alert('تم النسخ');return false;">نسخ</a>
    </div>

    <script>
      function startChat(lid, sid) {
        const t = localStorage.getItem('token');
        if (!t) { location.href = '/login?redirect=/listing/' + lid; return; }
        fetch('/api/chat/conversations', { method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + t }, body: JSON.stringify({ listing_id: lid, seller_id: sid }) })
          .then(r => r.json()).then(d => { if (d.conversation) location.href = '/chat/' + d.conversation.id; });
      }
      function del(id) { if (confirm('حذف؟')) fetch('/api/listings/' + id, { method: 'DELETE', headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') } }).then(() => location.href = '/my-listings'); }
    </script>
  `, { title: listing.title + ' | نقلة', user });
}
