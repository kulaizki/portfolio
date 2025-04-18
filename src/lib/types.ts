export interface Project {
  name: string;
  description: string;
  url: string;
  imageUrl?: string;
  technologies?: string[];
  repoUrl?: string;
}

export interface Experience {
  title: string;
  company: string;
  date: string;
  responsibilities: string[];
  link: string;
  imageUrl: string;
  technologies?: string[];
}

export interface Skill {
  name: string;
  icon?: string;
  url?: string;
  category: 'Languages' | 'Frameworks' | 'Databases' | 'Tools';
} 