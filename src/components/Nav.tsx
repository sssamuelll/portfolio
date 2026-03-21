import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Nav.css';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (path: string) =>
    location.pathname === path || location.pathname.startsWith(path + '/')
      ? 'nav__link nav__link--active'
      : 'nav__link';

  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <Link to="/" className="nav__logo">sdar</Link>
      <div className="nav__links">
        <Link to="/writing" className={isActive('/writing')}>writing</Link>
        <Link to="/sound" className={isActive('/sound')}>sound</Link>
      </div>
    </nav>
  );
}
