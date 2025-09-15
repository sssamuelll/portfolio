import React, { useState, useEffect } from 'react';
import { styles } from '../styles/styles';
import '../styles/animations'; // side-effect: inyecta @keyframes como en el original
import { projects } from '../data/projects';
import Waveform from '../components/Waveform/Waveform';
import SkillPillar from '../components/SkillPillar/SkillPillar';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import ProfilePic from '../components/ProfilePic/ProfilePic';

// Main Homepage Component
const HomePage: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'tech' | 'music' | 'experiment'>('all');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter((p: { category: string; }) => p.category === activeTab);

  return (
    <div style={styles.container}>
      {/* Navigation */}
      <nav style={{...styles.nav, ...(scrolled ? styles.navScrolled : {})}}>
        <div style={styles.navContainer}>
          <div style={styles.logo}>SD</div>
          <div style={styles.navLinks}>
            <a href="#about" style={styles.navLink}>About</a>
            <a href="#skills" style={styles.navLink}>Skills</a>
            <a href="#projects" style={styles.navLink}>Projects</a>
            <a href="#contact" style={styles.navLink}>Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
            <ProfilePic />
          <div style={styles.badge}>
            <span style={styles.statusDot}></span>
            Available for Remote Work
          </div>
          <h1 style={styles.heroTitle}>
            I <span style={styles.gradient}>compose software</span>,<br/>
            develop music, and<br/>
            blur the lines between.
          </h1>
          <p style={styles.heroSubtitle}>
            Frontend architect by day, modular synth builder by night.<br/>
            Creating at the intersection of code and sound from wherever WiFi reaches.
          </p>
          <div style={styles.heroButtons}>
            <button style={{...styles.btn, ...styles.btnPrimary}}>
              View My Work →
            </button>
            <button style={{...styles.btn, ...styles.btnSecondary}}>
              Let's Create Together
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={styles.about}>
        <div style={styles.aboutContent}>
          <div style={styles.aboutVisual}>
            <Waveform />
          </div>
          <div style={styles.aboutText}>
            <h2>Code × <span style={{color: '#02735E'}}>Music</span> × Movement</h2>
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

      {/* Skills Section */}
      <section id="skills" style={styles.skills}>
        <h2 style={styles.sectionTitle}>How I Create Value</h2>
        <div style={styles.skillPillars}>
          <SkillPillar 
            icon="⚡"
            title="Software Composition"
            items={[
              'React & TypeScript symphonies',
              'Real-time data choreography',
              'API orchestration',
              'UI/UX harmony'
            ]}
          />
          <SkillPillar 
            icon="🎵"
            title="Music Development"
            items={[
              'Analog synthesis',
              'MIDI integration',
              'Audio DSP',
              'Creative coding'
            ]}
          />
          <SkillPillar 
            icon="🌐"
            title="Digital Craft"
            items={[
              'Remote collaboration',
              'Rapid prototyping',
              'System design',
              'Cross-domain thinking'
            ]}
          />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={styles.projects}>
        <h2 style={styles.sectionTitle}>Selected Works</h2>
        <div style={styles.projectTabs}>
          <button 
            onClick={() => setActiveTab('all')}
            style={{...styles.tab, ...(activeTab === 'all' ? styles.tabActive : {})}}
          >
            All
          </button>
          <button 
            onClick={() => setActiveTab('tech')}
            style={{...styles.tab, ...(activeTab === 'tech' ? styles.tabActive : {})}}
          >
            Tech Products
          </button>
          <button 
            onClick={() => setActiveTab('music')}
            style={{...styles.tab, ...(activeTab === 'music' ? styles.tabActive : {})}}
          >
            Music/Tech
          </button>
          <button 
            onClick={() => setActiveTab('experiment')}
            style={{...styles.tab, ...(activeTab === 'experiment' ? styles.tabActive : {})}}
          >
            Experiments
          </button>
        </div>
        <div style={styles.projectsGrid}>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={styles.contact}>
        <h2 style={styles.contactTitle}>Let's Create Something Together</h2>
        <p style={styles.contactSubtitle}>
          Whether you need a technical architect, a creative developer,<br/>
          or someone who speaks both languages fluently.
        </p>
        <div style={styles.contactButtons}>
          <a href="mailto:contact@sdar.dev" style={styles.contactBtn}>
            📧 Email Me
          </a>
          <a href="https://linkedin.com/in/samueldarioballesteros" style={styles.contactBtn}>
            💼 Connect on LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;