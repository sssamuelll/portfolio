/* ── Types ─────────────────────────────────────────── */

export interface FeedEntry {
  date: string;
  type: 'writing' | 'notes' | 'sound';
  title: string;
  slug: string;
}

export interface ContentBlock {
  kind: 'p' | 'h2' | 'code' | 'blockquote' | 'hr';
  text: string;
  lang?: string;
}

export interface WritingPost {
  slug: string;
  title: string;
  date: string;
  body: ContentBlock[];
}

export interface Note {
  slug: string;
  date: string;
  title?: string;
  content: string;
  links?: { label: string; url: string }[];
}

export interface SoundEntry {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  embedUrl?: string;
}

/* ── Writing posts ─────────────────────────────────── */

export const writingPosts: WritingPost[] = [
  {
    slug: 'on-building-tools-that-last',
    title: 'On building tools that last',
    date: '2026.03.12',
    body: [
      {
        kind: 'p',
        text: `Most developer tools die within a year of being built. Not because they're bad \u2014 but because they're built for a moment, not for a workflow. I've been thinking about this while maintaining DiffViewer, a code comparison tool I built last year.`,
      },
      {
        kind: 'h2',
        text: 'The problem with "cool demos"',
      },
      {
        kind: 'p',
        text: `A tool that works great in a tweet-length demo but breaks when you paste 2,000 lines of real production code isn't a tool \u2014 it's a toy. I've built a few of those. The shift happened when I started building for my own daily workflow instead of for impressions.`,
      },
      {
        kind: 'p',
        text: `DiffViewer started because I was tired of copy-pasting code into online diff tools that lost my formatting or couldn't handle large files. The first version was 200 lines of React. It's now maybe 800. Most of the additions are edge cases \u2014 handling binary content, preserving whitespace, dealing with very long lines.`,
      },
      {
        kind: 'code',
        text: `// The core diff is simple \u2014 the edge cases are where\n// all the real work lives\nfunction computeDiff(left: string, right: string) {\n  const lines_l = left.split('\\n');\n  const lines_r = right.split('\\n');\n  return lcs(lines_l, lines_r);\n}`,
        lang: 'typescript',
      },
      {
        kind: 'p',
        text: `The lesson: build for yourself first. If it solves your problem reliably, it probably solves someone else's too. If it only looks good in a screenshot, it solves nobody's problem.`,
      },
      {
        kind: 'h2',
        text: 'What makes a tool survive',
      },
      {
        kind: 'p',
        text: `Three things: it must be fast enough that you don't think about it, simple enough that you remember how to use it after a month away, and reliable enough that you trust it with real data. That's it. No AI features, no plugin ecosystem, no premium tier.`,
      },
    ],
  },
  {
    slug: 'the-case-for-boring-technology',
    title: 'The case for boring technology',
    date: '2026.02.28',
    body: [
      {
        kind: 'p',
        text: `Every new project is a chance to try that shiny new framework. And every time, six months later, you wish you'd used the thing you already know. This isn't a rant against new technology \u2014 it's a plea for intentional choices.`,
      },
      {
        kind: 'blockquote',
        text: `"Choose boring technology" doesn't mean "choose bad technology." It means choose technology whose failure modes you understand.`,
      },
      {
        kind: 'p',
        text: `When I built the NYC apartment search app, I could've reached for Next.js, Prisma, tRPC \u2014 the full hype stack. Instead: React, FastAPI, Redis, and a PostgreSQL database. Technologies I'd shipped with before. Technologies whose error messages I can read at 2am without Stack Overflow.`,
      },
      {
        kind: 'p',
        text: `The result: the app shipped in three weeks. It handles thousands of concurrent WebSocket connections. I know exactly what to do when something goes wrong. That's the power of boring.`,
      },
    ],
  },
  {
    slug: 'hardware-and-software-same-brain',
    title: 'Hardware and software, same brain',
    date: '2026.01.15',
    body: [
      {
        kind: 'p',
        text: `People find it weird that I build web apps and synthesizers. As if electronics and code live in different hemispheres of the brain. They don't. The mental model is the same: signals in, transformation, signals out. Whether the signal is a HTTP request or a voltage, the thinking is identical.`,
      },
      {
        kind: 'p',
        text: `Building the SAM-17 taught me more about debugging than any software project. When a circuit doesn't work, you can't console.log \u2014 you grab an oscilloscope and trace the signal. It forces you to actually understand what's happening instead of guessing and retrying.`,
      },
      {
        kind: 'h2',
        text: 'Lessons from analog',
      },
      {
        kind: 'p',
        text: `In hardware, every decision is permanent. You can't refactor a PCB once it's etched. That constraint makes you think harder upfront. I've started applying that to code: before I write a function, I draw the signal flow. Where does data come from? What transforms it? Where does it go? It sounds basic, but most bugs come from skipping this step.`,
      },
    ],
  },
];

/* ── Notes ─────────────────────────────────────────── */

export const notes: Note[] = [
  {
    slug: 'thoughts-on-creative-constraints',
    date: '2026.02.15',
    title: 'Thoughts on creative constraints',
    content: `The best creative work I've done has always been under tight constraints. Limited palette, limited time, limited tools. It forces you to be resourceful instead of decorative. This applies to code too \u2014 a 500-line budget for a feature makes you write better code than "take as long as you need."`,
  },
  {
    slug: 'links-and-references-january',
    date: '2026.01.20',
    title: 'Links and references, January',
    content: 'A few things I read/watched/listened to this month that stuck with me.',
    links: [
      { label: 'Ink & Switch \u2014 Local-first software', url: 'https://www.inkandswitch.com/local-first/' },
      { label: 'Bartosz Ciechanowski \u2014 GPS', url: 'https://ciechanow.ski/gps/' },
      { label: 'Hainbach \u2014 Making music with test equipment', url: 'https://www.youtube.com/@Hainbach' },
    ],
  },
  {
    slug: 'css-is-good-actually',
    date: '2026.03.01',
    content: `Hot take: if you need Tailwind to write good CSS, you don't understand CSS. Learn the box model, learn flexbox, learn grid. Write your own styles. It's fewer bytes, it's more intentional, and you actually understand what your layout is doing.`,
  },
  {
    slug: 'bogota-in-march',
    date: '2026.03.08',
    content: 'Bogota is doing that thing where it rains every afternoon at exactly 3pm. Perfect coding weather. Put on some ambient, open the editor, disappear for four hours.',
  },
];

/* ── Sound entries ─────────────────────────────────── */

export const soundEntries: SoundEntry[] = [
  {
    slug: 'ambient-sketch-no-7',
    title: 'Ambient sketch no. 7',
    description: 'Layered field recordings from Bogota with granular synthesis and tape saturation. Made entirely with the SAM-17 and a cheap condenser mic.',
    tags: ['ambient', 'field recording', 'SAM-17'],
  },
  {
    slug: 'field-recordings-bogota',
    title: 'Field recordings: Bogota',
    description: 'Raw recordings from different neighborhoods \u2014 Chapinero street vendors, Candelaria rain, TransMilenio announcements. Unprocessed. Planning to use these as source material for something bigger.',
    tags: ['field recording', 'bogota'],
  },
  {
    slug: 'sam17-demo-oscillator-test',
    title: 'SAM-17: Oscillator test',
    description: 'First clean recording of the SAM-17 dual oscillator module. Triangle and saw waveforms, detuned slightly for thickness. No effects, no post-processing \u2014 just the raw analog signal.',
    tags: ['SAM-17', 'hardware', 'synth'],
  },
  {
    slug: 'beat-tape-fragments',
    title: 'Beat tape fragments',
    description: `Scraps and loops that didn't make it into finished tracks but are too good to throw away. Dusty drums, chopped samples, off-kilter rhythms.`,
    tags: ['beats', 'production', 'lo-fi'],
  },
];

/* ── Feed (mixed, chronological) ──────────────────── */

export const feedEntries: FeedEntry[] = [
  {
    date: '2026.03.12',
    type: 'writing',
    title: 'On building tools that last',
    slug: 'on-building-tools-that-last',
  },
  {
    date: '2026.03.08',
    type: 'notes',
    title: 'Bogota in March',
    slug: 'bogota-in-march',
  },
  {
    date: '2026.03.05',
    type: 'sound',
    title: 'Ambient sketch no. 7',
    slug: 'ambient-sketch-no-7',
  },
  {
    date: '2026.03.01',
    type: 'notes',
    title: 'CSS is good, actually',
    slug: 'css-is-good-actually',
  },
  {
    date: '2026.02.28',
    type: 'writing',
    title: 'The case for boring technology',
    slug: 'the-case-for-boring-technology',
  },
  {
    date: '2026.02.15',
    type: 'notes',
    title: 'Thoughts on creative constraints',
    slug: 'thoughts-on-creative-constraints',
  },
  {
    date: '2026.02.01',
    type: 'sound',
    title: 'Field recordings: Bogota',
    slug: 'field-recordings-bogota',
  },
  {
    date: '2026.01.20',
    type: 'notes',
    title: 'Links and references, January',
    slug: 'links-and-references-january',
  },
  {
    date: '2026.01.15',
    type: 'writing',
    title: 'Hardware and software, same brain',
    slug: 'hardware-and-software-same-brain',
  },
];

/* ── Helpers ───────────────────────────────────────── */

export function getPost(slug: string): WritingPost | undefined {
  return writingPosts.find((p) => p.slug === slug);
}

export function getNote(slug: string): Note | undefined {
  return notes.find((n) => n.slug === slug);
}
