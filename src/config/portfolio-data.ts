
import type { PortfolioState, PortfolioTextContent, PortfolioStructuredData } from '@/types/portfolio';
import { DEFAULT_SECTION_ORDER, SECTION_MAP } from '@/types/portfolio';
import { 
  Briefcase, Code, GraduationCap, LayoutGrid, Smile, User, Rocket, Palette, BookOpen, 
  Github, ExternalLink, Linkedin, Mail, FileText, Database, Server, FileCode, Container, GitBranch
} from 'lucide-react';

export const initialPortfolioTextContent: PortfolioTextContent = {
  heroTitle: "Jean 👋",
  heroSubtitle: "A passionate Web Developer transforming ideas into innovative web solutions. Explore my journey and projects!",
  aboutMe: "I am a creative and detail-oriented web developer with a strong foundation in front-end and back-end technologies. I thrive on building user-friendly, efficient, and visually appealing web applications. Always eager to learn new skills and take on challenging projects.",
  skills: "I possess a versatile skill set covering full-stack development, including modern JavaScript frameworks, back-end technologies, database management, and DevOps practices. I'm committed to writing clean, efficient code and continuously expanding my technical expertise.",
  experience: "Over the past 5 years, I've contributed to various projects, from dynamic e-commerce platforms to scalable enterprise applications. My roles have involved full-stack development, API integration, and collaborating with cross-functional teams to deliver high-quality software.",
  projects: "I've worked on several exciting projects, including a real-time collaborative editor, a personalized e-learning platform, and a data visualization dashboard for financial analytics. Each project showcases my ability to solve complex problems and deliver impactful results.",
  education: "I hold a Bachelor's degree in Computer Science, where I gained a comprehensive understanding of software engineering principles and data structures. I continuously enhance my knowledge through online courses and certifications in emerging web technologies.",
  hobbies: "Beyond coding, I enjoy landscape photography, exploring new hiking trails, and experimenting with gourmet cooking. These activities help me maintain a creative and balanced perspective.",
};

export const initialPortfolioStructuredData: PortfolioStructuredData = {
  skills: [
    { name: 'Laravel', icon: Database },
    { name: 'React', icon: Rocket },
    { name: 'JavaScript', icon: Code },
    { name: 'Python', icon: Code },
    { name: 'SQL', icon: Database },
    { name: 'MS SQL Server', icon: Server },
    { name: 'Bootstrap', icon: LayoutGrid },
    { name: 'Tailwind CSS', icon: Palette },
    { name: 'HTML/CSS', icon: FileCode },
    { name: 'Docker', icon: Container },
    { name: 'Git', icon: GitBranch },
  ],
  experience: [
    {
      role: 'Senior Web Developer',
      company: 'Tech Solutions Inc.',
      duration: 'Jan 2021 - Present',
      description: 'Led development of key features for a flagship SaaS product, improving performance and user engagement.',
      achievements: ['Reduced page load times by 30%', 'Mentored junior developers', 'Integrated third-party APIs'],
    },
    {
      role: 'Full-Stack Developer',
      company: 'Innovate Web Co.',
      duration: 'Jun 2018 - Dec 2020',
      description: 'Developed and maintained client websites, focusing on e-commerce solutions and custom web applications.',
      achievements: ['Launched 10+ client projects', 'Improved checkout conversion by 15%', 'Implemented responsive designs'],
    },
  ],
  projects: [
    {
      title: 'Portfolio Customizer AI',
      description: 'This very portfolio! An AI-powered system to tailor content for recruiters.',
      imageUrl: 'https://placehold.co/600x400.png',
      dataAiHint: 'AI technology',
      liveUrl: '#',
      repoUrl: '#',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Genkit AI'],
    },
    {
      title: 'E-Commerce Platform',
      description: 'A feature-rich online store with secure payments and inventory management.',
      imageUrl: 'https://placehold.co/600x400.png',
      dataAiHint: 'online shopping',
      liveUrl: '#',
      repoUrl: '#',
      technologies: ['React', 'Node.js', 'Stripe', 'MongoDB'],
    },
    {
      title: 'Task Management App',
      description: 'A collaborative tool for teams to organize and track project progress.',
      imageUrl: 'https://placehold.co/600x400.png',
      dataAiHint: 'productivity tool',
      liveUrl: '#',
      repoUrl: '#',
      technologies: ['Vue.js', 'Firebase', 'Vuetify'],
    },
  ],
  education: [
    {
      degree: 'B.S. in Computer Science',
      institution: 'University of Technology',
      year: '2018',
      coursework: ['Data Structures & Algorithms', 'Software Engineering', 'Web Development', 'Database Systems'],
    },
    {
      degree: 'Advanced Web Development Bootcamp',
      institution: 'Code Academy Pro',
      year: '2019',
      coursework: ['React Ecosystem', 'Node.js Advanced', 'Microservices'],
    }
  ],
  hobbies: [
    { name: 'Photography', description: 'Capturing moments and landscapes.', imageUrl: 'https://placehold.co/400x300.png', dataAiHint: 'camera landscape', icon: Palette },
    { name: 'Hiking', description: 'Exploring nature trails and mountains.', imageUrl: 'https://placehold.co/400x300.png', dataAiHint: 'mountain trail', icon: Palette },
    { name: 'Cooking', description: 'Experimenting with new recipes.', imageUrl: 'https://placehold.co/400x300.png', dataAiHint: 'gourmet food', icon: Palette },
  ],
};

export const initialPortfolioState: PortfolioState = {
  sections: DEFAULT_SECTION_ORDER,
  content: initialPortfolioTextContent,
  structuredData: initialPortfolioStructuredData,
};

export const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/yourusername', icon: Github },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: Linkedin },
  { name: 'Email', url: 'mailto:youremail@example.com', icon: Mail },
];

export const ctaButtons = [
 { label: 'View Resume', url: '#resume.pdf', icon: FileText, variant: 'default' as const },
 { label: 'Contact Me', url: 'mailto:youremail@example.com', icon: Mail, variant: 'outline' as const},
];

