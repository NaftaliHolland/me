export const site = {
  name: 'Naftali Holland',
  title: 'Naftali Holland',
  tagline: "Hi, I'm Naftali Holland",
  bio: "A software developer based in Nairobi, Kenya, who enjoys building things for the web. My main tools are Python and Django on the backend, and TypeScript and React on the frontend. I currently work as a full-stack developer at Softspin Technologies. Beyond software, I'm interested in philosophy, art, and chess. I also enjoy exploring ideas through side projects, experimenting with new things, and contributing to open source whenever I can.",
  about: "I'm a software developer who enjoys working across the stack, from building frontend interfaces and backend systems to setting up servers and deployment pipelines. I like figuring things out, getting my hands dirty, and seeing an idea through to something that works.",
  links: [
    { label: 'GitHub', url: 'https://github.com/NaftaliHolland' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/naftali-holland' },
    { label: 'Email', url: 'mailto:naftaliholland01@gmail.com' },
  ],
  skills: ['Python', 'Django', 'TypeScript', 'React', 'Astro'],
};

export const sections = [
  { key: 'projects', label: 'Projects', collection: 'projects', range: false },
  { key: 'work', label: 'Work', collection: 'experience', range: true },
  //{ key: 'writing', label: 'Writing', collection: 'writing', range: false },
  //{ key: 'reading', label: 'Reading', collection: 'reading', range: false },
] as const;

export type Section = (typeof sections)[number];
