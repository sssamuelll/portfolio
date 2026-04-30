import { useParams, Link } from 'react-router-dom';
import { getPost, getNote, type WritingPost } from '../data/content';
import { useRouteMeta } from '../hooks/useRouteMeta';
import './Post.css';

const FALLBACK_DESCRIPTION = 'Essay by Dari (Samuel Ballesteros).';
const SUMMARY_MAX = 155;

function summarizePost(post: WritingPost): string {
  const firstParagraph = post.body.find((b) => b.kind === 'p')?.text;
  if (!firstParagraph) return FALLBACK_DESCRIPTION;
  if (firstParagraph.length <= SUMMARY_MAX) return firstParagraph;
  return firstParagraph.slice(0, SUMMARY_MAX - 1).trimEnd() + '…';
}

export function Post() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPost(slug) : undefined;
  const note = !post && slug ? getNote(slug) : undefined;

  const metaTitle = post
    ? `${post.title} — Dari`
    : note?.title
      ? `${note.title} — Dari`
      : 'Not found — Dari';
  const metaDescription = post
    ? summarizePost(post)
    : note?.content?.slice(0, SUMMARY_MAX) || FALLBACK_DESCRIPTION;
  const metaCanonical = `https://www.sdar.dev/writing/${slug ?? ''}`;

  useRouteMeta({
    title: metaTitle,
    description: metaDescription,
    canonical: metaCanonical,
  });

  if (!post && !note) {
    return (
      <main className="post">
        <div className="post__article">
          <p className="post__not-found">Not found.</p>
          <Link to="/writing" className="post__back">
            <span>&larr;</span> writing
          </Link>
        </div>
      </main>
    );
  }

  if (note) {
    return (
      <main className="post">
        <article className="post__article">
          <Link to="/writing" className="post__back">
            <span className="post__back-arrow">&larr;</span>
            writing
          </Link>

          <header className="post__header">
            {note.title && <h1 className="post__title">{note.title}</h1>}
            <time className="post__date">{note.date}</time>
          </header>

          <div className="post__body">
            <p>{note.content}</p>

            {note.links && (
              <ul className="post__links">
                {note.links.map((link) => (
                  <li key={link.url}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}

            <hr className="post__divider" />
            <Link to="/writing" className="post__back-bottom">
              <span>&larr;</span> Back to writing
            </Link>
          </div>
        </article>
      </main>
    );
  }

  return (
    <main className="post">
      <article className="post__article">
        <Link to="/writing" className="post__back">
          <span className="post__back-arrow">&larr;</span>
          writing
        </Link>

        <header className="post__header">
          <h1 className="post__title">{post!.title}</h1>
          <time className="post__date">{post!.date}</time>
        </header>

        <div className="post__body">
          {post!.body.map((block, i) => {
            switch (block.kind) {
              case 'p':
                return <p key={i}>{block.text}</p>;
              case 'h2':
                return <h2 key={i}>{block.text}</h2>;
              case 'code':
                return (
                  <div key={i} className="post__code">
                    <code>{block.text}</code>
                  </div>
                );
              case 'blockquote':
                return (
                  <blockquote key={i} className="post__blockquote">
                    <div className="post__blockquote-bar" />
                    <div className="post__blockquote-content">
                      <p>{block.text}</p>
                    </div>
                  </blockquote>
                );
              case 'hr':
                return <hr key={i} className="post__divider" />;
              default:
                return null;
            }
          })}

          <hr className="post__divider" />

          <Link to="/writing" className="post__back-bottom">
            <span>&larr;</span> Back to writing
          </Link>
        </div>
      </article>
    </main>
  );
}
