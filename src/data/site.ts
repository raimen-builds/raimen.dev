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
  title: 'Raimen | Creative Developer & Digital Builder',
  description:
    'A bold single-page portfolio for Raimen featuring an about section, selected work, contact details, and social presence.',
  eyebrow: 'Creative developer, visual builder, and internet-native storyteller',
  heroTitle: 'Raimen builds digital experiences with personality.',
  heroText:
    'This launch version of raimen.dev is designed to feel confident, modern, and unmistakably yours while leaving clean room for future projects, case studies, and writing.',
  heroPrimaryCta: {
    label: 'View selected work',
    href: '#portfolio',
  },
  heroSecondaryCta: {
    label: 'Get in touch',
    href: '#contact',
  },
  availability: 'Available for collaborations, creative partnerships, and freelance opportunities.',
  seoKeywords: ['Raimen', 'portfolio', 'creative developer', 'designer', 'web developer'],
};

export const about = {
  intro:
    'Raimen is a multidisciplinary creator working across design, development, and online identity. The goal of this site is simple: present the work with clarity while keeping the energy and point of view front and center.',
  body: `This first version is intentionally built as a strong launchpad. It introduces who Raimen is, highlights featured work, and creates a home base for future case studies, experiments, and brand storytelling.

The visual language leans editorial and high-contrast, with expressive typography, layered gradients, and card-based storytelling. As final brand copy and project assets come in, the structure is already ready for them.`,
  highlights: [
    'Brand-led web experiences with a distinct visual voice',
    'Portfolio storytelling that can grow into deeper case studies',
    'Fast static-site architecture for simple hosting and maintenance',
  ],
  stats: [
    { value: '01', label: 'Launch-ready home base' },
    { value: '04', label: 'Core sections' },
    { value: 'Infinite', label: 'Room to expand' },
  ],
};

export const portfolio: PortfolioItem[] = [
  {
    title: 'Raimen.dev Launch System',
    role: 'Brand site concept and implementation',
    year: '2026',
    summary:
      'A fast, editorial one-page site built to establish a strong online presence and support future portfolio growth.',
    tags: ['Astro', 'Design System', 'GitHub Pages'],
    featured: true,
    links: [
      { label: 'Live site', href: 'https://raimen.dev' },
      { label: 'Case study slot' },
    ],
  },
  {
    title: 'Featured Project Placeholder',
    role: 'Add project name and your contribution',
    year: 'TBD',
    summary:
      'Use this card for a signature project. The layout already supports a clean headline, a concise summary, and one or two outbound links.',
    tags: ['Placeholder', 'Case Study Ready', 'Portfolio'],
    featured: true,
    links: [{ label: 'Project link' }, { label: 'Source or breakdown' }],
  },
  {
    title: 'Creative Experiment Placeholder',
    role: 'Motion, art direction, or interactive concept',
    year: 'TBD',
    summary:
      'Reserve this space for something more playful or exploratory to show range beyond production work.',
    tags: ['Concept', 'Visual Design', 'Interactive'],
    featured: false,
    links: [{ label: 'Preview link' }],
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    handle: '@your-handle',
    note: 'Add your GitHub profile URL in src/data/site.ts',
  },
  {
    label: 'LinkedIn',
    handle: 'Add your LinkedIn',
    note: 'Swap in your public profile when ready.',
  },
  {
    label: 'Instagram',
    handle: '@your-handle',
    note: 'Great for brand, creative, or behind-the-scenes work.',
  },
  {
    label: 'X',
    handle: '@your-handle',
    note: 'Optional slot for announcements, process, or conversation.',
  },
];

export const contact = {
  email: 'hello@raimen.dev',
  heading: "Let's build something memorable.",
  body:
    'For collaborations, commissions, or creative conversations, email is the clearest way in right now. Social profile URLs can be dropped into the data file as soon as they are finalized.',
};
