export const profile = {
  name: "Sagar Soneji",
  title: "Android Developer",
  subtitle: "Problem Solver building practical mobile experiences",
  location: "Bhavnagar, Gujarat",
  email: "sagarsoneji999@gmail.com",
  linkedin: "https://www.linkedin.com/in/sagar-soneji-41b985378",
  github: "https://github.com/sonejisagar",
  summary:
    "MCA graduate and Android Developer with internship experience building real-world products. I enjoy turning practical challenges into reliable mobile solutions.",
  introTerminal: [
    "> role: Android Developer",
    "> mindset: Problem Solver",
    "> focus: Java, Firebase, Mobile UX",
  ],
};

export const skills = [
  {
    group: "Mobile Development",
    items: ["Flutter", "Dart", "Java", "Android Studio", "Kotlin (Basic)", "REST APIs"],
  },
  {
    group: "AI Tools & Agents",
    items: ["Antigravity", "Claude", "Cursor", "GitHub Copilot", "Gemini CLI", "AI Agent Workflows"],
  },
  {
    group: "Cloud & Backend",
    items: ["Firebase Firestore", "Firebase Cloud Messaging (FCM)", "Google Cloud", "Cloudflare Workers", "MySQL"],
  },
  {
    group: "Web & Other",
    items: ["PHP", "HTML", "CSS", "JavaScript", "Unity", "C#"],
  },
  {
    group: "Tools",
    items: ["Git", "GitHub", "VS Code", "Visual Studio", "Google Play Console"],
  },
];

export const projects = [
  {
    title: "Doc2Contact - AI Document to Contacts App",
    stack: ["Flutter", "Dart", "Gemini AI", "Google Cloud", "AdMob", "Google Play"],
    description:
      "Built and published a production Flutter app on Google Play Store that uses Gemini AI to extract contact details (names & phone numbers) from photos, scanned documents, PDFs, Excel, and Word files — and saves them directly to the phone's contacts with a single tap.",
    highlights: [
      "Gemini AI-powered OCR pipeline via Cloudflare Workers proxy",
      "Supports PDF, JPG, PNG, Excel, and Word document formats",
      "Dark/Light theme with persistent user preference",
      "AdMob banner and rewarded ads with bonus scan rewards",
      "Smart duplicate detection before saving contacts",
      "Published on Google Play Store",
    ],
    playStore: "https://play.google.com/store/apps/details?id=com.sagarsoneji.doc2contact",
  },
  {
    title: "LinkPulse - Smart Links & Bio Pages",
    stack: ["Flutter", "Dart", "Firebase", "Cloudflare Workers", "Google Play"],
    description:
      "Built and published a production Flutter app on Google Play Store featuring creator Link-in-Bio profiles, smart URL shortening with custom aliases, high-resolution QR code studio, and real-time click analytics — completely 100% ad-free with a modern Electric Violet aesthetic.",
    highlights: [
      "Creator Link-in-Bio: Claim custom @username profiles, unify social & portfolio links with customizable glassmorphic themes",
      "Smart URL Shortener: Instant link shortener with custom alias support and fast clipboard sharing",
      "High-Resolution QR Code Studio: Generate, customize, and export high-res QR codes for any link or bio page",
      "Real-Time Click Analytics: Detailed metrics dashboard tracking clicks, devices, referrers, and geographic trends",
      "100% Ad-Free Experience: Clean, distraction-free productivity without intrusive ads or paywalls",
      "Published on Google Play Store with Cloudflare Workers proxy and Firebase integration",
    ],
    playStore: "https://play.google.com/store/apps/details?id=com.sagarsoneji.linkpulse&pcampaignid=web_share",
  },
  {
    title: "CollexaHub - College Event Management App",
    stack: ["Java", "Android Studio", "Firebase", "FCM"],
    description:
      "Built an end-to-end Android application for creating and managing college events, with registration support for both individual and team participation.",
    highlights: [
      "Admin dashboard for event creation and analytics",
      "Interest-based event filtering for personalized discovery",
      "Real-time push notifications using FCM",
      "Participation history tracking for students",
    ],
  },
  {
    title: "Shamballa - Spiritual Platform",
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
