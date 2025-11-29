/**
 * Saudi Arabian Classifieds Categories Data
 * Based on research from Haraj.com.sa and other Saudi classifieds platforms
 * Generated on 2025-11-29
 */

export interface Category {
  id: string;
  name_ar: string;
  name_en: string;
  slug: string;
  subcategories?: Subcategory[];
}

export interface Subcategory {
  id: string;
  name_ar: string;
  name_en: string;
  slug: string;
  items?: Item[];
}

export interface Item {
  id: string;
  name_ar: string;
  name_en: string;
  slug: string;
}

export interface CarBrand extends Item {
  models?: CarModel[];
}

export interface CarModel {
  id: string;
  name_ar: string;
  name_en: string;
  slug: string;
}

// ============================================
// MAIN CATEGORIES
// ============================================

export const mainCategories: Category[] = [
  {
    id: "cars",
    name_ar: "سيارات",
    name_en: "Cars",
    slug: "cars"
  },
  {
    id: "real-estate",
    name_ar: "عقارات",
    name_en: "Real Estate",
    slug: "real-estate"
  },
  {
    id: "electronics",
    name_ar: "أجهزة",
    name_en: "Electronics",
    slug: "electronics"
  },
  {
    id: "furniture",
    name_ar: "أثاث",
    name_en: "Furniture",
    slug: "furniture"
  },
  {
    id: "animals",
    name_ar: "حيوانات",
    name_en: "Animals",
    slug: "animals"
  },
  {
    id: "services",
    name_ar: "خدمات",
    name_en: "Services",
    slug: "services"
  },
  {
    id: "jobs",
    name_ar: "وظائف",
    name_en: "Jobs",
    slug: "jobs"
  },
  {
    id: "personal-items",
    name_ar: "مستلزمات شخصية",
    name_en: "Personal Items",
    slug: "personal-items"
  },
  {
    id: "fashion",
    name_ar: "أزياء",
    name_en: "Fashion",
    slug: "fashion"
  },
  {
    id: "business-industrial",
    name_ar: "أعمال وصناعة",
    name_en: "Business & Industrial",
    slug: "business-industrial"
  }
];

// ============================================
// CARS CATEGORY - COMPREHENSIVE DATA
// ============================================

export const carYears = Array.from({ length: 36 }, (_, i) => 2025 - i); // 2025 down to 1990

export const carConditions = [
  { id: "new", name_ar: "جديد", name_en: "New", slug: "new" },
  { id: "used", name_ar: "مستعمل", name_en: "Used", slug: "used" },
  { id: "damaged", name_ar: "مصدوم", name_en: "Damaged", slug: "damaged" }
];

export const carSubcategories: Subcategory[] = [
  {
    id: "passenger-cars",
    name_ar: "سيارات ركاب",
    name_en: "Passenger Cars",
    slug: "passenger-cars"
  },
  {
    id: "trucks-heavy-equipment",
    name_ar: "شاحنات ومعدات ثقيلة",
    name_en: "Trucks & Heavy Equipment",
    slug: "trucks-heavy-equipment"
  },
  {
    id: "motorcycles",
    name_ar: "دراجات نارية",
    name_en: "Motorcycles",
    slug: "motorcycles"
  },
  {
    id: "car-accessories",
    name_ar: "اكسسوارات سيارات",
    name_en: "Car Accessories",
    slug: "car-accessories"
  },
  {
    id: "spare-parts",
    name_ar: "قطع غيار",
    name_en: "Spare Parts",
    slug: "spare-parts"
  },
  {
    id: "car-services",
    name_ar: "خدمات للسيارات",
    name_en: "Car Services",
    slug: "car-services"
  },
  {
    id: "boats-marine",
    name_ar: "قوارب ومعدات بحرية",
    name_en: "Boats & Marine",
    slug: "boats-marine"
  },
  {
    id: "caravans-motorhomes",
    name_ar: "كرفانات",
    name_en: "Caravans & Motorhomes",
    slug: "caravans-motorhomes"
  }
];

// ============================================
// CAR BRANDS - 70+ BRANDS WITH MODELS
// ============================================

export const carBrands: CarBrand[] = [
  // Japanese Brands
  {
    id: "toyota",
    name_ar: "تويوتا",
    name_en: "Toyota",
    slug: "toyota",
    models: [
      { id: "camry", name_ar: "كامري", name_en: "Camry", slug: "camry" },
      { id: "corolla", name_ar: "كورولا", name_en: "Corolla", slug: "corolla" },
      { id: "yaris", name_ar: "يارس", name_en: "Yaris", slug: "yaris" },
      { id: "land-cruiser", name_ar: "لاند كروزر", name_en: "Land Cruiser", slug: "land-cruiser" },
      { id: "prado", name_ar: "برادو", name_en: "Prado", slug: "prado" },
      { id: "hilux", name_ar: "هايلكس", name_en: "Hilux", slug: "hilux" },
      { id: "fortuner", name_ar: "فورتشنر", name_en: "Fortuner", slug: "fortuner" },
      { id: "rav4", name_ar: "راف فور", name_en: "RAV4", slug: "rav4" },
      { id: "avalon", name_ar: "افالون", name_en: "Avalon", slug: "avalon" },
      { id: "highlander", name_ar: "هايلاندر", name_en: "Highlander", slug: "highlander" },
      { id: "rush", name_ar: "راش", name_en: "Rush", slug: "rush" },
      { id: "4runner", name_ar: "فور رنر", name_en: "4Runner", slug: "4runner" },
      { id: "sequoia", name_ar: "سيكويا", name_en: "Sequoia", slug: "sequoia" },
      { id: "tundra", name_ar: "تندرا", name_en: "Tundra", slug: "tundra" },
      { id: "c-hr", name_ar: "سي اتش ار", name_en: "C-HR", slug: "c-hr" },
      { id: "crown", name_ar: "كراون", name_en: "Crown", slug: "crown" }
    ]
  },
  {
    id: "nissan",
    name_ar: "نيسان",
    name_en: "Nissan",
    slug: "nissan",
    models: [
      { id: "altima", name_ar: "التيما", name_en: "Altima", slug: "altima" },
      { id: "patrol", name_ar: "باترول", name_en: "Patrol", slug: "patrol" },
      { id: "patrol-safari", name_ar: "باترول سفاري", name_en: "Patrol Safari", slug: "patrol-safari" },
      { id: "sunny", name_ar: "صني", name_en: "Sunny", slug: "sunny" },
      { id: "maxima", name_ar: "ماكسيما", name_en: "Maxima", slug: "maxima" },
      { id: "x-trail", name_ar: "اكس تريل", name_en: "X-Trail", slug: "x-trail" },
      { id: "x-terra", name_ar: "اكستيرا", name_en: "X-Terra", slug: "x-terra" },
      { id: "pathfinder", name_ar: "باثفايندر", name_en: "Pathfinder", slug: "pathfinder" },
      { id: "navara", name_ar: "نافارا", name_en: "Navara", slug: "navara" },
      { id: "urvan", name_ar: "اورفان", name_en: "Urvan", slug: "urvan" },
      { id: "kicks", name_ar: "كيكس", name_en: "Kicks", slug: "kicks" },
      { id: "magnite", name_ar: "ماجنايت", name_en: "Magnite", slug: "magnite" },
      { id: "micra", name_ar: "ميكرا", name_en: "Micra", slug: "micra" },
      { id: "z", name_ar: "زد", name_en: "Z", slug: "z" }
    ]
  },
  {
    id: "honda",
    name_ar: "هوندا",
    name_en: "Honda",
    slug: "honda",
    models: [
      { id: "accord", name_ar: "اكورد", name_en: "Accord", slug: "accord" },
      { id: "civic", name_ar: "سيفيك", name_en: "Civic", slug: "civic" },
      { id: "city", name_ar: "سيتي", name_en: "City", slug: "city" },
      { id: "cr-v", name_ar: "سي ار في", name_en: "CR-V", slug: "cr-v" },
      { id: "pilot", name_ar: "بايلوت", name_en: "Pilot", slug: "pilot" },
      { id: "odyssey", name_ar: "اوديسي", name_en: "Odyssey", slug: "odyssey" },
      { id: "hr-v", name_ar: "اتش ار في", name_en: "HR-V", slug: "hr-v" }
    ]
  },
  {
    id: "mazda",
    name_ar: "مازدا",
    name_en: "Mazda",
    slug: "mazda",
    models: [
      { id: "mazda3", name_ar: "مازدا 3", name_en: "Mazda3", slug: "mazda3" },
      { id: "mazda6", name_ar: "مازدا 6", name_en: "Mazda6", slug: "mazda6" },
      { id: "cx-3", name_ar: "سي اكس 3", name_en: "CX-3", slug: "cx-3" },
      { id: "cx-5", name_ar: "سي اكس 5", name_en: "CX-5", slug: "cx-5" },
      { id: "cx-9", name_ar: "سي اكس 9", name_en: "CX-9", slug: "cx-9" },
      { id: "cx-90", name_ar: "سي اكس 90", name_en: "CX-90", slug: "cx-90" }
    ]
  },
  {
    id: "suzuki",
    name_ar: "سوزوكي",
    name_en: "Suzuki",
    slug: "suzuki",
    models: [
      { id: "swift", name_ar: "سويفت", name_en: "Swift", slug: "swift" },
      { id: "dzire", name_ar: "دزاير", name_en: "Dzire", slug: "dzire" },
      { id: "vitara", name_ar: "فيتارا", name_en: "Vitara", slug: "vitara" },
      { id: "jimny", name_ar: "جيمني", name_en: "Jimny", slug: "jimny" },
      { id: "ciaz", name_ar: "سياز", name_en: "Ciaz", slug: "ciaz" }
    ]
  },
  {
    id: "mitsubishi",
    name_ar: "ميتسوبيشي",
    name_en: "Mitsubishi",
    slug: "mitsubishi",
    models: [
      { id: "lancer", name_ar: "لانسر", name_en: "Lancer", slug: "lancer" },
      { id: "pajero", name_ar: "باجيرو", name_en: "Pajero", slug: "pajero" },
      { id: "montero", name_ar: "مونتيرو", name_en: "Montero", slug: "montero" },
      { id: "outlander", name_ar: "اوتلاندر", name_en: "Outlander", slug: "outlander" },
      { id: "attrage", name_ar: "اتراج", name_en: "Attrage", slug: "attrage" },
      { id: "eclipse-cross", name_ar: "اكليبس كروس", name_en: "Eclipse Cross", slug: "eclipse-cross" },
      { id: "l200", name_ar: "ال 200", name_en: "L200", slug: "l200" }
    ]
  },
  {
    id: "infiniti",
    name_ar: "انفينيتي",
    name_en: "Infiniti",
    slug: "infiniti",
    models: [
      { id: "qx50", name_ar: "كيو اكس 50", name_en: "QX50", slug: "qx50" },
      { id: "qx60", name_ar: "كيو اكس 60", name_en: "QX60", slug: "qx60" },
      { id: "qx80", name_ar: "كيو اكس 80", name_en: "QX80", slug: "qx80" },
      { id: "q50", name_ar: "كيو 50", name_en: "Q50", slug: "q50" },
      { id: "q60", name_ar: "كيو 60", name_en: "Q60", slug: "q60" }
    ]
  },
  {
    id: "lexus",
    name_ar: "لكزس",
    name_en: "Lexus",
    slug: "lexus",
    models: [
      { id: "es", name_ar: "اي اس", name_en: "ES", slug: "es" },
      { id: "is", name_ar: "اي اس", name_en: "IS", slug: "is" },
      { id: "ls", name_ar: "ال اس", name_en: "LS", slug: "ls" },
      { id: "rx", name_ar: "ار اكس", name_en: "RX", slug: "rx" },
      { id: "lx", name_ar: "ال اكس", name_en: "LX", slug: "lx" },
      { id: "gx", name_ar: "جي اكس", name_en: "GX", slug: "gx" },
      { id: "nx", name_ar: "ان اكس", name_en: "NX", slug: "nx" },
      { id: "ux", name_ar: "يو اكس", name_en: "UX", slug: "ux" },
      { id: "lc", name_ar: "ال سي", name_en: "LC", slug: "lc" }
    ]
  },
  {
    id: "subaru",
    name_ar: "سوبارو",
    name_en: "Subaru",
    slug: "subaru",
    models: [
      { id: "outback", name_ar: "اوت باك", name_en: "Outback", slug: "outback" },
      { id: "forester", name_ar: "فورستر", name_en: "Forester", slug: "forester" },
      { id: "impreza", name_ar: "امبريزا", name_en: "Impreza", slug: "impreza" },
      { id: "wrx", name_ar: "دبليو ار اكس", name_en: "WRX", slug: "wrx" }
    ]
  },
  {
    id: "isuzu",
    name_ar: "ايسوزو",
    name_en: "Isuzu",
    slug: "isuzu",
    models: [
      { id: "d-max", name_ar: "دي ماكس", name_en: "D-Max", slug: "d-max" },
      { id: "mu-x", name_ar: "ام يو اكس", name_en: "MU-X", slug: "mu-x" }
    ]
  },

  // Korean Brands
  {
    id: "hyundai",
    name_ar: "هيونداي",
    name_en: "Hyundai",
    slug: "hyundai",
    models: [
      { id: "sonata", name_ar: "سوناتا", name_en: "Sonata", slug: "sonata" },
      { id: "elantra", name_ar: "النترا", name_en: "Elantra", slug: "elantra" },
      { id: "accent", name_ar: "اكسنت", name_en: "Accent", slug: "accent" },
      { id: "tucson", name_ar: "توسان", name_en: "Tucson", slug: "tucson" },
      { id: "santa-fe", name_ar: "سنتافي", name_en: "Santa Fe", slug: "santa-fe" },
      { id: "creta", name_ar: "كريتا", name_en: "Creta", slug: "creta" },
      { id: "kona", name_ar: "كونا", name_en: "Kona", slug: "kona" },
      { id: "palisade", name_ar: "باليسيد", name_en: "Palisade", slug: "palisade" },
      { id: "veloster", name_ar: "فيلوستر", name_en: "Veloster", slug: "veloster" },
      { id: "azera", name_ar: "ازيرا", name_en: "Azera", slug: "azera" },
      { id: "ioniq", name_ar: "ايونك", name_en: "Ioniq", slug: "ioniq" },
      { id: "h1", name_ar: "اتش 1", name_en: "H1", slug: "h1" }
    ]
  },
  {
    id: "kia",
    name_ar: "كيا",
    name_en: "Kia",
    slug: "kia",
    models: [
      { id: "optima", name_ar: "اوبتيما", name_en: "Optima", slug: "optima" },
      { id: "k5", name_ar: "كي 5", name_en: "K5", slug: "k5" },
      { id: "k4", name_ar: "كي 4", name_en: "K4", slug: "k4" },
      { id: "cerato", name_ar: "سيراتو", name_en: "Cerato", slug: "cerato" },
      { id: "rio", name_ar: "ريو", name_en: "Rio", slug: "rio" },
      { id: "sportage", name_ar: "سبورتاج", name_en: "Sportage", slug: "sportage" },
      { id: "sorento", name_ar: "سورينتو", name_en: "Sorento", slug: "sorento" },
      { id: "seltos", name_ar: "سيلتوس", name_en: "Seltos", slug: "seltos" },
      { id: "telluride", name_ar: "تيلورايد", name_en: "Telluride", slug: "telluride" },
      { id: "carnival", name_ar: "كرنفال", name_en: "Carnival", slug: "carnival" },
      { id: "stinger", name_ar: "ستينجر", name_en: "Stinger", slug: "stinger" },
      { id: "soul", name_ar: "سول", name_en: "Soul", slug: "soul" },
      { id: "picanto", name_ar: "بيكانتو", name_en: "Picanto", slug: "picanto" }
    ]
  },
  {
    id: "genesis",
    name_ar: "جينيسيس",
    name_en: "Genesis",
    slug: "genesis",
    models: [
      { id: "g70", name_ar: "جي 70", name_en: "G70", slug: "g70" },
      { id: "g80", name_ar: "جي 80", name_en: "G80", slug: "g80" },
      { id: "g90", name_ar: "جي 90", name_en: "G90", slug: "g90" },
      { id: "gv70", name_ar: "جي في 70", name_en: "GV70", slug: "gv70" },
      { id: "gv80", name_ar: "جي في 80", name_en: "GV80", slug: "gv80" }
    ]
  },

  // American Brands
  {
    id: "ford",
    name_ar: "فورد",
    name_en: "Ford",
    slug: "ford",
    models: [
      { id: "explorer", name_ar: "اكسبلورر", name_en: "Explorer", slug: "explorer" },
      { id: "expedition", name_ar: "اكسبيديشن", name_en: "Expedition", slug: "expedition" },
      { id: "mustang", name_ar: "موستنج", name_en: "Mustang", slug: "mustang" },
      { id: "f-150", name_ar: "اف 150", name_en: "F-150", slug: "f-150" },
      { id: "ranger", name_ar: "رينجر", name_en: "Ranger", slug: "ranger" },
      { id: "edge", name_ar: "ايدج", name_en: "Edge", slug: "edge" },
      { id: "escape", name_ar: "اسكيب", name_en: "Escape", slug: "escape" },
      { id: "bronco", name_ar: "برونكو", name_en: "Bronco", slug: "bronco" },
      { id: "ecosport", name_ar: "ايكو سبورت", name_en: "EcoSport", slug: "ecosport" },
      { id: "taurus", name_ar: "توروس", name_en: "Taurus", slug: "taurus" }
    ]
  },
  {
    id: "chevrolet",
    name_ar: "شيفروليه",
    name_en: "Chevrolet",
    slug: "chevrolet",
    models: [
      { id: "tahoe", name_ar: "تاهو", name_en: "Tahoe", slug: "tahoe" },
      { id: "suburban", name_ar: "سوبربان", name_en: "Suburban", slug: "suburban" },
      { id: "traverse", name_ar: "ترافرس", name_en: "Traverse", slug: "traverse" },
      { id: "silverado", name_ar: "سيلفرادو", name_en: "Silverado", slug: "silverado" },
      { id: "malibu", name_ar: "ماليبو", name_en: "Malibu", slug: "malibu" },
      { id: "impala", name_ar: "امبالا", name_en: "Impala", slug: "impala" },
      { id: "camaro", name_ar: "كامارو", name_en: "Camaro", slug: "camaro" },
      { id: "corvette", name_ar: "كورفيت", name_en: "Corvette", slug: "corvette" },
      { id: "colorado", name_ar: "كولورادو", name_en: "Colorado", slug: "colorado" },
      { id: "blazer", name_ar: "بليزر", name_en: "Blazer", slug: "blazer" },
      { id: "equinox", name_ar: "اكوينوكس", name_en: "Equinox", slug: "equinox" }
    ]
  },
  {
    id: "gmc",
    name_ar: "جي ام سي",
    name_en: "GMC",
    slug: "gmc",
    models: [
      { id: "yukon", name_ar: "يوكن", name_en: "Yukon", slug: "yukon" },
      { id: "sierra", name_ar: "سييرا", name_en: "Sierra", slug: "sierra" },
      { id: "acadia", name_ar: "اكاديا", name_en: "Acadia", slug: "acadia" },
      { id: "terrain", name_ar: "تيرين", name_en: "Terrain", slug: "terrain" },
      { id: "canyon", name_ar: "كانيون", name_en: "Canyon", slug: "canyon" }
    ]
  },
  {
    id: "cadillac",
    name_ar: "كاديلاك",
    name_en: "Cadillac",
    slug: "cadillac",
    models: [
      { id: "escalade", name_ar: "اسكاليد", name_en: "Escalade", slug: "escalade" },
      { id: "xt5", name_ar: "اكس تي 5", name_en: "XT5", slug: "xt5" },
      { id: "xt6", name_ar: "اكس تي 6", name_en: "XT6", slug: "xt6" },
      { id: "ct5", name_ar: "سي تي 5", name_en: "CT5", slug: "ct5" },
      { id: "ct6", name_ar: "سي تي 6", name_en: "CT6", slug: "ct6" }
    ]
  },
  {
    id: "dodge",
    name_ar: "دودج",
    name_en: "Dodge",
    slug: "dodge",
    models: [
      { id: "charger", name_ar: "تشارجر", name_en: "Charger", slug: "charger" },
      { id: "challenger", name_ar: "تشالنجر", name_en: "Challenger", slug: "challenger" },
      { id: "durango", name_ar: "دورانجو", name_en: "Durango", slug: "durango" },
      { id: "ram-1500", name_ar: "رام 1500", name_en: "Ram 1500", slug: "ram-1500" }
    ]
  },
  {
    id: "jeep",
    name_ar: "جيب",
    name_en: "Jeep",
    slug: "jeep",
    models: [
      { id: "wrangler", name_ar: "رانجلر", name_en: "Wrangler", slug: "wrangler" },
      { id: "grand-cherokee", name_ar: "جراند شيروكي", name_en: "Grand Cherokee", slug: "grand-cherokee" },
      { id: "cherokee", name_ar: "شيروكي", name_en: "Cherokee", slug: "cherokee" },
      { id: "compass", name_ar: "كومباس", name_en: "Compass", slug: "compass" },
      { id: "renegade", name_ar: "رينيجيد", name_en: "Renegade", slug: "renegade" },
      { id: "gladiator", name_ar: "جلادياتور", name_en: "Gladiator", slug: "gladiator" }
    ]
  },
  {
    id: "chrysler",
    name_ar: "كرايسلر",
    name_en: "Chrysler",
    slug: "chrysler",
    models: [
      { id: "300", name_ar: "300", name_en: "300", slug: "300" },
      { id: "pacifica", name_ar: "باسيفيكا", name_en: "Pacifica", slug: "pacifica" }
    ]
  },
  {
    id: "lincoln",
    name_ar: "لينكولن",
    name_en: "Lincoln",
    slug: "lincoln",
    models: [
      { id: "navigator", name_ar: "نافيجيتور", name_en: "Navigator", slug: "navigator" },
      { id: "aviator", name_ar: "افياتور", name_en: "Aviator", slug: "aviator" },
      { id: "nautilus", name_ar: "ناوتيلوس", name_en: "Nautilus", slug: "nautilus" },
      { id: "corsair", name_ar: "كورسير", name_en: "Corsair", slug: "corsair" }
    ]
  },
  {
    id: "tesla",
    name_ar: "تيسلا",
    name_en: "Tesla",
    slug: "tesla",
    models: [
      { id: "model-s", name_ar: "موديل اس", name_en: "Model S", slug: "model-s" },
      { id: "model-3", name_ar: "موديل 3", name_en: "Model 3", slug: "model-3" },
      { id: "model-x", name_ar: "موديل اكس", name_en: "Model X", slug: "model-x" },
      { id: "model-y", name_ar: "موديل واي", name_en: "Model Y", slug: "model-y" }
    ]
  },

  // German Brands
  {
    id: "mercedes-benz",
    name_ar: "مرسيدس بنز",
    name_en: "Mercedes-Benz",
    slug: "mercedes-benz",
    models: [
      { id: "a-class", name_ar: "الفئة ايه", name_en: "A-Class", slug: "a-class" },
      { id: "c-class", name_ar: "الفئة سي", name_en: "C-Class", slug: "c-class" },
      { id: "e-class", name_ar: "الفئة اي", name_en: "E-Class", slug: "e-class" },
      { id: "s-class", name_ar: "الفئة اس", name_en: "S-Class", slug: "s-class" },
      { id: "gla", name_ar: "جي ال ايه", name_en: "GLA", slug: "gla" },
      { id: "glb", name_ar: "جي ال بي", name_en: "GLB", slug: "glb" },
      { id: "glc", name_ar: "جي ال سي", name_en: "GLC", slug: "glc" },
      { id: "gle", name_ar: "جي ال اي", name_en: "GLE", slug: "gle" },
      { id: "gls", name_ar: "جي ال اس", name_en: "GLS", slug: "gls" },
      { id: "g-class", name_ar: "جي كلاس", name_en: "G-Class", slug: "g-class" },
      { id: "cla", name_ar: "سي ال ايه", name_en: "CLA", slug: "cla" },
      { id: "cls", name_ar: "سي ال اس", name_en: "CLS", slug: "cls" },
      { id: "amg-gt", name_ar: "اي ام جي جي تي", name_en: "AMG GT", slug: "amg-gt" },
      { id: "eqc", name_ar: "اي كيو سي", name_en: "EQC", slug: "eqc" },
      { id: "eqs", name_ar: "اي كيو اس", name_en: "EQS", slug: "eqs" }
    ]
  },
  {
    id: "bmw",
    name_ar: "بي ام دبليو",
    name_en: "BMW",
    slug: "bmw",
    models: [
      { id: "1-series", name_ar: "الفئة 1", name_en: "1 Series", slug: "1-series" },
      { id: "2-series", name_ar: "الفئة 2", name_en: "2 Series", slug: "2-series" },
      { id: "3-series", name_ar: "الفئة 3", name_en: "3 Series", slug: "3-series" },
      { id: "4-series", name_ar: "الفئة 4", name_en: "4 Series", slug: "4-series" },
      { id: "5-series", name_ar: "الفئة 5", name_en: "5 Series", slug: "5-series" },
      { id: "6-series", name_ar: "الفئة 6", name_en: "6 Series", slug: "6-series" },
      { id: "7-series", name_ar: "الفئة 7", name_en: "7 Series", slug: "7-series" },
      { id: "8-series", name_ar: "الفئة 8", name_en: "8 Series", slug: "8-series" },
      { id: "x1", name_ar: "اكس 1", name_en: "X1", slug: "x1" },
      { id: "x2", name_ar: "اكس 2", name_en: "X2", slug: "x2" },
      { id: "x3", name_ar: "اكس 3", name_en: "X3", slug: "x3" },
      { id: "x4", name_ar: "اكس 4", name_en: "X4", slug: "x4" },
      { id: "x5", name_ar: "اكس 5", name_en: "X5", slug: "x5" },
      { id: "x6", name_ar: "اكس 6", name_en: "X6", slug: "x6" },
      { id: "x7", name_ar: "اكس 7", name_en: "X7", slug: "x7" },
      { id: "z4", name_ar: "زد 4", name_en: "Z4", slug: "z4" },
      { id: "i3", name_ar: "اي 3", name_en: "i3", slug: "i3" },
      { id: "i4", name_ar: "اي 4", name_en: "i4", slug: "i4" },
      { id: "i7", name_ar: "اي 7", name_en: "i7", slug: "i7" },
      { id: "ix", name_ar: "اي اكس", name_en: "iX", slug: "ix" }
    ]
  },
  {
    id: "audi",
    name_ar: "اودي",
    name_en: "Audi",
    slug: "audi",
    models: [
      { id: "a3", name_ar: "ايه 3", name_en: "A3", slug: "a3" },
      { id: "a4", name_ar: "ايه 4", name_en: "A4", slug: "a4" },
      { id: "a5", name_ar: "ايه 5", name_en: "A5", slug: "a5" },
      { id: "a6", name_ar: "ايه 6", name_en: "A6", slug: "a6" },
      { id: "a7", name_ar: "ايه 7", name_en: "A7", slug: "a7" },
      { id: "a8", name_ar: "ايه 8", name_en: "A8", slug: "a8" },
      { id: "q2", name_ar: "كيو 2", name_en: "Q2", slug: "q2" },
      { id: "q3", name_ar: "كيو 3", name_en: "Q3", slug: "q3" },
      { id: "q4-e-tron", name_ar: "كيو 4 اي ترون", name_en: "Q4 e-tron", slug: "q4-e-tron" },
      { id: "q5", name_ar: "كيو 5", name_en: "Q5", slug: "q5" },
      { id: "q7", name_ar: "كيو 7", name_en: "Q7", slug: "q7" },
      { id: "q8", name_ar: "كيو 8", name_en: "Q8", slug: "q8" },
      { id: "tt", name_ar: "تي تي", name_en: "TT", slug: "tt" },
      { id: "r8", name_ar: "ار 8", name_en: "R8", slug: "r8" },
      { id: "rs3", name_ar: "ار اس 3", name_en: "RS3", slug: "rs3" },
      { id: "e-tron", name_ar: "اي ترون", name_en: "e-tron", slug: "e-tron" }
    ]
  },
  {
    id: "volkswagen",
    name_ar: "فولكس فاجن",
    name_en: "Volkswagen",
    slug: "volkswagen",
    models: [
      { id: "golf", name_ar: "جولف", name_en: "Golf", slug: "golf" },
      { id: "passat", name_ar: "باسات", name_en: "Passat", slug: "passat" },
      { id: "tiguan", name_ar: "تيجوان", name_en: "Tiguan", slug: "tiguan" },
      { id: "touareg", name_ar: "طوارق", name_en: "Touareg", slug: "touareg" },
      { id: "jetta", name_ar: "جيتا", name_en: "Jetta", slug: "jetta" },
      { id: "arteon", name_ar: "ارتيون", name_en: "Arteon", slug: "arteon" },
      { id: "t-roc", name_ar: "تي روك", name_en: "T-Roc", slug: "t-roc" },
      { id: "id4", name_ar: "اي دي 4", name_en: "ID.4", slug: "id4" }
    ]
  },
  {
    id: "porsche",
    name_ar: "بورش",
    name_en: "Porsche",
    slug: "porsche",
    models: [
      { id: "911", name_ar: "911", name_en: "911", slug: "911" },
      { id: "cayenne", name_ar: "كايين", name_en: "Cayenne", slug: "cayenne" },
      { id: "macan", name_ar: "ماكان", name_en: "Macan", slug: "macan" },
      { id: "panamera", name_ar: "باناميرا", name_en: "Panamera", slug: "panamera" },
      { id: "taycan", name_ar: "تايكان", name_en: "Taycan", slug: "taycan" },
      { id: "718", name_ar: "718", name_en: "718", slug: "718" }
    ]
  },
  {
    id: "mini",
    name_ar: "ميني",
    name_en: "Mini",
    slug: "mini",
    models: [
      { id: "cooper", name_ar: "كوبر", name_en: "Cooper", slug: "cooper" },
      { id: "countryman", name_ar: "كونتريمان", name_en: "Countryman", slug: "countryman" },
      { id: "clubman", name_ar: "كلوبمان", name_en: "Clubman", slug: "clubman" }
    ]
  },
  {
    id: "opel",
    name_ar: "اوبل",
    name_en: "Opel",
    slug: "opel",
    models: [
      { id: "astra", name_ar: "استرا", name_en: "Astra", slug: "astra" },
      { id: "insignia", name_ar: "انسيجنيا", name_en: "Insignia", slug: "insignia" },
      { id: "corsa", name_ar: "كورسا", name_en: "Corsa", slug: "corsa" }
    ]
  },

  // British Brands
  {
    id: "land-rover",
    name_ar: "لاند روفر",
    name_en: "Land Rover",
    slug: "land-rover",
    models: [
      { id: "range-rover", name_ar: "رينج روفر", name_en: "Range Rover", slug: "range-rover" },
      { id: "range-rover-sport", name_ar: "رينج روفر سبورت", name_en: "Range Rover Sport", slug: "range-rover-sport" },
      { id: "range-rover-velar", name_ar: "رينج روفر فيلار", name_en: "Range Rover Velar", slug: "range-rover-velar" },
      { id: "range-rover-evoque", name_ar: "رينج روفر ايفوك", name_en: "Range Rover Evoque", slug: "range-rover-evoque" },
      { id: "discovery", name_ar: "ديسكفري", name_en: "Discovery", slug: "discovery" },
      { id: "discovery-sport", name_ar: "ديسكفري سبورت", name_en: "Discovery Sport", slug: "discovery-sport" },
      { id: "defender", name_ar: "ديفندر", name_en: "Defender", slug: "defender" }
    ]
  },
  {
    id: "jaguar",
    name_ar: "جاكوار",
    name_en: "Jaguar",
    slug: "jaguar",
    models: [
      { id: "xf", name_ar: "اكس اف", name_en: "XF", slug: "xf" },
      { id: "xe", name_ar: "اكس اي", name_en: "XE", slug: "xe" },
      { id: "xj", name_ar: "اكس جي", name_en: "XJ", slug: "xj" },
      { id: "f-pace", name_ar: "اف بيس", name_en: "F-Pace", slug: "f-pace" },
      { id: "e-pace", name_ar: "اي بيس", name_en: "E-Pace", slug: "e-pace" },
      { id: "i-pace", name_ar: "اي بيس", name_en: "I-Pace", slug: "i-pace" },
      { id: "f-type", name_ar: "اف تايب", name_en: "F-Type", slug: "f-type" }
    ]
  },
  {
    id: "bentley",
    name_ar: "بنتلي",
    name_en: "Bentley",
    slug: "bentley",
    models: [
      { id: "continental-gt", name_ar: "كونتيننتال جي تي", name_en: "Continental GT", slug: "continental-gt" },
      { id: "flying-spur", name_ar: "فلاينج سبير", name_en: "Flying Spur", slug: "flying-spur" },
      { id: "bentayga", name_ar: "بنتايجا", name_en: "Bentayga", slug: "bentayga" }
    ]
  },
  {
    id: "rolls-royce",
    name_ar: "رولز رويس",
    name_en: "Rolls-Royce",
    slug: "rolls-royce",
    models: [
      { id: "phantom", name_ar: "فانتوم", name_en: "Phantom", slug: "phantom" },
      { id: "ghost", name_ar: "جوست", name_en: "Ghost", slug: "ghost" },
      { id: "wraith", name_ar: "رايث", name_en: "Wraith", slug: "wraith" },
      { id: "dawn", name_ar: "داون", name_en: "Dawn", slug: "dawn" },
      { id: "cullinan", name_ar: "كولينان", name_en: "Cullinan", slug: "cullinan" }
    ]
  },
  {
    id: "aston-martin",
    name_ar: "استون مارتن",
    name_en: "Aston Martin",
    slug: "aston-martin",
    models: [
      { id: "db11", name_ar: "دي بي 11", name_en: "DB11", slug: "db11" },
      { id: "vantage", name_ar: "فانتاج", name_en: "Vantage", slug: "vantage" },
      { id: "dbx", name_ar: "دي بي اكس", name_en: "DBX", slug: "dbx" }
    ]
  },
  {
    id: "mclaren",
    name_ar: "ماكلارين",
    name_en: "McLaren",
    slug: "mclaren",
    models: [
      { id: "720s", name_ar: "720 اس", name_en: "720S", slug: "720s" },
      { id: "gt", name_ar: "جي تي", name_en: "GT", slug: "gt" },
      { id: "artura", name_ar: "ارتورا", name_en: "Artura", slug: "artura" }
    ]
  },
  {
    id: "lotus",
    name_ar: "لوتس",
    name_en: "Lotus",
    slug: "lotus",
    models: [
      { id: "evora", name_ar: "ايفورا", name_en: "Evora", slug: "evora" },
      { id: "emira", name_ar: "اميرا", name_en: "Emira", slug: "emira" }
    ]
  },

  // Italian Brands
  {
    id: "ferrari",
    name_ar: "فيراري",
    name_en: "Ferrari",
    slug: "ferrari",
    models: [
      { id: "roma", name_ar: "روما", name_en: "Roma", slug: "roma" },
      { id: "portofino", name_ar: "بورتوفينو", name_en: "Portofino", slug: "portofino" },
      { id: "f8-tributo", name_ar: "اف 8 تريبيوتو", name_en: "F8 Tributo", slug: "f8-tributo" },
      { id: "sf90", name_ar: "اس اف 90", name_en: "SF90", slug: "sf90" },
      { id: "812", name_ar: "812", name_en: "812", slug: "812" }
    ]
  },
  {
    id: "lamborghini",
    name_ar: "لامبورجيني",
    name_en: "Lamborghini",
    slug: "lamborghini",
    models: [
      { id: "huracan", name_ar: "هوراكان", name_en: "Huracan", slug: "huracan" },
      { id: "aventador", name_ar: "افينتادور", name_en: "Aventador", slug: "aventador" },
      { id: "urus", name_ar: "اوروس", name_en: "Urus", slug: "urus" }
    ]
  },
  {
    id: "maserati",
    name_ar: "مازيراتي",
    name_en: "Maserati",
    slug: "maserati",
    models: [
      { id: "ghibli", name_ar: "جيبلي", name_en: "Ghibli", slug: "ghibli" },
      { id: "quattroporte", name_ar: "كواتروبورتي", name_en: "Quattroporte", slug: "quattroporte" },
      { id: "levante", name_ar: "ليفانتي", name_en: "Levante", slug: "levante" },
      { id: "mc20", name_ar: "ام سي 20", name_en: "MC20", slug: "mc20" }
    ]
  },
  {
    id: "alfa-romeo",
    name_ar: "الفا روميو",
    name_en: "Alfa Romeo",
    slug: "alfa-romeo",
    models: [
      { id: "giulia", name_ar: "جوليا", name_en: "Giulia", slug: "giulia" },
      { id: "stelvio", name_ar: "ستيلفيو", name_en: "Stelvio", slug: "stelvio" },
      { id: "tonale", name_ar: "تونالي", name_en: "Tonale", slug: "tonale" }
    ]
  },
  {
    id: "fiat",
    name_ar: "فيات",
    name_en: "Fiat",
    slug: "fiat",
    models: [
      { id: "500", name_ar: "500", name_en: "500", slug: "500" },
      { id: "panda", name_ar: "باندا", name_en: "Panda", slug: "panda" },
      { id: "tipo", name_ar: "تيبو", name_en: "Tipo", slug: "tipo" }
    ]
  },

  // French Brands
  {
    id: "peugeot",
    name_ar: "بيجو",
    name_en: "Peugeot",
    slug: "peugeot",
    models: [
      { id: "208", name_ar: "208", name_en: "208", slug: "208" },
      { id: "308", name_ar: "308", name_en: "308", slug: "308" },
      { id: "508", name_ar: "508", name_en: "508", slug: "508" },
      { id: "2008", name_ar: "2008", name_en: "2008", slug: "2008" },
      { id: "3008", name_ar: "3008", name_en: "3008", slug: "3008" },
      { id: "5008", name_ar: "5008", name_en: "5008", slug: "5008" }
    ]
  },
  {
    id: "renault",
    name_ar: "رينو",
    name_en: "Renault",
    slug: "renault",
    models: [
      { id: "clio", name_ar: "كليو", name_en: "Clio", slug: "clio" },
      { id: "megane", name_ar: "ميجان", name_en: "Megane", slug: "megane" },
      { id: "kadjar", name_ar: "كادجار", name_en: "Kadjar", slug: "kadjar" },
      { id: "koleos", name_ar: "كوليوس", name_en: "Koleos", slug: "koleos" },
      { id: "duster", name_ar: "داستر", name_en: "Duster", slug: "duster" }
    ]
  },
  {
    id: "citroen",
    name_ar: "ستروين",
    name_en: "Citroen",
    slug: "citroen",
    models: [
      { id: "c3", name_ar: "سي 3", name_en: "C3", slug: "c3" },
      { id: "c4", name_ar: "سي 4", name_en: "C4", slug: "c4" },
      { id: "c5-aircross", name_ar: "سي 5 اير كروس", name_en: "C5 Aircross", slug: "c5-aircross" }
    ]
  },

  // Swedish Brands
  {
    id: "volvo",
    name_ar: "فولفو",
    name_en: "Volvo",
    slug: "volvo",
    models: [
      { id: "s60", name_ar: "اس 60", name_en: "S60", slug: "s60" },
      { id: "s90", name_ar: "اس 90", name_en: "S90", slug: "s90" },
      { id: "xc40", name_ar: "اكس سي 40", name_en: "XC40", slug: "xc40" },
      { id: "xc60", name_ar: "اكس سي 60", name_en: "XC60", slug: "xc60" },
      { id: "xc90", name_ar: "اكس سي 90", name_en: "XC90", slug: "xc90" },
      { id: "c40", name_ar: "سي 40", name_en: "C40", slug: "c40" }
    ]
  },

  // Chinese Brands
  {
    id: "mg",
    name_ar: "ام جي",
    name_en: "MG",
    slug: "mg",
    models: [
      { id: "zs", name_ar: "زد اس", name_en: "ZS", slug: "zs" },
      { id: "rx5", name_ar: "ار اكس 5", name_en: "RX5", slug: "rx5" },
      { id: "rx8", name_ar: "ار اكس 8", name_en: "RX8", slug: "rx8" },
      { id: "hs", name_ar: "اتش اس", name_en: "HS", slug: "hs" },
      { id: "gt", name_ar: "جي تي", name_en: "GT", slug: "gt" },
      { id: "5", name_ar: "5", name_en: "5", slug: "5" },
      { id: "6", name_ar: "6", name_en: "6", slug: "6" }
    ]
  },
  {
    id: "geely",
    name_ar: "جيلي",
    name_en: "Geely",
    slug: "geely",
    models: [
      { id: "emgrand", name_ar: "امجراند", name_en: "Emgrand", slug: "emgrand" },
      { id: "coolray", name_ar: "كول راي", name_en: "Coolray", slug: "coolray" },
      { id: "tugella", name_ar: "توجيلا", name_en: "Tugella", slug: "tugella" },
      { id: "azkarra", name_ar: "ازكارا", name_en: "Azkarra", slug: "azkarra" },
      { id: "monjaro", name_ar: "مونجارو", name_en: "Monjaro", slug: "monjaro" }
    ]
  },
  {
    id: "byd",
    name_ar: "بي واي دي",
    name_en: "BYD",
    slug: "byd",
    models: [
      { id: "tang", name_ar: "تانج", name_en: "Tang", slug: "tang" },
      { id: "song", name_ar: "سونج", name_en: "Song", slug: "song" },
      { id: "han", name_ar: "هان", name_en: "Han", slug: "han" },
      { id: "atto-3", name_ar: "اتو 3", name_en: "Atto 3", slug: "atto-3" },
      { id: "seal", name_ar: "سيل", name_en: "Seal", slug: "seal" }
    ]
  },
  {
    id: "haval",
    name_ar: "هافال",
    name_en: "Haval",
    slug: "haval",
    models: [
      { id: "h6", name_ar: "اتش 6", name_en: "H6", slug: "h6" },
      { id: "jolion", name_ar: "جوليون", name_en: "Jolion", slug: "jolion" },
      { id: "h9", name_ar: "اتش 9", name_en: "H9", slug: "h9" },
      { id: "f7", name_ar: "اف 7", name_en: "F7", slug: "f7" }
    ]
  },
  {
    id: "changan",
    name_ar: "شانجان",
    name_en: "Changan",
    slug: "changan",
    models: [
      { id: "cs35-plus", name_ar: "سي اس 35 بلس", name_en: "CS35 Plus", slug: "cs35-plus" },
      { id: "cs55-plus", name_ar: "سي اس 55 بلس", name_en: "CS55 Plus", slug: "cs55-plus" },
      { id: "cs75-plus", name_ar: "سي اس 75 بلس", name_en: "CS75 Plus", slug: "cs75-plus" },
      { id: "cs85", name_ar: "سي اس 85", name_en: "CS85", slug: "cs85" },
      { id: "cs95", name_ar: "سي اس 95", name_en: "CS95", slug: "cs95" },
      { id: "alsvin", name_ar: "السفين", name_en: "Alsvin", slug: "alsvin" }
    ]
  },
  {
    id: "chery",
    name_ar: "شيري",
    name_en: "Chery",
    slug: "chery",
    models: [
      { id: "tiggo-2", name_ar: "تيجو 2", name_en: "Tiggo 2", slug: "tiggo-2" },
      { id: "tiggo-4", name_ar: "تيجو 4", name_en: "Tiggo 4", slug: "tiggo-4" },
      { id: "tiggo-7", name_ar: "تيجو 7", name_en: "Tiggo 7", slug: "tiggo-7" },
      { id: "tiggo-8", name_ar: "تيجو 8", name_en: "Tiggo 8", slug: "tiggo-8" },
      { id: "tiggo-8-pro", name_ar: "تيجو 8 برو", name_en: "Tiggo 8 Pro", slug: "tiggo-8-pro" },
      { id: "arrizo-5", name_ar: "اريزو 5", name_en: "Arrizo 5", slug: "arrizo-5" },
      { id: "arrizo-6", name_ar: "اريزو 6", name_en: "Arrizo 6", slug: "arrizo-6" }
    ]
  },
  {
    id: "gac",
    name_ar: "جي ايه سي",
    name_en: "GAC",
    slug: "gac",
    models: [
      { id: "gs3", name_ar: "جي اس 3", name_en: "GS3", slug: "gs3" },
      { id: "gs4", name_ar: "جي اس 4", name_en: "GS4", slug: "gs4" },
      { id: "gs8", name_ar: "جي اس 8", name_en: "GS8", slug: "gs8" },
      { id: "emkoo", name_ar: "امكو", name_en: "Emkoo", slug: "emkoo" }
    ]
  },
  {
    id: "jetour",
    name_ar: "جيتور",
    name_en: "Jetour",
    slug: "jetour",
    models: [
      { id: "x70", name_ar: "اكس 70", name_en: "X70", slug: "x70" },
      { id: "x70-plus", name_ar: "اكس 70 بلس", name_en: "X70 Plus", slug: "x70-plus" },
      { id: "x90", name_ar: "اكس 90", name_en: "X90", slug: "x90" },
      { id: "dashing", name_ar: "داشينج", name_en: "Dashing", slug: "dashing" }
    ]
  },
  {
    id: "tank",
    name_ar: "تانك",
    name_en: "Tank",
    slug: "tank",
    models: [
      { id: "300", name_ar: "300", name_en: "300", slug: "300" },
      { id: "500", name_ar: "500", name_en: "500", slug: "500" }
    ]
  },
  {
    id: "great-wall",
    name_ar: "جريت وول",
    name_en: "Great Wall",
    slug: "great-wall",
    models: [
      { id: "wingle-5", name_ar: "وينجل 5", name_en: "Wingle 5", slug: "wingle-5" },
      { id: "wingle-7", name_ar: "وينجل 7", name_en: "Wingle 7", slug: "wingle-7" },
      { id: "poer", name_ar: "بوير", name_en: "Poer", slug: "poer" }
    ]
  },
  {
    id: "dongfeng",
    name_ar: "دونج فينج",
    name_en: "Dongfeng",
    slug: "dongfeng",
    models: [
      { id: "rich-6", name_ar: "ريتش 6", name_en: "Rich 6", slug: "rich-6" },
      { id: "ax7", name_ar: "ايه اكس 7", name_en: "AX7", slug: "ax7" }
    ]
  },
  {
    id: "jac",
    name_ar: "جاك",
    name_en: "JAC",
    slug: "jac",
    models: [
      { id: "j7", name_ar: "جي 7", name_en: "J7", slug: "j7" },
      { id: "s3", name_ar: "اس 3", name_en: "S3", slug: "s3" },
      { id: "s4", name_ar: "اس 4", name_en: "S4", slug: "s4" }
    ]
  },
  {
    id: "baic",
    name_ar: "بايك",
    name_en: "BAIC",
    slug: "baic",
    models: [
      { id: "bj40", name_ar: "بي جي 40", name_en: "BJ40", slug: "bj40" },
      { id: "x55", name_ar: "اكس 55", name_en: "X55", slug: "x55" }
    ]
  },
  {
    id: "hongqi",
    name_ar: "هونج كي",
    name_en: "Hongqi",
    slug: "hongqi",
    models: [
      { id: "h5", name_ar: "اتش 5", name_en: "H5", slug: "h5" },
      { id: "h9", name_ar: "اتش 9", name_en: "H9", slug: "h9" },
      { id: "hs5", name_ar: "اتش اس 5", name_en: "HS5", slug: "hs5" }
    ]
  },

  // Indian Brands
  {
    id: "mahindra",
    name_ar: "ماهيندرا",
    name_en: "Mahindra",
    slug: "mahindra",
    models: [
      { id: "scorpio", name_ar: "سكوربيو", name_en: "Scorpio", slug: "scorpio" },
      { id: "xuv500", name_ar: "اكس يو في 500", name_en: "XUV500", slug: "xuv500" },
      { id: "xuv700", name_ar: "اكس يو في 700", name_en: "XUV700", slug: "xuv700" }
    ]
  },

  // Other Brands
  {
    id: "ssangyong",
    name_ar: "سانج يونج",
    name_en: "SsangYong",
    slug: "ssangyong",
    models: [
      { id: "rexton", name_ar: "ريكستون", name_en: "Rexton", slug: "rexton" },
      { id: "tivoli", name_ar: "تيفولي", name_en: "Tivoli", slug: "tivoli" }
    ]
  },
  {
    id: "maxus",
    name_ar: "ماكسوس",
    name_en: "Maxus",
    slug: "maxus",
    models: [
      { id: "t60", name_ar: "تي 60", name_en: "T60", slug: "t60" },
      { id: "d90", name_ar: "دي 90", name_en: "D90", slug: "d90" }
    ]
  },
  {
    id: "foton",
    name_ar: "فوتون",
    name_en: "Foton",
    slug: "foton",
    models: [
      { id: "tunland", name_ar: "تنلاند", name_en: "Tunland", slug: "tunland" }
    ]
  },
  {
    id: "bugatti",
    name_ar: "بوجاتي",
    name_en: "Bugatti",
    slug: "bugatti",
    models: [
      { id: "chiron", name_ar: "شيرون", name_en: "Chiron", slug: "chiron" }
    ]
  },
  {
    id: "polestar",
    name_ar: "بولستار",
    name_en: "Polestar",
    slug: "polestar",
    models: [
      { id: "2", name_ar: "2", name_en: "2", slug: "2" },
      { id: "3", name_ar: "3", name_en: "3", slug: "3" }
    ]
  }
];

// ============================================
// REAL ESTATE CATEGORY
// ============================================

export const realEstateSubcategories: Subcategory[] = [
  {
    id: "for-sale",
    name_ar: "للبيع",
    name_en: "For Sale",
    slug: "for-sale",
    items: [
      { id: "apartments", name_ar: "شقق", name_en: "Apartments", slug: "apartments" },
      { id: "villas", name_ar: "فلل", name_en: "Villas", slug: "villas" },
      { id: "buildings", name_ar: "عمارات", name_en: "Buildings", slug: "buildings" },
      { id: "lands", name_ar: "أراضي", name_en: "Lands", slug: "lands" },
      { id: "commercial-lands", name_ar: "أراضي تجارية", name_en: "Commercial Lands", slug: "commercial-lands" },
      { id: "farms", name_ar: "مزارع", name_en: "Farms", slug: "farms" },
      { id: "chalets", name_ar: "استراحات", name_en: "Chalets", slug: "chalets" },
      { id: "shops", name_ar: "محلات", name_en: "Shops", slug: "shops" },
      { id: "offices", name_ar: "مكاتب", name_en: "Offices", slug: "offices" },
      { id: "warehouses", name_ar: "مستودعات", name_en: "Warehouses", slug: "warehouses" },
      { id: "showrooms", name_ar: "معارض", name_en: "Showrooms", slug: "showrooms" }
    ]
  },
  {
    id: "for-rent",
    name_ar: "للإيجار",
    name_en: "For Rent",
    slug: "for-rent",
    items: [
      { id: "apartments", name_ar: "شقق", name_en: "Apartments", slug: "apartments" },
      { id: "villas", name_ar: "فلل", name_en: "Villas", slug: "villas" },
      { id: "buildings", name_ar: "عمارات", name_en: "Buildings", slug: "buildings" },
      { id: "rooms", name_ar: "غرف", name_en: "Rooms", slug: "rooms" },
      { id: "floors", name_ar: "ادوار", name_en: "Floors", slug: "floors" },
      { id: "chalets", name_ar: "استراحات", name_en: "Chalets", slug: "chalets" },
      { id: "shops", name_ar: "محلات", name_en: "Shops", slug: "shops" },
      { id: "offices", name_ar: "مكاتب", name_en: "Offices", slug: "offices" },
      { id: "warehouses", name_ar: "مستودعات", name_en: "Warehouses", slug: "warehouses" },
      { id: "showrooms", name_ar: "معارض", name_en: "Showrooms", slug: "showrooms" }
    ]
  },
  {
    id: "real-estate-services",
    name_ar: "خدمات عقارية",
    name_en: "Real Estate Services",
    slug: "real-estate-services",
    items: [
      { id: "real-estate-agents", name_ar: "مكاتب عقارية", name_en: "Real Estate Agents", slug: "real-estate-agents" },
      { id: "property-management", name_ar: "إدارة ممتلكات", name_en: "Property Management", slug: "property-management" },
      { id: "maintenance", name_ar: "صيانة", name_en: "Maintenance", slug: "maintenance" }
    ]
  }
];

// ============================================
// ELECTRONICS CATEGORY
// ============================================

export const electronicsSubcategories: Subcategory[] = [
  {
    id: "mobile-phones",
    name_ar: "جوالات",
    name_en: "Mobile Phones",
    slug: "mobile-phones",
    items: [
      { id: "smartphones", name_ar: "هواتف ذكية", name_en: "Smartphones", slug: "smartphones" },
      { id: "feature-phones", name_ar: "هواتف عادية", name_en: "Feature Phones", slug: "feature-phones" },
      { id: "mobile-accessories", name_ar: "اكسسوارات جوالات", name_en: "Mobile Accessories", slug: "mobile-accessories" }
    ]
  },
  {
    id: "computers-tablets",
    name_ar: "كمبيوتر وتابلت",
    name_en: "Computers & Tablets",
    slug: "computers-tablets",
    items: [
      { id: "laptops", name_ar: "لابتوبات", name_en: "Laptops", slug: "laptops" },
      { id: "desktops", name_ar: "كمبيوتر مكتبي", name_en: "Desktop Computers", slug: "desktops" },
      { id: "tablets", name_ar: "تابلت", name_en: "Tablets", slug: "tablets" },
      { id: "monitors", name_ar: "شاشات", name_en: "Monitors", slug: "monitors" },
      { id: "computer-accessories", name_ar: "اكسسوارات كمبيوتر", name_en: "Computer Accessories", slug: "computer-accessories" }
    ]
  },
  {
    id: "tvs-audio",
    name_ar: "تلفزيونات واجهزة صوتية",
    name_en: "TVs & Audio",
    slug: "tvs-audio",
    items: [
      { id: "televisions", name_ar: "تلفزيونات", name_en: "Televisions", slug: "televisions" },
      { id: "speakers", name_ar: "سماعات", name_en: "Speakers", slug: "speakers" },
      { id: "headphones", name_ar: "سماعات رأس", name_en: "Headphones", slug: "headphones" },
      { id: "home-theater", name_ar: "سينما منزلية", name_en: "Home Theater", slug: "home-theater" }
    ]
  },
  {
    id: "gaming",
    name_ar: "ألعاب إلكترونية",
    name_en: "Gaming",
    slug: "gaming",
    items: [
      { id: "playstation", name_ar: "بلايستيشن", name_en: "PlayStation", slug: "playstation" },
      { id: "xbox", name_ar: "اكس بوكس", name_en: "Xbox", slug: "xbox" },
      { id: "nintendo", name_ar: "نينتندو", name_en: "Nintendo", slug: "nintendo" },
      { id: "gaming-accessories", name_ar: "اكسسوارات العاب", name_en: "Gaming Accessories", slug: "gaming-accessories" },
      { id: "games", name_ar: "العاب", name_en: "Games", slug: "games" }
    ]
  },
  {
    id: "cameras",
    name_ar: "كاميرات ومعدات تصوير",
    name_en: "Cameras & Photography",
    slug: "cameras",
    items: [
      { id: "digital-cameras", name_ar: "كاميرات رقمية", name_en: "Digital Cameras", slug: "digital-cameras" },
      { id: "dslr", name_ar: "كاميرات احترافية", name_en: "DSLR Cameras", slug: "dslr" },
      { id: "action-cameras", name_ar: "كاميرات اكشن", name_en: "Action Cameras", slug: "action-cameras" },
      { id: "camera-accessories", name_ar: "اكسسوارات تصوير", name_en: "Camera Accessories", slug: "camera-accessories" }
    ]
  },
  {
    id: "home-appliances",
    name_ar: "أجهزة منزلية",
    name_en: "Home Appliances",
    slug: "home-appliances",
    items: [
      { id: "refrigerators", name_ar: "ثلاجات", name_en: "Refrigerators", slug: "refrigerators" },
      { id: "washing-machines", name_ar: "غسالات", name_en: "Washing Machines", slug: "washing-machines" },
      { id: "air-conditioners", name_ar: "مكيفات", name_en: "Air Conditioners", slug: "air-conditioners" },
      { id: "vacuum-cleaners", name_ar: "مكانس كهربائية", name_en: "Vacuum Cleaners", slug: "vacuum-cleaners" },
      { id: "microwaves", name_ar: "ميكرويف", name_en: "Microwaves", slug: "microwaves" },
      { id: "ovens", name_ar: "أفران", name_en: "Ovens", slug: "ovens" },
      { id: "dishwashers", name_ar: "غسالات صحون", name_en: "Dishwashers", slug: "dishwashers" }
    ]
  },
  {
    id: "wearables",
    name_ar: "الأجهزة القابلة للارتداء",
    name_en: "Wearables",
    slug: "wearables",
    items: [
      { id: "smartwatches", name_ar: "ساعات ذكية", name_en: "Smartwatches", slug: "smartwatches" },
      { id: "fitness-trackers", name_ar: "اساور رياضية", name_en: "Fitness Trackers", slug: "fitness-trackers" }
    ]
  }
];

// ============================================
// FURNITURE CATEGORY
// ============================================

export const furnitureSubcategories: Subcategory[] = [
  {
    id: "living-room",
    name_ar: "غرف جلوس",
    name_en: "Living Room",
    slug: "living-room",
    items: [
      { id: "sofas", name_ar: "كنب", name_en: "Sofas", slug: "sofas" },
      { id: "coffee-tables", name_ar: "طاولات قهوة", name_en: "Coffee Tables", slug: "coffee-tables" },
      { id: "tv-stands", name_ar: "طاولات تلفزيون", name_en: "TV Stands", slug: "tv-stands" },
      { id: "shelves", name_ar: "رفوف", name_en: "Shelves", slug: "shelves" }
    ]
  },
  {
    id: "bedrooms",
    name_ar: "غرف نوم",
    name_en: "Bedrooms",
    slug: "bedrooms",
    items: [
      { id: "beds", name_ar: "أسرة", name_en: "Beds", slug: "beds" },
      { id: "mattresses", name_ar: "مراتب", name_en: "Mattresses", slug: "mattresses" },
      { id: "wardrobes", name_ar: "دواليب", name_en: "Wardrobes", slug: "wardrobes" },
      { id: "dressers", name_ar: "تسريحات", name_en: "Dressers", slug: "dressers" }
    ]
  },
  {
    id: "dining",
    name_ar: "غرف طعام",
    name_en: "Dining Room",
    slug: "dining",
    items: [
      { id: "dining-tables", name_ar: "طاولات طعام", name_en: "Dining Tables", slug: "dining-tables" },
      { id: "dining-chairs", name_ar: "كراسي طعام", name_en: "Dining Chairs", slug: "dining-chairs" },
      { id: "buffets", name_ar: "بوفيهات", name_en: "Buffets", slug: "buffets" }
    ]
  },
  {
    id: "outdoor",
    name_ar: "أثاث خارجي",
    name_en: "Outdoor Furniture",
    slug: "outdoor",
    items: [
      { id: "garden-furniture", name_ar: "أثاث حدائق", name_en: "Garden Furniture", slug: "garden-furniture" },
      { id: "patio-sets", name_ar: "طقم فناء", name_en: "Patio Sets", slug: "patio-sets" }
    ]
  },
  {
    id: "office",
    name_ar: "أثاث مكتبي",
    name_en: "Office Furniture",
    slug: "office",
    items: [
      { id: "office-desks", name_ar: "مكاتب", name_en: "Office Desks", slug: "office-desks" },
      { id: "office-chairs", name_ar: "كراسي مكتبية", name_en: "Office Chairs", slug: "office-chairs" },
      { id: "filing-cabinets", name_ar: "خزائن ملفات", name_en: "Filing Cabinets", slug: "filing-cabinets" }
    ]
  },
  {
    id: "decor",
    name_ar: "ديكور ومفروشات",
    name_en: "Decor & Furnishings",
    slug: "decor",
    items: [
      { id: "curtains", name_ar: "ستائر", name_en: "Curtains", slug: "curtains" },
      { id: "carpets", name_ar: "سجاد", name_en: "Carpets", slug: "carpets" },
      { id: "lighting", name_ar: "إضاءة", name_en: "Lighting", slug: "lighting" },
      { id: "wall-art", name_ar: "لوحات جدارية", name_en: "Wall Art", slug: "wall-art" },
      { id: "mirrors", name_ar: "مرايا", name_en: "Mirrors", slug: "mirrors" }
    ]
  },
  {
    id: "antiques",
    name_ar: "تحف وانتيكات",
    name_en: "Antiques",
    slug: "antiques"
  }
];

// ============================================
// ANIMALS CATEGORY
// ============================================

export const animalsSubcategories: Subcategory[] = [
  {
    id: "livestock",
    name_ar: "مواشي",
    name_en: "Livestock",
    slug: "livestock",
    items: [
      { id: "sheep", name_ar: "أغنام", name_en: "Sheep", slug: "sheep" },
      { id: "goats", name_ar: "ماعز", name_en: "Goats", slug: "goats" },
      { id: "camels", name_ar: "إبل", name_en: "Camels", slug: "camels" },
      { id: "cows", name_ar: "أبقار", name_en: "Cows", slug: "cows" }
    ]
  },
  {
    id: "pets",
    name_ar: "حيوانات أليفة",
    name_en: "Pets",
    slug: "pets",
    items: [
      { id: "cats", name_ar: "قطط", name_en: "Cats", slug: "cats" },
      { id: "dogs", name_ar: "كلاب", name_en: "Dogs", slug: "dogs" },
      { id: "rabbits", name_ar: "أرانب", name_en: "Rabbits", slug: "rabbits" },
      { id: "hamsters", name_ar: "هامستر", name_en: "Hamsters", slug: "hamsters" }
    ]
  },
  {
    id: "birds",
    name_ar: "طيور",
    name_en: "Birds",
    slug: "birds",
    items: [
      { id: "pigeons", name_ar: "حمام", name_en: "Pigeons", slug: "pigeons" },
      { id: "parrots", name_ar: "ببغاء", name_en: "Parrots", slug: "parrots" },
      { id: "chickens", name_ar: "دجاج", name_en: "Chickens", slug: "chickens" },
      { id: "ducks", name_ar: "بط", name_en: "Ducks", slug: "ducks" }
    ]
  },
  {
    id: "horses",
    name_ar: "خيول",
    name_en: "Horses",
    slug: "horses"
  },
  {
    id: "aquarium",
    name_ar: "أحياء مائية",
    name_en: "Aquarium",
    slug: "aquarium",
    items: [
      { id: "fish", name_ar: "أسماك", name_en: "Fish", slug: "fish" },
      { id: "turtles", name_ar: "سلاحف", name_en: "Turtles", slug: "turtles" }
    ]
  },
  {
    id: "pet-accessories",
    name_ar: "مستلزمات حيوانات",
    name_en: "Pet Accessories",
    slug: "pet-accessories",
    items: [
      { id: "pet-food", name_ar: "طعام حيوانات", name_en: "Pet Food", slug: "pet-food" },
      { id: "cages", name_ar: "أقفاص", name_en: "Cages", slug: "cages" },
      { id: "pet-toys", name_ar: "ألعاب حيوانات", name_en: "Pet Toys", slug: "pet-toys" }
    ]
  }
];

// ============================================
// SERVICES CATEGORY
// ============================================

export const servicesSubcategories: Subcategory[] = [
  {
    id: "home-services",
    name_ar: "خدمات منزلية",
    name_en: "Home Services",
    slug: "home-services",
    items: [
      { id: "cleaning", name_ar: "تنظيف", name_en: "Cleaning", slug: "cleaning" },
      { id: "ac-maintenance", name_ar: "صيانة مكيفات", name_en: "AC Maintenance", slug: "ac-maintenance" },
      { id: "plumbing", name_ar: "سباكة", name_en: "Plumbing", slug: "plumbing" },
      { id: "electrical", name_ar: "كهرباء", name_en: "Electrical", slug: "electrical" },
      { id: "painting", name_ar: "دهان", name_en: "Painting", slug: "painting" },
      { id: "carpentry", name_ar: "نجارة", name_en: "Carpentry", slug: "carpentry" }
    ]
  },
  {
    id: "transportation",
    name_ar: "نقل وشحن",
    name_en: "Transportation & Shipping",
    slug: "transportation",
    items: [
      { id: "moving", name_ar: "نقل عفش", name_en: "Moving", slug: "moving" },
      { id: "cargo", name_ar: "شحن", name_en: "Cargo", slug: "cargo" },
      { id: "car-transport", name_ar: "نقل سيارات", name_en: "Car Transport", slug: "car-transport" }
    ]
  },
  {
    id: "business-services",
    name_ar: "خدمات تجارية",
    name_en: "Business Services",
    slug: "business-services",
    items: [
      { id: "marketing", name_ar: "تسويق", name_en: "Marketing", slug: "marketing" },
      { id: "accounting", name_ar: "محاسبة", name_en: "Accounting", slug: "accounting" },
      { id: "legal", name_ar: "خدمات قانونية", name_en: "Legal Services", slug: "legal" },
      { id: "translation", name_ar: "ترجمة", name_en: "Translation", slug: "translation" }
    ]
  },
  {
    id: "it-services",
    name_ar: "خدمات تقنية",
    name_en: "IT Services",
    slug: "it-services",
    items: [
      { id: "web-development", name_ar: "تطوير مواقع", name_en: "Web Development", slug: "web-development" },
      { id: "mobile-apps", name_ar: "تطبيقات جوال", name_en: "Mobile Apps", slug: "mobile-apps" },
      { id: "graphic-design", name_ar: "تصميم جرافيك", name_en: "Graphic Design", slug: "graphic-design" },
      { id: "computer-repair", name_ar: "صيانة كمبيوتر", name_en: "Computer Repair", slug: "computer-repair" }
    ]
  },
  {
    id: "educational",
    name_ar: "خدمات تعليمية",
    name_en: "Educational Services",
    slug: "educational",
    items: [
      { id: "tutoring", name_ar: "دروس خصوصية", name_en: "Tutoring", slug: "tutoring" },
      { id: "training", name_ar: "دورات تدريبية", name_en: "Training Courses", slug: "training" }
    ]
  },
  {
    id: "events",
    name_ar: "خدمات المناسبات",
    name_en: "Event Services",
    slug: "events",
    items: [
      { id: "catering", name_ar: "تقديم طعام", name_en: "Catering", slug: "catering" },
      { id: "photography", name_ar: "تصوير", name_en: "Photography", slug: "photography" },
      { id: "event-planning", name_ar: "تنظيم مناسبات", name_en: "Event Planning", slug: "event-planning" },
      { id: "wedding-halls", name_ar: "قاعات أفراح", name_en: "Wedding Halls", slug: "wedding-halls" }
    ]
  },
  {
    id: "beauty",
    name_ar: "خدمات تجميل",
    name_en: "Beauty Services",
    slug: "beauty",
    items: [
      { id: "hair-salons", name_ar: "صالونات تجميل", name_en: "Hair Salons", slug: "hair-salons" },
      { id: "barber-shops", name_ar: "حلاقة رجالية", name_en: "Barber Shops", slug: "barber-shops" },
      { id: "spa", name_ar: "سبا", name_en: "Spa", slug: "spa" }
    ]
  },
  {
    id: "health",
    name_ar: "خدمات صحية",
    name_en: "Health Services",
    slug: "health",
    items: [
      { id: "nursing", name_ar: "تمريض منزلي", name_en: "Home Nursing", slug: "nursing" },
      { id: "physiotherapy", name_ar: "علاج طبيعي", name_en: "Physiotherapy", slug: "physiotherapy" }
    ]
  }
];

// ============================================
// JOBS CATEGORY
// ============================================

export const jobsSubcategories: Subcategory[] = [
  {
    id: "full-time",
    name_ar: "دوام كامل",
    name_en: "Full-time",
    slug: "full-time"
  },
  {
    id: "part-time",
    name_ar: "دوام جزئي",
    name_en: "Part-time",
    slug: "part-time"
  },
  {
    id: "freelance",
    name_ar: "عمل حر",
    name_en: "Freelance",
    slug: "freelance"
  },
  {
    id: "job-seekers",
    name_ar: "باحثون عن عمل",
    name_en: "Job Seekers",
    slug: "job-seekers"
  },
  {
    id: "domestic-workers",
    name_ar: "عمالة منزلية",
    name_en: "Domestic Workers",
    slug: "domestic-workers",
    items: [
      { id: "drivers", name_ar: "سائقين", name_en: "Drivers", slug: "drivers" },
      { id: "maids", name_ar: "خادمات", name_en: "Maids", slug: "maids" },
      { id: "cooks", name_ar: "طباخين", name_en: "Cooks", slug: "cooks" }
    ]
  }
];

// ============================================
// PERSONAL ITEMS CATEGORY
// ============================================

export const personalItemsSubcategories: Subcategory[] = [
  {
    id: "mens-fashion",
    name_ar: "أزياء رجالية",
    name_en: "Men's Fashion",
    slug: "mens-fashion",
    items: [
      { id: "mens-clothing", name_ar: "ملابس رجالية", name_en: "Men's Clothing", slug: "mens-clothing" },
      { id: "mens-shoes", name_ar: "أحذية رجالية", name_en: "Men's Shoes", slug: "mens-shoes" },
      { id: "mens-accessories", name_ar: "اكسسوارات رجالية", name_en: "Men's Accessories", slug: "mens-accessories" }
    ]
  },
  {
    id: "womens-fashion",
    name_ar: "أزياء نسائية",
    name_en: "Women's Fashion",
    slug: "womens-fashion",
    items: [
      { id: "womens-clothing", name_ar: "ملابس نسائية", name_en: "Women's Clothing", slug: "womens-clothing" },
      { id: "womens-shoes", name_ar: "أحذية نسائية", name_en: "Women's Shoes", slug: "womens-shoes" },
      { id: "womens-accessories", name_ar: "اكسسوارات نسائية", name_en: "Women's Accessories", slug: "womens-accessories" },
      { id: "handbags", name_ar: "حقائب يد", name_en: "Handbags", slug: "handbags" }
    ]
  },
  {
    id: "kids-fashion",
    name_ar: "أزياء أطفال",
    name_en: "Kids Fashion",
    slug: "kids-fashion",
    items: [
      { id: "kids-clothing", name_ar: "ملابس أطفال", name_en: "Kids Clothing", slug: "kids-clothing" },
      { id: "kids-shoes", name_ar: "أحذية أطفال", name_en: "Kids Shoes", slug: "kids-shoes" },
      { id: "baby-items", name_ar: "مستلزمات أطفال", name_en: "Baby Items", slug: "baby-items" }
    ]
  },
  {
    id: "watches",
    name_ar: "ساعات",
    name_en: "Watches",
    slug: "watches"
  },
  {
    id: "eyewear",
    name_ar: "نظارات",
    name_en: "Eyewear",
    slug: "eyewear"
  },
  {
    id: "perfumes",
    name_ar: "عطور",
    name_en: "Perfumes",
    slug: "perfumes"
  },
  {
    id: "jewelry",
    name_ar: "مجوهرات",
    name_en: "Jewelry",
    slug: "jewelry"
  },
  {
    id: "sporting-goods",
    name_ar: "مستلزمات رياضية",
    name_en: "Sporting Goods",
    slug: "sporting-goods",
    items: [
      { id: "gym-equipment", name_ar: "أجهزة رياضية", name_en: "Gym Equipment", slug: "gym-equipment" },
      { id: "sports-clothing", name_ar: "ملابس رياضية", name_en: "Sports Clothing", slug: "sports-clothing" },
      { id: "bikes", name_ar: "دراجات", name_en: "Bikes", slug: "bikes" }
    ]
  },
  {
    id: "books",
    name_ar: "كتب",
    name_en: "Books",
    slug: "books"
  },
  {
    id: "musical-instruments",
    name_ar: "آلات موسيقية",
    name_en: "Musical Instruments",
    slug: "musical-instruments"
  }
];

// ============================================
// BUSINESS & INDUSTRIAL CATEGORY
// ============================================

export const businessIndustrialSubcategories: Subcategory[] = [
  {
    id: "heavy-equipment",
    name_ar: "معدات ثقيلة",
    name_en: "Heavy Equipment",
    slug: "heavy-equipment",
    items: [
      { id: "excavators", name_ar: "حفارات", name_en: "Excavators", slug: "excavators" },
      { id: "loaders", name_ar: "لوادر", name_en: "Loaders", slug: "loaders" },
      { id: "cranes", name_ar: "رافعات", name_en: "Cranes", slug: "cranes" },
      { id: "bulldozers", name_ar: "بلدوزرات", name_en: "Bulldozers", slug: "bulldozers" },
      { id: "forklifts", name_ar: "رافعات شوكية", name_en: "Forklifts", slug: "forklifts" }
    ]
  },
  {
    id: "industrial-tools",
    name_ar: "معدات صناعية",
    name_en: "Industrial Tools",
    slug: "industrial-tools",
    items: [
      { id: "generators", name_ar: "مولدات كهرباء", name_en: "Generators", slug: "generators" },
      { id: "welding-equipment", name_ar: "معدات لحام", name_en: "Welding Equipment", slug: "welding-equipment" },
      { id: "power-tools", name_ar: "أدوات كهربائية", name_en: "Power Tools", slug: "power-tools" }
    ]
  },
  {
    id: "business-for-sale",
    name_ar: "مشاريع للبيع",
    name_en: "Business For Sale",
    slug: "business-for-sale"
  },
  {
    id: "office-equipment",
    name_ar: "معدات مكتبية",
    name_en: "Office Equipment",
    slug: "office-equipment"
  },
  {
    id: "agricultural",
    name_ar: "معدات زراعية",
    name_en: "Agricultural Equipment",
    slug: "agricultural"
  }
];

// ============================================
// EXPORT COMPLETE DATA STRUCTURE
// ============================================

export const saudiClassifiedsData = {
  mainCategories,
  categories: {
    cars: {
      subcategories: carSubcategories,
      brands: carBrands,
      years: carYears,
      conditions: carConditions
    },
    realEstate: {
      subcategories: realEstateSubcategories
    },
    electronics: {
      subcategories: electronicsSubcategories
    },
    furniture: {
      subcategories: furnitureSubcategories
    },
    animals: {
      subcategories: animalsSubcategories
    },
    services: {
      subcategories: servicesSubcategories
    },
    jobs: {
      subcategories: jobsSubcategories
    },
    personalItems: {
      subcategories: personalItemsSubcategories
    },
    businessIndustrial: {
      subcategories: businessIndustrialSubcategories
    }
  }
};

export default saudiClassifiedsData;
