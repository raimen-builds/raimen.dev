export type SocialLink = {
  label: string;
  handle: string;
  href?: string;
  note: string;
};

export type PortfolioLink = {
  label: string;
  href?: string;
};

export type PortfolioItem = {
  title: string;
  role: string;
  year: string;
  summary: string;
  tags: string[];
  featured: boolean;
  links: PortfolioLink[];
};

export const site = {
  name: 'Raimen',
  domain: 'raimen.dev',
  url: 'https://raimen.dev',
  title: 'Raimen | Creative Developer & Systems Builder',
  description:
    'Creative developer, systems builder, and internet-native experimenter working across web, hardware, automation, and interactive experiences.',
  eyebrow: 'Creative developer, systems builder, and internet-native experimenter',
  heroTitle: 'Raimen builds interactive systems with personality.',
  heroText:
    'From polished web experiences to hardware-driven chaos, Raimen blends design, development, automation, and live interactivity into projects that feel sharp, alive, and unmistakably custom.',
  heroPrimaryCta: {
    label: 'View selected work',
    href: '#portfolio',
  },
  heroSecondaryCta: {
    label: 'Start a conversation',
    href: '#contact',
  },
  availability: 'Open to collaborations, consulting, creative builds, and ambitious technical experiments.',
  seoKeywords: ['Raimen', 'creative developer', 'systems builder', 'interactive design', 'automation', 'portfolio'],
};

export const about = {
  intro:
    'Raimen works at the intersection of software, hardware, design, and live interaction. The through-line is simple: build things that feel intentional, expressive, and technically solid.',
  body: `A lot of the work lives between categories. Some projects are web-first. Some are systems-first. Some are built for content, audience interaction, or physical devices. The common thread is a bias toward experiences that do something memorable instead of just looking respectable.

This site is a home base for that work: a place to point people, show range, and make future case studies, experiments, and collaborations easier to share.`,
  highlights: [
    'Interactive web experiences with strong visual direction',
    'Automation and systems design for real-world workflows',
    'Hardware, firmware, and device-integrated experiments',
  ],
  stats: [
    { value: 'Web', label: 'Design + development' },
    { value: 'Systems', label: 'Automation + tooling' },
    { value: 'Physical', label: 'Devices + interaction' },
  ],
};

export const portfolio: PortfolioItem[] = [
  {
    title: 'raimen.dev',
    role: 'Personal site design and implementation',
    year: '2026',
    summary:
      'A fast, editorial-style personal site designed to establish a stronger online presence and create a foundation for future case studies, writing, and project storytelling.',
    tags: ['Astro', 'GitHub Pages', 'Brand Site'],
    featured: true,
    links: [
      { label: 'Live site', href: 'https://raimen.dev' },
      { label: 'Source', href: 'https://github.com/raimen-ttv/raimen.dev' },
    ],
  },
  {
    title: 'Stream Havoc',
    role: 'Interactive platform architecture, tooling, and documentation',
    year: '2026',
    summary:
      'A multi-part interactive stack spanning dashboards, Twitch-facing surfaces, device gateways, firmware, and infrastructure for viewer-driven and operator-controlled experiences.',
    tags: ['Interactive Systems', 'Twitch', 'Devices', 'Infrastructure'],
    featured: true,
    links: [
      { label: 'GitHub org', href: 'https://github.com/StreamHavoc' },
      { label: 'Docs', href: 'https://github.com/StreamHavoc/docs' },
    ],
  },
  {
    title: 'Custom Automation + Build Work',
    role: 'Systems, scripting, hardware integration, and live experiments',
    year: 'Ongoing',
    summary:
      'A running body of work across automation, firmware, content tooling, interactive builds, and practical experiments that connect software to real-world behavior.',
    tags: ['Automation', 'Hardware', 'Creative Tech'],
    featured: false,
    links: [{ label: 'Get in touch', href: '#contact' }],
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    handle: '@raimen-ttv',
    href: 'https://github.com/raimen-ttv',
    note: 'Code, experiments, tooling, and active build work.',
  },
  {
    label: 'Website',
    handle: 'raimen.dev',
    href: 'https://raimen.dev',
    note: 'Home base for portfolio, positioning, and future case studies.',
  },
  {
    label: 'Email',
    handle: 'hello@raimen.dev',
    href: 'mailto:hello@raimen.dev',
    note: 'Best route for collaborations, consulting, and project inquiries.',
  },
  {
    label: 'Stream Havoc',
    handle: 'github.com/StreamHavoc',
    href: 'https://github.com/StreamHavoc',
    note: 'Current stack work spanning docs, services, devices, and infra.',
  },
];

export const contact = {
  email: 'hello@raimen.dev',
  heading: "Let's build something sharp.",
  body:
    'If you need someone who can think across design, development, systems, automation, and weird technical edge cases without losing the thread, send a note.',
};
