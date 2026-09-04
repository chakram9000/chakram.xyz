const header = {
  "header.github": "كيتهاب",
  "header.blogs": "مقالات",
};

const home = {
  "home.title": "الصفحة الرئيسية",
  "home.hero.name": "ش. محمد أكرم",
  "home.hero.hello": "مرحبًا بكم",
  "home.hero.p1":
    "أنا ش. محمد أكرم، مبرمج للويب (Fullstack)، طالب علوم الحاسوب وتخصص الذكاء الاصطناعي بالجزائر.",
  "home.hero.p2":
    "أبرمج منذ 2019، ولدي خبرة في لغات وتقنيات مختلفة. وجلّ خبرتي المهنية في بناء واجهات مواقع الويب، إلا أنني أبني APIs و برامج Fullstack كذلك.",
  "home.hero.p3":
    "أستخدم عادةً: Javascript, Typescript, Astro, React, Express, PostgresQL, وسابقًا Next.js. كذلك عندي اهتمام باللغات القريبة من الجهاز كـ: C.",
  "home.hero.p4":
    "أعتني بسرعة الإنتاج وسرعة المنتوج، وبفهم الأدوات التي أستخدمها بدلاً من النسخ واللصق الأعمى.",
  "home.hero.img_label": "(هذا ليس مكتبي)",
};

const projects = {
  "projects.title": "بعض مشاريعي",
  "projects.professional": "مشروع مهنيّ",
  "projects.khizanah.title": "خزانة",
  "projects.khizanah.desc":
    "واجهة سهلة لتحميل المقاطع وقوائم التشغيل من اليوتيوب، لأجهزة الوينداوز ولينكس.",
  "projects.minidrive.title": "Minidrive",
  "projects.minidrive.desc":
    "نسخة مخففة من Google Drive؛ يمكن للمستخدم إنشاء حساب، وحفظ الملفات والمجلدات وترتيبها، ونشر المجلدات عبر رابط عام.",
  "projects.cellular.title": "محاكي أوتوماتا الخلايا",
  "projects.cellular.desc":
    "برنامج يحاكي مصفوفة خلايا (Cellular Automata)، فيه خلايا مختلفة من حيثُ الشكل والصفات 'الفيزيائية'، كالجاذبية وقابلية الاحتراق. مبرمج بـC99.",
  "projects.foroq.title": "موقع وكالة 'فروق'",
  "projects.foroq.desc":
    "صفحة التعريف والتواصل لوكالة 'فروق' التقنية، فيها تعريف بكل خدمات الوكالة، ونظام مقالات، وخاصية تسجيل البريد الالكتروني للحصول على آخر التحديثات.",
};

export const ARABIC_MESSAGES = {
  ...header,
  ...home,
  ...projects,
};

// arabic is the template to follow
export type UIMessages = typeof ARABIC_MESSAGES;
