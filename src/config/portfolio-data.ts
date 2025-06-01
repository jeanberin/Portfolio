
import type { PortfolioState, PortfolioTextContent, PortfolioStructuredData, Skill } from '@/types/portfolio';
import type { LucideIcon } from 'lucide-react';
import { DEFAULT_SECTION_ORDER, SECTION_MAP } from '@/types/portfolio';
import { 
  Plane, Film, Gamepad2, Github, Linkedin, Mail, FileText
} from 'lucide-react';
import LaravelIcon from '@/components/icons/skills/LaravelIcon';
import ReactIcon from '@/components/icons/skills/ReactIcon';
import JavaScriptIcon from '@/components/icons/skills/JavaScriptIcon';
import PythonIcon from '@/components/icons/skills/PythonIcon';
import SqlIcon from '@/components/icons/skills/SqlIcon';
import MsSqlServerIcon from '@/components/icons/skills/MsSqlServerIcon';
import BootstrapIcon from '@/components/icons/skills/BootstrapIcon';
import TailwindIcon from '@/components/icons/skills/TailwindIcon';
import HtmlCssIcon from '@/components/icons/skills/HtmlCssIcon';
import DockerIcon from '@/components/icons/skills/DockerIcon';
import GitIcon from '@/components/icons/skills/GitIcon';


export const initialPortfolioTextContent: PortfolioTextContent = {
  heroTitle: "Hi, I'm Jean 👋",
  heroSubtitle: "A passionate software developer transforming ideas into innovative software solutions",
  aboutMe: "I am a creative and detail-oriented web developer with a strong foundation in front-end and back-end technologies. I thrive on building user-friendly, efficient, and visually appealing web applications. Always eager to learn new skills and take on challenging projects.",
  skills: "I possess a versatile skill set covering full-stack development. My toolbox includes modern JavaScript frameworks like React, robust back-end technologies such as Laravel and Python, comprehensive database management with SQL and MS SQL Server, and responsive front-end design using Bootstrap, Tailwind CSS, HTML, and CSS. I'm also proficient in DevOps practices with Docker and version control using Git, committed to writing clean, efficient code and continuously expanding my technical expertise.",
  experience: "My professional journey includes roles where I've developed impactful solutions, such as data-driven HR dashboards and real-time monitoring systems. I thrive in environments that allow me to leverage my skills in Laravel, JavaScript, and backend development to solve real-world problems.",
  projects: "My project portfolio includes diverse applications like a coffee shop website, a dental clinic information portal, and a word search puzzle solver. These projects highlight my versatility in web development and problem-solving.",
  education: "I graduated Cum Laude with a Bachelor of Science in Electronics Engineering from the University of the Philippines Diliman and am a Licensed Electronics Engineer. My engineering background provided a strong analytical foundation, which I apply to software development challenges.",
  hobbies: "Outside of my professional life, I enjoy traveling to new places, immersing myself in films, and engaging in video games. These hobbies offer relaxation and fresh perspectives.",
};

export const initialPortfolioStructuredData: PortfolioStructuredData = {
  skills: [
    { name: 'Laravel', iconUrl: '/images/skills/laravel.png', dataAiHint: 'laravel logo' },
    { name: 'React', iconUrl: '/images/skills/react.png', dataAiHint: 'react logo' },
    { name: 'JavaScript', iconUrl: '/images/skills/js.jpg', dataAiHint: 'javascript logo' },
    { name: 'Python', iconUrl: '/images/skills/python.png', dataAiHint: 'python logo' },
    { name: 'SQL', iconUrl: '/images/skills/sql.png', dataAiHint: 'sql logo' },
    { name: 'MS SQL Server', iconUrl: '/images/skills/mssql.png', dataAiHint: 'mssql logo' },
    { name: 'Bootstrap', iconUrl: '/images/skills/bootstrap.png', dataAiHint: 'bootstrap logo' },
    { name: 'Tailwind CSS', iconUrl: '/images/skills/tailwind.png', dataAiHint: 'tailwind logo' },
    { name: 'HTML/CSS', iconUrl: '/images/skills/htmlcss.png', dataAiHint: 'html css logo' },
    { name: 'Docker', iconUrl: '/images/skills/docker.png', dataAiHint: 'docker logo' },
    { name: 'Git', iconUrl: '/images/skills/git.png', dataAiHint: 'git logo' },
  ],
  experience: [
    {
      role: 'Software Developer',
      company: 'Megaworld Corporation',
      duration: 'Oct 2024 - Present',
      description: '',
      achievements: [
        'Developed data-driven dashboards with Google Charts and backend integration via Laravel, streamlining HR analytics for <strong>3000+ employees</strong>.',
        'Engineered a real-time biometric system dashboard with Laravel and JavaScript to monitor uptime/downtime across <strong>130+ site offices</strong>.',
        'Provided technical support during the transition from manual attendance systems to biometric systems with real-time log uploading across <strong>multiple offices</strong>.',
      ],
    },
  ],
  projects: [
    {
      title: 'Coffee Shop Website',
      description: 'A modern and inviting website for a local coffee shop, featuring menu display, online ordering, and location information.',
      imageUrl: '/img/coffee.png',
      dataAiHint: 'coffee shop',
      liveUrl: 'https://jeanberin.github.io/Coffee-Shop/',
      repoUrl: 'https://github.com/jeanberin/Coffee-Shop-Website',
      technologies: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Dental Clinic Website',
      description: 'A professional website for a dental clinic, providing information on services, appointment booking, and patient testimonials.',
      imageUrl: '/img/dental.png',
      dataAiHint: 'dental clinic',
      liveUrl: 'https://mberin.github.io/',
      repoUrl: 'https://github.com/mberin/mberin.github.io',
      technologies: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Word Search Puzzle Solver',
      description: 'An efficient algorithm and user interface to solve word search puzzles, demonstrating problem-solving and algorithmic thinking.',
      imageUrl: '/img/word.png',
      dataAiHint: 'puzzle game',
      liveUrl: 'https://www.youtube.com/watch?v=-rlgEueerH8',
      repoUrl: 'https://github.com/jeanberin/Word-Search-Puzzle-Solver',
      technologies: ['Python', 'Algorithm'],
    },
  ],
  education: [
    {
      degree: 'Bachelor of Science in Electronics Engineering (Cum Laude)',
      institution: 'University of the Philippines Diliman',
      year: 'Aug 2019 - Sept 2023',
      coursework: [], 
    },
    {
      degree: 'Licensed Electronics Engineer and Electronics Technician',
      institution: 'Professional Regulation Commission',
      year: 'May 2024',
      coursework: [],
    },
  ],
  hobbies: [
    { name: 'Traveling', description: 'Exploring new cultures, cuisines, and landscapes around the world.', imageUrl: '/img/travel.jfif', dataAiHint: 'travel destination', icon: Plane },
    { name: 'Watching Movies', description: 'Enjoying a wide range of films, from classic cinema to modern blockbusters.', imageUrl: '/img/movie.webp', dataAiHint: 'movie cinema', icon: Film },
    { name: 'Playing Video Games', description: 'Engaging in immersive storytelling and strategic gameplay across various genres.', imageUrl: '/img/forza.jpg', dataAiHint: 'video game console', icon: Gamepad2 },
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

