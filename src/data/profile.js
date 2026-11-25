export const profile = {
  name: "Sagar Soneji",
  title: "Flutter & Android Developer",
  subtitle: "Building production mobile apps with Flutter, native Android & modern AI workflows",
  location: "Bhavnagar, Gujarat",
  email: "sagarsoneji999@gmail.com",
  linkedin: "https://www.linkedin.com/in/sagar-soneji-41b985378",
  github: "https://github.com/sonejisagar",
  playStore: "https://play.google.com/store/apps/developer?id=Sagar+Soneji",
  summary:
    "MCA graduate and Mobile Developer (Flutter & Android) with 4 live production apps on Google Play Store. I specialize in building fast, scalable mobile apps with Flutter, native Android, Generative AI (FLUX & Virtual Try-On), and Gemini AI integration.",
  introTerminal: [
    "> role: Flutter & Android Developer",
    "> mindset: Product Engineer & Problem Solver",
    "> focus: Flutter, Dart, Android, Gemini AI",
    "> status: 4 Apps Shipped on Google Play",
  ],
};

export const overviewStats = [
  {
    value: "4",
    label: "Production Apps",
    sub: "Live on Play Store",
    accent: "from-blue-500 to-cyan-500",
  },
  {
    value: "300+",
    label: "Active Downloads",
    sub: "Google Play Store",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    value: "10+",
    label: "Core Technologies",
    sub: "Flutter, AI & Cloud",
    accent: "from-purple-500 to-indigo-500",
  },
  {
    value: "99.9%",
    label: "Crash-Free Rate",
    sub: "Production Architecture",
    accent: "from-amber-500 to-orange-500",
  },
];

export const skills = [
  {
    group: "Mobile Development",
    items: ["Flutter", "Dart", "Android (Java)", "Android Studio", "Kotlin (Basic)", "REST APIs", "Provider"],
  },
  {
    group: "AI Tools & Agents",
    items: ["Antigravity", "Gemini API", "fal.ai (FLUX.1)", "Virtual Try-On (VTON)", "Claude", "Cursor", "AI Agent Workflows"],
  },
  {
    group: "Cloud & Backend",
    items: ["Firebase Firestore", "Firebase Crashlytics", "Firebase Cloud Messaging (FCM)", "Google Cloud", "Cloudflare Workers", "MySQL"],
  },
  {
    group: "Web & Other",
    items: ["PHP", "HTML", "CSS", "JavaScript", "Unity", "C#"],
  },
  {
    group: "Tools & Deployment",
    items: ["Git", "GitHub", "Google Play Console", "AdMob", "VS Code", "Android Studio"],
  },
];

export const projects = [
  {
    title: "Doc2Contact: Contact Scanner",
    tagline: "Instant Document OCR & Phonebook Synchronization",
    icon: "/projects/doc2contact.png",
    downloads: "100+",
    badge: "100+ Downloads",
    playStore: "https://play.google.com/store/apps/details?id=com.sagarsoneji.doc2contact",
    stack: ["Flutter", "Dart", "Gemini AI", "Google Cloud", "AdMob", "Google Play"],
    description:
      "Built and published a production Flutter app on Google Play Store that uses Gemini AI to extract contact details (names & phone numbers) from photos, scanned documents, PDFs, Excel, and Word files — and saves them directly to the phone's contacts with a single tap.",
    highlights: [
      "Published on Google Play Store with zero-crash production architecture",
      "Sub-second AI OCR response times via Cloudflare Workers edge proxy & Gemini 1.5 Flash",
      "Multi-format document intelligence engine supporting PDF, Excel (.xlsx), Word (.docx), and high-res images",
      "Full productivity workflow: 1-Tap phonebook save, duplicate contact detection, and CSV / Excel / PDF exports",
      "Integrated Google AdMob banner, app open, interstitial, and rewarded video ads with scan bonuses",
    ],
  },
  {
    title: "LinkPulse - Smart Links & Bio Pages",
    tagline: "Creator Bio Pages, Smart Short Links & 4K QR Studio",
    icon: "/projects/linkpulse.png",
    downloads: "100+",
    badge: "100+ Downloads",
    playStore: "https://play.google.com/store/apps/details?id=com.sagarsoneji.linkpulse&pcampaignid=web_share",
    stack: ["Flutter", "Dart", "Firebase", "Cloudflare Workers", "Google Play"],
    description:
      "Built and published a production Flutter app on Google Play Store featuring creator Link-in-Bio profiles, smart URL shortening with custom aliases, high-resolution QR code studio, and real-time click analytics — completely 100% ad-free with a modern Electric Violet aesthetic.",
    highlights: [
      "Published on Google Play Store with 100% ad-free, distraction-free productivity",
      "Creator Link-in-Bio: Claim custom @username profiles with customizable glassmorphic themes",
      "Smart URL Shortener & QR Studio: Custom alias links with sub-second redirect & high-res QR code export",
      "Real-time click analytics dashboard tracking visits, referring devices, platforms, and locations",
      "Scalable backend architecture with Flutter, Firebase Firestore, and Cloudflare Workers proxy",
    ],
  },
  {
    title: "LTO Exam Coach – Philippines",
    tagline: "Offline Driving Exam Reviewer, Timed Mock Tests & Road Signs",
    icon: "/projects/ltoexamcoach.png",
    downloads: "50+",
    badge: "50+ Downloads",
    playStore: "https://play.google.com/store/apps/details?id=com.ltoexamcoach.philippines",
    stack: ["Flutter", "Dart", "Provider", "Firebase Crashlytics", "Google AdMob", "Offline-First", "Google Play"],
    description:
      "Engineered and published an offline-first reviewer and test preparation mobile app on Google Play Store for Filipino driver's license applicants. Features 150+ categorized exam questions, realistic timed mock exams with pass/fail benchmarks, 45+ vector road signs, and targeted mistake remediation.",
    highlights: [
      "Published on Google Play Store with 100% offline-first local storage architecture and 0-crash stability",
      "Realistic Timed Mock Exams with 20-min countdown timer, vehicle filtering (Car / Motorcycle), and 80% passing benchmark",
      "Interactive 45+ Road Signs Catalog rendered in high-resolution custom Canvas vector graphics (DPWH standards)",
      "Targeted Mistake Bank & Bookmark remediation engine for auto-tracking incorrect answers & difficult questions",
      "Integrated Firebase Analytics, Crashlytics, Google AdMob, local notification study reminders & in-app updates",
    ],
  },
  {
    title: "MerchMock - T-Shirt & Apparel Design Studio",
    tagline: "AI Fashion Models, Virtual Try-On & Realistic Apparel Mockups",
    icon: "/projects/merchmock.png",
    downloads: "50+",
    badge: "50+ Downloads",
    playStore: "https://play.google.com/store/apps/details?id=com.merchmock.tshirt.design.studio&pcampaignid=web_share",
    stack: ["Flutter", "Dart", "fal.ai (FLUX.1)", "Virtual Try-On (VTON)", "Gemini AI", "Google Play"],
    description:
      "Built and published a professional apparel mockup studio on Google Play Store. Features photorealistic AI fashion models, seamless virtual try-on technology that drapes custom garments on user photos, realistic fabric texture simulation, and 2000×2000 HD studio exports.",
    highlights: [
      "Published on Google Play Store with studio-grade production architecture & zero-crash performance",
      "Photorealistic AI Fashion Models: Generates male & female models in studio, street, and cyberpunk vibes via FLUX.1 neural image synthesis",
      "AI Virtual Try-On (VTON): Real-time neural try-on engine draping user-designed garments onto custom uploaded photos and selfies",
      "Realistic Fabric Engine: Advanced shadow-map blending, natural fabric drape, folds, and dual-layer logo/text positioning with Google Fonts",
      "Complete Merch Suite: 2000×2000 ultra-HD PNG exports, hex color matching, Gemini AI slogan generator, and AdMob integration",
    ],
  },
  {
    title: "CollexaHub - College Event Management App",
    tagline: "End-to-End Event Discovery & Registration Platform",
    stack: ["Java", "Android Studio", "Firebase", "FCM"],
    description:
      "Built an end-to-end native Android application for creating and managing college events, with registration support for both individual and team participation.",
    highlights: [
      "Full-lifecycle native Android architecture built in Java & Android Studio",
      "Real-time push notifications using Firebase Cloud Messaging (FCM) with 99%+ delivery reliability",
      "Comprehensive admin dashboard for event creation, registration management, and attendance tracking",
      "Personalized event discovery engine with category and interest-based filtering",
    ],
  },
  {
    title: "Shamballa - Spiritual Platform",
    tagline: "Full-Stack Web Platform & Donation Management",
    stack: ["PHP", "HTML", "CSS", "MySQL"],
    description:
      "Developed a dynamic full-stack web platform with donation flows, content publishing, and admin management capabilities.",
    highlights: [
      "Donation and payment handling workflows",
      "Admin tools for users, content, and records",
      "Secure data persistence in MySQL",
    ],
  },
  {
    title: "Cube Runner - 3D Endless Runner",
    tagline: "Physics-Based Endless Runner Game",
    stack: ["Unity", "C#"],
    description:
      "Designed and developed an endless runner game with dynamic difficulty scaling and responsive controls.",
    highlights: [
      "Physics-based movement mechanics",
      "Obstacle generation engine",
      "Collision and scoring systems",
    ],
  },
];

export const experience = [
  {
    role: "Android Developer Intern",
    company: "BrainyBeam Technologies Pvt. Ltd.",
    duration: "Jan 2026 - Apr 2026",
    points: [
      "Developed CollexaHub from concept to deployment-ready implementation.",
      "Built an admin panel supporting event creation, student registration, and history management.",
      "Integrated Firebase Cloud Messaging for instant event notifications.",
      "Implemented interest-based filtering for relevant event recommendations.",
    ],
  },
];

export const education = [
  "MCA - Sardar Patel University (2024 - 2026)",
  "BCA - MKBU University (2021 - 2024)",
];
