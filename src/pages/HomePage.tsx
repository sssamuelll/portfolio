// src/pages/HomePage.tsx
import React, { useState, useEffect } from 'react';
import styles from './HomePage.module.css';
import { projects } from '../data/projects';
import Waveform from '../components/Waveform/Waveform';
import SkillPillar from '../components/SkillPillar/SkillPillar';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import ProfilePic from '../components/ProfilePic/ProfilePic';
import { useTranslation, Trans } from 'react-i18next';

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'tech' | 'music' | 'experiment'>('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const filteredProjects = activeTab === 'all' ? projects : projects.filter(p => p.category === activeTab);

  const handleNavLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <div className={styles.container}>
        {/* Nav */}
        <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
          <div className={styles.navContainer}>
            <div className={styles.logo}>SD</div>
            <button
              className={`${styles.menuButton} ${mobileMenuOpen ? styles.menuOpen : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <div className={styles.menuIcon}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
            <div className={`${styles.navLinks} ${mobileMenuOpen ? styles.navLinksOpen : ''}`}>
              <a href="#about" className={styles.navLink} onClick={handleNavLinkClick}>{t('nav.about')}</a>
              <a href="#skills" className={styles.navLink} onClick={handleNavLinkClick}>{t('nav.skills')}</a>
              <a href="#projects" className={styles.navLink} onClick={handleNavLinkClick}>{t('nav.projects')}</a>
              <a href="#contact" className={styles.navLink} onClick={handleNavLinkClick}>{t('nav.contact')}</a>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <ProfilePic />
            <div className={styles.badge}><span className={styles.statusDot}></span>{t('hero.badge')}</div>

            <h1 className={styles.heroTitle}>
              <Trans i18nKey="hero.titleL1" components={{ strong: <span className={styles.gradient} /> }} />
              <br />{t('hero.titleL2')}<br />{t('hero.titleL3')}
            </h1>

            <p className={styles.heroSubtitle}>{t('hero.subtitle')}</p>
            <div className={styles.heroButtons}>
              <a href="#projects" className={`${styles.btn} ${styles.btnPrimary}`}>{t('hero.ctaWork')}</a>
              <a href="#contact" className={`${styles.btn} ${styles.btnSecondary}`}>{t('hero.ctaContact')}</a>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className={styles.about}>
          <div className={styles.aboutContent}>
            <div className={styles.aboutVisual}><Waveform /></div>
            <div className={styles.aboutText}>
              <h2>{t('about.h2prefix')} <span style={{color:'var(--brand-b)'}}>{t('about.h2mid')}</span> {t('about.h2suffix')}</h2>
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className={styles.skills}>
          <h2 className={styles.sectionTitle}>{t('skills.title')}</h2>
          <div className={styles.skillPillars}>
            <SkillPillar
              icon="⚡"
              title={t('skills.pillars.software.title')}
              items={t('skills.pillars.software.items', { returnObjects: true }) as string[]}
            />
            <SkillPillar
              icon="🎵"
              title={t('skills.pillars.music.title')}
              items={t('skills.pillars.music.items', { returnObjects: true }) as string[]}
            />
            <SkillPillar
              icon="🌐"
              title={t('skills.pillars.craft.title')}
              items={t('skills.pillars.craft.items', { returnObjects: true }) as string[]}
            />
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className={styles.projects}>
          <h2 className={styles.sectionTitle}>{t('projects.title')}</h2>
          <div className={styles.projectTabs}>
            {(['all','tech','music','experiment'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ''}`}
              >
                {t(`projects.tabs.${tab}`)}
              </button>
            ))}
          </div>
          <div className={styles.projectsGrid}>
            {filteredProjects.map(project => <ProjectCard key={project.id} project={project} />)}
          </div>
        </section>
      </div>

      {/* Contact (full-bleed) */}
      <footer id="contact" className={`${styles.contact} ${styles.fullBleed}`}>
        <div className={styles.contactInner}>
          <h2 className={styles.contactTitle}>{t('contact.title')}</h2>
          <p className={styles.contactSubtitle}>
            <Trans i18nKey="contact.subtitle" />
          </p>
          <div className={styles.contactButtons}>
            <a href="mailto:contact@sdar.dev" className={styles.contactBtn}>{t('contact.email')}</a>
            <a href="https://linkedin.com/in/samueldarioballesteros" className={styles.contactBtn}>{t('contact.linkedin')}</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomePage;