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
    'Raimen is a DevOps engineer, builder, and creative technologist working across software, hardware, automation, and interactive systems.',
  eyebrow: 'DevOps engineer, builder, and creative technologist',
  heroTitle: 'Raimen builds software, systems, and interactive experiments.',
  heroText:
    'Software, hardware, automation, and live interaction — brought together by someone who likes building things that are useful, weird, and memorable.',
  heroPrimaryCta: {
    label: 'Get in touch',
    href: '#contact',
  },
  heroSecondaryCta: {
    label: 'Find Raimen online',
    href: '#socials',
  },
  availability: 'Currently building, experimenting, and documenting the work in public.',
  seoKeywords: ['Raimen', 'creative developer', 'systems builder', 'interactive design', 'automation', 'portfolio'],
};

export const about = {
  intro:
    'Raimen is a hands-on builder with a DevOps background who works across software, hardware, automation, and interactive systems.',
  body: `A lot of the work starts with a practical problem and turns into a build: a tool, a workflow, a device, an interactive system, or a piece of content infrastructure.

This site is intentionally simple. It's a place to point people, share the basics, and make it easy to find the channels where the work is actually happening.`,
  highlights: [
    'Software, automation, and infrastructure',
    'Hardware builds and interactive systems',
    'Content tooling, experiments, and practical execution',
  ],
  stats: [
    { value: 'Code', label: 'Software + systems' },
    { value: 'Build', label: 'Hardware + automation' },
    { value: 'Public', label: 'Experiments + content' },
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
    label: 'YouTube',
    handle: 'RaimenBuilds',
    href: 'https://youtube.com/@RaimenBuilds',
    note: 'Builds, experiments, and the public-facing archive as it evolves.',
  },
  {
    label: 'Website',
    handle: 'raimen.dev',
    href: 'https://raimen.dev',
    note: 'Home base for positioning, contact, and public-facing identity.',
  },
  {
    label: 'Email',
    handle: 'hello@raimen.dev',
    href: 'mailto:hello@raimen.dev',
    note: 'Best route for collaborations, consulting, and serious project inquiries.',
  },
];

export const contact = {
  email: 'hello@raimen.dev',
  heading: "Want to reach Raimen?",
  body:
    'Email is the simplest way in for collaborations, questions, or interesting opportunities.',
};
