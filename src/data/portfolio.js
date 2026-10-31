/*
 * Central content file for the portfolio.
 *
 * Rules:
 * - Components only read from this file — edit content here, never in the UI.
 * - `null` / empty array = hidden in the UI (nothing is invented to fill gaps).
 * - Images: put files in assets/ and set the filename. `null` shows a neutral frame.
 */

export const profile = {
  name: 'Eslam Hany Mohamed',
  shortName: 'Eslam Hany',
  initials: 'EH',
  greeting: 'AI Engineering Team Lead · MGH',
  primaryRole: 'AI Engineering Team Lead',
  // Shown in the Hero "Disciplines" panel — the areas the team covers.
  roles: [
    'AI Engineering Team Lead',
    'E-commerce website development',
    'AI automation workflows',
    'UI/UX',
    'AI video production',
    'AI model development',
  ],
  summary:
    'I lead AI engineering and build with my teams across three businesses: websites, digital products, business systems and training programs. Working across MGH, NAHJ and Mindset, alongside external client projects.',
  photo: 'me.jpeg', // assets/images/ — sidebar, mobile top bar (initials shown while null)
  heroPhoto: null, // assets/images/ — set to replace the Hero "Disciplines" panel with a photo
};

// Hero call-to-action buttons.
export const hero = {
  primaryCta: { label: 'Get in Touch', href: 'mailto:eslamhanyriad@gmail.com' },
  secondaryCta: { label: 'View My Work', href: '#projects' },
};

// Section headings and intros (shown under each section title).
export const sections = {
  about: { title: 'About Me' },
  services: {
    title: 'How I Work',
    description: 'Six areas of work, each backed by something I have actually done.',
  },
  experience: {
    title: 'Experience',
    description: 'From AI instruction and tech support to leading AI engineering across the group.',
    // Order shown on the page; each experience item sets `group` to one of these ids.
    groups: [
      { id: 'work', title: 'Work Experience' },
      { id: 'volunteering', title: 'Volunteering' },
      { id: 'training', title: 'Training & Internships' },
      { id: 'education', title: 'Education' },
    ],
  },
  skills: {
    title: 'Skills & Tools',
    description: null,
  },
  projects: {
    title: 'Projects',
    description: 'Team work is credited as team work — each project states my part in it.',
    moreTitle: 'Earlier Apps',
  },
  teaching: {
    title: 'Training & Educational Products',
    description: null,
  },
};

export const about = {
  image: 'me.jpeg', // filename inside assets/images/
  intro:
    'The team covers several disciplines. My part is leadership and technical direction across them; I don’t personally execute every specialization. My official title is at MGH, but the work runs across three businesses under the same ownership and management. They are the group I work within, not clients.',
  teamAreasTitle: 'Team areas',
  teamAreas: [
    'E-commerce website development',
    'AI automation workflows',
    'UI/UX',
    'AI video production',
    'AI model development',
  ],
  // One role, three businesses (+ external client work).
  facets: [
    {
      id: 'mgh',
      title: 'MGH · Marketing Growth Hub',
      text: 'Technology, AI, engineering and business systems.',
    },
    {
      id: 'nahj',
      title: 'NAHJ for Consultation & Training',
      text: 'Consultation, training, digital products and Skill Atlas.',
    },
    {
      id: 'mindset',
      title: 'Mindset',
      text: 'Training, curricula, workshops, courses and educational products.',
    },
    {
      id: 'external',
      title: 'External client work',
      text: 'Client projects, kept separate from the group and credited by role.',
    },
  ],
  stats: [], // add real numbers only, e.g. { value: '3', label: '…' }
  education: {
    degree: 'B.Sc. Computers & Artificial Intelligence, minor in Computer Science',
    institution: 'Modern University for Technology and Information',
    location: null,
    note: '2020 – 2024 · GPA 3.24',
    coursework: [],
  },
};

// Shown in the sidebar Info block.
export const personalInfo = [{ label: 'Email', value: 'eslamhanyriad@gmail.com' }];

export const languages = [];

export const socials = {
  github: 'https://github.com/EslamHany2002',
  linkedin: 'https://www.linkedin.com/in/eslam-hany/',
  email: 'eslamhanyriad@gmail.com',
  phone: null,
  whatsapp: null,
};

export const cv = {
  file: 'Eslam_Hany_Mohamed_CV.pdf', // inside assets/cv/
};

/*
 * Skills
 * `skills` render as bars (`level` 0–100 is a visual guide only); `tags` render as chips.
 * `id` selects the icon: development | ai | creative | soft
 */
export const skillGroups = [
  {
    id: 'ai',
    title: 'AI & Machine Learning',
    skills: [],
    tags: [
      'Machine learning algorithms',
      'Deep learning',
      'Computer vision',
      'Data preprocessing & feature engineering',
      'TensorFlow',
      'Keras',
      'OpenCV',
      'Scikit-learn',
      'NumPy',
      'Pandas',
    ],
  },
  {
    id: 'development',
    title: 'Programming & Development',
    skills: [],
    tags: ['Python', 'C++', 'Flutter', 'Dart', 'Firebase', 'Git', 'Flask', 'HTML', 'CSS', 'JavaScript'],
  },
];

// Short list shown in the sidebar (names must match entries in skillGroups).
export const sidebarSkills = [];

// Tools used on current projects — sidebar checklist and the "Tools" row in Skills.
export const extraSkills = ['ClickUp', 'Shopify'];

// `id` selects the icon.
export const services = [
  {
    id: 'leadership',
    title: 'AI engineering and technical leadership',
    description: 'Leading a multidisciplinary AI engineering team and setting its technical direction.',
  },
  {
    id: 'products',
    title: 'Digital products',
    description: 'Taking a product from concept to a live platform, with the team.',
  },
  {
    id: 'websites',
    title: 'Websites and deployment',
    description: 'Building and deploying company websites with the team.',
  },
  {
    id: 'systems',
    title: 'Business systems',
    description: 'Building a sales system for the group. Still in development.',
  },
  {
    id: 'training',
    title: 'Training and educational products',
    description: 'Developing curricula, courses, workshops and training materials.',
  },
  {
    id: 'management',
    title: 'Project management and execution',
    description: 'Planning, governing and coordinating a client project with several workstreams.',
  },
];

/*
 * group: work | volunteering | training | education (see sections.experience.groups).
 * logo: filename inside assets/logos/.
 * logoFit: 'cover' (square artwork) | 'contain' (wordmark) | 'mark' (icon at the start of a wordmark).
 * logoZoom: scales square artwork so the mark fills the tile.
 */
export const experience = [
  {
    group: 'work',
    company: 'MGH · Marketing Growth Hub',
    logo: 'mgh.jpg',
    logoFit: 'cover',
    logoZoom: 1.6,
    location: null,
    current: true,
    roles: ['AI Engineering Team Lead'],
    dates: 'Sep 2026 – present',
    description:
      'The official role at MGH: leadership and technical direction across e-commerce development, AI automation, UI/UX, AI video and AI model work.',
    responsibilities: [],
    technologies: [],
  },
  {
    group: 'work',
    company: 'AMIT Learning',
    logo: 'amit.svg',
    logoFit: 'contain',
    location: null,
    current: false,
    roles: ['Senior Tech Support'],
    dates: 'Dec 2025 – Aug 2026',
    description:
      'Promoted to Senior Tech Support to lead technical operations and support AI-related systems and workflows.',
    responsibilities: [
      'Leading a small tech support team and coordinating daily technical operations',
      'Supporting AI tools, platforms, and system performance',
      'Contributing to improving technical workflows and support processes',
      'Mentoring junior team members and enhancing team productivity',
    ],
    technologies: [],
  },
  {
    group: 'work',
    company: 'AMIT Learning',
    logo: 'amit.svg',
    logoFit: 'contain',
    location: null,
    current: false,
    roles: ['Tech Support – DEPI Rounds 3, 4 & 5 (AI Track)'],
    dates: 'Oct 2025 – Aug 2026',
    description:
      'Providing technical and educational support in a large-scale AI learning environment as part of the Digital Egypt Pioneers Initiative (DEPI).',
    responsibilities: [
      'Supporting 30+ student groups across AI tracks',
      'Assisting instructors in delivering AI content and preparing technical materials',
      'Guiding students in understanding Machine Learning and Deep Learning concepts',
      'Troubleshooting technical issues related to AI tools, environments, and projects',
      'Supporting students in building and completing real-world AI graduation projects',
    ],
    technologies: ['30+ student groups supported'],
  },
  {
    group: 'work',
    company: 'AMIT Learning',
    logo: 'amit.svg',
    logoFit: 'contain',
    location: null,
    current: false,
    roles: ['AI Tech Support'],
    dates: 'Jun 2025 – Dec 2025',
    description: null,
    responsibilities: [
      'Coordinate with instructors in both B2C and B2B tracks to ensure session materials are prepared and aligned with learning objectives.',
      'Provide real-time support during live sessions by assisting instructors and helping students troubleshoot technical issues or clarify concepts.',
      'Review, grade, and provide detailed feedback on students’ assignments and quizzes.',
      'Offer continuous support to students outside session hours by resolving technical challenges and explaining difficult topics.',
      'Evaluate and discuss students’ graduation projects, assessing technical quality and providing constructive feedback.',
    ],
    technologies: [],
  },
  {
    group: 'training',
    company: 'AMIT',
    logo: 'amit.svg',
    logoFit: 'contain',
    location: null,
    current: false,
    roles: ['Machine Learning and AI Diploma'],
    dates: '28 Jul 2024 – 1 Jun 2025',
    description: null,
    responsibilities: [],
    technologies: [],
  },
  {
    group: 'volunteering',
    company: 'YLY, Ministry of Youth and Sports',
    logo: 'yly.jpg',
    logoFit: 'cover',
    location: null,
    current: false,
    roles: ['Leader of the Coordination Team'],
    dates: 'Jul 2023 – Jun 2024',
    description: null,
    responsibilities: [],
    technologies: [],
  },
  {
    group: 'volunteering',
    company: 'YLY, Ministry of Youth and Sports',
    logo: 'yly.jpg',
    logoFit: 'cover',
    location: null,
    current: false,
    roles: ['Operation Member'],
    dates: 'Aug 2022 – Jul 2023',
    description: null,
    responsibilities: [],
    technologies: [],
  },

  {
    group: 'training',
    company: 'Arab African International Bank',
    logo: 'aaib.png',
    logoFit: 'contain',
    location: null,
    current: false,
    roles: ['Internship'],
    dates: '17 Jul 2022 – 11 Aug 2022',
    description: 'One month covering the basics of every department in the bank.',
    responsibilities: [],
    technologies: [],
  },
  {
    group: 'training',
    company: 'RMS Services',
    logo: 'rms.png',
    logoFit: 'contain',
    location: null,
    current: false,
    roles: ['Flutter app development with Dart'],
    dates: '2022',
    description: '4 months.',
    responsibilities: [],
    technologies: [],
  },
  {
    group: 'training',
    company: 'Banque Misr',
    logo: 'banque-misr.jpg',
    logoFit: 'contain',
    location: null,
    current: false,
    roles: ['Internship'],
    dates: 'Jul 2021 – Aug 2021',
    description:
      'Rowad Program (entrepreneurship and career development), customer service, communication, CV writing, the bank’s core values, and personal loan and mortgage products.',
    responsibilities: [],
    technologies: [],
  },
  {
    group: 'education',
    company: 'Modern University for Technology and Information',
    logo: 'mti.jpg',
    logoFit: 'contain',
    location: null,
    current: false,
    roles: ['B.Sc. Computers & Artificial Intelligence, minor in Computer Science'],
    dates: '2020 – 2024',
    description: 'GPA 3.24',
    responsibilities: [],
    technologies: [],
  },
];

/*
 * Projects
 * category: badge. context: status label in the meta row. role: my role, shown in the meta row.
 * tags: chips. attribution: note on who did what. image: filename inside assets/projects/ —
 * projects with an image appear in the showcase grid; the rest appear as compact cards.
 * links: only real URLs. featured: false = not shown.
 */
export const projects = [
  {
    title: 'mgh-ae.com',
    category: 'MGH',
    context: 'Deployed',
    role: 'Development, technical implementation and deployment, with the team',
    description:
      'The MGH website — technology, AI, engineering and business systems. Built and deployed with the team since Sep 2026.',
    tags: ['Website development', 'Technical implementation', 'Deployment to hosting', 'Collaboration with the team'],
    attribution:
      'All three group sites were team efforts. The tags above are my part of that work; none of the sites is presented as solo work.',
    image: null,
    links: { live: 'https://mgh-ae.com/' },
  },
  {
    title: 'nahjqatar.com',
    category: 'NAHJ',
    context: 'Deployed',
    role: 'Development, technical implementation and deployment, with the team',
    description:
      'The NAHJ for Consultation & Training website — consultation, training and digital products. Built and deployed with the team since Sep 2026.',
    tags: ['Website development', 'Technical implementation', 'Deployment to hosting', 'Collaboration with the team'],
    attribution:
      'All three group sites were team efforts. The tags above are my part of that work; none of the sites is presented as solo work.',
    image: null,
    links: { live: 'https://nahjqatar.com/' },
  },
  {
    title: 'mgrowthhub.com',
    category: 'Mindset',
    context: 'Deployed',
    role: 'Development, technical implementation and deployment, with the team',
    description:
      'The Mindset website — training and educational products. Built and deployed with the team since Sep 2026.',
    tags: ['Website development', 'Technical implementation', 'Deployment to hosting', 'Collaboration with the team'],
    attribution:
      'All three group sites were team efforts. The tags above are my part of that work; none of the sites is presented as solo work.',
    image: null,
    links: { live: 'https://mgrowthhub.com/' },
  },
  {
    title: 'Skill Atlas',
    category: 'NAHJ',
    context: 'Live',
    role: 'Product, platform, content and promotion — implementation with the team',
    description:
      'A digital library of AI skills, prompts and practical workflows, live on the NAHJ website. The library keeps growing, so skill and prompt counts are not quoted here — the live site shows the current state.',
    tags: [
      'Product concept',
      'Product experience',
      'Platform and workflow development',
      'Upload and approval workflow',
      'Website and UI',
      'Content structure',
      'Organizing skills',
      'Organizing prompts',
      'Marketing and promotional materials',
      'Video and content planning',
    ],
    attribution:
      'This is the scope I was responsible for. Implementation involved the team, and where a teammate carried out a specific task, that work is theirs. I don’t claim to have personally coded every part of the platform.',
    image: null,
    links: { live: 'https://nahjqatar.com/ai-toolkit/' },
  },
  {
    title: 'Sales CRM + WhatsApp Hub',
    category: 'Cross-business',
    context: 'In progress',
    role: 'Building and leading development with the team',
    description:
      'A sales system being built for the group. Its planned scope covers lead management, follow-up and WhatsApp Business conversations. Under development — nothing here is presented as launched or complete.',
    tags: [
      'Lead management',
      'Lead assignment',
      'Follow-up workflows',
      'Sales team workflows',
      'WhatsApp Business integration',
      'Multiple WhatsApp profiles and users',
      'Customer conversations',
      'Performance tracking',
    ],
    attribution: 'This is a team project. Completed features will be listed only once they are confirmed.',
    image: null,
    links: {},
  },
  {
    title: 'E-commerce rebuild',
    category: 'External client',
    context: 'In progress',
    role: 'Project Manager, responsible for the overall project',
    description:
      'A ground-up rebuild of an e-commerce store on Shopify, with marketing and video work to follow. Website scope: project planning, sitemap, user flow, UI/UX workflow, Shopify implementation, products, payment gateways, reviews, final QA. Upcoming: advertising and product videos, reels, shooting and filming, creative direction.',
    tags: [
      'Project planning',
      'ClickUp setup and governance',
      'Task approval',
      'Daily team meeting',
      'Final QA and review',
      'Website, marketing and video workstreams',
    ],
    attribution:
      'Done by me: planning, ClickUp setup and governance, task approval, the daily team meeting, final QA. Managed: the website, marketing and video workstreams and coordination across the project team. Done by the team: sitemap and user-flow diagrams, UI/UX, Shopify implementation, content plan, designs, video production. Products, payments and reviews are part of the scope I oversee; their hands-on setup isn’t claimed as my own work. The client isn’t named, and no unreleased screens or internal documents are shown.',
    image: null,
    links: {},
  },

  // Earlier apps — compact cards under "Earlier Apps".
  {
    title: 'ISLAMI',
    earlier: true,
    category: 'Flutter',
    description:
      'An Islamic app with the Quran, a Hadith collection, an electronic misbaha, Quran radio, prayer times and azkar.',
    tags: ['Flutter'],
    image: null,
    links: { code: 'https://github.com/EslamHany2002/islamiapp' },
  },
  {
    title: 'Solom Chat',
    earlier: true,
    category: 'Flutter',
    description: 'A chat app for talking with friends, signed in with Gmail.',
    tags: ['Flutter'],
    image: null,
    links: { code: 'https://github.com/EslamHany2002/Solom-Chat' },
  },
  {
    title: 'Brain Cancer Detection',
    category: 'Graduation project',
    context: 'Graded A+',
    description:
      'A website and mobile application that detects whether a patient has a tumor from MRI, and shows its location, grade, type and treatment, using machine learning and deep learning.',
    tags: ['Python', 'Deep learning', 'Flask', 'Flutter', 'HTML/CSS/JS', 'Firebase'],
    image: null,
    links: { code: 'https://github.com/EslamHany2002/Rickman' },
  },
];

export const teaching = {
  intro:
    'My work isn’t limited to engineering. I also develop training products for the group; depending on the program, the work belongs to NAHJ or to Mindset.',
  highlights: [],
  focusAreas: [
    {
      id: 'curriculum',
      title: 'Curriculum development',
      text: 'Developing new curricula · Updating existing curricula · Improving course structures · Reviewing educational materials.',
    },
    {
      id: 'products',
      title: 'New training products',
      text: 'Workshops · Courses · Training programs · Designing learning experiences.',
    },
    {
      id: 'materials',
      title: 'Training materials',
      text: 'Presentations · Practical exercises · Supporting resources · AI educational content.',
    },
  ],
};

export const contact = {
  eyebrow: 'Contact',
  headline: "Let's build something together.",
  text: 'For AI engineering, websites, digital products or training programs — reach out by email.',
  location: null,
};

export const footer = {
  tagline: 'AI Engineering Team Lead',
};

// Interface strings (everything that isn't portfolio content).
export const ui = {
  lang: 'en',
  dir: 'ltr',
  skip: 'Skip to content',
  scroll: 'Scroll',
  disciplines: 'Disciplines',
  education: 'Education',
  current: 'Current',
  info: 'Info',
  languages: 'Languages',
  tools: 'Tools',
  email: 'Email',
  backToTop: 'Back to top',
  rights: 'All rights reserved.',
  downloadCv: 'Download CV',
  openMenu: 'Open menu',
  closeMenu: 'Close menu',
  sidebarLabel: 'Profile and navigation',
  sectionsLabel: 'Sections',
  visitSite: 'Visit site',
  sourceCode: 'Source Code',
  scopeLabel: 'Scope and highlights',
  detailsLabel: 'Details',
  nav: {
    home: 'Home',
    about: 'About',
    services: 'How I Work',
    experience: 'Experience',
    skills: 'Skills',
    projects: 'Projects',
    teaching: 'Training',
    contact: 'Contact',
  },
  form: {
    name: 'Name',
    email: 'Email',
    subject: 'Subject',
    optional: '(optional)',
    message: 'Message',
    send: 'Send Message',
    sending: 'Sending…',
    sendingHint: 'Sending your message…',
    idle: 'Your message goes straight to my inbox.',
    success: "Message sent successfully. I'll get back to you soon.",
    error: "Sorry, your message couldn't be sent. Please try again, or email me directly at",
    unconfigured: 'The contact form is unavailable right now. Please email me directly at',
    errName: 'Please enter your name.',
    errEmailEmpty: 'Please enter your email address.',
    errEmailInvalid: 'Please enter a valid email address.',
    errMessage: 'Please write a message of at least 10 characters.',
    defaultSubject: 'New portfolio message from',
  },
};
