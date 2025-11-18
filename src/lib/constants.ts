import type { Project, Experience, Skill } from './types';

export const projects: Project[] = [
  {
    name: 'Pawnz',
    description:
      'Opensea-inspired NFT marketplace prototype (frontend only).',
    longDescription:
      'Opensea-inspired NFT marketplace prototype focused on the neon Pawnz brand—features landing/login, wallet-like UI, and browsing flows built as a front-end only concept.',
    url: 'https://pawnz-labs.vercel.app/',
    imageUrl: '/projects/pawnz-min.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Vercel'],
    repoUrl: 'https://github.com/kulaizki/pawnz'
  },
  {
    name: 'payroll.finance',
    description:
      'Multi-chain EIP-712 payroll system with ETH and BSC mainnet support (private repository).',
    longDescription:
      'Multi-chain EIP-712 payroll system with CSV/Sheets ingestion, fee strategies, signature capture, and batch broadcasting across Ethereum and BSC mainnets (code in private repository).',
    url: 'https://payroll.finance/',
    imageUrl: '/projects/payroll-min.png',
    technologies: ['Next.js', 'TypeScript', 'Ethers.js', 'RainbowKit', 'Tailwind']
  },
  {
    name: 'Axonia',
    description: 'Interactive viewer for brain fMRI scan files.',
    longDescription:
      'Interactive viewer for brain fMRI scans using NiiVue for volumetric rendering, with lightweight Svelte UI to explore slices and volumes directly in the browser.',
    url: 'https://axonia.fitzsixto.com/',
    imageUrl: '/projects/axonia-min.png',
    technologies: ['SvelteKit', 'NiiVue.js', 'Tailwind', 'TypeScript'],
    repoUrl: 'https://github.com/kulaizki/axonia'
  },
  {
    name: 'Pokélight',
    description:
      'Pokédex with gacha simulator.',
    longDescription:
      'Pokédex web app with a playful gacha simulator, team management, and rapid search built on top of PokeAPI with responsive Next.js + Tailwind UI.',
    url: 'https://pokelight.fitzsixto.com/',
    imageUrl: '/projects/pokelight-yellow-min.webp',
    technologies: ['Next.js', 'TypeScript', 'Tailwind', 'PokeAPI', 'Vercel'],
    repoUrl: 'https://github.com/kulaizki/pokelight'
  },
  {
    name: 'Nexleague',
    description:
      'AI coach for League of Legends gameplay.',
    longDescription:
      'AI coaching assistant for League of Legends: ingests match data, provides build/rune suggestions, and chat-based feedback powered by Riot + Gemini APIs.',
    url: 'https://nexleague.vercel.app/',
    imageUrl: '/projects/nexleague-min.webp',
    technologies: ['SvelteKit', 'TypeScript', 'Gemini API', 'Riot API', 'Tailwind', 'Vercel'],
    repoUrl: 'https://github.com/kulaizki/nexleague'
  },
  {
    name: 'z1',
    description:
      'AI analytics for Dota 2 mastery.',
    longDescription:
      'Dota 2 analytics dashboard that blends OpenDota stats with lightweight AI summaries to surface drafts, timing, and performance insights.',
    url: 'https://z1.fitzsixto.com/',
    imageUrl: '/projects/z1-min.webp',
    technologies: ['SvelteKit', 'TypeScript', 'OpenDota API','Tailwind', 'Vercel'],
    repoUrl: 'https://github.com/kulaizki/z1'
  },
  {
    name: 'Echo',
    description:
      'AI companion for emotional exploration.',
    longDescription:
      'AI companion for reflective journaling and emotional exploration, with tone-aware prompts and memory anchored to Supabase storage.',
    url: 'https://echo.fitzsixto.com',
    imageUrl: '/projects/echo-chat.webp',
    technologies: ['SvelteKit', 'Typescript', 'Gemini API', 'Tailwind', 'Vercel'],
    repoUrl: 'https://github.com/kulaizki/echo'
  },
  {
    name: 'Planpokr',
    description: 
      'Real-time planning poker for agile teams.',
    longDescription:
      'Real-time planning poker for agile teams with Supabase + websockets for rooms, live estimation, and lightweight facilitator controls.',
    url: 'https://planpokr.fitzsixto.com/',
    imageUrl: '/projects/planpokr-min.webp',
    technologies: ['Websockets', 'Supabase', 'Typescript', 'Sveltekit', 'Tailwind', 'Vercel'],
    repoUrl: 'https://github.com/kulaizki/planpokr/'
  },
];

export const experiences: Experience[] = [
  {
    title: 'Software Engineer, AI/ML',
    company: 'Zaigo Labs',
    date: 'June 2025 - Present',
    responsibilities: [
      'Swiftly building and shipping numerous scalable solutions for companies generating $10M-$500M ARR.',
    ],
    link: 'https://zaigo.ai',
    imageUrl: '/experiences/zaigo-banner.png',
    technologies: ['Python', 'FastAPI', 'MCPs', 'Next.js', 'TypeScript', 'Supabase']
  },
  {
    title: 'Lead Software Engineer',
    company: 'Farmtri AI',
    date: 'Aug 2024 - Present',
    responsibilities: [
      'Architectured, developed, and optimized web & mobile apps.',
      'Managed full-stack development and hosting.'
    ],
    link: 'https://farmtri.ai',
    imageUrl: '/experiences/farmtri-banner.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase', 'Vercel']
  },
  {
    title: 'Mobile Developer',
    company: 'Fit Senpai',
    date: 'Aug 2024 - Nov 2024',
    responsibilities: [
      'Led mobile app development and software architecture.',
      'Implemented core features for the company mobile application.'
    ],
    link: 'https://www.fitsenpai.com/',
    imageUrl: '/experiences/fitsenpai-banner.png',
    technologies: ['React Native', 'TypeScript', 'Expo', 'Supabase', 'OpenAI API', 'LemonSqueezy']
  },
  {
    title: 'Software Developer Intern',
    company: 'Symph',
    date: 'Jun 2024 - Aug 2024',
    responsibilities: [
      'Worked on multiple software development projects.',
      'Contributed to full-stack dev, testing, and workflow optimization.'
    ],
    link: 'https://www.symph.co/',
    imageUrl: '/experiences/symph-banner.png',
    technologies: ['Next.js', 'React', 'TypeScript', 'Git', 'Docker', 'NestJS', 'Jest', 'AirOps']
  },
  {
    title: 'UI/UX Designer',
    company: 'Rethinkable',
    date: 'Oct 2023 - Jan 2024',
    responsibilities: [
      'Designed and implemented UI/UX designs and prototypes.',
      'Secured designs and presentations loved by company stakeholders.'
    ],
    link: 'https://rethinkable.xyz/',
    imageUrl: '/experiences/rethinkable-banner.jpg',
    technologies: ['Figma', 'Canva', 'Prototyping', 'User Research']
  },
  {
    title: 'Lead',
    company: 'Google Developer Groups on Campus - San Carlos',
    date: 'Aug 2023 - July 2025',
    responsibilities: [
      'Spearheaded 20+ workshops and events covering a wide range of topics',
      'Secured partnerships and sponsorships, including Datacamp.'
    ],
    link: 'https://gdg.community.dev/gdg-on-campus-university-of-san-carlos-cebu-philippines/',
    imageUrl: '/experiences/gdgoc-pfp.png',
    technologies: ['Gemini', 'Firebase', 'Flutter', 'Bevy']
  }
];

function getSkillCategory(skillName: string): Skill['category'] {
  const lowerCaseName = skillName.toLowerCase();
  if (['svelte', 'next.js', 'react', 'tailwind'].includes(lowerCaseName)) return 'Frameworks';
  if (['typescript', 'python', 'sql', 'solidity'].includes(lowerCaseName)) return 'Languages';
  if (['supabase', 'firebase', 'mysql', 'redis'].includes(lowerCaseName)) return 'Databases';
  if (['git', 'vercel', 'linux', 'aws', 'tensorflow', 'figma', 'n8n', 'docker', 'cloudflare', 'gcp', 'gemini', 'obsidian', 'vim'].includes(lowerCaseName)) return 'Tools';
  return 'Tools';
}

const rawSkills = [
  { skillName: 'Svelte', skillUrl: 'https://svelte.dev/', skillIcon: 'https://skillicons.dev/icons?i=svelte' },
  { skillName: 'Next.js', skillUrl: 'https://nextjs.org/', skillIcon: 'https://skillicons.dev/icons?i=nextjs' },
  { skillName: 'React', skillUrl: 'https://reactjs.org/', skillIcon: 'https://skillicons.dev/icons?i=react' },
  { skillName: 'Tailwind', skillUrl: 'https://tailwindcss.com/', skillIcon: 'https://skillicons.dev/icons?i=tailwind' },
  { skillName: 'Typescript', skillUrl: 'https://www.typescriptlang.org/', skillIcon: 'https://skillicons.dev/icons?i=typescript' },
  { skillName: 'Solidity', skillUrl: 'https://soliditylang.org/', skillIcon: 'https://skillicons.dev/icons?i=solidity' },
  { skillName: 'Supabase', skillUrl: 'https://supabase.io/', skillIcon: 'https://skillicons.dev/icons?i=supabase' },
  { skillName: 'Firebase', skillUrl: 'https://firebase.google.com/', skillIcon: 'https://skillicons.dev/icons?i=firebase' },
  { skillName: 'Redis', skillUrl: 'https://redis.io/', skillIcon: 'https://skillicons.dev/icons?i=redis' },
  { skillName: 'Git', skillUrl: 'https://git-scm.com/', skillIcon: 'https://skillicons.dev/icons?i=git' },
  { skillName: 'Vercel', skillUrl: 'https://vercel.com/', skillIcon: 'https://skillicons.dev/icons?i=vercel' },
  { skillName: 'Linux', skillUrl: 'https://www.linux.org/', skillIcon: 'https://skillicons.dev/icons?i=linux' },
  { skillName: 'Python', skillUrl: 'https://www.python.org/', skillIcon: 'https://skillicons.dev/icons?i=python' },
  { skillName: 'SQL', skillUrl: 'https://www.mysql.com/', skillIcon: 'https://skillicons.dev/icons?i=mysql' },
  { skillName: 'Figma', skillUrl: 'https://www.figma.com/', skillIcon: 'https://skillicons.dev/icons?i=figma' },
  { skillName: 'Obsidian', skillUrl: 'https://obsidian.md/', skillIcon: 'https://skillicons.dev/icons?i=obsidian' },
  { skillName: 'Vim', skillUrl: 'https://www.vim.org/', skillIcon: 'https://skillicons.dev/icons?i=vim' },
  { skillName: 'Docker', skillUrl: 'https://www.docker.com/', skillIcon: 'https://skillicons.dev/icons?i=docker' },
  { skillName: 'Cloudflare', skillUrl: 'https://www.cloudflare.com/', skillIcon: 'https://skillicons.dev/icons?i=cloudflare' },
  { skillName: 'n8n', skillUrl: 'https://n8n.io/', skillIcon: '/images/n8n-logo.jpg' },
  { skillName: 'GCP', skillUrl: 'https://cloud.google.com/', skillIcon: 'https://skillicons.dev/icons?i=gcp' },
  { skillName: 'Gemini', skillUrl: 'https://gemini.google.com/', skillIcon: '/images/gemini-icon-logo.png' },
];

export const skills: Skill[] = rawSkills.map(skill => ({
  name: skill.skillName,
  icon: skill.skillIcon,
  url: skill.skillUrl,
  category: getSkillCategory(skill.skillName)
})); 
