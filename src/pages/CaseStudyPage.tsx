// CaseStudyPage.tsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getCaseStudyBySlug } from '../case-studies';
import type { CaseStudy } from '../case-studies/schema';
import CaseHero from '../components/case-study/CaseHero';
import CaseTOC from '../components/case-study/CaseTOC';
import CaseSection from '../components/case-study/CaseSection';
import KeyDecision from '../components/case-study/KeyDecision';
import MetricsRow from '../components/case-study/MetricsRow';
import CodeBlock from '../components/case-study/CodeBlock';
import styles from './CaseStudyPage.module.css';

const CaseStudyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, i18n } = useTranslation();
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) { setNotFound(true); return; }
    const study = getCaseStudyBySlug(slug);
    if (!study) { setNotFound(true); return; }

    const lang = i18n.language;
    if (study.i18n && study.i18n[lang as keyof typeof study.i18n]) {
      const localized = study.i18n[lang as keyof typeof study.i18n];
      setCaseStudy({ ...study, ...localized });
    } else {
      setCaseStudy(study);
    }
  }, [slug, i18n.language]);

  if (notFound) {
    return (
      <div className={styles.notFound}>
        <h1>404</h1>
        <p>{t('case.ui.notFound')}</p>
        <Link to="/#projects" className={styles.backLink}>
          {t('case.ui.buttons.back')}
        </Link>
      </div>
    );
  }
  if (!caseStudy) {
    return <div className={styles.loading}>Loading...</div>;
  }

  const sections = [
    { id: 'summary', label: t('case.ui.sections.summary') },
    { id: 'problem', label: t('case.ui.sections.problem') },
    { id: 'audience', label: t('case.ui.sections.audience') },
    { id: 'architecture', label: t('case.ui.sections.architecture') },
    { id: 'implementation', label: t('case.ui.sections.implementation') },
    { id: 'results', label: t('case.ui.sections.results') },
    { id: 'lessons', label: t('case.ui.sections.lessons') },
    { id: 'nextSteps', label: t('case.ui.sections.nextSteps') }
  ];

  return (
    <div className={styles.container}>
      <CaseHero caseStudy={caseStudy} />

      <div className={styles.content}>
        <CaseTOC sections={sections} />

        <div className={`${styles.mainContent} ${styles.prose}`}>
          {/* Summary */}
          <CaseSection id="summary" title={t('case.ui.sections.summary')}>
            <div className={styles.summaryCard}>
              <p className={styles.lead}>{caseStudy.summary}</p>
            </div>

            {(caseStudy.hero.role || caseStudy.hero.timeframe) && (
              <div className={styles.overview}>
                {caseStudy.hero.role && (
                  <span className={styles.kv}>
                    <span className={styles.k}>{t('case.ui.meta.role')}</span>
                    <span className={styles.v}>{caseStudy.hero.role}</span>
                  </span>
                )}
                {caseStudy.hero.timeframe && (
                  <span className={styles.kv}>
                    <span className={styles.k}>{t('case.ui.meta.timeframe')}</span>
                    <span className={styles.v}>{caseStudy.hero.timeframe}</span>
                  </span>
                )}
              </div>
            )}
          </CaseSection>

          {/* Problem */}
          <CaseSection id="problem" title={t('case.ui.sections.problem')}>
            <p>{caseStudy.problem}</p>
          </CaseSection>

          {/* Audience & Constraints (2 columnas) */}
          <CaseSection id="audience" title={t('case.ui.sections.audience')}>
            <div className={styles.twoCol}>
              <div>
                <h3>{t('case.ui.meta.audience')}</h3>
                <p>{caseStudy.audienceAndConstraints.audience}</p>
              </div>
              <div>
                <h3>{t('case.ui.meta.constraints')}</h3>
                <ul className={styles.constraintsList}>
                  {caseStudy.audienceAndConstraints.constraints.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>
            </div>
          </CaseSection>

          {/* Architecture */}
          <CaseSection id="architecture" title={t('case.ui.sections.architecture')}>
            <p>{caseStudy.architecture.overview}</p>
            {caseStudy.architecture.diagramNote && (
              <p className={styles.note}>{caseStudy.architecture.diagramNote}</p>
            )}
            <div className={styles.decisions}>
              {caseStudy.architecture.keyDecisions.map((decision, i) => (
                <KeyDecision key={i} decision={decision} />
              ))}
            </div>
          </CaseSection>

          {/* Implementation */}
          <CaseSection id="implementation" title={t('case.ui.sections.implementation')}>
            <div className={styles.highlights}>
              {caseStudy.implementation.highlights.map((h, i) => (
                <div key={i}>
                  <h3>{h.title}</h3>
                  <p>{h.detail}</p>
                </div>
              ))}
            </div>
            {caseStudy.implementation.codeSnippets && (
              <div>
                {caseStudy.implementation.codeSnippets.map((snippet, i) => (
                  <CodeBlock
                    key={i}
                    label={snippet.label}
                    language={snippet.language}
                    code={snippet.code}
                  />
                ))}
              </div>
            )}
          </CaseSection>

          {/* Results (ejemplo rediseñado) */}
          <CaseSection id="results" title={t('case.ui.sections.results')}>
            {caseStudy.results.metrics && (
              <MetricsRow metrics={caseStudy.results.metrics} />
            )}
            {caseStudy.results.outcomes && (
              <div className={styles.outcomes}>
                <ul>
                  {caseStudy.results.outcomes.map((outcome, i) => (
                    <li key={i}>{outcome}</li>
                  ))}
                </ul>
              </div>
            )}
          </CaseSection>

          {/* Lessons */}
          <CaseSection id="lessons" title={t('case.ui.sections.lessons')}>
            <ul className={styles.lessons}>
              {caseStudy.lessons.map((lesson, i) => (
                <li key={i}>{lesson}</li>
              ))}
            </ul>
          </CaseSection>

          {/* Next Steps */}
          {caseStudy.nextSteps && (
            <CaseSection id="nextSteps" title={t('case.ui.sections.nextSteps')}>
              <ul className={styles.nextSteps}>
                {caseStudy.nextSteps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ul>
            </CaseSection>
          )}

          {/* Actions */}
          <div className={styles.demoButtons}>
            {caseStudy.demo.liveUrl && (
              <a
                href={caseStudy.demo.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.demoBtn}
              >
                {t('case.ui.buttons.viewDemo')}
              </a>
            )}
            {caseStudy.demo.repoUrl && (
              <a
                href={caseStudy.demo.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.repoBtn}
              >
                {t('case.ui.buttons.viewRepo')}
              </a>
            )}
            <Link to="/#projects" className={styles.backBtn}>
              {t('case.ui.buttons.back')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyPage;
