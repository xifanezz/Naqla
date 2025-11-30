/**
 * Saudi-focused keyword-to-category mapping
 * Used for smart category detection from listing titles
 */

export interface KeywordMapping {
  keywords: string[];
  category: string;
  subcategory: string;
}

export const keywordMappings: KeywordMapping[] = [
  // ==================== PHONES & ELECTRONICS ====================
  {
    keywords: ['ايفون', 'آيفون', 'iphone', 'أيفون'],
    category: 'for-sale',
    subcategory: 'cell-phones'
  },
  {
    keywords: ['سامسونج', 'samsung', 'جالكسي', 'galaxy', 'نوت', 'note'],
    category: 'for-sale',
    subcategory: 'cell-phones'
  },
  {
    keywords: ['هواوي', 'huawei', 'شاومي', 'xiaomi', 'ريدمي', 'redmi', 'اوبو', 'oppo', 'فيفو', 'vivo'],
    category: 'for-sale',
    subcategory: 'cell-phones'
  },
  {
    keywords: ['جوال', 'موبايل', 'هاتف', 'تلفون', 'mobile', 'phone', 'سماعة ايربودز', 'airpods'],
    category: 'for-sale',
    subcategory: 'cell-phones'
  },
  {
    keywords: ['لابتوب', 'laptop', 'ماك بوك', 'macbook', 'ماكبوك', 'كمبيوتر محمول'],
    category: 'for-sale',
    subcategory: 'computers'
  },
  {
    keywords: ['كمبيوتر', 'computer', 'pc', 'بي سي', 'كيسة', 'شاشة كمبيوتر', 'مونيتور'],
    category: 'for-sale',
    subcategory: 'computers'
  },
  {
    keywords: ['ايباد', 'ipad', 'تابلت', 'tablet', 'جالكسي تاب'],
    category: 'for-sale',
    subcategory: 'electronics'
  },
  {
    keywords: ['بلايستيشن', 'playstation', 'ps4', 'ps5', 'اكس بوكس', 'xbox', 'نينتندو', 'nintendo'],
    category: 'for-sale',
    subcategory: 'toys-games'
  },
  {
    keywords: ['تلفزيون', 'تلفاز', 'شاشة', 'tv', 'سمارت', 'smart tv', 'led', 'oled'],
    category: 'for-sale',
    subcategory: 'tv-audio'
  },
  {
    keywords: ['سماعات', 'سماعة', 'headphone', 'speaker', 'سبيكر', 'مكبر صوت', 'ساوند بار'],
    category: 'for-sale',
    subcategory: 'tv-audio'
  },

  // ==================== CARS ====================
  {
    keywords: ['تويوتا', 'toyota', 'كامري', 'camry', 'كورولا', 'corolla'],
    category: 'for-sale',
    subcategory: 'cars-trucks'
  },
  {
    keywords: ['لاندكروزر', 'land cruiser', 'برادو', 'prado', 'فورتشنر', 'fortuner'],
    category: 'for-sale',
    subcategory: 'cars-trucks'
  },
  {
    keywords: ['هايلكس', 'hilux', 'شاص', 'ربع', 'جيب'],
    category: 'for-sale',
    subcategory: 'cars-trucks'
  },
  {
    keywords: ['نيسان', 'nissan', 'باترول', 'patrol', 'التيما', 'altima', 'صني', 'sunny'],
    category: 'for-sale',
    subcategory: 'cars-trucks'
  },
  {
    keywords: ['هونداي', 'hyundai', 'النترا', 'elantra', 'سوناتا', 'sonata', 'توسان', 'tucson', 'اكسنت', 'accent'],
    category: 'for-sale',
    subcategory: 'cars-trucks'
  },
  {
    keywords: ['كيا', 'kia', 'سيراتو', 'cerato', 'اوبتيما', 'optima', 'سبورتاج', 'sportage'],
    category: 'for-sale',
    subcategory: 'cars-trucks'
  },
  {
    keywords: ['فورد', 'ford', 'اكسبلورر', 'explorer', 'تورس', 'taurus', 'فيوجن', 'fusion'],
    category: 'for-sale',
    subcategory: 'cars-trucks'
  },
  {
    keywords: ['شيفروليه', 'chevrolet', 'تاهو', 'tahoe', 'سوبربان', 'suburban', 'كابريس', 'caprice', 'سلفرادو', 'silverado'],
    category: 'for-sale',
    subcategory: 'cars-trucks'
  },
  {
    keywords: ['جمس', 'gmc', 'يوكن', 'yukon', 'سييرا', 'sierra'],
    category: 'for-sale',
    subcategory: 'cars-trucks'
  },
  {
    keywords: ['لكزس', 'lexus', 'مرسيدس', 'mercedes', 'بنز', 'benz', 'bmw', 'بي ام', 'اودي', 'audi'],
    category: 'for-sale',
    subcategory: 'cars-trucks'
  },
  {
    keywords: ['هوندا', 'honda', 'اكورد', 'accord', 'سيفيك', 'civic'],
    category: 'for-sale',
    subcategory: 'cars-trucks'
  },
  {
    keywords: ['مازدا', 'mazda', 'ميتسوبيشي', 'mitsubishi', 'سوزوكي', 'suzuki', 'ايسوزو', 'isuzu'],
    category: 'for-sale',
    subcategory: 'cars-trucks'
  },
  {
    keywords: ['سيارة', 'سيارات', 'car', 'cars', 'موديل', 'model'],
    category: 'for-sale',
    subcategory: 'cars-trucks'
  },
  {
    keywords: ['دراجة نارية', 'دباب', 'هارلي', 'harley', 'ريس', 'سوزوكي دباب', 'هوندا دباب'],
    category: 'for-sale',
    subcategory: 'motorcycles'
  },
  {
    keywords: ['قطع غيار', 'كفرات', 'اطارات', 'جنوط', 'بطارية سيارة', 'زيت', 'فلتر'],
    category: 'for-sale',
    subcategory: 'auto-parts'
  },

  // ==================== REAL ESTATE ====================
  {
    keywords: ['شقة للايجار', 'شقه للايجار', 'شقة للإيجار'],
    category: 'housing',
    subcategory: 'apartments'
  },
  {
    keywords: ['شقة للبيع', 'شقه للبيع'],
    category: 'housing',
    subcategory: 'apartments-sale'
  },
  {
    keywords: ['فيلا للبيع', 'فله للبيع'],
    category: 'housing',
    subcategory: 'villas-sale'
  },
  {
    keywords: ['فيلا للايجار', 'فله للايجار', 'فيلا للإيجار'],
    category: 'housing',
    subcategory: 'houses-rent'
  },
  {
    keywords: ['ارض', 'أرض', 'ارض للبيع', 'قطعة ارض'],
    category: 'housing',
    subcategory: 'land'
  },
  {
    keywords: ['استراحة', 'شاليه', 'مزرعة', 'استراحه'],
    category: 'housing',
    subcategory: 'vacation-rentals'
  },
  {
    keywords: ['مكتب للايجار', 'محل للايجار', 'محل تجاري', 'معرض'],
    category: 'housing',
    subcategory: 'office-commercial'
  },
  {
    keywords: ['مستودع', 'مخزن', 'هنجر', 'مستودعات'],
    category: 'housing',
    subcategory: 'warehouses'
  },
  {
    keywords: ['غرفة للايجار', 'سكن مشترك', 'شريك سكن'],
    category: 'housing',
    subcategory: 'rooms'
  },
  {
    keywords: ['عمارة', 'بناية', 'عقار', 'عقارات'],
    category: 'housing',
    subcategory: 'real-estate-sale'
  },
  {
    keywords: ['مفروش', 'مفروشة', 'سكن مفروش', 'شقة مفروشة'],
    category: 'housing',
    subcategory: 'furnished'
  },

  // ==================== FURNITURE & HOME ====================
  {
    keywords: ['كنب', 'كنبة', 'جلسة', 'جلسات', 'صالون', 'صالة', 'انتريه'],
    category: 'for-sale',
    subcategory: 'furniture'
  },
  {
    keywords: ['سرير', 'تخت', 'مرتبة', 'فراش', 'غرفة نوم', 'دولاب', 'خزانة'],
    category: 'for-sale',
    subcategory: 'furniture'
  },
  {
    keywords: ['طاولة', 'مكتب', 'كرسي', 'كراسي', 'طاولة طعام'],
    category: 'for-sale',
    subcategory: 'furniture'
  },
  {
    keywords: ['ثلاجة', 'غسالة', 'فريزر', 'جلاية', 'غسالة صحون', 'نشافة'],
    category: 'for-sale',
    subcategory: 'appliances'
  },
  {
    keywords: ['مكيف', 'تكييف', 'سبليت', 'مكيفات', 'شباك'],
    category: 'for-sale',
    subcategory: 'ac-cooling'
  },
  {
    keywords: ['فرن', 'طباخ', 'بوتاجاز', 'مايكرويف', 'microwave', 'فرن كهربائي'],
    category: 'for-sale',
    subcategory: 'kitchen'
  },
  {
    keywords: ['خلاط', 'قلاية', 'قلاية هوائية', 'air fryer', 'ماكينة قهوة', 'صانعة قهوة'],
    category: 'for-sale',
    subcategory: 'kitchen'
  },

  // ==================== FASHION & ACCESSORIES ====================
  {
    keywords: ['ساعة', 'ساعات', 'رولكس', 'rolex', 'ابل واتش', 'apple watch', 'كاسيو', 'casio'],
    category: 'for-sale',
    subcategory: 'watches'
  },
  {
    keywords: ['عطر', 'عطور', 'بخور', 'عود', 'دهن عود', 'مسك', 'perfume'],
    category: 'for-sale',
    subcategory: 'perfumes'
  },
  {
    keywords: ['شنطة', 'شنط', 'حقيبة', 'حقائب', 'محفظة', 'لويس فيتون', 'قوتشي', 'gucci'],
    category: 'for-sale',
    subcategory: 'bags'
  },
  {
    keywords: ['ملابس', 'ثوب', 'شماغ', 'غترة', 'بشت', 'عباية', 'فستان', 'جاكيت'],
    category: 'for-sale',
    subcategory: 'clothing'
  },
  {
    keywords: ['ذهب', 'مجوهرات', 'خاتم', 'سلسلة', 'اساور', 'طقم ذهب'],
    category: 'for-sale',
    subcategory: 'jewelry'
  },

  // ==================== SPORTS & OUTDOOR ====================
  {
    keywords: ['دراجة هوائية', 'سيكل', 'بسكليت', 'دراجة رياضية'],
    category: 'for-sale',
    subcategory: 'bikes'
  },
  {
    keywords: ['تمارين', 'جيم', 'اجهزة رياضية', 'سير كهربائي', 'اوزان', 'دمبل'],
    category: 'for-sale',
    subcategory: 'sporting'
  },
  {
    keywords: ['خيمة', 'طاولة رحلات', 'رحلة', 'تخييم', 'كشتة', 'برجولة', 'مظلة'],
    category: 'for-sale',
    subcategory: 'camping'
  },

  // ==================== KIDS & BABY ====================
  {
    keywords: ['عربة اطفال', 'كرسي اطفال', 'سرير اطفال', 'حفاضات', 'رضاعة'],
    category: 'for-sale',
    subcategory: 'baby-kids'
  },
  {
    keywords: ['لعبة', 'لعب اطفال', 'العاب', 'دمية', 'ليقو', 'lego'],
    category: 'for-sale',
    subcategory: 'toys-games'
  },
  {
    keywords: ['ملابس اطفال', 'ملابس بيبي', 'احذية اطفال'],
    category: 'for-sale',
    subcategory: 'baby-kids'
  },

  // ==================== JOBS ====================
  {
    keywords: ['وظيفة', 'وظائف', 'مطلوب موظف', 'مطلوب موظفة', 'توظيف', 'فرصة عمل'],
    category: 'jobs',
    subcategory: 'admin-office'
  },
  {
    keywords: ['سائق', 'مطلوب سائق', 'سواق', 'درايفر', 'driver'],
    category: 'jobs',
    subcategory: 'drivers'
  },
  {
    keywords: ['مهندس', 'هندسة', 'مهندسين', 'engineer'],
    category: 'jobs',
    subcategory: 'arch-engineering'
  },
  {
    keywords: ['محاسب', 'محاسبة', 'مالية', 'accountant'],
    category: 'jobs',
    subcategory: 'accounting'
  },
  {
    keywords: ['مبيعات', 'مندوب', 'تسويق', 'sales', 'marketing'],
    category: 'jobs',
    subcategory: 'sales'
  },
  {
    keywords: ['طبيب', 'ممرض', 'ممرضة', 'تمريض', 'طبية', 'مستشفى'],
    category: 'jobs',
    subcategory: 'healthcare'
  },
  {
    keywords: ['مبرمج', 'مطور', 'برمجة', 'developer', 'programmer', 'software'],
    category: 'jobs',
    subcategory: 'software'
  },
  {
    keywords: ['معلم', 'معلمة', 'مدرس', 'مدرسة', 'تدريس', 'teacher'],
    category: 'jobs',
    subcategory: 'education'
  },
  {
    keywords: ['مطعم', 'شيف', 'طباخ', 'ويتر', 'كاشير', 'باريستا'],
    category: 'jobs',
    subcategory: 'food-hospitality'
  },
  {
    keywords: ['حارس', 'امن', 'حراسة', 'security', 'سكيورتي'],
    category: 'jobs',
    subcategory: 'security'
  },
  {
    keywords: ['عامل', 'عمال', 'فني', 'كهربائي', 'سباك', 'نجار'],
    category: 'jobs',
    subcategory: 'general-labor'
  },
  {
    keywords: ['دوام جزئي', 'part time', 'بارت تايم', 'نصف دوام'],
    category: 'jobs',
    subcategory: 'part-time'
  },
  {
    keywords: ['عن بعد', 'remote', 'ريموت', 'من المنزل', 'اونلاين'],
    category: 'jobs',
    subcategory: 'remote'
  },

  // ==================== SERVICES ====================
  {
    keywords: ['نقل عفش', 'نقل اثاث', 'شركة نقل', 'سيارة نقل'],
    category: 'services',
    subcategory: 'labor-moving'
  },
  {
    keywords: ['تنظيف', 'شركة تنظيف', 'غسيل', 'تنظيف منازل', 'عاملة', 'خادمة'],
    category: 'services',
    subcategory: 'household-services'
  },
  {
    keywords: ['صيانة مكيفات', 'تركيب مكيفات', 'غسيل مكيفات', 'فني مكيفات'],
    category: 'services',
    subcategory: 'ac-services'
  },
  {
    keywords: ['كهربائي', 'اعمال كهرباء', 'تمديدات', 'كهرباء'],
    category: 'services',
    subcategory: 'skilled-trade'
  },
  {
    keywords: ['سباك', 'سباكة', 'صحي', 'تسليك مجاري'],
    category: 'services',
    subcategory: 'skilled-trade'
  },
  {
    keywords: ['دهان', 'بويات', 'دهانات', 'صبغ'],
    category: 'services',
    subcategory: 'skilled-trade'
  },
  {
    keywords: ['مصور', 'تصوير', 'تصوير فوتوغرافي', 'فيديو', 'مونتاج'],
    category: 'services',
    subcategory: 'photography-services'
  },
  {
    keywords: ['تصميم', 'مصمم', 'جرافيك', 'لوقو', 'شعار', 'هوية'],
    category: 'services',
    subcategory: 'creative-services'
  },
  {
    keywords: ['مدرس خصوصي', 'دروس خصوصية', 'معلم خصوصي', 'تأسيس'],
    category: 'services',
    subcategory: 'lessons'
  },
  {
    keywords: ['صيانة جوالات', 'تصليح جوالات', 'شاشة مكسورة', 'فتح قفل'],
    category: 'services',
    subcategory: 'cell-mobile-services'
  },
  {
    keywords: ['صيانة سيارات', 'ورشة', 'ميكانيكي', 'برمجة سيارات', 'كهربائي سيارات'],
    category: 'services',
    subcategory: 'automotive-services'
  },
  {
    keywords: ['تنسيق حدائق', 'زراعة', 'عشب صناعي', 'نجيل'],
    category: 'services',
    subcategory: 'gardening-services'
  },
  {
    keywords: ['كاميرات مراقبة', 'انظمة امنية', 'انذار', 'اكسس كنترول'],
    category: 'services',
    subcategory: 'security-systems'
  },
  {
    keywords: ['ضيافة', 'قهوجي', 'بوفيه', 'catering', 'حفلات'],
    category: 'services',
    subcategory: 'catering-services'
  },
  {
    keywords: ['تأشيرة', 'فيزا', 'visa', 'سفر', 'حجز طيران', 'سياحة'],
    category: 'services',
    subcategory: 'travel-services'
  },
  {
    keywords: ['محامي', 'محاماة', 'قانوني', 'استشارة قانونية'],
    category: 'services',
    subcategory: 'legal-services'
  },
  {
    keywords: ['ترجمة', 'مترجم', 'translator', 'كتابة محتوى'],
    category: 'services',
    subcategory: 'writing-services'
  },

  // ==================== GIGS ====================
  {
    keywords: ['توصيل طلبات', 'مندوب توصيل', 'توصيل', 'delivery'],
    category: 'gigs',
    subcategory: 'delivery-gigs'
  },
  {
    keywords: ['مشاوير', 'توصيل مشاوير', 'كريم', 'اوبر'],
    category: 'community',
    subcategory: 'rideshare'
  },

  // ==================== COMMUNITY ====================
  {
    keywords: ['مفقود', 'ضائع', 'lost', 'فقدت', 'وجدت'],
    category: 'community',
    subcategory: 'lost-found'
  },
  {
    keywords: ['قط', 'قطة', 'كلب', 'طيور', 'ببغاء', 'ارانب', 'حيوان اليف'],
    category: 'community',
    subcategory: 'pets'
  },
  {
    keywords: ['تطوع', 'متطوع', 'volunteer', 'خيري'],
    category: 'community',
    subcategory: 'volunteers'
  },
  {
    keywords: ['دورة', 'كورس', 'course', 'تدريب', 'ورشة عمل'],
    category: 'community',
    subcategory: 'classes'
  },

  // ==================== OTHER FOR SALE ====================
  {
    keywords: ['كتاب', 'كتب', 'مجلة', 'books', 'روايات'],
    category: 'for-sale',
    subcategory: 'books'
  },
  {
    keywords: ['كاميرا', 'camera', 'عدسة', 'lens', 'ترايبود', 'gopro'],
    category: 'for-sale',
    subcategory: 'photo-video'
  },
  {
    keywords: ['قيتار', 'guitar', 'بيانو', 'piano', 'عود', 'طبل', 'drum', 'الة موسيقية'],
    category: 'for-sale',
    subcategory: 'music-instruments'
  },
  {
    keywords: ['يخت', 'قارب', 'جيت سكي', 'jet ski', 'زورق'],
    category: 'for-sale',
    subcategory: 'boats'
  },
  {
    keywords: ['مجاني', 'مجانا', 'free', 'ببلاش', 'هدية'],
    category: 'for-sale',
    subcategory: 'free'
  },
  {
    keywords: ['مطلوب', 'ابحث عن', 'اريد', 'wanted', 'محتاج'],
    category: 'for-sale',
    subcategory: 'wanted'
  },
];

/**
 * Detect category and subcategory from title
 * Returns the first matching category or null
 */
export function detectCategory(title: string): { category: string; subcategory: string } | null {
  const normalizedTitle = title.toLowerCase().trim();

  for (const mapping of keywordMappings) {
    for (const keyword of mapping.keywords) {
      if (normalizedTitle.includes(keyword.toLowerCase())) {
        return {
          category: mapping.category,
          subcategory: mapping.subcategory
        };
      }
    }
  }

  return null;
}

/**
 * Get all possible category suggestions for a title
 * Returns multiple matches sorted by relevance
 */
export function suggestCategories(title: string): { category: string; subcategory: string; score: number }[] {
  const normalizedTitle = title.toLowerCase().trim();
  const matches: { category: string; subcategory: string; score: number }[] = [];

  for (const mapping of keywordMappings) {
    let matchCount = 0;
    for (const keyword of mapping.keywords) {
      if (normalizedTitle.includes(keyword.toLowerCase())) {
        matchCount++;
      }
    }
    if (matchCount > 0) {
      matches.push({
        category: mapping.category,
        subcategory: mapping.subcategory,
        score: matchCount
      });
    }
  }

  // Sort by score descending and remove duplicates
  const seen = new Set<string>();
  return matches
    .sort((a, b) => b.score - a.score)
    .filter(m => {
      const key = `${m.category}-${m.subcategory}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .slice(0, 3); // Return top 3 suggestions
}
