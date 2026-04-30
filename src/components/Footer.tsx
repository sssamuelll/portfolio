import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__links">
        <a href="https://github.com/sssamuelll" target="_blank" rel="noopener noreferrer">GitHub</a>
        <span className="footer__sep">&middot;</span>
        <a href="mailto:contact@sdar.dev">Email</a>
      </div>
      <span className="footer__copy">&copy; 2026 Samuel Ballesteros</span>
    </footer>
  );
}
