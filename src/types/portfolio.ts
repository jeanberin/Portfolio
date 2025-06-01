
import type { SVGProps } from 'react';
import type { LucideIcon } from 'lucide-react';

export interface Skill {
  name: string;
  iconUrl: string; // Changed from 'icon' which was an SVG component
  dataAiHint?: string; // Optional hint for placeholder images
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
  achievements: string[];
}

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
  technologies: string[];
  dataAiHint?: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  coursework?: string[];
}

export interface Hobby {
  name: string;
  description: string;
  imageUrl?: string;
  icon?: LucideIcon;
  dataAiHint?: string;
}

export interface PortfolioTextContent {
  heroTitle: string;
  heroSubtitle: string;
  aboutMe: string;
  skills: string;
  experience: string;
  projects: string;
  education: string;
  hobbies: string;
}

export interface PortfolioStructuredData {
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
  hobbies: Hobby[];
}

export interface PortfolioState {
  sections: string[];
  content: PortfolioTextContent;
  structuredData: PortfolioStructuredData;
}

export const SECTION_MAP: Record<string, string> = {
  ABOUT_ME: "About Me",
  SKILLS: "Skills",
  EXPERIENCE: "Experience",
  PROJECTS: "Projects",
  EDUCATION: "Education",
  HOBBIES: "Hobbies",
};

export const DEFAULT_SECTION_ORDER = [
  SECTION_MAP.ABOUT_ME,
  SECTION_MAP.SKILLS,
  SECTION_MAP.EXPERIENCE,
  SECTION_MAP.PROJECTS,
  SECTION_MAP.EDUCATION,
  SECTION_MAP.HOBBIES,
];
