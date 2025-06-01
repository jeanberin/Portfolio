
import type { PortfolioState, PortfolioTextContent, PortfolioStructuredData } from '@/types/portfolio';
import { DEFAULT_SECTION_ORDER, SECTION_MAP } from '@/types/portfolio';
import { 
  Briefcase, Code, GraduationCap, LayoutGrid, Smile, User, Rocket, Palette, BookOpen, 
  Github, ExternalLink, Linkedin, Mail, FileText, Database, Server, FileCode, Container, GitBranch,
  Plane, Film, Gamepad2
} from 'lucide-react';

export const initialPortfolioTextContent: PortfolioTextContent = {
  heroTitle: "Hi, I'm Jean 👋",
  heroSubtitle: "A passionate Web Developer transforming ideas into innovative web solutions. Explore my journey and projects!",
  aboutMe: "I am a creative and detail-oriented web developer with a strong foundation in front-end and back-end technologies. I thrive on building user-friendly, efficient, and visually appealing web applications. Always eager to learn new skills and take on challenging projects.",
  skills: "I possess a versatile skill set covering full-stack development, including modern JavaScript frameworks, back-end technologies, database management, and DevOps practices. I'm committed to writing clean, efficient code and continuously expanding my technical expertise.",
  experience: "My professional journey includes roles where I've developed impactful solutions, such as data-driven HR dashboards and real-time monitoring systems. I thrive in environments that allow me to leverage my skills in Laravel, JavaScript, and backend development to solve real-world problems.",
  projects: "My project portfolio includes diverse applications like a coffee shop website, a dental clinic information portal, and a word search puzzle solver. These projects highlight my versatility in web development and problem-solving.",
  education: "I graduated Cum Laude with a Bachelor of Science in Electronics Engineering from the University of the Philippines Diliman. My engineering background provided a strong analytical foundation, which I apply to software development challenges.",
  hobbies: "Outside of my professional life, I enjoy traveling to new places, immersing myself in films, and engaging in video games. These hobbies offer relaxation and fresh perspectives.",
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
      role: 'Junior Developer',
      company: 'Megaworld Corporation',
      duration: 'Oct 2024 - Present',
      description: 'Contributed to the development and implementation of critical internal systems, focusing on HR analytics and operational monitoring using Laravel and JavaScript.',
      achievements: [
        'Developed data-driven dashboards with Google Charts and backend integration via Laravel, streamlining HR analytics for 3000+ employees.',
        'Engineered a real-time biometric system dashboard with Laravel and JavaScript to monitor uptime/downtime across 130+ site offices.',
        'Provided technical support during the transition from manual attendance systems to biometric systems with real-time log uploading across multiple offices.',
      ],
    },
  ],
  projects: [
    {
      title: 'Coffee Shop Website',
      description: 'A modern and inviting website for a local coffee shop, featuring menu display, online ordering, and location information.',
      imageUrl: 'https://placehold.co/600x400.png',
      dataAiHint: 'coffee shop',
      liveUrl: '#',
      repoUrl: '#',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Frontend'],
    },
    {
      title: 'Dental Clinic Website',
      description: 'A professional website for a dental clinic, providing information on services, appointment booking, and patient testimonials.',
      imageUrl: 'https://placehold.co/600x400.png',
      dataAiHint: 'dental clinic',
      liveUrl: '#',
      repoUrl: '#',
      technologies: ['React', 'Node.js', 'Database'],
    },
    {
      title: 'Word Search Puzzle Solver',
      description: 'An efficient algorithm and user interface to solve word search puzzles, demonstrating problem-solving and algorithmic thinking.',
      imageUrl: 'https://placehold.co/600x400.png',
      dataAiHint: 'puzzle game',
      liveUrl: '#',
      repoUrl: '#',
      technologies: ['Python', 'Algorithm', 'UI/UX'],
    },
  ],
  education: [
    {
      degree: 'Bachelor of Science in Electronics Engineering (Cum Laude)',
      institution: 'University of the Philippines Diliman',
      year: 'Aug 2019 - Sept 2023',
      coursework: [], // User did not provide specific coursework
    },
  ],
  hobbies: [
    { name: 'Traveling', description: 'Exploring new cultures, cuisines, and landscapes around the world.', imageUrl: 'https://placehold.co/400x300.png', dataAiHint: 'travel destination', icon: Plane },
    { name: 'Watching Movies', description: 'Enjoying a wide range of films, from classic cinema to modern blockbusters.', imageUrl: 'https://placehold.co/400x300.png', dataAiHint: 'movie cinema', icon: Film },
    { name: 'Playing Video Games', description: 'Engaging in immersive storytelling and strategic gameplay across various genres.', imageUrl: 'https://placehold.co/400x300.png', dataAiHint: 'video game console', icon: Gamepad2 },
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

