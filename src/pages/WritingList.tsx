import { Link } from 'react-router-dom';
import { writingPosts } from '../data/content';
import './WritingList.css';

export function WritingList() {
  const sorted = [...writingPosts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <main className="writing-list">
      <h1 className="writing-list__title">Writing</h1>
      <ul className="writing-list__entries">
        {sorted.map((post) => (
          <li key={post.slug}>
            <Link to={`/writing/${post.slug}`} className="writing-list__entry">
              <span className="writing-list__date">{post.date}</span>
              <span className="writing-list__name">{post.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
