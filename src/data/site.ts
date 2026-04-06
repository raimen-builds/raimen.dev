export type SocialLink = {
  label: string;
  icon: string;
  href?: string;
};

export const site = {
  name: 'Raimen',
  domain: 'raimen.dev',
  url: 'https://raimen.dev',
  title: 'Raimen | Builder of Systems, Tools, and Weird Things',
  description:
    'Raimen builds systems, tools, printed parts, and interactive projects with a practical streak and a taste for the unusual.',
  eyebrow: 'Systems, tools, prints, and experiments',
  heroTitle: 'Raimen Builds.',
  heroText:
    'Systems, tools, printed parts, and interactive projects that are practical, strange, and worth making real.',
  seoKeywords: ['Raimen', 'systems builder', '3D printing', 'automation', 'interactive projects'],
};

export const about = {
  body: `Raimen works at the intersection of systems, fabrication, and experimentation, with a knack for turning ideas into functional prototypes.

On Twitch, Raimen streams funducational content in the realm of microelectronics, DIY, and stream automation. His favorite type of mod is adding microcontrollers to off-the-shelf toys that probably should not have wifi capabilities. He is working on a line of viewer-activated desktop gadgets for live streamers under the brand name <a href="https://streamhavoc.com" target="_blank" rel="noreferrer">Stream Havoc</a>.

3D printing is a core part of that process, not as decoration, but as a fast way to prototype, refine, and iterate in the physical world.

Some of it ends up as infrastructure, some of it becomes content, and some of it turns into strange little machines.`,
};

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    icon: 'github',
    href: 'https://github.com/raimen-builds',
  },
  {
    label: 'YouTube',
    icon: 'youtube',
    href: 'https://youtube.com/@RaimenBuilds',
  },
  {
    label: 'Instagram',
    icon: 'instagram',
    href: 'https://instagram.com/RaimenBuilds',
  },
  {
    label: 'Discord',
    icon: 'discord',
    href: 'https://discord.gg/ybwmg9HBqv',
  },
  {
    label: 'LinkedIn',
    icon: 'linkedin',
    href: 'https://linkedin.com/in/loganmcghee',
  },
  {
    label: 'Twitch',
    icon: 'twitch',
    href: 'https://twitch.tv/raimen',
  },
  {
    label: 'Email',
    icon: 'email',
    href: 'mailto:hello@raimen.dev',
  },
];

