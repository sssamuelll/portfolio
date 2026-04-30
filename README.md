# sdar.dev

Personal blog by Dari (Samuel Ballesteros). Live: <https://www.sdar.dev>.

Writing on software, music, and the spaces between.

## Stack

- React 18 + Vite 7 + TypeScript 5 (strict)
- `react-router-dom` v7
- `lucide-react` for icons

No SSR, no i18n, no markdown loader — posts live as typed objects in `src/data/content.ts`.

## Structure

```
.
├── index.html              # static meta tags (title, OG, Twitter, canonical)
├── public/
│   ├── favicon.svg
│   └── og.png              # 1200x630 social preview
├── src/
│   ├── main.tsx            # entry, BrowserRouter
│   ├── App.tsx             # routes
│   ├── index.css           # design tokens + globals
│   ├── components/         # Nav, Footer
│   ├── pages/              # Home, WritingList, Post
│   ├── hooks/
│   │   └── useRouteMeta.ts # per-route meta (no deps)
│   └── data/
│       └── content.ts      # posts, notes, feed entries
└── .github/workflows/
    └── deploy.yml          # GHA: lint -> build -> rsync to EC2
```

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run lint
npm run build    # tsc -b && vite build
npm run preview
```

## Deploy

Push to `main` triggers `.github/workflows/deploy.yml`: lint, build, then rsync `dist/` over SSH to the production EC2 host. Server config (nginx, TLS) lives outside this repo.
