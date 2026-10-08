// All portfolio content lives here, so updating the site never means touching templates.

export interface Experience {
  company: string;
  role: string;
  start: string; // YYYY-MM
  end: string | null; // null = present
  location: string;
  summary: string;
  highlights: string[];
  stack: string[];
}

export interface Project {
  title: string;
  kind: string;
  description: string;
  points: string[];
  stack: string[];
  mock: 'dashboard' | 'shop' | 'landing';
}

export interface SkillGroup {
  title: string;
  icon: string;
  blurb: string;
  skills: { name: string; note?: string }[];
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  detail?: string;
}

export const PROFILE = {
  name: 'Sonali Samal',
  firstName: 'Sonali',
  initials: 'SS',
  headline: 'Frontend Developer',
  roles: ['Frontend Developer', 'Angular Developer', 'UI Engineer', 'Responsive Web Specialist'],
  location: 'Hyderabad, Telangana, India',
  email: 'sonalisamal466@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sonali-samal-6b3371229',
  photo: 'sonali.jpg',
  careerStart: '2023-09',
  intro:
    'I design and build responsive, pixel-perfect web interfaces that turn complex workflows into experiences people enjoy using.',
  about: [
    'I’m a frontend developer who specialises in modern, pixel-perfect user interfaces with HTML5, CSS3, JavaScript, Angular, Bootstrap and Tailwind CSS.',
    'Today I work on live CRM applications, where I ship new features, refine UI/UX, integrate REST APIs, fix bugs and tune performance. I enjoy taking a design and turning it into responsive, maintainable and reusable components.',
    'I love learning new technologies and solving real-world problems. I’m looking for teams building modern frontend products where I can contribute and keep deepening my Angular expertise.',
  ],
  languages: [
    { name: 'English', level: 'Professional' },
    { name: 'Hindi', level: 'Fluent' },
    { name: 'Odia', level: 'Native' },
    { name: 'Telugu', level: 'Limited working' },
  ],
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Core Web',
    icon: 'code',
    blurb: 'Semantic, accessible foundations.',
    skills: [{ name: 'HTML5' }, { name: 'CSS3' }, { name: 'JavaScript (ES6+)' }, { name: 'Responsive Web Design' }],
  },
  {
    title: 'Frameworks',
    icon: 'layers',
    blurb: 'Component-driven applications.',
    skills: [{ name: 'Angular' }, { name: 'React', note: 'Basic' }, { name: 'Reusable Components' }],
  },
  {
    title: 'Styling & UI',
    icon: 'palette',
    blurb: 'Polished, consistent interfaces.',
    skills: [{ name: 'Tailwind CSS' }, { name: 'Bootstrap' }, { name: 'UI / UX Implementation' }, { name: 'Pixel-perfect Layouts' }],
  },
  {
    title: 'Backend & Tooling',
    icon: 'terminal',
    blurb: 'Shipping end to end.',
    skills: [{ name: 'REST API Integration' }, { name: 'PHP CodeIgniter' }, { name: 'Git' }, { name: 'Visual Studio Code' }],
  },
];

export const MARQUEE = [
  'Angular', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'REST APIs',
  'React', 'CodeIgniter', 'Git', 'Responsive UI', 'UI/UX',
];

export const EXPERIENCE: Experience[] = [
  {
    company: 'Tranquil Web Solutions',
    role: 'Frontend Developer',
    start: '2024-09',
    end: null,
    location: 'Hyderabad',
    summary:
      'Building the frontend of a live CRM product and leading UI development for an eCommerce platform.',
    highlights: [
      'Build responsive dashboards, forms and user interfaces for a live CRM application.',
      'Lead frontend development for an eCommerce project, owning the full UI cycle from design integration to deployment.',
      'Implemented product listing, shopping cart and responsive checkout flows with cross-device compatibility.',
      'Collaborate closely with backend developers and QA to ensure smooth functionality and performance.',
      'Improved UX and site performance through UI/UX best practices and clean code structure.',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'Angular', 'REST APIs'],
  },
  {
    company: 'Mount String Technologies Pvt. Ltd.',
    role: 'Frontend Developer',
    start: '2023-09',
    end: '2024-09',
    location: 'India',
    summary: 'Developed responsive, user-friendly web applications alongside the design team.',
    highlights: [
      'Developed responsive and user-friendly web applications using HTML, CSS and JavaScript.',
      'Partnered with the design team on UI/UX improvements that drove a 20% increase in user engagement.',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'CRM Platform',
    kind: 'Live product · Tranquil Web Solutions',
    description:
      'Responsive dashboards, data-heavy forms and workflows for a CRM used every day by real teams.',
    points: ['Dashboards & analytics views', 'REST API integration', 'Performance & bug-fix work'],
    stack: ['Angular', 'JavaScript', 'REST'],
    mock: 'dashboard',
  },
  {
    title: 'eCommerce Storefront',
    kind: 'Frontend lead · Tranquil Web Solutions',
    description:
      'Led the UI from design hand-off to deployment: product listing, cart and a responsive checkout.',
    points: ['Product listing & filtering', 'Shopping cart', 'Cross-device checkout flow'],
    stack: ['ReactJS', 'CSS', 'JavaScript'],
    mock: 'shop',
  },
  {
    title: 'Engagement-focused UI Revamp',
    kind: 'Web apps · Mount String Technologies',
    description:
      'Responsive web applications and UI/UX improvements built with the design team.',
    points: ['Responsive layouts', 'Design-system alignment', '+20% user engagement'],
    stack: ['HTML', 'CSS', 'JavaScript'],
    mock: 'landing',
  },
];

export const EDUCATION: Education[] = [
  {
    school: 'GIET, Ghangapatna, Bhubaneswar',
    degree: 'B.Tech, Computer Engineering',
    period: '2019 – 2023',
    detail: 'Biju Patnaik University of Technology (BPUT), Odisha',
  },
  {
    school: 'Tetrahedron Junior College',
    degree: 'Higher Secondary (12th), Science',
    period: '2017 – 2019',
  },
  {
    school: 'Saraswati Shishu Vidya Mandir, Singhpur',
    degree: 'Schooling',
    period: '2014 – 2017',
  },
];
