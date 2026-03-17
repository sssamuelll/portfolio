import './Colophon.css';

export function Colophon() {
  return (
    <main className="colophon">
      <h1 className="colophon__title">Colophon</h1>

      <div className="colophon__body">
        <p>
          This site is built with <strong>React</strong>, <strong>TypeScript</strong>,
          and <strong>Vite</strong>. No frameworks, no CSS libraries, no CMS.
          Just components, plain CSS, and content committed directly to the repo.
        </p>

        <p>
          The typography uses <strong>Space Grotesk</strong> for headings,{' '}
          <strong>Inter</strong> for body text, and{' '}
          <strong>JetBrains Mono</strong> for code. The color palette is
          intentionally dark and minimal — a near-black background with a
          teal accent.
        </p>

        <h2>Why this stack</h2>

        <p>
          I wanted a site I could maintain without friction. No build pipeline
          surprises, no dependency hell, no CMS login. Writing a new post means
          creating a file and pushing to git. That's it.
        </p>

        <p>
          React because I think in components. TypeScript because I like
          catching mistakes before they happen. Vite because it's fast and stays
          out of the way. CSS because I want full control over every pixel.
        </p>

        <h2>Design philosophy</h2>

        <p>
          This isn't a portfolio. It's a space where I put things — code,
          music, ideas, notes. The design follows the content: if it doesn't
          need a hero section, it doesn't get one. If a page is just text, it's
          just text.
        </p>

        <p>
          Dark by default because I spend most of my time in dark environments.
          Minimal by choice, not by laziness — every element that's here earned
          its place.
        </p>

        <div className="colophon__code">
          <code>{`// The whole site, in one line:
git push origin main  // → deployed`}</code>
        </div>

        <h2>Hosting</h2>

        <p>
          Deployed on Vercel. Source code on{' '}
          <a href="https://github.com/sssamuelll" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>.
        </p>
      </div>
    </main>
  );
}
