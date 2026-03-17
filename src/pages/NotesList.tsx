import { Link } from 'react-router-dom';
import { notes } from '../data/content';
import './NotesList.css';

export function NotesList() {
  const sorted = [...notes].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <main className="notes-list">
      <h1 className="notes-list__title">Notes</h1>
      <div className="notes-list__entries">
        {sorted.map((note) => (
          <article key={note.slug} className="note-card">
            <Link to={`/notes/${note.slug}`} className="note-card__date-link">
              <time className="note-card__date">{note.date}</time>
            </Link>
            {note.title && <h2 className="note-card__title">{note.title}</h2>}
            <p className="note-card__content">{note.content}</p>
            {note.links && (
              <ul className="note-card__links">
                {note.links.map((link) => (
                  <li key={link.url}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </main>
  );
}
