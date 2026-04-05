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
  heroTitle: 'Raimen builds sharp, memorable digital experiences.',
  heroText:
    'Design, development, and systems thinking brought together to create work that feels clear, distinctive, and built with intent — from brand-forward websites to custom digital experiences.',
  heroPrimaryCta: {
    label: 'Get in touch',
    href: '#contact',
  },
  heroSecondaryCta: {
    label: 'Find Raimen online',
    href: '#socials',
  },
  availability: 'Available for select collaborations, freelance work, and creative technical partnerships.',
  seoKeywords: ['Raimen', 'creative developer', 'systems builder', 'interactive design', 'automation', 'portfolio'],
};

export const about = {
  intro:
    'Raimen works across design, development, systems thinking, and online identity. The through-line is simple: make things that feel intentional, expressive, and technically sharp.',
  body: `The work spans brand sites, interactive experiences, creative tooling, and systems that support real-world execution. Some projects are client-facing. Some are internal. Some are experiments that become something bigger later.

This site is a home base for that work — a place to show range, establish taste, and make future case studies and collaborations easier to explore.`,
  highlights: [
    'Brand-led websites with a strong visual point of view',
    'Design and development working as one system',
    'Creative tooling and digital experiences built to scale',
  ],
  stats: [
    { value: 'Brand', label: 'Identity + presence' },
    { value: 'Build', label: 'Design + development' },
    { value: 'Digital', label: 'Experiences + systems' },
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
    title: 'Selected Client + Creative Work',
    role: 'Web experiences, visual systems, and custom builds',
    year: 'Ongoing',
    summary:
      'A portfolio category reserved for polished client work, collaborative builds, and projects that deserve deeper case-study treatment as the site expands.',
    tags: ['Web', 'Creative Direction', 'Case Study'],
    featured: true,
    links: [{ label: 'Case study soon' }],
  },
  {
    title: 'Custom Automation + Build Work',
    role: 'Systems, scripting, hardware integration, and live experiments',
    year: 'Ongoing',
    summary:
      'A running body of work across design systems, front-end builds, creative tooling, experiments, and practical digital problem-solving.',
    tags: ['Creative Tech', 'Experiments', 'Digital Systems'],
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
    label: 'Contact',
    handle: 'Collaborations and inquiries',
    href: 'mailto:hello@raimen.dev',
    note: 'Best for serious project inquiries, freelance work, and creative partnerships.',
  },
];

export const contact = {
  email: 'hello@raimen.dev',
  heading: "Let's make something memorable.",
  body:
    'If you need someone who can think clearly about design, development, structure, and execution without flattening the creative edge, send a note.',
};
