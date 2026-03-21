import { Link } from 'react-router-dom';
import { getAllWritingEntries } from '../data/content';
import './WritingList.css';

export function WritingList() {
  const entries = getAllWritingEntries();

  return (
    <main className="writing-list">
      <h1 className="writing-list__title">Writing</h1>
      <ul className="writing-list__entries">
        {entries.map((entry) => (
          <li key={entry.slug}>
            <Link to={`/writing/${entry.slug}`} className="writing-list__entry">
              <span className="writing-list__date">{entry.date}</span>
              <span className="writing-list__name">{entry.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
