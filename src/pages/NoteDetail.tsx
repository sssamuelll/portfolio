import { useParams, Link } from 'react-router-dom';
import { getNote } from '../data/content';
import './NoteDetail.css';

export function NoteDetail() {
  const { slug } = useParams<{ slug: string }>();
  const note = slug ? getNote(slug) : undefined;

  if (!note) {
    return (
      <main className="note-detail">
        <div className="note-detail__content">
          <p className="note-detail__not-found">Note not found.</p>
          <Link to="/notes" className="note-detail__back">
            <span>&larr;</span> notes
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="note-detail">
      <div className="note-detail__content">
        <Link to="/notes" className="note-detail__back">
          <span>&larr;</span> notes
        </Link>

        <time className="note-detail__date">{note.date}</time>
        {note.title && <h1 className="note-detail__title">{note.title}</h1>}
        <p className="note-detail__body">{note.content}</p>

        {note.links && (
          <ul className="note-detail__links">
            {note.links.map((link) => (
              <li key={link.url}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}

        <hr className="note-detail__divider" />
        <Link to="/notes" className="note-detail__back-bottom">
          <span>&larr;</span> Back to notes
        </Link>
      </div>
    </main>
  );
}
