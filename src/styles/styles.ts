import type React from 'react';

export const styles: Record<string, React.CSSProperties> = {
  container: {
    fontFamily: "'Inter', sans-serif",
    color: '#1a1a1a',
    background: 'linear-gradient(180deg, #fafafa 0%, #f0f0f0 100%)',
    minHeight: '100vh'
  },
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    background: 'rgba(250, 250, 250, 0.95)',
    backdropFilter: 'blur(10px)',
    zIndex: 1000,
    padding: '1rem 2rem',
    transition: 'all 0.3s ease'
  },
  navScrolled: {
    boxShadow: '0 2px 20px rgba(0,0,0,0.08)'
  },
  navContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 700,
    background: 'linear-gradient(135deg, #034159, #02735E)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },
  navLinks: {
    display: 'flex',
    gap: '2rem'
  },
  navLink: {
    color: '#6b7280',
    textDecoration: 'none',
    fontWeight: 500,
    transition: 'color 0.3s ease'
  },
  hero: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '6rem 2rem'
  },
  heroContent: {
    textAlign: 'center',
    maxWidth: '900px'
  },
  badge: {
    display: 'inline-block',
    padding: '0.5rem 1rem',
    background: 'white',
    borderRadius: '2rem',
    fontSize: '0.875rem',
    color: '#6b7280',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
  },
  statusDot: {
    display: 'inline-block',
    width: '8px',
    height: '8px',
    background: '#10b981',
    borderRadius: '50%',
    marginRight: '0.5rem',
    animation: 'pulse 2s infinite'
  },
  heroTitle: {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: 700,
    lineHeight: 1.1,
    marginBottom: '1.5rem'
  },
  gradient: {
    background: 'linear-gradient(135deg, #034159, #02735E)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },
  heroSubtitle: {
    fontSize: '1.25rem',
    color: '#6b7280',
    marginBottom: '3rem'
  },
  heroButtons: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center'
  },
  btn: {
    padding: '0.875rem 2rem',
    borderRadius: '8px',
    fontWeight: 600,
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'all 0.3s ease'
  },
  btnPrimary: {
    background: 'linear-gradient(135deg, #034159, #02735E)',
    color: 'white'
  },
  btnSecondary: {
    background: 'white',
    color: '#1a1a1a',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
  },
  about: {
    padding: '6rem 2rem',
    background: 'white'
  },
  aboutContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    gap: '4rem',
    alignItems: 'center'
  },
  aboutVisual: {
    background: 'linear-gradient(135deg, #f3f4f6, #e5e7eb)',
    borderRadius: '20px',
    padding: '3rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  waveform: {
    display: 'flex',
    alignItems: 'center',
    gap: '3px'
  },
  waveBar: {
    width: '4px',
    background: 'linear-gradient(135deg, #034159, #02735E)',
    borderRadius: '2px',
    animation: 'wave 1.5s infinite ease-in-out'
  },
  aboutText: {
    fontSize: '1.1rem',
    lineHeight: 1.8,
    color: '#4b5563'
  },
  skills: {
    padding: '6rem 2rem',
    background: 'linear-gradient(180deg, #fafafa 0%, white 100%)'
  },
  sectionTitle: {
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '3rem'
  },
  skillPillars: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem'
  },
  pillar: {
    background: 'white',
    borderRadius: '16px',
    padding: '2rem',
    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
    border: '1px solid #f0f0f0',
    transition: 'transform 0.3s ease'
  },
  pillarIcon: {
    width: '60px',
    height: '60px',
    border: "1px solid rgb(3, 65, 89)",
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
    marginBottom: '1.5rem'
  },
  pillarTitle: {
    fontSize: '1.25rem',
    marginBottom: '1rem'
  },
  pillarItems: {
    listStyle: 'none',
    padding: 0
  },
  pillarItem: {
    padding: '0.5rem 0',
    color: '#6b7280'
  },
  projects: {
    padding: '6rem 2rem',
    background: 'white'
  },
  projectTabs: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginBottom: '3rem'
  },
  tab: {
    padding: '0.75rem 1.5rem',
    background: '#f3f4f6',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 500,
    transition: 'all 0.3s ease'
  },
  tabActive: {
    background: 'linear-gradient(135deg, #034159, #02735E)',
    color: 'white'
  },
  projectsGrid: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem'
  },
  projectCard: {
    background: '#fafafa',
    borderRadius: '12px',
    overflow: 'hidden',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
    border: '1px solid #f0f0f0'
  },
  projectImage: {
    height: '200px',
    position: 'relative'
  },
  projectType: {
    position: 'absolute',
    top: '1rem',
    left: '1rem',
    padding: '0.25rem 0.75rem',
    background: 'white',
    borderRadius: '4px',
    fontSize: '0.75rem',
    fontWeight: 600,
    textTransform: 'uppercase'
  },
  projectInfo: {
    padding: '1.5rem'
  },
  projectTitle: {
    fontSize: '1.25rem',
    marginBottom: '0.5rem'
  },
  projectDesc: {
    color: '#6b7280',
    marginBottom: '1rem'
  },
  projectTags: {
    display: 'flex',
    gap: '0.5rem',
    flexWrap: 'wrap'
  },
  tag: {
    padding: '0.25rem 0.75rem',
    background: 'white',
    border: '1px solid #e5e7eb',
    borderRadius: '4px',
    fontSize: '0.75rem',
    color: '#6b7280'
  },
  contact: {
    padding: '6rem 2rem',
    background: 'linear-gradient(135deg, #034159, #02735E)',
    color: 'white',
    textAlign: 'center'
  },
  contactTitle: {
    fontSize: '2.5rem',
    marginBottom: '1rem'
  },
  contactSubtitle: {
    fontSize: '1.25rem',
    opacity: 0.9,
    marginBottom: '3rem'
  },
  contactButtons: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center'
  },
  contactBtn: {
    padding: '0.875rem 2rem',
    background: 'white',
    color: '#034159',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 600,
    transition: 'transform 0.3s ease'
  }
};
