// Centralized Saudi Arabian cities data
// Used across registration, settings, listings, and search

export const saudiCities = [
  // Major cities
  'الرياض', 'جدة', 'مكة المكرمة', 'المدينة المنورة', 'الدمام',
  // Eastern Province
  'الخبر', 'الظهران', 'الأحساء', 'الجبيل', 'القطيف', 'الخفجي', 'رأس تنورة', 'بقيق', 'النعيرية', 'حفر الباطن',
  // Riyadh Region
  'الخرج', 'الدرعية', 'المجمعة', 'الدوادمي', 'الأفلاج', 'وادي الدواسر', 'الزلفي', 'شقراء', 'حوطة بني تميم', 'عفيف', 'السليل', 'ضرماء', 'المزاحمية', 'رماح', 'ثادق', 'حريملاء', 'الغاط',
  // Makkah Region
  'الطائف', 'رابغ', 'الليث', 'القنفذة', 'خليص', 'الجموم', 'الكامل', 'تربة', 'رنية', 'الخرمة', 'الموية',
  // Madinah Region
  'ينبع', 'العلا', 'المهد', 'الحناكية', 'بدر', 'خيبر', 'العيص',
  // Qassim Region
  'بريدة', 'عنيزة', 'الرس', 'المذنب', 'البكيرية', 'البدائع', 'الأسياح', 'النبهانية', 'عيون الجواء', 'رياض الخبراء',
  // Asir Region
  'أبها', 'خميس مشيط', 'بيشة', 'النماص', 'محايل عسير', 'سراة عبيدة', 'أحد رفيدة', 'ظهران الجنوب', 'تثليث', 'بلقرن', 'المجاردة', 'رجال ألمع', 'تنومة',
  // Tabuk Region
  'تبوك', 'الوجه', 'ضباء', 'تيماء', 'أملج', 'حقل', 'البدع',
  // Hail Region
  'حائل', 'بقعاء', 'الغزالة', 'الشنان', 'موقق', 'السليمي',
  // Northern Borders
  'عرعر', 'رفحاء', 'طريف', 'العويقيلة',
  // Jazan Region
  'جازان', 'صبيا', 'أبو عريش', 'صامطة', 'بيش', 'الدرب', 'الدائر', 'العيدابي', 'الريث', 'فرسان', 'الحرث', 'ضمد', 'الطوال', 'أحد المسارحة', 'العارضة', 'فيفاء',
  // Najran Region
  'نجران', 'شرورة', 'حبونا', 'بدر الجنوب', 'يدمة', 'ثار', 'خباش',
  // Al Bahah Region
  'الباحة', 'بلجرشي', 'المندق', 'المخواة', 'قلوة', 'العقيق', 'الحجرة', 'غامد الزناد', 'القرى',
  // Al Jawf Region
  'سكاكا', 'دومة الجندل', 'القريات', 'طبرجل',
];

// City coordinates for distance calculations and map display
export const cityCoordinates: Record<string, { lat: number; lng: number }> = {
  'الرياض': { lat: 24.7136, lng: 46.6753 },
  'جدة': { lat: 21.4858, lng: 39.1925 },
  'مكة المكرمة': { lat: 21.4225, lng: 39.8262 },
  'المدينة المنورة': { lat: 24.5247, lng: 39.5692 },
  'الدمام': { lat: 26.4207, lng: 50.0888 },
  'الخبر': { lat: 26.2172, lng: 50.1971 },
  'الظهران': { lat: 26.2361, lng: 50.0393 },
  'الأحساء': { lat: 25.3648, lng: 49.5677 },
  'الجبيل': { lat: 27.0046, lng: 49.6225 },
  'القطيف': { lat: 26.5196, lng: 49.9982 },
  'حفر الباطن': { lat: 28.4328, lng: 45.9708 },
  'الطائف': { lat: 21.2854, lng: 40.4150 },
  'ينبع': { lat: 24.0875, lng: 38.0618 },
  'تبوك': { lat: 28.3838, lng: 36.5550 },
  'بريدة': { lat: 26.3599, lng: 43.9750 },
  'عنيزة': { lat: 26.0842, lng: 43.9932 },
  'حائل': { lat: 27.5114, lng: 41.7208 },
  'نجران': { lat: 17.4933, lng: 44.1277 },
  'جازان': { lat: 16.8892, lng: 42.5611 },
  'أبها': { lat: 18.2164, lng: 42.5053 },
  'خميس مشيط': { lat: 18.3061, lng: 42.7350 },
  'الباحة': { lat: 20.0129, lng: 41.4677 },
  'عرعر': { lat: 30.9753, lng: 41.0381 },
  'سكاكا': { lat: 29.9697, lng: 40.2064 },
  'القريات': { lat: 31.3317, lng: 37.3439 },
  'العلا': { lat: 26.6167, lng: 37.9167 },
  'الخرج': { lat: 24.1556, lng: 47.3126 },
  'الدرعية': { lat: 24.7341, lng: 46.5772 },
  'الزلفي': { lat: 26.2972, lng: 44.8010 },
  'الرس': { lat: 25.8630, lng: 43.4963 },
  'بيشة': { lat: 19.9878, lng: 42.6062 },
  'القنفذة': { lat: 19.1319, lng: 41.0849 },
  'رابغ': { lat: 22.7976, lng: 39.0368 },
  'الوجه': { lat: 26.2431, lng: 36.4547 },
  'ضباء': { lat: 27.3514, lng: 35.6846 },
  'أملج': { lat: 25.0401, lng: 37.2627 },
};

// Function to find nearest city based on coordinates
export function findNearestCity(lat: number, lng: number): string | null {
  let nearestCity: string | null = null;
  let minDistance = Infinity;

  for (const [city, coords] of Object.entries(cityCoordinates)) {
    const distance = Math.sqrt(
      Math.pow(lat - coords.lat, 2) + Math.pow(lng - coords.lng, 2)
    );
    if (distance < minDistance) {
      minDistance = distance;
      nearestCity = city;
    }
  }

  // Only return if within reasonable distance (approx 200km in degrees)
  if (minDistance > 2) {
    return null;
  }

  return nearestCity;
}

// Get cities as JSON string for frontend use
export function getCitiesJson(): string {
  return JSON.stringify(saudiCities);
}
