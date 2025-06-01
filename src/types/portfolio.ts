import type { LucideIcon } from 'lucide-react';

export interface Skill {
  name: string;
  icon: LucideIcon;
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

// Content primarily for AI customization (textual)
export interface PortfolioTextContent {
  heroTitle: string;
  heroSubtitle: string;
  aboutMe: string;
  skills: string; // Textual overview/summary for skills
  experience: string; // Textual overview/summary for experience
  projects: string; // Textual overview/summary for projects
  education: string; // Textual overview/summary for education
  hobbies: string; // Textual overview/summary for hobbies
}

// Structured data for detailed rendering
export interface PortfolioStructuredData {
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
  hobbies: Hobby[];
}

// Combined state for the portfolio
export interface PortfolioState {
  sections: string[]; // Order of sections
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
