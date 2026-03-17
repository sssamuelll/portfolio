import { soundEntries } from '../data/content';
import './Sound.css';

export function Sound() {
  return (
    <main className="sound">
      <h1 className="sound__title">Sound</h1>
      <p className="sound__intro">
        Music, field recordings, and hardware experiments. Most of this is made
        with a custom modular synthesizer (SAM-17), cheap microphones, and
        whatever software feels right.
      </p>

      <div className="sound__entries">
        {soundEntries.map((entry) => (
          <article key={entry.slug} className="sound-entry">
            <h2 className="sound-entry__title">{entry.title}</h2>
            <p className="sound-entry__description">{entry.description}</p>
            <div className="sound-entry__player">
              <div className="sound-entry__player-bar">
                <div className="sound-entry__player-progress" />
              </div>
              <span className="sound-entry__player-time">0:00</span>
            </div>
            <div className="sound-entry__tags">
              {entry.tags.map((tag) => (
                <span key={tag} className="sound-entry__tag">{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
