import { layout } from './layout';
import { saudiCities } from '../data/cities';

// Categories data (same as home.ts)
const mainCategories = [
  { id: 'community', name_ar: 'مجتمع', icon: 'users' },
  { id: 'for-sale', name_ar: 'للبيع', icon: 'shopping-cart' },
  { id: 'gigs', name_ar: 'أعمال مؤقتة', icon: 'briefcase' },
  { id: 'housing', name_ar: 'عقارات', icon: 'home' },
  { id: 'jobs', name_ar: 'وظائف', icon: 'briefcase' },
  { id: 'services', name_ar: 'خدمات', icon: 'settings' },
];

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
  ],
  'for-sale': [
    { id: 'cars-trucks', name_ar: 'سيارات وشاحنات', slug: 'cars-trucks' },
    { id: 'cell-phones', name_ar: 'جوالات وأجهزة ذكية', slug: 'cell-phones' },
    { id: 'computers', name_ar: 'أجهزة كمبيوتر ولابتوب', slug: 'computers' },
    { id: 'electronics', name_ar: 'إلكترونيات', slug: 'electronics' },
    { id: 'furniture', name_ar: 'أثاث منزلي ومكتبي', slug: 'furniture' },
    { id: 'appliances', name_ar: 'أجهزة منزلية', slug: 'appliances' },
    { id: 'ac-cooling', name_ar: 'مكيفات وتبريد', slug: 'ac-cooling' },
    { id: 'clothing', name_ar: 'ملابس وأزياء', slug: 'clothing' },
    { id: 'watches', name_ar: 'ساعات', slug: 'watches' },
    { id: 'perfumes', name_ar: 'عطور', slug: 'perfumes' },
    { id: 'bags', name_ar: 'حقائب ومحافظ', slug: 'bags' },
    { id: 'jewelry', name_ar: 'مجوهرات وساعات', slug: 'jewelry' },
    { id: 'baby-kids', name_ar: 'مستلزمات الأطفال', slug: 'baby-kids' },
    { id: 'toys-games', name_ar: 'ألعاب أطفال وبلايستيشن', slug: 'toys-games' },
    { id: 'sporting', name_ar: 'مستلزمات رياضية', slug: 'sporting' },
    { id: 'camping', name_ar: 'مستلزمات رحلات وتخييم', slug: 'camping' },
    { id: 'auto-parts', name_ar: 'قطع غيار سيارات', slug: 'auto-parts' },
    { id: 'motorcycles', name_ar: 'دراجات نارية', slug: 'motorcycles' },
    { id: 'bikes', name_ar: 'دراجات هوائية', slug: 'bikes' },
    { id: 'boats', name_ar: 'قوارب ويخوت', slug: 'boats' },
    { id: 'kitchen', name_ar: 'أدوات مطبخ', slug: 'kitchen' },
    { id: 'tv-audio', name_ar: 'تلفزيونات وصوتيات', slug: 'tv-audio' },
    { id: 'photo-video', name_ar: 'كاميرات ومعدات تصوير', slug: 'photo-video' },
    { id: 'music-instruments', name_ar: 'آلات موسيقية', slug: 'music-instruments' },
    { id: 'books', name_ar: 'كتب ومجلات', slug: 'books' },
    { id: 'tools', name_ar: 'عدد وأدوات', slug: 'tools' },
    { id: 'materials', name_ar: 'مواد بناء وتشطيب', slug: 'materials' },
    { id: 'garden', name_ar: 'حدائق ونباتات', slug: 'garden' },
    { id: 'antiques', name_ar: 'تحف وأنتيكات', slug: 'antiques' },
    { id: 'arts-crafts', name_ar: 'أعمال يدوية وحرفية', slug: 'arts-crafts' },
    { id: 'beauty-health', name_ar: 'مستحضرات تجميل وعناية', slug: 'beauty-health' },
    { id: 'free', name_ar: 'أغراض مجانية', slug: 'free' },
    { id: 'wanted', name_ar: 'مطلوب شراء', slug: 'wanted' },
  ],
  'gigs': [
    { id: 'computer-gigs', name_ar: 'خدمات كمبيوتر وتقنية', slug: 'computer-gigs' },
    { id: 'creative-gigs', name_ar: 'أعمال إبداعية وتصميم', slug: 'creative-gigs' },
    { id: 'domestic-gigs', name_ar: 'أعمال منزلية', slug: 'domestic-gigs' },
    { id: 'event-gigs', name_ar: 'تنظيم فعاليات وحفلات', slug: 'event-gigs' },
    { id: 'labor-gigs', name_ar: 'أعمال يدوية وصيانة', slug: 'labor-gigs' },
    { id: 'delivery-gigs', name_ar: 'توصيل طلبات', slug: 'delivery-gigs' },
    { id: 'photography-gigs', name_ar: 'تصوير فوتو وفيديو', slug: 'photography-gigs' },
    { id: 'marketing-gigs', name_ar: 'تسويق وإعلان', slug: 'marketing-gigs' },
    { id: 'teaching-gigs', name_ar: 'دروس خصوصية', slug: 'teaching-gigs' },
    { id: 'writing-gigs', name_ar: 'كتابة وترجمة', slug: 'writing-gigs' },
  ],
  'housing': [
    { id: 'apartments', name_ar: 'شقق للإيجار', slug: 'apartments' },
    { id: 'apartments-sale', name_ar: 'شقق للبيع', slug: 'apartments-sale' },
    { id: 'houses-rent', name_ar: 'فلل وبيوت للإيجار', slug: 'houses-rent' },
    { id: 'villas-sale', name_ar: 'فلل للبيع', slug: 'villas-sale' },
    { id: 'rooms', name_ar: 'غرف للإيجار', slug: 'rooms' },
    { id: 'land', name_ar: 'أراضي للبيع', slug: 'land' },
    { id: 'office-commercial', name_ar: 'مكاتب ومحلات تجارية', slug: 'office-commercial' },
    { id: 'warehouses', name_ar: 'مستودعات ومخازن', slug: 'warehouses' },
    { id: 'vacation-rentals', name_ar: 'شاليهات واستراحات', slug: 'vacation-rentals' },
    { id: 'roommates', name_ar: 'شريك سكن', slug: 'roommates' },
    { id: 'furnished', name_ar: 'سكن مفروش', slug: 'furnished' },
    { id: 'housing-wanted', name_ar: 'مطلوب سكن', slug: 'housing-wanted' },
  ],
  'jobs': [
    { id: 'accounting', name_ar: 'محاسبة ومالية', slug: 'accounting' },
    { id: 'admin-office', name_ar: 'إدارة ومكتبية', slug: 'admin-office' },
    { id: 'arch-engineering', name_ar: 'هندسة وعمارة', slug: 'arch-engineering' },
    { id: 'art-design', name_ar: 'تصميم جرافيك', slug: 'art-design' },
    { id: 'customer-service', name_ar: 'خدمة عملاء', slug: 'customer-service' },
    { id: 'drivers', name_ar: 'سائقين', slug: 'drivers' },
    { id: 'education', name_ar: 'تعليم وتدريس', slug: 'education' },
    { id: 'food-hospitality', name_ar: 'مطاعم وضيافة', slug: 'food-hospitality' },
    { id: 'general-labor', name_ar: 'عمالة وحرف', slug: 'general-labor' },
    { id: 'healthcare', name_ar: 'طب وتمريض', slug: 'healthcare' },
    { id: 'construction', name_ar: 'بناء ومقاولات', slug: 'construction' },
    { id: 'oil-gas', name_ar: 'نفط وغاز', slug: 'oil-gas' },
    { id: 'sales', name_ar: 'مبيعات وتسويق', slug: 'sales' },
    { id: 'software', name_ar: 'برمجة وتطوير', slug: 'software' },
    { id: 'security', name_ar: 'أمن وحراسة', slug: 'security' },
    { id: 'part-time', name_ar: 'دوام جزئي', slug: 'part-time' },
    { id: 'remote', name_ar: 'عمل عن بعد', slug: 'remote' },
  ],
  'services': [
    { id: 'automotive-services', name_ar: 'صيانة وخدمات سيارات', slug: 'automotive-services' },
    { id: 'ac-services', name_ar: 'صيانة مكيفات', slug: 'ac-services' },
    { id: 'skilled-trade', name_ar: 'سباكة وكهرباء وصيانة', slug: 'skilled-trade' },
    { id: 'household-services', name_ar: 'خدمات منزلية وتنظيف', slug: 'household-services' },
    { id: 'labor-moving', name_ar: 'نقل عفش وأثاث', slug: 'labor-moving' },
    { id: 'cell-mobile-services', name_ar: 'صيانة جوالات', slug: 'cell-mobile-services' },
    { id: 'computer-services', name_ar: 'صيانة كمبيوتر وشبكات', slug: 'computer-services' },
    { id: 'lessons', name_ar: 'دروس خصوصية وتعليم', slug: 'lessons' },
    { id: 'photography-services', name_ar: 'تصوير فوتو وفيديو', slug: 'photography-services' },
    { id: 'creative-services', name_ar: 'تصميم وإبداع', slug: 'creative-services' },
    { id: 'event-services', name_ar: 'تنظيم مناسبات وأفراح', slug: 'event-services' },
    { id: 'catering-services', name_ar: 'ضيافة وطبخ', slug: 'catering-services' },
    { id: 'travel-services', name_ar: 'سفر وسياحة وتأشيرات', slug: 'travel-services' },
    { id: 'gardening-services', name_ar: 'تنسيق حدائق', slug: 'gardening-services' },
    { id: 'security-systems', name_ar: 'كاميرات وأنظمة أمان', slug: 'security-systems' },
    { id: 'renovation-services', name_ar: 'ترميم وتجديد', slug: 'renovation-services' },
    { id: 'delivery-services', name_ar: 'خدمات توصيل', slug: 'delivery-services' },
  ],
};

export function postListingPage(categories: any[], user?: any) {
  // If not logged in, show login prompt
  if (!user) {
    return layout(`
      <div class="box" style="max-width:400px;margin:40px auto;text-align:center;">
        <svg viewBox="0 0 24 24" fill="none" stroke="#5f4a82" stroke-width="2" style="width:64px;height:64px;margin-bottom:16px;">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
        </svg>
        <h2 style="border:none;padding:0;margin-bottom:12px;">سجل دخولك أولاً</h2>
        <p class="meta" style="margin-bottom:20px;">يجب تسجيل الدخول لإضافة إعلان جديد</p>
        <a href="/login?redirect=/post" class="btn" style="color:#fff;">تسجيل الدخول</a>
        <p class="meta" style="margin-top:12px;">ليس لديك حساب؟ <a href="/register?redirect=/post">سجل الآن</a></p>
      </div>
    `, { title: 'أضف إعلان | نقلة' });
  }

  const subcatsJson = JSON.stringify(subcategoriesMap);
  const citiesJson = JSON.stringify(saudiCities);
  const mainCatsJson = JSON.stringify(mainCategories);

  return layout(`
    <style>
      .post-container {
        max-width: 600px;
        margin: 0 auto;
      }

      /* Progress steps */
      .steps {
        display: flex;
        justify-content: space-between;
        margin-bottom: 24px;
        position: relative;
      }
      .steps::before {
        content: '';
        position: absolute;
        top: 15px;
        left: 15%;
        right: 15%;
        height: 2px;
        background: #ddd;
        z-index: 0;
      }
      .step {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        z-index: 1;
      }
      .step-num {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: #ddd;
        color: #666;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        margin-bottom: 6px;
      }
      .step.active .step-num {
        background: #5f4a82;
        color: #fff;
      }
      .step.done .step-num {
        background: #28a745;
        color: #fff;
      }
      .step-label {
        font-size: 11px;
        color: #888;
      }
      .step.active .step-label {
        color: #5f4a82;
        font-weight: 500;
      }

      /* Form steps */
      .form-step {
        display: none;
      }
      .form-step.active {
        display: block;
      }

      /* Category picker */
      .cat-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
        margin-bottom: 20px;
      }
      .cat-item {
        padding: 16px 12px;
        border: 2px solid #eee;
        border-radius: 8px;
        text-align: center;
        cursor: pointer;
        transition: all 0.15s;
      }
      .cat-item:hover {
        border-color: #5f4a82;
        background: #faf8fc;
      }
      .cat-item.selected {
        border-color: #5f4a82;
        background: #5f4a82;
        color: #fff;
      }
      .cat-item svg {
        width: 28px;
        height: 28px;
        margin-bottom: 6px;
        stroke: currentColor;
      }
      .cat-item span {
        display: block;
        font-size: 13px;
        font-weight: 500;
      }

      /* Subcategory list */
      .subcat-list {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 8px;
        max-height: 300px;
        overflow-y: auto;
      }
      .subcat-item {
        padding: 10px 12px;
        border: 1px solid #eee;
        border-radius: 6px;
        cursor: pointer;
        font-size: 13px;
        transition: all 0.15s;
      }
      .subcat-item:hover {
        border-color: #5f4a82;
        background: #faf8fc;
      }
      .subcat-item.selected {
        border-color: #5f4a82;
        background: #5f4a82;
        color: #fff;
      }

      /* AI suggestion */
      .ai-suggest {
        background: #e8f4e8;
        border: 1px solid #c3e6c3;
        border-radius: 6px;
        padding: 10px 14px;
        margin-bottom: 16px;
        display: none;
        align-items: center;
        gap: 10px;
      }
      .ai-suggest.show {
        display: flex;
      }
      .ai-suggest svg {
        width: 20px;
        height: 20px;
        stroke: #28a745;
        flex-shrink: 0;
      }
      .ai-suggest-text {
        flex: 1;
        font-size: 13px;
      }
      .ai-suggest-btn {
        background: #28a745;
        color: #fff;
        border: none;
        padding: 6px 12px;
        border-radius: 4px;
        font-size: 12px;
        cursor: pointer;
      }

      /* Contact options */
      .contact-options {
        display: flex;
        gap: 10px;
        margin-bottom: 16px;
      }
      .contact-opt {
        flex: 1;
        padding: 12px;
        border: 2px solid #eee;
        border-radius: 8px;
        text-align: center;
        cursor: pointer;
        transition: all 0.15s;
      }
      .contact-opt:hover {
        border-color: #5f4a82;
      }
      .contact-opt.selected {
        border-color: #5f4a82;
        background: #5f4a82;
        color: #fff;
      }
      .contact-opt svg {
        width: 24px;
        height: 24px;
        margin-bottom: 4px;
      }
      .contact-opt span {
        display: block;
        font-size: 12px;
      }

      /* Image upload */
      .img-upload {
        border: 2px dashed #ddd;
        border-radius: 8px;
        padding: 30px;
        text-align: center;
        cursor: pointer;
        margin-bottom: 16px;
        transition: all 0.15s;
      }
      .img-upload:hover {
        border-color: #5f4a82;
        background: #faf8fc;
      }
      .img-upload svg {
        width: 48px;
        height: 48px;
        stroke: #888;
        margin-bottom: 10px;
      }
      .img-upload p {
        color: #666;
        margin: 0;
      }
      .img-upload small {
        color: #999;
        font-size: 12px;
      }

      .img-preview {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 8px;
        margin-bottom: 16px;
      }
      .img-thumb {
        position: relative;
        aspect-ratio: 1;
        border-radius: 6px;
        overflow: hidden;
      }
      .img-thumb img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .img-thumb .remove {
        position: absolute;
        top: 4px;
        left: 4px;
        width: 20px;
        height: 20px;
        background: rgba(0,0,0,0.6);
        color: #fff;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
      }

      /* Draft banner */
      .draft-banner {
        background: #fff3cd;
        border: 1px solid #ffc107;
        border-radius: 8px;
        padding: 12px 16px;
        margin-bottom: 20px;
        display: none;
        align-items: center;
        justify-content: space-between;
      }
      .draft-banner.show {
        display: flex;
      }
      .draft-banner p {
        margin: 0;
        font-size: 14px;
      }
      .draft-banner .btns {
        display: flex;
        gap: 8px;
      }
      .draft-banner button {
        padding: 6px 12px;
        border-radius: 4px;
        border: none;
        cursor: pointer;
        font-size: 13px;
      }
      .draft-banner .continue {
        background: #5f4a82;
        color: #fff;
      }
      .draft-banner .discard {
        background: #eee;
        color: #333;
      }

      /* Navigation buttons */
      .form-nav {
        display: flex;
        justify-content: space-between;
        margin-top: 24px;
        padding-top: 16px;
        border-top: 1px solid #eee;
      }
      .btn-next, .btn-prev, .btn-submit {
        padding: 12px 24px;
        border-radius: 6px;
        border: none;
        cursor: pointer;
        font-size: 14px;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 6px;
      }
      .btn-next, .btn-submit {
        background: #5f4a82;
        color: #fff;
      }
      .btn-next:disabled, .btn-submit:disabled {
        background: #ccc;
        cursor: not-allowed;
      }
      .btn-prev {
        background: #eee;
        color: #333;
      }

      /* Tips box */
      .tips-box {
        background: #f0f7ff;
        border: 1px solid #c8e0ff;
        border-radius: 6px;
        padding: 12px;
        margin-top: 16px;
        font-size: 13px;
      }
      .tips-box h4 {
        margin: 0 0 8px;
        font-size: 13px;
        color: #0066cc;
      }
      .tips-box ul {
        margin: 0;
        padding-right: 18px;
      }
      .tips-box li {
        margin-bottom: 4px;
        color: #444;
      }

      /* Preview */
      .preview-card {
        border: 1px solid #ddd;
        border-radius: 8px;
        overflow: hidden;
      }
      .preview-images {
        height: 200px;
        background: #f5f5f5;
        display: flex;
        overflow-x: auto;
        gap: 2px;
      }
      .preview-images img {
        height: 100%;
        width: auto;
      }
      .preview-images .no-img {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #999;
      }
      .preview-body {
        padding: 16px;
      }
      .preview-title {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 8px;
      }
      .preview-price {
        font-size: 20px;
        color: #28a745;
        font-weight: 600;
        margin-bottom: 12px;
      }
      .preview-desc {
        font-size: 14px;
        color: #555;
        white-space: pre-wrap;
        line-height: 1.6;
      }
      .preview-meta {
        display: flex;
        gap: 16px;
        margin-top: 12px;
        padding-top: 12px;
        border-top: 1px solid #eee;
        font-size: 13px;
        color: #666;
      }

      @media (max-width: 500px) {
        .cat-grid {
          grid-template-columns: repeat(2, 1fr);
        }
        .subcat-list {
          grid-template-columns: 1fr;
        }
        .img-preview {
          grid-template-columns: repeat(3, 1fr);
        }
      }
    </style>

    <div class="post-container">
      <!-- Draft recovery banner -->
      <div class="draft-banner" id="draft-banner">
        <p>📝 لديك مسودة محفوظة، هل تريد المتابعة؟</p>
        <div class="btns">
          <button class="continue" onclick="loadDraft()">متابعة</button>
          <button class="discard" onclick="discardDraft()">البدء من جديد</button>
        </div>
      </div>

      <div class="box">
        <!-- Progress steps -->
        <div class="steps">
          <div class="step active" data-step="1">
            <div class="step-num">1</div>
            <span class="step-label">القسم</span>
          </div>
          <div class="step" data-step="2">
            <div class="step-num">2</div>
            <span class="step-label">التفاصيل</span>
          </div>
          <div class="step" data-step="3">
            <div class="step-num">3</div>
            <span class="step-label">الصور</span>
          </div>
          <div class="step" data-step="4">
            <div class="step-num">4</div>
            <span class="step-label">المعاينة</span>
          </div>
        </div>

        <!-- Step 1: Category Selection -->
        <div class="form-step active" data-step="1">
          <h3 style="margin-bottom:16px;">اختر القسم الرئيسي</h3>

          <div class="cat-grid" id="main-cats">
            ${mainCategories.map(cat => `
              <div class="cat-item" data-cat="${cat.id}">
                ${getCategoryIcon(cat.id)}
                <span>${cat.name_ar}</span>
              </div>
            `).join('')}
          </div>

          <div id="subcats-container" style="display:none;">
            <h3 style="margin-bottom:16px;">اختر القسم الفرعي</h3>
            <div class="subcat-list" id="subcats"></div>
          </div>

          <div class="form-nav">
            <div></div>
            <button class="btn-next" id="step1-next" disabled>التالي ←</button>
          </div>
        </div>

        <!-- Step 2: Details -->
        <div class="form-step" data-step="2">
          <h3 style="margin-bottom:16px;">تفاصيل الإعلان</h3>

          <!-- AI suggestion -->
          <div class="ai-suggest" id="ai-suggest">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="2">
              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/>
              <path d="m9 12 2 2 4-4"/>
            </svg>
            <span class="ai-suggest-text" id="ai-suggest-text"></span>
            <button class="ai-suggest-btn" onclick="applySuggestion()">تطبيق</button>
          </div>

          <p>
            <label>العنوان: *</label>
            <input type="text" id="title" maxlength="200" placeholder="مثال: ايفون 15 برو ماكس 256 قيقا" required>
          </p>

          <p>
            <label>الوصف:</label>
            <textarea id="description" rows="6" placeholder="اكتب وصف مفصل للإعلان..."></textarea>
          </p>

          <div id="tips-box" class="tips-box" style="display:none;">
            <h4>💡 نصائح لإعلان ناجح:</h4>
            <ul id="tips-list"></ul>
          </div>

          <div style="display:flex;gap:12px;">
            <p style="flex:1;">
              <label>السعر (ر.س):</label>
              <input type="number" id="price" min="0" step="1" dir="ltr" placeholder="0">
            </p>
            <p style="flex:1;">
              <label>نوع السعر:</label>
              <select id="price_type">
                <option value="fixed">ثابت</option>
                <option value="negotiable">قابل للتفاوض</option>
                <option value="contact">اتصل للسعر</option>
              </select>
            </p>
          </div>

          <div style="display:flex;gap:12px;">
            <p style="flex:1;">
              <label>المدينة: *</label>
              <select id="city" required>
                <option value="">اختر المدينة</option>
                ${saudiCities.map(c => `<option value="${c}"${user?.city === c ? ' selected' : ''}>${c}</option>`).join('')}
              </select>
            </p>
            <p style="flex:1;">
              <label>الحي:</label>
              <input type="text" id="neighborhood" placeholder="اختياري">
            </p>
          </div>

          <h4 style="margin:20px 0 12px;">معلومات التواصل</h4>

          <p>
            <label>رقم الجوال:</label>
            <input type="tel" id="contact_phone" dir="ltr" placeholder="05xxxxxxxx" value="${user.phone || ''}">
            <small style="color:#888;">سيظهر هذا الرقم للمشترين</small>
          </p>

          <label style="margin-bottom:8px;display:block;">طريقة التواصل المفضلة:</label>
          <div class="contact-options">
            <div class="contact-opt selected" data-method="both">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>الكل</span>
            </div>
            <div class="contact-opt" data-method="whatsapp">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>واتساب</span>
            </div>
            <div class="contact-opt" data-method="call">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>اتصال</span>
            </div>
          </div>

          <div class="form-nav">
            <button class="btn-prev" onclick="goToStep(1)">→ السابق</button>
            <button class="btn-next" id="step2-next">التالي ←</button>
          </div>
        </div>

        <!-- Step 3: Images -->
        <div class="form-step" data-step="3">
          <h3 style="margin-bottom:16px;">أضف الصور</h3>
          <p style="color:#666;margin-bottom:16px;">الصور تزيد من فرصة بيع إعلانك. أضف حتى 30 صورة.</p>

          <div class="img-upload" id="img-upload" onclick="document.getElementById('img-input').click()">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21 15 16 10 5 21"/>
            </svg>
            <p>اضغط لاختيار الصور</p>
            <small>أو اسحب الصور هنا</small>
          </div>
          <input type="file" id="img-input" multiple accept="image/*" style="display:none;" onchange="handleImages(this.files)">

          <div class="img-preview" id="img-preview"></div>

          <p style="color:#888;font-size:13px;">
            ✓ سيتم ضغط الصور تلقائياً &nbsp;
            ✓ سيتم إضافة علامة نقلة المائية
          </p>

          <div class="form-nav">
            <button class="btn-prev" onclick="goToStep(2)">→ السابق</button>
            <button class="btn-next" onclick="goToStep(4)">معاينة ←</button>
          </div>
        </div>

        <!-- Step 4: Preview & Submit -->
        <div class="form-step" data-step="4">
          <h3 style="margin-bottom:16px;">معاينة الإعلان</h3>

          <div class="preview-card">
            <div class="preview-images" id="preview-images">
              <div class="no-img">لا توجد صور</div>
            </div>
            <div class="preview-body">
              <div class="preview-title" id="preview-title">-</div>
              <div class="preview-price" id="preview-price">-</div>
              <div class="preview-desc" id="preview-desc">-</div>
              <div class="preview-meta">
                <span id="preview-city">-</span>
                <span id="preview-contact">-</span>
              </div>
            </div>
          </div>

          <div id="submit-error" class="err" style="display:none;margin-top:16px;"></div>

          <div class="form-nav">
            <button class="btn-prev" onclick="goToStep(3)">→ السابق</button>
            <button class="btn-submit" id="submit-btn" onclick="submitListing()">
              نشر الإعلان
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px;height:18px;">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <script>
      // State - pre-filled with user's phone and city from profile
      const state = {
        step: 1,
        category: null,
        subcategory: null,
        subcategoryId: null,
        title: '',
        description: '',
        price: null,
        priceType: 'fixed',
        city: '${user?.city || ''}',
        neighborhood: '',
        contactPhone: '${user?.phone || ''}',
        contactMethod: 'both',
        images: []
      };

      const subcategories = ${subcatsJson};
      const mainCategories = ${mainCatsJson};

      // Keywords for auto-detection
      const keywordMap = {
        'ايفون|آيفون|iphone|سامسونج|جالكسي|جوال|موبايل': { cat: 'for-sale', sub: 'cell-phones' },
        'تويوتا|كامري|لاندكروزر|هايلكس|نيسان|هونداي|كيا|فورد|شيفروليه|سيارة': { cat: 'for-sale', sub: 'cars-trucks' },
        'شقة|فيلا|فله|ارض|أرض|عمارة|استراحة|شاليه': { cat: 'housing', sub: 'apartments' },
        'وظيفة|مطلوب موظف|راتب|دوام': { cat: 'jobs', sub: 'admin-office' },
        'مكيف|تكييف|سبليت': { cat: 'for-sale', sub: 'ac-cooling' },
        'كنب|سرير|غرفة نوم|اثاث|أثاث': { cat: 'for-sale', sub: 'furniture' },
        'نقل عفش|نقل اثاث': { cat: 'services', sub: 'labor-moving' },
        'صيانة|تصليح|فني': { cat: 'services', sub: 'skilled-trade' },
      };

      // Debounce for draft saving
      let saveTimeout = null;

      // Initialize
      document.addEventListener('DOMContentLoaded', () => {
        checkDraft();
        setupEventListeners();
      });

      function setupEventListeners() {
        // Main category selection
        document.querySelectorAll('#main-cats .cat-item').forEach(el => {
          el.addEventListener('click', () => selectMainCategory(el.dataset.cat));
        });

        // Title input - auto detect category
        let titleTimeout;
        document.getElementById('title').addEventListener('input', (e) => {
          state.title = e.target.value;
          clearTimeout(titleTimeout);
          titleTimeout = setTimeout(() => detectCategory(e.target.value), 300);
          saveDraft();
        });

        // Other inputs
        document.getElementById('description').addEventListener('input', (e) => {
          state.description = e.target.value;
          saveDraft();
        });
        document.getElementById('price').addEventListener('input', (e) => {
          state.price = e.target.value ? parseFloat(e.target.value) : null;
          saveDraft();
        });
        document.getElementById('price_type').addEventListener('change', (e) => {
          state.priceType = e.target.value;
          saveDraft();
        });
        document.getElementById('city').addEventListener('change', (e) => {
          state.city = e.target.value;
          saveDraft();
        });
        document.getElementById('neighborhood').addEventListener('input', (e) => {
          state.neighborhood = e.target.value;
          saveDraft();
        });
        document.getElementById('contact_phone').addEventListener('input', (e) => {
          state.contactPhone = e.target.value;
          saveDraft();
        });

        // Contact method selection
        document.querySelectorAll('.contact-opt').forEach(el => {
          el.addEventListener('click', () => {
            document.querySelectorAll('.contact-opt').forEach(o => o.classList.remove('selected'));
            el.classList.add('selected');
            state.contactMethod = el.dataset.method;
            saveDraft();
          });
        });

        // Step 2 next button
        document.getElementById('step2-next').addEventListener('click', () => {
          if (validateStep2()) goToStep(3);
        });
      }

      function selectMainCategory(catId) {
        state.category = catId;
        state.subcategory = null;
        state.subcategoryId = null;

        // Update UI
        document.querySelectorAll('#main-cats .cat-item').forEach(el => {
          el.classList.toggle('selected', el.dataset.cat === catId);
        });

        // Show subcategories
        const subs = subcategories[catId] || [];
        const container = document.getElementById('subcats-container');
        const list = document.getElementById('subcats');

        list.innerHTML = subs.map(s =>
          '<div class="subcat-item" data-sub="' + s.slug + '" data-id="' + s.id + '">' + s.name_ar + '</div>'
        ).join('');

        list.querySelectorAll('.subcat-item').forEach(el => {
          el.addEventListener('click', () => selectSubcategory(el.dataset.sub, el.dataset.id));
        });

        container.style.display = 'block';
        document.getElementById('step1-next').disabled = true;
        saveDraft();
      }

      function selectSubcategory(subSlug, subId) {
        state.subcategory = subSlug;
        state.subcategoryId = subId;

        document.querySelectorAll('#subcats .subcat-item').forEach(el => {
          el.classList.toggle('selected', el.dataset.sub === subSlug);
        });

        document.getElementById('step1-next').disabled = false;
        document.getElementById('step1-next').onclick = () => goToStep(2);
        saveDraft();
      }

      function detectCategory(title) {
        if (!title || title.length < 3) {
          document.getElementById('ai-suggest').classList.remove('show');
          return;
        }

        const lowerTitle = title.toLowerCase();

        for (const [pattern, result] of Object.entries(keywordMap)) {
          const regex = new RegExp(pattern, 'i');
          if (regex.test(lowerTitle)) {
            // Find the subcategory name
            const subs = subcategories[result.cat] || [];
            const sub = subs.find(s => s.slug === result.sub);
            const mainCat = mainCategories.find(c => c.id === result.cat);

            if (sub && mainCat) {
              document.getElementById('ai-suggest-text').textContent =
                'يبدو أن هذا الإعلان في قسم: ' + mainCat.name_ar + ' > ' + sub.name_ar;
              document.getElementById('ai-suggest').classList.add('show');
              window.suggestedCat = result.cat;
              window.suggestedSub = result.sub;
              window.suggestedSubId = sub.id;
              return;
            }
          }
        }

        document.getElementById('ai-suggest').classList.remove('show');
      }

      function applySuggestion() {
        if (window.suggestedCat && window.suggestedSub) {
          selectMainCategory(window.suggestedCat);
          setTimeout(() => {
            selectSubcategory(window.suggestedSub, window.suggestedSubId);
          }, 100);
          document.getElementById('ai-suggest').classList.remove('show');
        }
      }

      function goToStep(step) {
        state.step = step;

        // Update step indicators
        document.querySelectorAll('.step').forEach(el => {
          const s = parseInt(el.dataset.step);
          el.classList.remove('active', 'done');
          if (s === step) el.classList.add('active');
          else if (s < step) el.classList.add('done');
        });

        // Show/hide form steps
        document.querySelectorAll('.form-step').forEach(el => {
          el.classList.toggle('active', parseInt(el.dataset.step) === step);
        });

        // Update preview if going to step 4
        if (step === 4) updatePreview();

        saveDraft();
      }

      function validateStep2() {
        const title = document.getElementById('title').value.trim();
        const city = document.getElementById('city').value;

        if (!title) {
          alert('الرجاء إدخال عنوان الإعلان');
          return false;
        }
        if (!city) {
          alert('الرجاء اختيار المدينة');
          return false;
        }
        return true;
      }

      // Image handling
      async function handleImages(files) {
        const maxImages = 30;
        const currentCount = state.images.length;
        const remaining = maxImages - currentCount;

        if (remaining <= 0) {
          alert('الحد الأقصى 30 صورة');
          return;
        }

        const filesToProcess = Array.from(files).slice(0, remaining);

        for (const file of filesToProcess) {
          try {
            const compressed = await compressImage(file);
            const watermarked = await addWatermark(compressed);
            state.images.push(watermarked);
          } catch (err) {
            console.error('Error processing image:', err);
          }
        }

        updateImagePreview();
        saveDraft();
      }

      function compressImage(file) {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
              const canvas = document.createElement('canvas');
              const maxSize = 1200;
              let width = img.width;
              let height = img.height;

              if (width > height && width > maxSize) {
                height *= maxSize / width;
                width = maxSize;
              } else if (height > maxSize) {
                width *= maxSize / height;
                height = maxSize;
              }

              canvas.width = width;
              canvas.height = height;

              const ctx = canvas.getContext('2d');
              ctx.drawImage(img, 0, 0, width, height);

              resolve(canvas.toDataURL('image/jpeg', 0.8));
            };
            img.onerror = reject;
            img.src = e.target.result;
          };
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      }

      function addWatermark(dataUrl) {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;

            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);

            // Add watermark
            const text = 'نقلة';
            const fontSize = Math.max(16, img.width * 0.04);
            ctx.font = fontSize + 'px "Readex Pro", sans-serif';
            ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
            ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
            ctx.lineWidth = 2;

            const textWidth = ctx.measureText(text).width;
            const x = img.width - textWidth - 15;
            const y = img.height - 15;

            ctx.strokeText(text, x, y);
            ctx.fillText(text, x, y);

            resolve(canvas.toDataURL('image/jpeg', 0.85));
          };
          img.onerror = reject;
          img.src = dataUrl;
        });
      }

      function updateImagePreview() {
        const container = document.getElementById('img-preview');
        container.innerHTML = state.images.map((img, i) =>
          '<div class="img-thumb">' +
            '<img src="' + img + '">' +
            '<button class="remove" onclick="removeImage(' + i + ')">×</button>' +
          '</div>'
        ).join('');
      }

      function removeImage(index) {
        state.images.splice(index, 1);
        updateImagePreview();
        saveDraft();
      }

      function updatePreview() {
        const priceText = state.price
          ? new Intl.NumberFormat('ar-SA').format(state.price) + ' ر.س'
          : (state.priceType === 'contact' ? 'اتصل للسعر' : '-');

        document.getElementById('preview-title').textContent = state.title || '-';
        document.getElementById('preview-price').textContent = priceText;
        document.getElementById('preview-desc').textContent = state.description || 'لا يوجد وصف';
        document.getElementById('preview-city').textContent = '📍 ' + (state.city || '-');

        const contactMethod = state.contactMethod === 'both' ? 'اتصال وواتساب' :
          (state.contactMethod === 'whatsapp' ? 'واتساب فقط' : 'اتصال فقط');
        document.getElementById('preview-contact').textContent = '📞 ' + contactMethod;

        const imagesContainer = document.getElementById('preview-images');
        if (state.images.length > 0) {
          imagesContainer.innerHTML = state.images.map(img =>
            '<img src="' + img + '">'
          ).join('');
        } else {
          imagesContainer.innerHTML = '<div class="no-img">لا توجد صور</div>';
        }
      }

      // Draft management - Server-side storage (syncs across devices)
      function saveDraft() {
        // Debounce - wait 2 seconds after last change before saving
        clearTimeout(saveTimeout);
        saveTimeout = setTimeout(async () => {
          try {
            const draftData = { ...state };
            // Don't save base64 images to server (too large), only save on submit
            delete draftData.images;

            await fetch('/api/drafts', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              credentials: 'include',
              body: JSON.stringify({ draft: draftData })
            });
          } catch (e) {
            console.error('Error saving draft:', e);
          }
        }, 2000);
      }

      async function checkDraft() {
        try {
          const response = await fetch('/api/drafts', {
            credentials: 'include'
          });
          const data = await response.json();

          if (data.draft && data.draft.title) {
            // Show banner if draft has content
            document.getElementById('draft-banner').classList.add('show');
          }
        } catch (e) {
          console.error('Error checking draft:', e);
        }
      }

      async function loadDraft() {
        try {
          const response = await fetch('/api/drafts', {
            credentials: 'include'
          });
          const data = await response.json();

          if (data.draft) {
            Object.assign(state, data.draft);

            // Restore UI
            if (state.category) {
              selectMainCategory(state.category);
              if (state.subcategory) {
                setTimeout(() => selectSubcategory(state.subcategory, state.subcategoryId), 100);
              }
            }

            document.getElementById('title').value = state.title || '';
            document.getElementById('description').value = state.description || '';
            document.getElementById('price').value = state.price || '';
            document.getElementById('price_type').value = state.priceType || 'fixed';
            document.getElementById('city').value = state.city || '';
            document.getElementById('neighborhood').value = state.neighborhood || '';
            document.getElementById('contact_phone').value = state.contactPhone || '';

            document.querySelectorAll('.contact-opt').forEach(el => {
              el.classList.toggle('selected', el.dataset.method === state.contactMethod);
            });

            goToStep(state.step || 1);
          }
        } catch (e) {
          console.error('Error loading draft:', e);
        }
        document.getElementById('draft-banner').classList.remove('show');
      }

      async function discardDraft() {
        try {
          await fetch('/api/drafts', {
            method: 'DELETE',
            credentials: 'include'
          });
        } catch (e) {
          console.error('Error discarding draft:', e);
        }
        document.getElementById('draft-banner').classList.remove('show');
      }

      // Submit
      async function submitListing() {
        const btn = document.getElementById('submit-btn');
        const errDiv = document.getElementById('submit-error');

        btn.disabled = true;
        btn.textContent = 'جاري النشر...';
        errDiv.style.display = 'none';

        try {
          const response = await fetch('/api/listings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
              category_id: state.subcategoryId,
              title: state.title,
              description: state.description,
              price: state.price,
              price_type: state.priceType,
              city: state.city,
              neighborhood: state.neighborhood,
              contact_phone: state.contactPhone,
              contact_method: state.contactMethod,
              images: state.images
            })
          });

          const data = await response.json();

          if (!response.ok) {
            throw new Error(data.error || 'حدث خطأ');
          }

          // Clear draft from server and redirect
          fetch('/api/drafts', { method: 'DELETE', credentials: 'include' });
          location.href = '/listing/' + data.listing.id;

        } catch (err) {
          errDiv.textContent = err.message;
          errDiv.style.display = 'block';
          btn.disabled = false;
          btn.innerHTML = 'نشر الإعلان <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px;height:18px;"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>';
        }
      }
    </script>
  `, { title: 'أضف إعلان | نقلة', user });
}

function getCategoryIcon(catId: string): string {
  const icons: Record<string, string> = {
    'community': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    'for-sale': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>',
    'gigs': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
    'housing': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
    'jobs': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
    'services': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
  };
  return icons[catId] || '';
}
