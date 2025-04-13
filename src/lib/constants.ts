import type { Project, Experience, Skill } from './types';

export const projects: Project[] = [
  {
    name: 'z1',
    description:
      'Master Dota 2 with personalized AI-powered gameplay analytics and strategic guidance.',
    url: 'https://z1-dota.vercel.app/',
    imageUrl: '/projects/z1-min.webp'
  },
  {
    name: 'nexleague',
    description:
      'Uncover your League of Legends potential with AI-driven insights and tailored performance analysis.',
    url: 'https://nexleague.vercel.app/',
    imageUrl: '/projects/nexleague-min.webp'
  },
  {
    name: 'echo',
    description:
      'An AI-powered web app designed to be a space for users to explore their emotions through guided conversation.',
    url: 'https://fitzsixto.com',
    imageUrl: '/projects/echo-min.png'
  },
  {
    name: 'Neurotypical vs. ASD',
    description:
      'An app that visualizes Neurotypical vs. Autism Brain Disorder Brain Connectivity using the Harvard-Oxford atlases.',
    url: 'https://neurotypical-vs-asd.streamlit.app/',
    imageUrl: '/projects/neuro-vs-asd-min.webp'
  },
];

export const experiences: Experience[] = [
  {
    title: 'Senior Software Engineer',
    company: 'Farmtri',
    date: 'Aug 2024 - Mar 2025',
    responsibilities: [
      'Architectured, developed, and optimized the company website.',
      'Managed full-stack development and hosting.'
    ],
    link: 'https://farmtri.com',
    imageUrl: '/experiences/farmtri-banner.png'
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
    imageUrl: '/experiences/fitsenpai-banner.png'
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
    imageUrl: '/experiences/symph-banner.png'
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
    imageUrl: '/experiences/rethinkable-banner.jpg'
  },
  {
    title: 'Lead',
    company: 'Google Developer Groups on Campus - San Carlos',
    date: 'Aug 2023 - Present',
    responsibilities: [
      'Spearheaded 20+ workshops and events covering a wide range of topics',
      'Secured partnerships and sponsorships, including Datacamp.'
    ],
    link: 'https://gdg.community.dev/gdg-on-campus-university-of-san-carlos-cebu-philippines/',
    imageUrl: '/experiences/gdgoc-pfp.png'
  }
];

function getSkillCategory(skillName: string): Skill['category'] {
  const lowerCaseName = skillName.toLowerCase();
  if (['svelte', 'next.js', 'react', 'tailwind'].includes(lowerCaseName)) return 'Frameworks';
  if (['typescript', 'javascript', 'python', 'sql'].includes(lowerCaseName)) return 'Languages';
  if (['supabase', 'firebase', 'mysql'].includes(lowerCaseName)) return 'Databases';
  if (['git', 'vercel', 'linux', 'aws', 'tensorflow', 'figma', 'n8n', 'docker', 'cloudflare', 'gcp'].includes(lowerCaseName)) return 'Tools';
  return 'Tools'; 
}

const rawSkills = [
  { skillName: 'Svelte', skillUrl: 'https://svelte.dev/', skillIcon: 'https://skillicons.dev/icons?i=svelte' },
  { skillName: 'Next.js', skillUrl: 'https://nextjs.org/', skillIcon: 'https://skillicons.dev/icons?i=nextjs' },
  { skillName: 'React', skillUrl: 'https://reactjs.org/', skillIcon: 'https://skillicons.dev/icons?i=react' },
  { skillName: 'Tailwind', skillUrl: 'https://tailwindcss.com/', skillIcon: 'https://skillicons.dev/icons?i=tailwind' },
  { skillName: 'Typescript', skillUrl: 'https://www.typescriptlang.org/', skillIcon: 'https://skillicons.dev/icons?i=typescript' },
  { skillName: 'Javascript', skillUrl: 'https://www.javascript.com/', skillIcon: 'https://skillicons.dev/icons?i=javascript' }, 
  { skillName: 'Supabase', skillUrl: 'https://supabase.io/', skillIcon: 'https://skillicons.dev/icons?i=supabase' },
  { skillName: 'Firebase', skillUrl: 'https://firebase.google.com/', skillIcon: 'https://skillicons.dev/icons?i=firebase' },
  { skillName: 'Git', skillUrl: 'https://git-scm.com/', skillIcon: 'https://skillicons.dev/icons?i=git' },
  { skillName: 'Vercel', skillUrl: 'https://vercel.com/', skillIcon: 'https://skillicons.dev/icons?i=vercel' },
  { skillName: 'Linux', skillUrl: 'https://www.linux.org/', skillIcon: 'https://skillicons.dev/icons?i=linux' },
  { skillName: 'Python', skillUrl: 'https://www.python.org/', skillIcon: 'https://skillicons.dev/icons?i=python' },
  { skillName: 'SQL', skillUrl: 'https://www.mysql.com/', skillIcon: 'https://skillicons.dev/icons?i=mysql' },
  { skillName: 'Figma', skillUrl: 'https://www.figma.com/', skillIcon: 'https://skillicons.dev/icons?i=figma' },
  { skillName: 'Docker', skillUrl: 'https://www.docker.com/', skillIcon: 'https://skillicons.dev/icons?i=docker' },
  { skillName: 'Cloudflare', skillUrl: 'https://www.cloudflare.com/', skillIcon: 'https://skillicons.dev/icons?i=cloudflare' },
  { skillName: 'n8n', skillUrl: 'https://n8n.io/', skillIcon: '/images/n8n-logo.jpg' },
  { skillName: 'GCP', skillUrl: 'https://cloud.google.com/', skillIcon: 'https://skillicons.dev/icons?i=gcp' }
];

export const skills: Skill[] = rawSkills.map(skill => ({
  name: skill.skillName,
  icon: skill.skillIcon, 
  category: getSkillCategory(skill.skillName)
})); 