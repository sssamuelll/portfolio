import React, { useState, useEffect } from 'react';
import styles from './HomePage.module.css';
import { projects } from '../data/projects';
import Waveform from '../components/Waveform/Waveform';
import SkillPillar from '../components/SkillPillar/SkillPillar';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import ProfilePic from '../components/ProfilePic/ProfilePic';

const HomePage: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'tech' | 'music' | 'experiment'>('all');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const filteredProjects =
    activeTab === 'all' ? projects : projects.filter(p => p.category === activeTab);

  return (
    <>
        <div className={styles.container}>
          {/* Navigation */}
          <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
            <div className={styles.navContainer}>
              <div className={styles.logo}>SD</div>
              <div className={styles.navLinks}>
                <a href="#about" className={styles.navLink}>About</a>
                <a href="#skills" className={styles.navLink}>Skills</a>
                <a href="#projects" className={styles.navLink}>Projects</a>
                <a href="#contact" className={styles.navLink}>Contact</a>
              </div>
            </div>
          </nav>
    
          {/* Hero */}
          <section className={styles.hero}>
            <div className={styles.heroContent}>
              <ProfilePic />
              <div className={styles.badge}>
                <span className={styles.statusDot}></span>
                Available for Remote Work
              </div>
              <h1 className={styles.heroTitle}>
                I <span className={styles.gradient}>compose software</span>,<br/>
                develop music, and<br/>
                blur the lines between.
              </h1>
              <p className={styles.heroSubtitle}>
                Frontend architect by day, modular synth builder by night.<br/>
                Creating at the intersection of code and sound from wherever WiFi reaches.
              </p>
              <div className={styles.heroButtons}>
                <button className={`${styles.btn} ${styles.btnPrimary}`}>View My Work →</button>
                <button className={`${styles.btn} ${styles.btnSecondary}`}>Let's Create Together</button>
              </div>
            </div>
          </section>
    
          {/* About */}
          <section id="about" className={styles.about}>
            <div className={styles.aboutContent}>
              <div className={styles.aboutVisual}>
                <Waveform />
              </div>
              <div className={styles.aboutText}>
                <h2>Code × <span style={{color: 'var(--brand-b)'}}>Music</span> × Movement</h2>
                <p>
                  I'm Samuel Darío—a software composer who treats code like music:
                  structured yet expressive, technical yet creative. With 5+ years
                  shipping React/TypeScript products and a parallel life building
                  analog synthesizers, I bring a unique perspective to digital experiences.
                </p>
                <p>
                  Currently wandering Europe, building from cafés and co-working spaces,
                  proving that great software doesn't need a fixed address.
                </p>
              </div>
            </div>
          </section>
    
          {/* Skills */}
          <section id="skills" className={styles.skills}>
            <h2 className={styles.sectionTitle}>How I Create Value</h2>
            <div className={styles.skillPillars}>
              <SkillPillar
                icon="⚡"
                title="Software Composition"
                items={['React & TypeScript symphonies','Real-time data choreography','API orchestration','UI/UX harmony']}
              />
              <SkillPillar
                icon="🎵"
                title="Music Development"
                items={['Analog synthesis','MIDI integration','Audio DSP','Creative coding']}
              />
              <SkillPillar
                icon="🌐"
                title="Digital Craft"
                items={['Remote collaboration','Rapid prototyping','System design','Cross-domain thinking']}
              />
            </div>
          </section>
    
          {/* Projects */}
          <section id="projects" className={styles.projects}>
            <h2 className={styles.sectionTitle}>Selected Works</h2>
            <div className={styles.projectTabs}>
              {(['all','tech','music','experiment'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ''}`}
                >
                  {tab === 'all' ? 'All' :
                   tab === 'tech' ? 'Tech Products' :
                   tab === 'music' ? 'Music/Tech' : 'Experiments'}
                </button>
              ))}
            </div>
            <div className={styles.projectsGrid}>
              {filteredProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
          
          {/* Contact */}
          
        </div>
        <footer id="contact" className={`${styles.contact} ${styles.fullBleed}`}>
          <div className={styles.contactInner}>
            <h2 className={styles.contactTitle}>Let's Create Something Together</h2>
            <p className={styles.contactSubtitle}>
              Whether you need a technical architect, a creative developer,<br/>
              or someone who speaks both languages fluently.
            </p>
            <div className={styles.contactButtons}>
              <a href="mailto:contact@sdar.dev" className={styles.contactBtn}>📧 Email Me</a>
              <a href="https://linkedin.com/in/samueldarioballesteros" className={styles.contactBtn}>💼 Connect on LinkedIn</a>
            </div>
          </div>
        </footer>
    </>
  );
};

export default HomePage;