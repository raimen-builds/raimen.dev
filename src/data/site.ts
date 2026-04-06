export type SocialLink = {
  label: string;
  handle: string;
  href?: string;
  note: string;
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
    'Software, hardware, automation, and live interaction — built by someone who likes making things that are useful, weird, and memorable.',
  heroPrimaryCta: {
    label: 'Get in touch',
    href: '#contact',
  },
  heroSecondaryCta: {
    label: 'Find Raimen online',
    href: '#socials',
  },
  availability: 'Currently building, experimenting, and documenting the work in public.',
  seoKeywords: ['Raimen', 'creative developer', 'systems builder', 'interactive design', 'automation'],
};

export const about = {
  intro:
    'Raimen is a hands-on builder with a DevOps background who works across software, hardware, automation, and interactive systems.',
  body: `A lot of the work starts with a practical problem and turns into a build: a tool, a workflow, a device, an interactive system, or a piece of content infrastructure.

Raimen likes making things that work in the real world and still feel inventive, personal, and fun to interact with.`,
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

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    handle: '@raimen-builds',
    href: 'https://github.com/raimen-builds',
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
