import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './CaseTOC.module.css';

interface Props {
  sections: { id: string; label: string }[];
}

const CaseTOC: React.FC<Props> = ({ sections }) => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);
  
  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const top = element.offsetTop - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      setMobileOpen(false);
    }
  };
  
  return (
    <>
      <div className={styles.mobileToggle}>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={styles.toggleBtn}
          aria-expanded={mobileOpen}
        >
          {t('case.ui.toc')}
          <span className={mobileOpen ? styles.iconOpen : styles.iconClosed}>▼</span>
        </button>
      </div>
      
      <nav className={`${styles.toc} ${mobileOpen ? styles.mobileOpen : ''}`}>
        <h3 className={styles.title}>{t('case.ui.toc')}</h3>
        <ul className={styles.list}>
          {sections.map(section => (
            <li key={section.id}>
              <button
                onClick={() => handleClick(section.id)}
                className={`${styles.link} ${activeSection === section.id ? styles.active : ''}`}
              >
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default CaseTOC;