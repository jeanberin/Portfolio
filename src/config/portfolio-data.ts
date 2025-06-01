
import type { PortfolioState, PortfolioTextContent, PortfolioStructuredData } from '@/types/portfolio';
import { DEFAULT_SECTION_ORDER, SECTION_MAP } from '@/types/portfolio';
import { 
  Plane, Film, Gamepad2, Github, Linkedin, Mail, FileText
} from 'lucide-react';

// Custom SVG icon imports are no longer needed here

export const initialPortfolioTextContent: PortfolioTextContent = {
  heroTitle: "Hi, I'm Jean 👋",
  heroSubtitle: "A passionate Web Developer transforming ideas into innovative web solutions. Explore my journey and projects!",
  aboutMe: "I am a creative and detail-oriented web developer with a strong foundation in front-end and back-end technologies. I thrive on building user-friendly, efficient, and visually appealing web applications. Always eager to learn new skills and take on challenging projects.",
  skills: "I possess a versatile skill set covering full-stack development. My toolbox includes modern JavaScript frameworks like React, robust back-end technologies such as Laravel and Python, comprehensive database management with SQL and MS SQL Server, and responsive front-end design using Bootstrap, Tailwind CSS, HTML, and CSS. I'm also proficient in DevOps practices with Docker and version control using Git, committed to writing clean, efficient code and continuously expanding my technical expertise.",
  experience: "My professional journey includes roles where I've developed impactful solutions, such as data-driven HR dashboards and real-time monitoring systems. I thrive in environments that allow me to leverage my skills in Laravel, JavaScript, and backend development to solve real-world problems.",
  projects: "My project portfolio includes diverse applications like a coffee shop website, a dental clinic information portal, and a word search puzzle solver. These projects highlight my versatility in web development and problem-solving.",
  education: "I graduated Cum Laude with a Bachelor of Science in Electronics Engineering from the University of the Philippines Diliman. My engineering background provided a strong analytical foundation, which I apply to software development challenges.",
  hobbies: "Outside of my professional life, I enjoy traveling to new places, immersing myself in films, and engaging in video games. These hobbies offer relaxation and fresh perspectives.",
};

export const initialPortfolioStructuredData: PortfolioStructuredData = {
  skills: [
    { name: 'Laravel', iconUrl: 'https://placehold.co/40x40.png', dataAiHint: 'laravel logo' },
    { name: 'React', iconUrl: 'https://placehold.co/40x40.png', dataAiHint: 'react logo' },
    { name: 'JavaScript', iconUrl: 'https://placehold.co/40x40.png', dataAiHint: 'javascript logo' },
    { name: 'Python', iconUrl: 'https://placehold.co/40x40.png', dataAiHint: 'python logo' },
    { name: 'SQL', iconUrl: 'https://placehold.co/40x40.png', dataAiHint: 'sql logo' },
    { name: 'MS SQL Server', iconUrl: 'https://placehold.co/40x40.png', dataAiHint: 'mssql logo' },
    { name: 'Bootstrap', iconUrl: 'https://placehold.co/40x40.png', dataAiHint: 'bootstrap logo' },
    { name: 'Tailwind CSS', iconUrl: 'https://placehold.co/40x40.png', dataAiHint: 'tailwind logo' },
    { name: 'HTML/CSS', iconUrl: 'https://placehold.co/40x40.png', dataAiHint: 'html css logo' },
    { name: 'Docker', iconUrl: 'https://placehold.co/40x40.png', dataAiHint: 'docker logo' },
    { name: 'Git', iconUrl: 'https://placehold.co/40x40.png', dataAiHint: 'git logo' },
  ],
  experience: [
    {
      role: 'Junior Developer',
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
      imageUrl: 'https://placehold.co/600x400.png',
      dataAiHint: 'coffee shop',
      liveUrl: '#',
      repoUrl: '#',
      technologies: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Dental Clinic Website',
      description: 'A professional website for a dental clinic, providing information on services, appointment booking, and patient testimonials.',
      imageUrl: 'https://placehold.co/600x400.png',
      dataAiHint: 'dental clinic',
      liveUrl: '#',
      repoUrl: '#',
      technologies: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Word Search Puzzle Solver',
      description: 'An efficient algorithm and user interface to solve word search puzzles, demonstrating problem-solving and algorithmic thinking.',
      imageUrl: 'https://placehold.co/600x400.png',
      dataAiHint: 'puzzle game',
      liveUrl: '#',
      repoUrl: '#',
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
