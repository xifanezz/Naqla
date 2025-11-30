/**
 * Description templates and suggestions per category
 * Used to help users write better listings
 */

export interface DescriptionTemplate {
  category: string;
  subcategory?: string;
  fields: string[];
  example: string;
  tips: string[];
}

export const descriptionTemplates: DescriptionTemplate[] = [
  // ==================== CARS ====================
  {
    category: 'for-sale',
    subcategory: 'cars-trucks',
    fields: ['الموديل', 'سنة الصنع', 'الممشى', 'الحالة', 'اللون', 'فحص', 'ضمان'],
    example: `تويوتا كامري 2022
• الموديل: SE فل كامل
• الممشى: 45,000 كم
• الحالة: نظيف جداً، بدون حوادث
• اللون: أبيض لؤلؤي
• الفحص: فحص الدار سليم
• مميزات: شاشة، كاميرا خلفية، فتحة سقف
السعر قابل للتفاوض`,
    tips: [
      'أضف صور واضحة من الخارج والداخل',
      'اذكر الممشى الحقيقي',
      'وضح إذا كان عليه ضمان',
      'اذكر أي عيوب بصراحة'
    ]
  },

  // ==================== REAL ESTATE ====================
  {
    category: 'housing',
    subcategory: 'apartments',
    fields: ['المساحة', 'عدد الغرف', 'عدد الحمامات', 'الدور', 'العمر', 'المميزات'],
    example: `شقة للإيجار في حي النرجس
• المساحة: 150 متر
• الغرف: 3 غرف نوم + صالة
• الحمامات: 2
• الدور: الثاني
• العمر: جديدة
• المميزات: مكيفات، مطبخ راكب، موقف خاص
• الإيجار: 35,000 سنوياً
• الدفعات: دفعتين`,
    tips: [
      'صور كل غرفة على حدة',
      'وضح طريقة الدفع',
      'اذكر القرب من المدارس والخدمات',
      'حدد إذا كان مسموح بالعائلات فقط'
    ]
  },
  {
    category: 'housing',
    subcategory: 'villas-sale',
    fields: ['المساحة', 'مساحة البناء', 'عدد الغرف', 'الحمامات', 'العمر', 'المميزات'],
    example: `فيلا للبيع في حي الملقا
• مساحة الأرض: 400 متر
• مساحة البناء: 500 متر
• الغرف: 5 غرف نوم + مجلس + صالة
• الحمامات: 4
• العمر: 3 سنوات
• المميزات: مسبح، حديقة، ملحق خارجي
• الموقع: قريب من الخدمات`,
    tips: [
      'صور الواجهة والحديقة',
      'اذكر مساحة الأرض والبناء',
      'وضح حالة التشطيب'
    ]
  },

  // ==================== PHONES ====================
  {
    category: 'for-sale',
    subcategory: 'cell-phones',
    fields: ['الموديل', 'السعة', 'الحالة', 'الملحقات', 'الضمان'],
    example: `آيفون 15 برو ماكس
• السعة: 256 قيقا
• اللون: تيتانيوم أسود
• الحالة: جديد، فتح علبة فقط
• الملحقات: كامل مع الكرتون
• الضمان: ضمان أبل سنة
• نظيف 100%، بدون خدوش`,
    tips: [
      'صور الشاشة والخلفية',
      'اذكر صحة البطارية',
      'وضح إذا كان معه الكرتون',
      'حدد إذا كان مفتوح على جميع الشبكات'
    ]
  },

  // ==================== ELECTRONICS ====================
  {
    category: 'for-sale',
    subcategory: 'electronics',
    fields: ['النوع', 'الماركة', 'الموديل', 'الحالة', 'الضمان'],
    example: `شاشة سامسونج 65 بوصة
• الموديل: QLED 4K
• الحالة: مستعملة نظيفة
• العمر: سنة واحدة
• الضمان: متبقي 6 أشهر
• المميزات: سمارت، يوتيوب، نتفلكس`,
    tips: [
      'اذكر المواصفات التقنية',
      'وضح سبب البيع',
      'صور الجهاز شغال'
    ]
  },

  // ==================== FURNITURE ====================
  {
    category: 'for-sale',
    subcategory: 'furniture',
    fields: ['النوع', 'اللون', 'الحالة', 'المقاسات', 'الماركة'],
    example: `كنب مودرن 7 مقاعد
• اللون: رمادي
• الحالة: شبه جديد، استخدام سنة
• الماركة: هوم سنتر
• المقاسات: 3.5 متر × 2.5 متر
• سبب البيع: سفر`,
    tips: [
      'اذكر المقاسات بالضبط',
      'صور من زوايا مختلفة',
      'وضح إمكانية التوصيل'
    ]
  },

  // ==================== JOBS ====================
  {
    category: 'jobs',
    fields: ['المسمى الوظيفي', 'الخبرة المطلوبة', 'الراتب', 'ساعات العمل', 'الموقع'],
    example: `مطلوب محاسب
• الشركة: شركة تجارية في الرياض
• الخبرة: 3 سنوات على الأقل
• المؤهل: بكالوريوس محاسبة
• الراتب: 8,000 - 10,000 ريال
• الدوام: 8 ساعات، 5 أيام
• المميزات: تأمين طبي، إجازة سنوية`,
    tips: [
      'حدد الراتب أو المجال',
      'اذكر المميزات والبدلات',
      'وضح متطلبات الخبرة'
    ]
  },

  // ==================== SERVICES ====================
  {
    category: 'services',
    fields: ['نوع الخدمة', 'الخبرة', 'الأسعار', 'المناطق', 'التواصل'],
    example: `فني تكييف وتبريد
• الخدمات: تركيب، صيانة، غسيل، تعبئة فريون
• الخبرة: 10 سنوات
• نخدم جميع أحياء الرياض
• أسعار منافسة
• ضمان على الخدمة
• متاح 24 ساعة`,
    tips: [
      'حدد أسعارك بوضوح',
      'اذكر المناطق التي تخدمها',
      'أضف صور من أعمالك السابقة'
    ]
  },

  // ==================== DEFAULT ====================
  {
    category: 'default',
    fields: ['الوصف', 'الحالة', 'السعر', 'الموقع'],
    example: `اكتب وصف واضح ومفصل للإعلان
• اذكر الحالة: جديد أو مستعمل
• حدد السعر أو اكتب "قابل للتفاوض"
• اذكر موقعك أو المنطقة`,
    tips: [
      'كن صادقاً في الوصف',
      'أضف صور واضحة',
      'اذكر طريقة التواصل المفضلة'
    ]
  }
];

/**
 * Get template for a specific category/subcategory
 */
export function getTemplate(category: string, subcategory?: string): DescriptionTemplate {
  // Try to find exact match
  let template = descriptionTemplates.find(
    t => t.category === category && t.subcategory === subcategory
  );

  // Try category only
  if (!template) {
    template = descriptionTemplates.find(
      t => t.category === category && !t.subcategory
    );
  }

  // Return default
  if (!template) {
    template = descriptionTemplates.find(t => t.category === 'default')!;
  }

  return template;
}

/**
 * Generate description suggestion based on title and category
 */
export function generateDescriptionSuggestion(
  title: string,
  category: string,
  subcategory?: string
): string {
  const template = getTemplate(category, subcategory);

  // Create a simple suggestion based on template fields
  const lines = [`${title}\n`];

  for (const field of template.fields) {
    lines.push(`• ${field}: `);
  }

  return lines.join('\n');
}
