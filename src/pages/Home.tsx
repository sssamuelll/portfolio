import { Link } from 'react-router-dom';
import { Github, Mail } from 'lucide-react';
import { feedEntries } from '../data/content';
import { useRouteMeta } from '../hooks/useRouteMeta';
import './Home.css';

const typeRoute: Record<string, string> = {
  writing: '/writing',
  note: '/writing',
};

export function Home() {
  useRouteMeta({
    title: 'Dari · sdar.dev',
    description:
      'Personal blog by Samuel Ballesteros, writing as Dari. Software, music, and the spaces between.',
    canonical: 'https://www.sdar.dev/',
  });

  return (
    <main className="home">
      <section className="home__intro">
        <h1 className="home__heading">
          Dari
        </h1>
        <p className="home__description">
          I make software and music.
        </p>
        <div className="home__socials">
          <a
            href="https://github.com/sssamuelll"
            target="_blank"
            rel="noopener noreferrer"
            className="home__social-link"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="mailto:contact@sdar.dev"
            className="home__social-link"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </section>

      <section className="home__feed">
        <span className="home__feed-label">RECENT</span>
        <ul className="feed-list">
          {feedEntries.map((entry) => (
            <li key={entry.slug} className="feed-entry">
              <Link
                to={`${typeRoute[entry.type]}/${entry.slug}`}
                className="feed-entry__link"
              >
                <span className="feed-entry__date">{entry.date}</span>
                <span className={`feed-entry__dot feed-entry__dot--${entry.type}`} />
                <span className="feed-entry__title">{entry.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
