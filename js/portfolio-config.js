/**
 * ==============================================================================
 * 🚀 PORTFOLIO MASTER CONFIGURATION (পোর্টফোলিও কনফিগারেশন)
 * ==============================================================================
 * আপনার পোর্টফোলিওর সমস্ত তথ্য এই একটি ফাইল পরিবর্তন করেই আপডেট করতে পারবেন।
 * কোনো কোডিং বা এইচটিএমএল জানা লাগবে না! কোটেশনের (" ") ভেতরের তথ্য পরিবর্তন করুন।
 * ==============================================================================
 */

const PORTFOLIO_CONFIG = {
  // 👤 ব্যক্তিগত তথ্য (Personal Information)
  personal: {
    name: "Jubayer Ahmad",
    headline: "Senior Full-Stack Engineer & Autonomous AI Systems Architect",
    roles: [
      "Full-Stack Software Engineer",
      "Autonomous AI Systems Architect",
      "Next.js 15 & Python Specialist",
      "Tech Content Creator"
    ],
    statusBadge: "Available for High-Impact Projects & Hire",
    location: "Dhaka, Bangladesh 🇧🇩",
    timezone: "GMT+6 (BST)",
    email: "monisharani333022@gmail.com",
    phone: "01354840991",
    phoneFormatted: "+880 1354-840991",
    whatsappNumber: "8801354840991",
    avatar: "assets/jubayer_headshot.jpg",
    avatarOriginal: "assets/jubayer_developer_original.jpg",
    bannerGif: "assets/jubayer_live_banner.gif",
    developerCard: "assets/jubayer_developer_card.png",
    
    // সংক্ষিপ্ত ও বিস্তারিত বায়ো
    shortBio: "আমি আধুনিক ফুল-স্ট্যাক ক্লাউড প্ল্যাটফর্ম, স্বয়ংক্রিয় এআই এজেন্ট এবং হাই-পারফরম্যান্স অটোমেশন পাইপলাইন আর্কিটেক্ট করি। প্রযুক্তি দিয়ে জটিল বাস্তব সমস্যার সহজ ও দ্রুত সমাধান আনাই আমার প্যাশন।",
    fullAbout: [
      "প্রযুক্তির দ্রুত পরিবর্তনশীল যুগে স্কেলেবল সফটওয়্যার আর্কিটেকচার এবং কৃত্রিম বুদ্ধিমত্তা (AI) নিয়ে কাজ করাই আমার মূল লক্ষ্য। আমি মূলত Next.js 15, Drizzle ORM, Python এবং কম্পিউটার ভিশন (OpenCV) ভিত্তিক উৎপাদনমুখী জটিল সিস্টেম ডিজাইন করি।",
      "একইসাথে আমার ইউটিউব চ্যানেল (@jubayeraispecialist)-এর মাধ্যমে আমি হাজারো শিক্ষার্থী ও নির্মাতাদের জন্য আধুনিক AI টুলস, সিনেমাটিক কনটেন্ট মেকিং, অটোনোমাস এজেন্ট এবং সফটওয়্যার ডেভেলপমেন্টের সহজ বাংলা টিউটোরিয়াল উপহার দিচ্ছি।"
    ],

    // সোশ্যাল ও অফিশিয়াল লিংকসমূহ
    socials: {
      github: "https://github.com/Jubayer-AI-Studio",
      youtube: "https://youtube.com/@jubayeraispecialist?si=iofILmHO3PWQ1i9h",
      linkedin: "https://linkedin.com",
      facebook: "https://www.facebook.com/share/1C3TNHWrm9/",
      instagram: "https://www.instagram.com/jubayer_ahmad_2002?stkn=MWlhb2c2aTA2ZG1tcg==",
      website: "https://jubayer-ai-studio.github.io/jubayer-ai-studio/"
    }
  },

  // ⚡ হিরো মেট্রিক্স (Hero Live Stats)
  stats: [
    { label: "প্রোডাকশন প্রজেক্ট", value: "25+", icon: "folder-git-2" },
    { label: "ইউজার ও অডিয়েন্স", value: "10K+", icon: "users" },
    { label: "লাইন অব ক্লিন কোড", value: "100K+", icon: "code" },
    { label: "ক্লায়েন্ট স্যাটিসফ্যাকশন", value: "99.8%", icon: "award" }
  ],

  // 🍱 বেন্তো গ্রিড হাইলাইটস (Bento Grid Highlights)
  bento: {
    philosophy: {
      title: "Scalable Architecture First",
      desc: "মাল্টি-টেন্যান্ট SaaS ব্যাকএন্ড, রিলেশনাল স্কিমা এবং অফলাইন-ফার্স্ট PWA তৈরি করি যা উচ্চ লোডেও মসৃণ থাকে।"
    },
    currentFocus: {
      title: "Current Focus",
      desc: "Next.js 15, Drizzle ORM, GIS Mapping & Autonomous Multimodal AI Agents."
    },
    metricsBadge: {
      title: "Active Status",
      badge: "Open for Hire & Contracts",
      note: "Remote • On-Site • Consulting"
    }
  },

  // 🛠️ টেকনিক্যাল স্কিলস (Technical Skills Arsenal)
  skills: [
    {
      category: "Frontend Engineering",
      icon: "layout",
      items: [
        { name: "React 19 / Next.js 15", level: "Expert" },
        { name: "TypeScript", level: "Advanced" },
        { name: "Tailwind CSS", level: "Expert" },
        { name: "HTML5 Canvas & Web Audio", level: "Advanced" },
        { name: "Progressive Web Apps (PWA)", level: "Advanced" }
      ]
    },
    {
      category: "Backend & Cloud Databases",
      icon: "server",
      items: [
        { name: "Node.js & Express", level: "Advanced" },
        { name: "Python (FastAPI / Flask)", level: "Advanced" },
        { name: "PostgreSQL & Supabase", level: "Advanced" },
        { name: "Drizzle ORM & Prisma", level: "Expert" },
        { name: "REST APIs & WebSockets", level: "Expert" }
      ]
    },
    {
      category: "Autonomous AI & Automation",
      icon: "cpu",
      items: [
        { name: "OpenCV & MediaPipe", level: "Advanced" },
        { name: "Google Gemini AI API", level: "Expert" },
        { name: "Selenium & Anti-Detection", level: "Expert" },
        { name: "Telegram Bot API", level: "Expert" },
        { name: "FFmpeg Media Pipelines", level: "Advanced" }
      ]
    },
    {
      category: "DevOps & Engineering Tools",
      icon: "terminal",
      items: [
        { name: "Git & GitHub Version Control", level: "Expert" },
        { name: "Docker & Containerization", level: "Intermediate" },
        { name: "Linux Bash Scripting", level: "Advanced" },
        { name: "Postman & API Testing", level: "Advanced" },
        { name: "Figma UI/UX Prototyping", level: "Intermediate" }
      ]
    }
  ],

  // 🚀 ফিচার্ড প্রোডাকশন প্রজেক্টস (Featured Projects)
  projects: [
    {
      id: "noorhub",
      category: "fullstack",
      categoryLabel: "Full-Stack SaaS",
      badge: "FEATURED PRODUCTION",
      title: "NoorHub (নূরহাব) — Universal Education & Cloud SaaS",
      desc: "২৯টি কমপ্লিট রুট ও ৬৪ জেলার ইন্টারেক্টিভ GIS ম্যাপিং সহ একটি এন্টারপ্রাইজ মাল্টি-টেন্যান্ট ক্লাউড এডুকেশন ম্যানেজমেন্ট SaaS প্ল্যাটফর্ম।",
      problem: "বাংলাদেশের বৃহৎ শিক্ষা প্রতিষ্ঠানগুলোতে শিক্ষার্থী রেকর্ড, হিসাব-নিকাশ ও আঞ্চলিক ডাটা ট্র্যাক করা জটিল ছিল।",
      solution: "Next.js 15 ও Drizzle ORM দিয়ে তৈরি হাই-পারফরম্যান্স আর্কিটেকচার, ডাইনামিক QR ও Barcode স্টুডেন্ট আইডি জেনারেটর এবং অফলাইন PWA ক্যাশিং।",
      tags: ["Next.js 15", "React 19", "TypeScript", "Drizzle ORM", "PostgreSQL", "GIS Mapping", "PWA"],
      image: "assets/jubayer_developer_card.png",
      githubUrl: "https://github.com/Jubayer-AI-Studio/NoorHub-Madrasa-Management-SaaS",
      liveUrl: "https://github.com/Jubayer-AI-Studio/NoorHub-Madrasa-Management-SaaS"
    },
    {
      id: "jarvis",
      category: "ai",
      categoryLabel: "AI & Computer Vision",
      badge: "INNOVATIVE AI",
      title: "Jubayer AI (Desktop Jarvis) — Hands-Free Voice & Gesture OS",
      desc: "১০০% হ্যান্ডস-ফ্রি ডেক্সটপ অপারেটিং সিস্টেম। ওনারের ভয়েসপ্রিন্ট শনাক্তকরণ এবং OpenCV ক্যামেরা জেসচার ট্র্যাকিং সমর্থন করে।",
      problem: "মাউস-কিবোর্ড ছাড়া হ্যান্ডস-ফ্রি কম্পিউটিং ও কাস্টম ভয়েস কমান্ড এক্সিকিউশন প্রচলিত সিস্টেমে অসম্ভব ছিল।",
      solution: "পাইথন, অপেনসিভি এবং জেমিনি এআই মডেলের মেলবন্ধনে তৈরি রিয়েল-টাইম বায়োমেট্রিক ভয়েসপ্রিন্ট ও ক্যামেরা ট্র্যাকিং ভিত্তিক অটোনোমাস সিস্টেম।",
      tags: ["Python", "OpenCV", "MediaPipe", "Gemini AI", "Biometric Auth", "SpeechRecognition"],
      image: "assets/jubayer_coding.jpg",
      githubUrl: "https://github.com/Jubayer-AI-Studio/Jubayer-Jarvis-AI-Automation",
      liveUrl: "https://github.com/Jubayer-AI-Studio/Jubayer-Jarvis-AI-Automation"
    },
    {
      id: "bladefighter",
      category: "gaming",
      categoryLabel: "Canvas Game Engine",
      badge: "60 FPS PERFORMANCE",
      title: "Shafin Blade Fighter 3D — Cross-Platform Web Arcade Game",
      desc: "ব্রাউজারে সরাসরি খেলার উপযোগী ৬০ FPS অপ্টিমাইজড কমব্যাট আর্কেড গেম। কাস্টম ফিজিক্স ও Web Audio সিন্থেসাইজার সমৃদ্ধ।",
      problem: "ওয়েব গেমগুলো সাধারণত ভারী ফ্রেমওয়ার্কের কারণে লো-এন্ড মোবাইল ডিভাইসে ল্যাগ করে।",
      solution: "জিরো এক্সটারনাল ডিপেনডেন্সিতে র' HTML5 ক্যানভাস ও পিওর জাভাস্ক্রিপ্ট দিয়ে ফ্রেম-অ্যাকিউরেট ফিজিক্স এবং ওয়েভ অডিও সিন্থেসাইজার ইঞ্জিন তৈরি করা হয়েছে।",
      tags: ["HTML5 Canvas", "JavaScript (ES6+)", "Web Audio API", "PWA", "Mobile Touch"],
      image: "assets/jubayer_hero_banner.png",
      githubUrl: "https://github.com/Jubayer-AI-Studio/Shafin-Blade-Fighter-Game",
      liveUrl: "https://github.com/Jubayer-AI-Studio/Shafin-Blade-Fighter-Game"
    },
    {
      id: "automator",
      category: "automation",
      categoryLabel: "Automation & Bots",
      badge: "24/7 AUTONOMOUS",
      title: "AutoViral — Automated Video Generation & Multi-Platform Bot",
      desc: "ইউটিউব ও টেলিগ্রামের জন্য ২৪/৭ স্বয়ংক্রিয় ভিডিও প্রসেসিং, সাবটাইটেল সিঙ্ক এবং শিডিউলিং অটোমেশন পাইপলাইন।",
      problem: "প্রতিদিন সোশ্যাল মিডিয়া কনটেন্ট তৈরি ও পোস্ট করতে ঘণ্টার পর ঘণ্টা ম্যানুয়াল সময় নষ্ট হতো।",
      solution: "FFmpeg ভিত্তিক ভিডিও রেন্ডারিং ও অ্যান্টি-ডিটেকশন স্ক্র্যাপিং আর্কিটেকচার যা সম্পূর্ণ স্বয়ংক্রিয়ভাবে ক্লাউডে চলতে পারে।",
      tags: ["Python", "FFmpeg", "Telegram API", "YouTube API v3", "Selenium", "Cron Jobs"],
      image: "assets/jubayer_thinking.jpg",
      githubUrl: "https://github.com/Jubayer-AI-Studio",
      liveUrl: "https://github.com/Jubayer-AI-Studio"
    }
  ],

  // 📺 ইউটিউব ও কনটেন্ট শোকেস (YouTube & Content Hub)
  youtubeShowcase: {
    channelName: "Jubayer AI Specialist",
    channelHandle: "@jubayeraispecialist",
    subscribers: "Active Creators",
    channelUrl: "https://youtube.com/@jubayeraispecialist?si=iofILmHO3PWQ1i9h",
    description: "কৃত্রিম বুদ্ধিমত্তা, সিনেমাটিক এআই ভিডিও ক্রিয়েশন, মোবাইল টেকনোলজি এবং সফটওয়্যার ডেভেলপমেন্টের আধুনিক টিউটোরিয়াল প্ল্যাটফর্ম।",
    categories: [
      {
        icon: "sparkles",
        title: "Artificial Intelligence & Cinematic Reels",
        desc: "সিনেমাটিক AI ভিডিও জেনারেশন, রিয়েলিস্টিক ভিজ্যুয়ালস, প্রম্পট ইঞ্জিনিয়ারিং এবং ভাইরাল রিলস তৈরির গোপন টেকনিক।"
      },
      {
        icon: "bot",
        title: "Autonomous AI Agents & Robotics",
        desc: "স্বয়ংক্রিয় এআই এজেন্ট তৈরি, ভয়েস ও জেসচার কন্ট্রোল সিস্টেম এবং রোবোটিক্স অটোমেশনের ভবিষ্যৎ।"
      },
      {
        icon: "smartphone",
        title: "Software Development & APK Tech",
        desc: "অ্যান্ড্রয়েড APK টেকনোলজি, মোবাইল অ্যাপ্লিকেশন ট্রিকস এবং রিয়েল-লাইফ অটোমেশন কোডিং টিউটোরিয়াল।"
      },
      {
        icon: "zap",
        title: "Free AI Tools & Digital Resources",
        desc: "সর্বাধুনিক ফ্রি AI টুলস, কনটেন্ট ক্রিয়েটরদের জন্য প্রোডাক্টিভিটি বুস্টার এবং ফ্রিল্যান্সিং স্কিল।"
      }
    ]
  },

  // ⏳ ক্যারিয়ার টাইমলাইন ও মাইলফলক (Experience Timeline)
  timeline: [
    {
      period: "2024 — বর্তমান",
      role: "Founder & Lead Systems Architect",
      company: "Jubayer AI Studio",
      desc: "এন্টারপ্রাইজ ক্লাউড SaaS প্ল্যাটফর্ম এবং অটোনোমাস AI ডেক্সটপ সলিউশন ডেভেলপমেন্ট। টেকনোলজি কনটেন্ট ক্রিয়েশন এবং টিউটোরিয়াল পরিচালনা।"
    },
    {
      period: "2023 — 2024",
      role: "Senior Full-Stack Engineer",
      company: "Production SaaS & Automation Projects",
      desc: "Next.js, Drizzle ORM, PostgreSQL এবং হাই-থ্রুপুট টেলিগ্রাম ও ওয়েব বট পাইপলাইন আর্কিটেক্ট ও পরিচালনা।"
    },
    {
      period: "2022 — 2023",
      role: "Software Developer & AI Research",
      company: "Open Source & Autonomous Systems",
      desc: "Python, OpenCV কম্পিউটার ভিশন, স্ক্রিন জেসচার রিকগনিশন এবং ওয়েব গেম ইঞ্জিন নিয়ে দীর্ঘমেয়াদী গবেষণা ও প্রকল্প সম্পন্ন।"
    }
  ],

  // 💬 ইনস্ট্যান্ট কন্টাক্ট কনফিগারেশন (Contact & Instant Action)
  contact: {
    whatsappMessage: "Hello Jubayer Ahmad! I saw your portfolio and would like to discuss a project with you.",
    ctaTitle: "চলুন একসাথে অসাধারণ কিছু তৈরি করি!",
    ctaSubtitle: "আপনার নতুন প্রজেক্ট, SaaS আর্কিটেকচার, AI সলিউশন বা কনসালটেশনের জন্য সরাসরি যোগাযোগ করুন।"
  }
};

// Global export
window.PORTFOLIO_CONFIG = PORTFOLIO_CONFIG;
