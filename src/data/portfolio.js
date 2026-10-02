/*
 * Central content file for the portfolio.
 * Source of truth: assets/cv/Eslam_Mohamed_2026_Updated.pdf
 *
 * Rules:
 * - Components only read from this file — edit content here, never in the UI.
 * - `null` / empty array = hidden in the UI (nothing is invented to fill gaps).
 * - Images: put files in assets/ and set the filename. `null` shows a neutral frame.
 */

export const profile = {
  name: 'Islam Mohamed Hassan',
  shortName: 'Islam Mohamed',
  greeting: "Hello, I'm Islam Mohamed",
  primaryRole: 'Flutter Developer / AI & Digital Marketing Specialist',
  roles: [
    'Flutter Developer',
    'AI for Marketing',
    'Flutter Instructor',
    'Designer',
    'Video Editor',
    'Team Leader',
  ],
  summary:
    'I work at the intersection of software development, AI, digital marketing and creative content — building scalable, performance-focused mobile apps with Firebase and REST APIs, and using AI-powered workflows to create marketing videos, designs and campaign content.',
  photo: 'profile.jpeg', // assets/images/ — sidebar, mobile top bar
  heroPhoto: null, // assets/images/ — set to replace the Hero "Disciplines" panel with a photo
};

// Hero call-to-action buttons.
export const hero = {
  primaryCta: { label: 'Hire Me', href: 'https://wa.me/201210204180' },
  secondaryCta: { label: 'View My Work', href: '#projects' },
};

// Section headings and intros (shown under each section title).
export const sections = {
  about: { title: 'About Me' },
  services: {
    title: 'What I Do',
    description: 'Development, AI-powered marketing, design and training — under one roof.',
  },
  experience: {
    title: 'Experience',
    description: 'Marketing with AI on one side, Flutter engineering and teaching on the other.',
  },
  skills: {
    title: 'Skills & Expertise',
    description: 'Bars indicate relative focus across my skill set — not measured scores.',
  },
  projects: {
    title: 'Featured Projects',
    description: 'Flutter applications — from polished product showcases to AI-powered systems.',
    moreTitle: 'More Projects',
  },
  creative: {
    title: 'Creative Work',
    description: 'Design, video and AI-assisted marketing — the creative side of my work.',
  },
  achievements: {
    title: 'Achievements',
    description: 'Recognition for my graduation project.',
  },
  teaching: {
    title: 'Teaching & Mentoring',
    description: null,
  },
};

export const about = {
  image: 'profile.jpeg', // filename inside assets/images/
  intro:
    'I’m a Flutter Developer and AI & Digital Marketing Specialist. I build mobile applications with clean, scalable architecture, and I use AI-powered workflows to market programs and produce videos, designs and campaign content. I also train and mentor Flutter developers and collaborate closely with cross-functional teams.',
  facets: [
    {
      id: 'development',
      title: 'Software Development',
      text: 'Mobile apps built with Flutter, Firebase, Supabase, REST APIs and local databases, following scalable architecture and industry-standard practices.',
    },
    {
      id: 'creative',
      title: 'AI & Digital Marketing',
      text: 'Promoting educational and professional programs with AI-powered tools — from video concepts and scripts to prompts and creative assets.',
    },
    {
      id: 'teaching',
      title: 'Teaching & Mentoring',
      text: 'Flutter instructor at AMIT Learning and technical mentor for DEPI Round 3 — code reviews, architecture guidance and debugging support.',
    },
    {
      id: 'content',
      title: 'Creative Content',
      text: 'Marketing videos, promotional content and visual designs for digital campaigns, combined with UI/UX design for products.',
    },
  ],
  stats: [], // add real numbers only, e.g. { value: '3', label: '…' }
  education: {
    degree: 'Bachelor of Information Systems',
    institution: 'Higher Institute of Advanced Studies',
    location: 'Giza, Egypt',
    note: 'Expected graduation: 2024',
    coursework: [
      'Java Programming',
      'Object-Oriented Programming',
      'Database Systems',
      'Data Structures & Algorithms',
      'System Analysis',
    ],
  },
};

// Shown in the sidebar Info block.
export const personalInfo = [
  { label: 'Location', value: 'Giza, Egypt' },
  { label: 'Phone', value: '+201210204180' },
  { label: 'Email', value: 'eslammoh369@gmail.com' },
];

export const languages = [
  { name: 'Arabic', level: 'Native' },
  { name: 'English', level: 'Intermediate' },
];

export const socials = {
  github: 'https://github.com/esllamesso',
  linkedin: 'https://www.linkedin.com/in/eslam-mohamed-9ba442297/',
  email: 'eslammoh369@gmail.com',
  phone: '+201210204180',
  whatsapp: 'https://wa.me/201210204180',
};

export const cv = {
  file: 'Eslam_Mohamed_2026_Updated.pdf', // inside assets/cv/
};

/*
 * Skills
 * `level` (0–100) only sets the bar length as a visual guide to relative focus —
 * it is not a measured score, and no percentage is displayed.
 * `label` replaces the bar caption where the CV states a level (e.g. Beginner).
 * `tags` are listed as chips inside the card.
 * `id` selects the icon: development | ai | creative | soft
 */
export const skillGroups = [
  {
    id: 'development',
    title: 'Development',
    skills: [
      { name: 'Flutter', level: 92 },
      { name: 'Dart', level: 90 },
      { name: 'Firebase', level: 84 },
      { name: 'Supabase', level: 72 },
      { name: 'REST APIs', level: 84 },
      { name: 'BLoC / Cubit', level: 82 },
      { name: 'Responsive UI', level: 84 },
      { name: 'Clean Architecture', level: 78 },
      { name: 'Java', level: 30, label: 'Beginner' },
      { name: 'Kotlin', level: 30, label: 'Beginner' },
    ],
    tags: [
      'C#',
      'HTML',
      'Android SDK',
      'Flutter SDK',
      'Custom Widgets',
      'MVC',
      'Dio',
      'Localization',
      'Google Fonts',
      'Lottie',
      'Git',
      'GitHub',
      'Flutter DevTools',
    ],
  },
  {
    id: 'ai',
    title: 'AI & Marketing',
    skills: [
      { name: 'AI for Marketing', level: 86 },
      { name: 'AI-Powered Content Creation', level: 86 },
      { name: 'AI Marketing Workflows', level: 82 },
      { name: 'Digital Marketing', level: 80 },
      { name: 'Social Media Content Creation', level: 80 },
      { name: 'Marketing Automation', level: 72 },
    ],
    tags: ['Claude', 'Prompt Engineering', 'Prompt Creation', 'AI Workflow Design', 'AI-Assisted Content Production'],
  },
  {
    id: 'creative',
    title: 'Creative & Design',
    skills: [
      { name: 'UI/UX Design', level: 82 },
      { name: 'Video Creation', level: 82 },
      { name: 'Video Editing', level: 82 },
      { name: 'Graphic Design', level: 78 },
      { name: 'Marketing Design', level: 80 },
      { name: 'Creative Content', level: 82 },
    ],
  },
  {
    id: 'soft',
    title: 'Soft Skills',
    skills: [],
    tags: [
      'Time Management & Responsibility',
      'Communication & Teamwork',
      'Pressure & Adaptability',
      'Willingness to Learn',
      'Attention to Detail',
      'Thinking & Problem Solving',
      'Fast Learning / Adaptability',
    ],
  },
];

// Short list shown in the sidebar (names must match entries in skillGroups).
export const sidebarSkills = ['Flutter', 'Dart', 'Firebase', 'REST APIs'];

// Technical tools — sidebar checklist and the "Tools" row in Skills.
export const extraSkills = ['Android Studio', 'VS Code', 'Figma', 'Canva', 'Excel', 'Postman', 'Google Workspace'];

// `id` selects the icon.
export const services = [
  {
    id: 'flutter',
    title: 'Flutter Development',
    description:
      'Building scalable and performance-focused mobile applications using Flutter, Firebase, Supabase, REST APIs and local databases.',
  },
  {
    id: 'ai-marketing',
    title: 'AI for Marketing',
    description:
      'Using AI-powered workflows and tools to support marketing campaigns, educational programs and digital products.',
  },
  {
    id: 'instructor',
    title: 'Flutter Instructor',
    description: 'Delivering Flutter training and guiding learners through real-world application development.',
  },
  {
    id: 'design',
    title: 'UI/UX & Graphic Design',
    description: 'Creating modern interfaces and visual designs for digital products and marketing campaigns.',
  },
  {
    id: 'video',
    title: 'Video Creation & Editing',
    description:
      'Creating marketing videos, promotional content, video concepts and creative assets for social media campaigns.',
  },
  {
    id: 'ai-content',
    title: 'AI Content & Marketing Workflows',
    description:
      'Creating prompts, scripts, creative concepts and AI-assisted workflows that streamline marketing production.',
  },
];

/*
 * Dates and locations are not in the CV, so they are left empty (hidden).
 * logo: filename inside assets/logos/.
 * logoFit: 'cover' (square artwork) | 'contain' (wordmark) | 'mark' (shows the icon at the start of a wordmark).
 * logoZoom: scales square artwork so the mark fills the tile.
 */
export const experience = [
  {
    company: 'MGH Consultancy',
    logo: 'mgh.jpg',
    logoFit: 'cover',
    logoZoom: 1.6,
    location: null,
    current: true,
    roles: ['AI & Digital Marketing Specialist / Consultant'],
    dates: null,
    description: null,
    responsibilities: [
      'Market and promote educational and professional programs using AI-powered tools and workflows.',
      'Create marketing videos, promotional content and visual designs for digital campaigns.',
      'Develop video concepts, scripts, prompts and creative assets for social media and online campaigns.',
      'Support engaging digital campaigns for courses, programs and educational products.',
      'Combine AI, content creation, design and digital marketing to streamline marketing production.',
    ],
    technologies: ['AI-Powered Workflows', 'Video Creation', 'Visual Design', 'Digital Marketing'],
  },
  {
    company: 'AMIT Learning',
    logo: 'amit.svg',
    logoFit: 'contain',
    location: null,
    current: false,
    roles: ['Technical & Instructor Flutter', 'Technical Mentor — DEPI Round 3'],
    dates: null,
    description: null,
    responsibilities: [
      'Built and maintained mobile applications using Flutter, Firebase, Supabase, REST APIs and local databases.',
      'Provided technical evaluation and architectural guidance for real-world software systems.',
      'Mentored Flutter students during DEPI Round 3.',
      'Reviewed student assignments and codebases.',
      'Identified architectural and technical issues.',
      'Delivered Flutter training sessions.',
      'Guided students through real-world Flutter and Firebase applications.',
      'Provided feedback on code quality, architecture, maintainability and performance.',
      'Helped students implement state management, API integration, local storage, Firebase, responsive UI and clean architecture.',
      'Debugged complex issues and optimized application performance and UX.',
      'Worked with production-ready Flutter applications.',
    ],
    technologies: ['Flutter', 'Firebase', 'Supabase', 'REST APIs', 'Local Databases'],
  },
  {
    company: 'Freelance',
    logo: 'freelancer.svg',
    logoFit: 'mark', // wordmark file: frame its leading icon
    location: null,
    current: false,
    roles: ['Flutter Developer'],
    dates: null,
    description: null,
    responsibilities: [
      'Built and delivered production-ready mobile applications from client and student requirements.',
    ],
    technologies: ['Flutter'],
  },
];

/*
 * Projects
 * category: badge on the image. context: small label in the meta row.
 * tags: chips. image: filename inside assets/projects/ — projects with an image appear in the
 * showcase grid; projects without one appear as compact cards under "More Projects".
 * links: only real URLs (none are listed in the CV yet).
 * highlight: true = large card. layout: 'wide' = full-width card for landscape screenshots.
 * featured: false = not shown.
 */
export const projects = [
  // Showcase projects with real screenshots (assets/projects/). No public links.
  {
    title: "IS' Feeds",
    category: 'Flutter',
    highlight: true,
    description:
      'A modern social feed application built with Flutter, focused on sharing content, discovering posts, and connecting users through an interactive social experience.',
    tags: ['Flutter', 'Dart', 'Social Feed', 'Content Sharing'],
    image: 'is-feed.png',
    links: {},
  },
  {
    title: 'DocDoc',
    category: 'Flutter',
    description:
      'A healthcare and doctor appointment application that helps users discover medical specialties, find doctors, book appointments, and manage their healthcare experience.',
    tags: ['Flutter', 'Dart', 'Doctor Search', 'Appointment Booking'],
    image: 'docdoc.png',
    links: {},
  },
  {
    title: 'Travella',
    category: 'Flutter',
    description:
      'A travel discovery application designed to help users explore destinations, discover places, find hotels and experiences, and save favorite locations.',
    tags: ['Flutter', 'Dart', 'Destinations', 'Favorites'],
    image: 'travella.png',
    links: {},
  },
  {
    title: 'Streaming App',
    category: 'Flutter',
    description:
      'A modern movie and TV streaming interface built with Flutter, featuring content discovery, recommendations, watchlists, popular titles, and detailed media browsing.',
    tags: ['Flutter', 'Dart', 'Content Discovery', 'Watchlists'],
    image: 'streaming-app.png',
    links: {},
  },
  {
    title: 'Harry Potter Library',
    category: 'Flutter',
    description:
      'A themed digital library application for exploring the Harry Potter book collection, with book details, search, favorites, and an interactive browsing experience.',
    tags: ['Flutter', 'Dart', 'Search', 'Favorites'],
    image: 'harry-potter-library.png',
    links: {},
  },

  {
    title: 'NAHJ AI Assistant',
    category: 'AI / AI Assistant',
    layout: 'wide', // landscape screenshot: full-width card, image shown uncropped
    description:
      'An AI-powered virtual assistant inspired by modern assistants like Siri. It is designed to understand natural-language requests, process them using AI, and provide intelligent, conversational responses through a simple and intuitive assistant experience.',
    tags: ['AI', 'AI Assistant', 'Virtual Assistant', 'Natural Language', 'Conversational AI', 'NAHJ'],
    image: 'nahj-ai-assistant.png',
    links: {},
  },

  // CV projects without screenshots — shown as compact cards under "More Projects".
  {
    title: 'Hospital Complaints Management System',
    category: 'Flutter · AI',
    context: 'DEPI Project',
    description:
      'A complaints platform for hospitals with secure multi-role authentication, anonymous reporting, an AI chatbot and real-time tracking.',
    tags: ['Multi-role Authentication', 'Anonymous Reporting', 'AI Chatbot', 'Real-time Tracking'],
    image: null,
    links: {},
  },
  {
    title: 'Ministry of Interior Digital Reporting System',
    category: 'Flutter · AI',
    context: 'DEPI Project',
    description:
      'A digital reporting system with anonymous reports, geolocation, multimedia uploads, voice-to-text and AI-based categorization.',
    tags: ['Anonymous Reporting', 'Geolocation', 'Multimedia Uploads', 'Voice-to-Text', 'AI Categorization'],
    image: null,
    links: {},
  },
  {
    title: 'Smart Legal Assistant',
    category: 'Flutter · AI',
    context: 'DEPI Project',
    description: 'An AI legal chatbot with document OCR, NLP analysis and legal risk classification.',
    tags: ['AI Legal Chatbot', 'Document OCR', 'NLP Analysis', 'Risk Classification'],
    image: null,
    links: {},
  },
  {
    title: 'Sohba',
    category: 'Flutter',
    description:
      'A food ordering platform connecting users with home-based food providers, with scalable backend integration using Firebase and Supabase.',
    tags: ['Authentication', 'Restaurant Management', 'Menu Browsing', 'Order Tracking', 'Firebase', 'Supabase'],
    image: null,
    links: {},
  },
  {
    title: 'E-Mazon',
    category: 'Flutter E-Commerce',
    description:
      'An Amazon-style e-commerce app built with Flutter, featuring a clean UI, fast performance and a scalable code structure.',
    tags: ['E-Commerce', 'Clean UI', 'Fast Performance', 'Scalable Structure'],
    image: null,
    links: {},
  },
  {
    title: 'Doctor Appointment',
    category: 'Flutter · REST API',
    featured: false, // likely the same app as DocDoc — confirm before showing both
    description:
      'A Flutter app connected to RESTful APIs for searching doctors, booking appointments, choosing payment methods and viewing detailed summaries.',
    tags: ['Doctor Search', 'Appointment Booking', 'Payment Methods', 'Appointment Summaries', 'RESTful APIs'],
    image: null,
    links: {},
  },
  {
    title: 'Notaty',
    category: 'Flutter · SQLite',
    description:
      'A modern note-taking app with note creation, editing, deletion, local storage and optimized performance across Android devices.',
    tags: ['Note Creation', 'Editing & Deletion', 'Local Storage', 'SQLite', 'Android Performance'],
    image: null,
    links: {},
  },

  // More projects from the CV — set featured: true to show any of them.
  // TMDB Movies App and Harry Potter Books App may be the same apps as the
  // Streaming App and Harry Potter Library screenshots above.
  {
    title: 'TMDB Movies App',
    category: 'Flutter',
    featured: false,
    description: 'A Netflix-style movie app with movie listings, search and detailed pages using REST APIs.',
    tags: ['REST APIs', 'Search', 'Movie Details'],
    image: null,
    links: {},
  },
  {
    title: 'News App',
    category: 'Flutter',
    featured: false,
    description: 'Browse the latest news from multiple categories, using REST APIs and a clean UI design.',
    tags: ['REST APIs', 'Categories', 'Clean UI'],
    image: null,
    links: {},
  },
  {
    title: 'Harry Potter Books App',
    category: 'Flutter',
    featured: false,
    description: 'A themed app for Harry Potter books with clean UI, smooth navigation and an engaging experience.',
    tags: ['Clean UI', 'Navigation'],
    image: null,
    links: {},
  },
  {
    title: 'E-Commerce Coffee App',
    category: 'Flutter',
    featured: false,
    description: 'An app for ordering and delivering coffee, with real-time product updates, cart and checkout.',
    tags: ['Real-time Updates', 'Cart & Checkout'],
    image: null,
    links: {},
  },
  {
    title: 'Figma Books App Design',
    category: 'UI/UX',
    featured: false,
    description: 'A Figma UI design for a book borrowing app with a modern layout, smooth user flow and strong usability focus.',
    tags: ['Figma', 'UI/UX'],
    image: null,
    links: {},
  },
  {
    title: 'Library Borrowing App',
    category: 'Java',
    featured: false,
    description:
      'An educational app to manage book borrowing at the institute, with authentication, dynamic book display and return reminders using Firebase Firestore and Storage.',
    tags: ['Java', 'Firebase Firestore', 'Storage'],
    image: null,
    links: {},
  },
];

/*
 * Creative work
 * areas: the creative areas documented in the CV (shown while there is no media).
 * items: real media only — { title, meta, type: 'image' | 'video', file } with the file in
 *        assets/images/ or assets/videos/. Once any category has items, the tabbed gallery
 *        replaces the areas overview.
 */
export const creativeWork = [
  {
    id: 'design',
    label: 'Design',
    areas: ['Visual Designs', 'Social Media Creative Assets', 'UI/UX Design', 'Graphic Design'],
    items: [],
  },
  {
    id: 'video',
    label: 'Video',
    areas: ['Marketing Videos', 'Promotional Content', 'Video Concepts & Scripts'],
    items: [],
  },
  {
    id: 'ai-marketing',
    label: 'AI Marketing',
    areas: ['AI-Assisted Content', 'AI Marketing Workflows', 'Prompt-Based Creative Production'],
    items: [],
  },
];

export const achievements = [
  {
    title: '3rd Place Winner',
    issuer: 'Ministry-Level Mobile App Competition',
    year: null,
    description: 'Graduation project.',
  },
  {
    title: 'Best Idea Award',
    issuer: 'Nationwide Mobile Application Competition',
    year: null,
    description: 'Graduation project.',
  },
];

export const teaching = {
  intro:
    'As a Flutter Instructor at AMIT Learning and a Technical Mentor for DEPI Round 3, I deliver training sessions, review students’ code and guide them through building real-world applications with Flutter and Firebase.',
  // Values taken directly from the CV.
  highlights: [
    { value: '3', label: 'Real-world systems given architectural guidance' },
    { value: 'DEPI', label: 'Round 3 technical mentor' },
  ],
  focusAreas: [
    {
      id: 'training',
      title: 'Flutter training',
      text: 'Training sessions that guide students through real-world applications with Flutter and Firebase.',
    },
    {
      id: 'mentoring',
      title: 'Technical mentoring — DEPI Round 3',
      text: 'Supporting Flutter students and resolving complex technical challenges.',
    },
    {
      id: 'code-review',
      title: 'Code reviews',
      text: 'Detailed feedback on code quality, maintainability and Flutter best practices.',
    },
    {
      id: 'architecture',
      title: 'Architecture guidance',
      text: 'Identifying architectural issues and steering projects toward clean architecture.',
    },
    {
      id: 'debugging',
      title: 'Debugging support',
      text: 'Working with learners to debug complex issues across multiple Flutter projects.',
    },
    {
      id: 'performance',
      title: 'Performance optimization',
      text: 'Improving application performance and user experience.',
    },
    {
      id: 'practices',
      title: 'Modern Flutter practices',
      text: 'State management, API integration, local storage, Firebase, responsive UI and clean architecture.',
    },
  ],
};

export const contact = {
  eyebrow: 'Contact',
  headline: "Let's build something together.",
  text: 'For Flutter development, AI-powered marketing or Flutter training — reach out by email or phone.',
  location: 'Giza, Egypt',
};

export const footer = {
  tagline: 'Flutter Developer / AI & Digital Marketing Specialist',
};
