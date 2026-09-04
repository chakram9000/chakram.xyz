const home = {
  "home.title": "الصفحة الرئيسية",
  "home.hero.name": "ش. محمد أكرم",
  "home.hero.hello": "مرحبًا بكم",
  "home.hero.p1":
    "أنا ش. محمد أكرم، مبرمج للويب (Fullstack)، طالب علوم الحاسوب وتخصص الذكاء الاصطناعي بالجزائر.",
  "home.hero.p2":
    "أبني واجهات المواقع باستخدام React ، Tailwindcss ، Astro ، Next.js ، ... وغيرها، بهندسات مختلفة نحو: SPA ، SSR ، SSG ، وما اشتُقَّ منها.",
  "home.hero.p3":
    "وأبني أنظمة الباكأند و API باستخدام Express ، Hono ، PostgresQL ، Prisma.",
  "home.hero.p4":
    "أستخدم ليكنس و Neovim في العمل، وأحيانا أبرمج باللغات القريبة من الجهاز، مثل C.",
  "home.hero.img_label": "(هذا ليس مكتبي)",
};

const projects = {
  "projects.title": "بعض مشاريعي الشخصية",
  "projects.professional": "مهنيّ",
  "projects.khizanah.title": "خزانة",
  "projects.khizanah.desc":
    "واجهة سهلة لتحميل المقاطع وقوائم التشغيل من اليوتيوب، لأجهزة الوينداوز ولينكس",
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
  ...home,
  ...projects,
};

// arabic is the template to follow
export type UIMessages = typeof ARABIC_MESSAGES;
