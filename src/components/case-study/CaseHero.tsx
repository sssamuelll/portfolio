import React from 'react';
import type { CaseStudy } from '../../case-studies/schema';
import styles from './CaseHero.module.css';
import CaseTopActions from './CaseTopActions';

interface Props { caseStudy: CaseStudy; }
type Section = { id: string; label: string };

const CaseHero: React.FC<Props> = ({ caseStudy }) => {
  // si quieres habilitar búsqueda por secciones del case:
  const sections: Section[] = [
    { id: 'summary', label: 'Summary' },
    { id: 'problem', label: 'Problem' },
    { id: 'audience', label: 'Audience & Constraints' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'implementation', label: 'Implementation' },
    { id: 'results', label: 'Results' },
    { id: 'lessons', label: 'Lessons' },
    { id: 'nextSteps', label: 'Next Steps' },
  ];

  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>{caseStudy.hero.title}</h1>
          {caseStudy.hero.subtitle && (
            <p className={styles.subtitle}>{caseStudy.hero.subtitle}</p>
          )}
        </div>
        <div className={styles.topbar}>
          <CaseTopActions
            repoUrl={caseStudy.demo?.repoUrl}
            demoUrl={caseStudy.demo?.liveUrl}
            sections={sections}
          />
        </div>
      </div>
    </div>
  );
};

export default CaseHero;
