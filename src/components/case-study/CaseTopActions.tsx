import React, { useEffect, useMemo, useRef, useState, useContext } from 'react';
import { ThemeContext } from "../../styles/theme/ThemeContext";
import { useTranslation } from 'react-i18next';
import css from './CaseTopActions.module.css';

type Section = { id: string; label: string };

interface Props {
  repoUrl?: string;
  demoUrl?: string;
  sections?: Section[]; // para la búsqueda (ids del TOC)
}

const CaseTopActions: React.FC<Props> = ({ repoUrl, demoUrl, sections = [] }) => {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error("ThemeContext not found");


  const { i18n } = useTranslation();

  /* ---------------- Language ---------------- */
  const [langOpen, setLangOpen] = useState(false);
  const langs = useMemo(
    () => [
      { code: 'en', label: 'English' },
      { code: 'es', label: 'Español' },
      { code: 'ja', label: '日本語' },
      { code: 'de', label: 'Deutsch' }
    ],
    []
  );
  const activeLang =
    (i18n.resolvedLanguage || i18n.language || 'en').split('-')[0];

  /* ---------------- Theme ---------------- */
    /* ---------------- Theme ---------------- */
    const { mode, toggleTheme } = ctx;


    

  /* ---------------- Command Palette ---------------- */
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const isK = e.key.toLowerCase() === 'k';
      if ((e.metaKey || e.ctrlKey) && isK) {
        e.preventDefault();
        setOpen(true);
        setTimeout(() => inputRef.current?.focus(), 10);
      }
      if (open && e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const results = sections.filter(s =>
    s.label.toLowerCase().includes(q.trim().toLowerCase())
  );

  const goTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 80;
    const top = el.offsetTop - offset;
    window.scrollTo({ top, behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <>
      <div className={css.wrap}>
        {repoUrl && (
          <a href={repoUrl} target="_blank" rel="noopener noreferrer" className={css.link}>
            GitHub
            <svg className={css.ext} viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </a>
        )}

        {demoUrl && (
          <a href={demoUrl} target="_blank" rel="noopener noreferrer" className={css.link}>
            Demo
            <svg className={css.ext} viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </a>
        )}

        <span className={css.sep} aria-hidden />

        {/* Language */}
        <div className={css.lang}>
          <button
            className={css.langBtn}
            onClick={() => setLangOpen(v => !v)}
            aria-expanded={langOpen}
            aria-haspopup="menu"
            aria-label="Change language"
          >
            <svg className={css.langIcon} viewBox="0 0 24 24" fill="none">
              <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 0c3 3 3 12 0 18M3 12h18" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
            {langs.find(l => l.code === activeLang)?.label || 'English'}
            <svg className={css.chev} viewBox="0 0 24 24" fill="none">
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
          {langOpen && (
            <div role="menu" className={css.menu}>
              {langs.map(l => (
                <button
                  key={l.code}
                  className={css.item}
                  aria-pressed={activeLang === l.code}
                  onClick={() => { i18n.changeLanguage(l.code); setLangOpen(false); }}
                >
                  {l.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Theme */}
        <button
          className={css.themeBtn}
          onClick={toggleTheme}
          aria-label="Toggle theme"
          title="Toggle theme"
        >
          {mode === 'dark' ? (
            /* Sun */
            <svg className={css.icon} viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M5 19l1.5-1.5"
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          ) : (
            /* Moon */
            <svg className={css.icon} viewBox="0 0 24 24" fill="none">
              <path d="M21 12.5A8.5 8.5 0 1 1 11.5 3a6.5 6.5 0 1 0 9.5 9.5Z"
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
        </button>

        {/* Search pill (abre el palette con ⌘K) */}
        <button className={css.search} onClick={() => { setOpen(true); setTimeout(() => inputRef.current?.focus(), 10); }}>
          <svg className={css.mag} viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M20 20l-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span>Search</span>
          <span className={css.kbd}>{navigator.platform.includes('Mac') ? '⌘' : 'Ctrl'}</span>
          <span className={css.kbd}>K</span>
        </button>
      </div>

      {/* Command Palette */}
      {open && (
        <div className={css.overlay} onClick={() => setOpen(false)}>
          <div className={css.palette} onClick={e => e.stopPropagation()}>
            <div className={css.pHead}>
              <svg className={css.mag} viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M20 20l-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <input
                ref={inputRef}
                className={css.pInput}
                placeholder="Search sections…"
                value={q}
                onChange={e => { setQ(e.target.value); setActive(0); }}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowDown') { e.preventDefault(); setActive(a => Math.min(a + 1, results.length - 1)); }
                  if (e.key === 'ArrowUp') { e.preventDefault(); setActive(a => Math.max(a - 1, 0)); }
                  if (e.key === 'Enter' && results[active]) { goTo(results[active].id); }
                }}
              />
            </div>
            <div className={css.pList}>
              {results.length === 0 && (
                <div className={css.pItem} aria-selected="true">No results</div>
              )}
              {results.map((r, i) => (
                <button
                  key={r.id}
                  className={css.pItem}
                  aria-selected={i === active}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => goTo(r.id)}
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CaseTopActions;