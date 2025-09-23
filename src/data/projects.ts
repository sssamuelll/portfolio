export type Project = {
  id: number;
  titleKey: string;
  descriptionKey: string;
  category: 'tech' | 'music' | 'experiment';
  tags: string[];
  featured?: boolean;
  image?: string;
  link?: string;
  caseStudySlug?: string;
};

export const projects: Project[] = [
    {
        id: 1,
        titleKey: 'projects.nym.title',
        descriptionKey: 'projects.nym.description',
        category: "tech",
        tags: ["React", "TypeScript", "FastAPI", "Redis", "Docker", "AWS", "WebSockets", "LLM"],
        featured: true,
        image: "/projects_pics/nym.jpeg",
        link: "https://sdar.dev/newyorkmoves/",
        caseStudySlug: "nym"
    },
    {
        id: 7,
        titleKey: 'projects.healthcare.title',
        descriptionKey: 'projects.healthcare.description',
        category: 'tech',
        tags: ['React', 'TypeScript', 'WebSockets', 'D3.js'],
        featured: true
    },
    {
        id: 2,
        titleKey: 'projects.sam17.title',
        descriptionKey: 'projects.sam17.description',
        category: 'music',
        tags: ['Hardware', 'Python', 'MIDI', 'DSP'],
        featured: true,
        image: "/projects_pics/SAM17.png",
        link: "https://www.youtube.com/watch?v=U-ROBm5uAJs"
    },
    {
        id: 3,
        titleKey: 'projects.abc.title',
        descriptionKey: 'projects.abc.description',
        category: "tech",
        tags: ["React", "TypeScript", "Vite", "Tailwind", "Image Optimization"],
        featured: true,
        image: "/projects_pics/abc.png",
        link: "https://www.sdar.dev/abc"
    },
    {
        id: 4,
        titleKey: 'projects.biocanvas.title',
        descriptionKey: 'projects.biocanvas.description',
        category: 'experiment',
        tags: ['React', 'Canvas API', 'TypeScript'],
        featured: true,
        image: "/projects_pics/biocanvas.png",
        link: "https://www.sdar.dev/biocanvas"
    },
    {
        id: 6,
        titleKey: 'projects.copyclip.title',
        descriptionKey: 'projects.copyclip.description',
        category: "tech",
        tags: ["Electron", "TypeScript", "React", "Productivity"],
        featured: true,
        image: "/projects_pics/copyclip.png",
        link: "https://github.com/sssamuelll/copyclip"
    },
    {
        id: 8,
        titleKey: 'projects.joudy.title',
        descriptionKey: 'projects.joudy.description',
        category: "tech",
        tags: ["React", "TypeScript", "Vite", "Tailwind", "Responsive Design"],
        image: "/projects_pics/joudy.png",
        link: "https://sdar.dev/joudy/"
    },
    {
        id: 9,
        titleKey: 'projects.rotary.title',
        descriptionKey: 'projects.rotary.description',
        category: "tech",
        tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
        featured: false,
        image: "/projects_pics/rotary.png",
        link: "https://sdar.dev/rotary/"
    }
];