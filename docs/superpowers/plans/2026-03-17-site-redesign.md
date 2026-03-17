# sdar.dev Site Redesign — Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the current portfolio site into a personal space (blog/notes/sound) following the CONCEPTO.md and DESIGN.md specs, using the reference implementation at `00_active/sdar` as a visual/structural guide.

**Architecture:** Complete rewrite of the existing React app. Remove portfolio-style components (hero, skills, project cards, case studies, theme switcher, i18n). Replace with a minimal, dark-only, content-first site with a chronological feed, writing posts, notes, sound entries, and a colophon. Content is hardcoded in TS data files for now, structured for easy migration to markdown later.

**Tech Stack:** React 18 + TypeScript + Vite, plain CSS with BEM naming, lucide-react for icons, react-router-dom for routing. Fonts: Space Grotesk (headings), Inter (body — spec says General Sans but it's not on Google Fonts; Inter is the closest free alternative), JetBrains Mono (code).

**Out of scope (future):** Three.js generative element in home header (per spec, only if a concept that's "intelligent, subtle, and meaningful" is found), markdown-based content system.

---

## File Structure

### Files to DELETE (old portfolio code)
```
src/components/feed/              → old Feed component
src/components/svg_links/         → old SVG link icons
src/components/title/             → old Title component
src/components/ProfilePic/        → portfolio profile pic
src/components/SkillPillar/       → skills section
src/components/Waveform/          → old waveform viz
src/components/ProjectCard/       → project cards
src/components/case-study/        → case study components
src/components/lang/              → language switcher
src/components/ThemeSwitcher/     → theme switcher
src/components/Footer/            → old footer (will rewrite)
src/pages/CaseStudyPage.tsx       → case study page
src/pages/CaseStudyPage.module.css
src/pages/HomePage.tsx            → old home page
src/pages/HomePage.module.css
src/case-studies/                  → case study data
src/data/projects.ts              → old project data
src/data/techStacks.ts            → old tech stacks
src/assets/svgs/                  → old SVG components
src/styles/theme/                 → ThemeProvider, ThemeContext
src/styles/tokens.css             → old design tokens
src/styles/animations.css         → old animations
src/styles/App.css                → old app styles
src/i18n/                         → entire i18n system
```

### Files to CREATE
```
src/index.css                → Global styles + CSS variables (design tokens)
src/components/Nav.tsx       → Sticky nav with "sdar" logo + links
src/components/Nav.css       → Nav styles
src/components/Footer.tsx    → Minimal footer with social links
src/components/Footer.css    → Footer styles
src/pages/Home.tsx           → Intro + chronological feed
src/pages/Home.css           → Home styles
src/pages/Post.tsx           → Individual writing post
src/pages/Post.css           → Post styles
src/pages/WritingList.tsx    → List of all writing posts
src/pages/WritingList.css    → Writing list styles
src/pages/NotesList.tsx      → Notes timeline (inline content)
src/pages/NotesList.css      → Notes list styles
src/pages/NoteDetail.tsx     → Individual note page (compact, no big title)
src/pages/NoteDetail.css     → Note detail styles
src/pages/Sound.tsx          → Audio entries page
src/pages/Sound.css          → Sound page styles
src/pages/Colophon.tsx       → How the site is built
src/pages/Colophon.css       → Colophon styles
src/data/content.ts          → All content data (feed entries, posts, notes, sound)
```

### Files to MODIFY
```
index.html                   → Update fonts, title, meta
package.json                 → Remove i18n deps, add lucide-react
src/main.tsx                 → Remove ThemeProvider, i18n, LangSync
src/App.tsx                  → New routing structure
```

---

## Task 1: Clean Foundation — Dependencies & Entry Files

**Files:**
- Modify: `package.json`
- Modify: `index.html`
- Modify: `src/main.tsx`
- Modify: `src/App.tsx` (temporary minimal version)

- [ ] **Step 1: Update package.json**
  - Remove deps: `i18next`, `i18next-browser-languagedetector`, `react-i18next`, `@fontsource/epilogue`
  - Remove devDeps: `@types/react-router-dom`
  - Add dep: `lucide-react`

- [ ] **Step 2: Run npm install**

- [ ] **Step 3: Update index.html**
  - Replace Arvo font link with Space Grotesk + Inter + JetBrains Mono from Google Fonts
  - Update title to "sdar.dev"
  - Add theme-color meta tag `#0a0a0f`
  - Set lang="en"

- [ ] **Step 4: Delete all old source files**
  - Delete every directory/file listed in "Files to DELETE" above
  - Keep: `src/vite-env.d.ts`

- [ ] **Step 5: Create src/index.css**
  - Port directly from the reference `00_active/sdar/src/index.css`
  - Contains all CSS variables (design tokens), reset, base styles
  - Fonts: Space Grotesk, Inter, JetBrains Mono

- [ ] **Step 6: Rewrite src/main.tsx**
  - Remove ThemeProvider, LangSync, i18n imports
  - Simple: StrictMode > BrowserRouter > App
  - Import `./index.css`

- [ ] **Step 7: Create minimal src/App.tsx**
  - Just render a `<p>sdar.dev</p>` for now to verify the build works

- [ ] **Step 8: Verify build**

  Run: `npm run build`
  Expected: Clean build, no errors

- [ ] **Step 9: Commit**

```bash
git add -A
git commit -m "chore: strip old portfolio, set up new foundation with design tokens"
```

---

## Task 2: Content Data

**Files:**
- Create: `src/data/content.ts`

- [ ] **Step 1: Create content data file**
  - Define types: `FeedEntry`, `WritingPost`, `Note`, `SoundEntry`
  - `FeedEntry`: date, type (writing|notes|sound), title, slug
  - `WritingPost`: slug, title, date, body (string[] of paragraphs, or structured blocks)
  - `Note`: slug, date, content (string), links (optional)
  - `SoundEntry`: slug, title, description, embedUrl (optional), tags
  - Populate with placeholder content that feels real (not lorem ipsum)
  - Use Samuel's actual context: synth building, code tools, music production, Bogota

- [ ] **Step 2: Commit**

```bash
git add src/data/content.ts
git commit -m "feat: add content data types and placeholder entries"
```

---

## Task 3: Nav Component

**Files:**
- Create: `src/components/Nav.tsx`
- Create: `src/components/Nav.css`

- [ ] **Step 1: Create Nav.tsx**
  - Port from reference: sticky header, scroll detection, active link highlighting
  - Logo: "sdar" in mono font, links to "/"
  - Links: writing, notes, sound, colophon
  - No hamburger menu (per spec) — links wrap on mobile

- [ ] **Step 2: Create Nav.css**
  - Port from reference with same BEM classes
  - Sticky, backdrop-blur, scroll border behavior
  - Mobile: stack vertically, no hamburger

- [ ] **Step 3: Commit**

```bash
git add src/components/Nav.tsx src/components/Nav.css
git commit -m "feat: add Nav component"
```

---

## Task 4: Footer Component

**Files:**
- Create: `src/components/Footer.tsx`
- Create: `src/components/Footer.css`

- [ ] **Step 1: Create Footer.tsx**
  - Port from reference
  - Links: GitHub (Samuel's real URL), Email, LinkedIn (Samuel's real URL)
  - Copyright line

- [ ] **Step 2: Create Footer.css**
  - Port from reference

- [ ] **Step 3: Commit**

```bash
git add src/components/Footer.tsx src/components/Footer.css
git commit -m "feat: add Footer component"
```

---

## Task 5: Home Page

**Files:**
- Create: `src/pages/Home.tsx`
- Create: `src/pages/Home.css`

- [ ] **Step 1: Create Home.tsx**
  - Port from reference
  - Intro section: Samuel's name, description ("Developer & musician..."), social icons (GitHub, Mail, LinkedIn via lucide-react)
  - Feed section: "RECENT" label, list of FeedEntry items from content data
  - Each entry: date (mono), colored dot by type, title
  - Link entries to correct routes: writing → /writing/slug, notes → /notes/slug, sound → /sound

- [ ] **Step 2: Create Home.css**
  - Port from reference
  - Responsive: mobile stacks date above title, hides dots

- [ ] **Step 3: Commit**

```bash
git add src/pages/Home.tsx src/pages/Home.css
git commit -m "feat: add Home page with intro and feed"
```

---

## Task 6: Writing — List + Post Pages

**Files:**
- Create: `src/pages/WritingList.tsx`
- Create: `src/pages/WritingList.css`
- Create: `src/pages/Post.tsx`
- Create: `src/pages/Post.css`

- [ ] **Step 1: Create WritingList.tsx**
  - Simple list of all writing posts ordered by date
  - Each entry: date + title (like a table of contents)
  - No thumbnails, no excerpts, no pagination
  - Links to /writing/:slug

- [ ] **Step 2: Create WritingList.css**
  - Content column max-width 680px, centered
  - Same date+title pattern as home feed but full list

- [ ] **Step 3: Create Post.tsx**
  - Port from reference
  - Back link to /writing
  - Title (--text-xl, weight 700), date (mono, --text-xs)
  - Body with paragraphs, h2 headings, code blocks, blockquotes
  - Reads slug from useParams, finds matching post in content data
  - Bottom link: back to /writing

- [ ] **Step 4: Create Post.css**
  - Port from reference
  - Content column max-width 680px
  - Code block styling, blockquote with accent-muted left bar
  - Responsive adjustments

- [ ] **Step 5: Commit**

```bash
git add src/pages/WritingList.tsx src/pages/WritingList.css src/pages/Post.tsx src/pages/Post.css
git commit -m "feat: add WritingList and Post pages"
```

---

## Task 7: Notes — List + Detail Pages

**Files:**
- Create: `src/pages/NotesList.tsx`
- Create: `src/pages/NotesList.css`
- Create: `src/pages/NoteDetail.tsx`
- Create: `src/pages/NoteDetail.css`

- [ ] **Step 1: Create NotesList.tsx**
  - Timeline of notes with inline content (no click to read)
  - Each note: date (mono, --text-xs) + body text
  - Can contain links, short paragraphs
  - Separated by spacing (--space-2xl) or subtle border
  - Each note title/date links to /notes/:slug for permalink

- [ ] **Step 2: Create NotesList.css**
  - Content column max-width 680px
  - Dense layout, inline content visible
  - Responsive

- [ ] **Step 3: Create NoteDetail.tsx**
  - More compact than a post — content is short
  - Date and content directly, no big title if note doesn't have one
  - Can have links, a couple of paragraphs, an embed
  - Back link to /notes

- [ ] **Step 4: Create NoteDetail.css**
  - Content column max-width 680px
  - Compact layout, less vertical space than Post

- [ ] **Step 5: Commit**

```bash
git add src/pages/NotesList.tsx src/pages/NotesList.css src/pages/NoteDetail.tsx src/pages/NoteDetail.css
git commit -m "feat: add NotesList and NoteDetail pages"
```

---

## Task 8: Sound Page

**Files:**
- Create: `src/pages/Sound.tsx`
- Create: `src/pages/Sound.css`

- [ ] **Step 1: Create Sound.tsx**
  - List/grid of audio entries
  - Each entry: title, description, tags
  - Placeholder for audio player (simple bar with accent color)
  - Mention SAM-17 and production projects

- [ ] **Step 2: Create Sound.css**
  - Content column max-width 680px (or wider for grid if desired)
  - Slightly more visual personality than other pages (per spec)
  - Audio player bar styling

- [ ] **Step 3: Commit**

```bash
git add src/pages/Sound.tsx src/pages/Sound.css
git commit -m "feat: add Sound page"
```

---

## Task 9: Colophon Page

**Files:**
- Create: `src/pages/Colophon.tsx`
- Create: `src/pages/Colophon.css`

- [ ] **Step 1: Create Colophon.tsx**
  - Simple text page: how the site is built
  - React + TypeScript + Vite, CSS puro, deployed on [X]
  - Readme-style: flowing text, maybe a code block
  - Mention design philosophy

- [ ] **Step 2: Create Colophon.css**
  - Content column max-width 680px
  - Same prose styling as Post body

- [ ] **Step 3: Commit**

```bash
git add src/pages/Colophon.tsx src/pages/Colophon.css
git commit -m "feat: add Colophon page"
```

---

## Task 10: Wire Up App Routing

**Files:**
- Modify: `src/App.tsx`

- [ ] **Step 1: Update App.tsx with full routing**
  - Import all page components and Nav/Footer
  - Routes:
    - `/` → Home
    - `/writing` → WritingList
    - `/writing/:slug` → Post
    - `/notes` → NotesList
    - `/notes/:slug` → NoteDetail
    - `/sound` → Sound
    - `/colophon` → Colophon

- [ ] **Step 2: Verify all routes work**

  Run: `npm run dev` and manually check each route

- [ ] **Step 3: Commit**

```bash
git add src/App.tsx
git commit -m "feat: wire up all routes"
```

---

## Task 11: Animations & Responsive Polish

- [ ] **Step 1: Add global transitions and animations to src/index.css**
  - Hover transitions: `color 150ms ease` on all interactive elements (already in base `a` styles)
  - Page fade-in: `@keyframes fadeIn` (opacity 0→1, run once on body/main)
  - Mobile typography overrides at `@media (max-width: 480px)`: reduce `--text-xl` to 24px, `--text-2xl` to 28px
  - Ensure all breakpoints from spec are covered: 480px, 768px, 1080px

- [ ] **Step 2: Delete any remaining unused files** (old styles, old components that slipped through)

- [ ] **Step 3: Update public assets**
  - Remove old favicon if present
  - Add new favicon.svg (simple "sd" or "sdar" mark)

- [ ] **Step 4: Verify full build**

  Run: `npm run build`
  Expected: Clean build, no errors, no warnings

- [ ] **Step 5: Final commit**

```bash
git add -A
git commit -m "chore: animations, responsive polish, final cleanup"
```

---

## Execution Notes

- The reference implementation at `00_active/sdar` contains working CSS and component code — port directly, don't reinvent.
- Real contact links for Samuel: GitHub `https://github.com/sssamuelll`, Email `mailto:hello@sdar.dev`, LinkedIn — use the ones already in the portfolio.
- Content is mock/placeholder for now. The system is designed so that swapping to markdown-based content later is straightforward (replace data imports with a markdown parser).
- Dark-only. No theme switching. No i18n.
- No TDD for this task — it's a visual/structural redesign with no complex logic.
