/* ── Types ─────────────────────────────────────────── */

export interface FeedEntry {
  date: string;
  type: 'writing' | 'note';
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

/* ── Diary types (scaffold — refined after Pencil handoff) ── */

export interface DiaryPhoto {
  type: 'photo';
  date: string;
  src: string;
  alt: string;
  caption?: string;
  location?: string;
  width?: number;
  height?: number;
}

export interface DiaryVideo {
  type: 'video';
  date: string;
  src: string;
  alt: string;
  poster?: string;
  caption?: string;
  location?: string;
  duration?: number;
  width?: number;
  height?: number;
}

export interface DiaryAudio {
  type: 'audio';
  date: string;
  src: string;
  caption?: string;
  location?: string;
  duration?: number;
  waveform?: string;
}

export type MomentMedia =
  | { kind: 'photo'; src: string; alt: string }
  | { kind: 'video'; src: string; alt: string; poster?: string; duration?: number }
  | { kind: 'audio'; src: string; duration?: number; waveform?: string };

export interface DiaryMoment {
  type: 'moment';
  date: string;
  location?: string;
  caption?: string;
  media: MomentMedia[];
}

export type DiaryEntry = DiaryPhoto | DiaryVideo | DiaryAudio | DiaryMoment;

/* ── Writing posts ─────────────────────────────────── */

export const writingPosts: WritingPost[] = [
  {
    slug: 'about-japan',
    title: 'About Japan',
    date: '2026.03.20',
    body: [
      {
        kind: 'p',
        text: 'Japan was the love of my life.',
      },
      {
        kind: 'p',
        text: 'I lived there for five months, and it stayed with me forever. I spent most of that time in Mannō, sharing life with the monk Kiyo-san. Being there taught me things I still carry inside me — about silence, about presence, about peace, and about another way of moving through life.',
      },
      {
        kind: 'p',
        text: 'Japan was never just a place for me. It was something much deeper.',
      },
      {
        kind: 'p',
        text: 'I also shared that time with Ume-chan, a wonderful Japanese woman who became part of that memory and that feeling.',
      },
      {
        kind: 'p',
        text: 'And music made everything even more real.',
      },
      {
        kind: 'p',
        text: 'In Japan, I had my band: Magokoro Brothers. For me, they are my band forever. My bandmates, especially Shinji-san and the Magokoro brothers, became true brothers of the heart. We communicated through music, through feeling, through being there together. Only Shinji spoke Spanish, but with the others that never really mattered.',
      },
      {
        kind: 'p',
        text: 'Coming from San Cristóbal, being able to say that I lived in Japan, played reggae with Japanese musicians, and found that kind of connection still feels unbelievable to me.',
      },
      {
        kind: 'p',
        text: 'Japan gave me friendship, music, zen, beauty, and a part of myself that I never got back — because it became part of who I am.',
      },
      {
        kind: 'p',
        text: 'If there is one place that marked my soul, it was Japan.',
      },
    ],
  },
];

/* ── Notes ─────────────────────────────────────────── */

export const notes: Note[] = [];

/* ── Feed (mixed, chronological) ──────────────────── */

export const feedEntries: FeedEntry[] = [
  {
    date: '2026.03.20',
    type: 'writing',
    title: 'About Japan',
    slug: 'about-japan',
  },
];

/* ── Diary entries (populated after Pencil handoff) ── */

export const diaryEntries: DiaryEntry[] = [];

/* ── Helpers ───────────────────────────────────────── */

export function getPost(slug: string): WritingPost | undefined {
  return writingPosts.find((p) => p.slug === slug);
}

export function getNote(slug: string): Note | undefined {
  return notes.find((n) => n.slug === slug);
}

/** All writing entries sorted by date descending */
export function getAllWritingEntries(): FeedEntry[] {
  return feedEntries
    .filter((e) => e.type === 'writing' || e.type === 'note')
    .sort((a, b) => b.date.localeCompare(a.date));
}
