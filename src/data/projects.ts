export type Project = {
  id: number;
  title: string;
  description: string;
  category: 'tech' | 'music' | 'experiment';
  tags: string[];
  featured?: boolean;
  image?: string;
  link?: string;
};

export const projects: Project[] = [
    {
        id: 1,
        title: "New York Moves – AI Real Estate Platform",
        description: "AI-powered real estate platform helping users find apartments and roommates in Manhattan, with real-time chat and custom listings integration.",
        category: "tech",
        tags: ["React", "TypeScript", "FastAPI", "Redis", "Docker", "AWS", "WebSockets", "LLM"],
        featured: true,
        image: "/projects_pics/nym.jpeg",
        link: "https://sdar.dev/newyorkmoves/"
    },
    {
        id: 7,
        title: 'Healthcare Dashboard',
        description: 'Real-time patient monitoring system with WebSocket integration.',
        category: 'tech',
        tags: ['React', 'TypeScript', 'WebSockets', 'D3.js'],
        featured: true
    },
    {
        id: 2,
        title: 'SAM 17: Modular Synthesizer',
        description: 'Analog modular synth with MIDI control via Raspberry Pi.',
        category: 'music',
        tags: ['Hardware', 'Python', 'MIDI', 'DSP'],
        featured: true,
        image: "/projects_pics/SAM17.png",
        link: "https://www.youtube.com/watch?v=U-ROBm5uAJs"
    },
    {
        id: 3,
        title: "Portfolio ABC",
        description: "Elegant online portfolio for an Art Director, focused on high-quality visuals without compromising performance.",
        category: "tech",
        tags: ["React", "TypeScript", "Vite", "Tailwind", "Image Optimization"],
        featured: true,
        image: "/projects_pics/abc.png",
        link: "https://www.sdar.dev/abc"
    },
    {
        id: 4,
        title: 'BioCanvas',
        description: 'Biomedical image annotation tool for research.',
        category: 'experiment',
        tags: ['React', 'Canvas API', 'TypeScript'],
        featured: true,
        image: "/projects_pics/biocanvas.png",
        link: "https://www.sdar.dev/biocanvas"
    },
    { 
        id: 6,
        title: "CopyClip",
        description: "Lightweight clipboard manager for developers, designed for quick copy-paste workflows and productivity.",
        category: "tech",
        tags: ["Electron", "TypeScript", "React", "Productivity"],
        featured: true,
        image: "/projects_pics/copyclip.png",
        link: "https://github.com/sssamuelll/copyclip"
    },
    {
        id: 8,
        title: "Joudy (Artist Website)",
        description: "Minimalist and high-performance website for the artist Joudy, focused on visual identity, responsive design, and smooth navigation.",
        category: "tech",
        tags: ["React", "TypeScript", "Vite", "Tailwind", "Responsive Design"],
        image: "/projects_pics/joudy.png",
        link: "https://sdar.dev/joudy/"
    }
];
