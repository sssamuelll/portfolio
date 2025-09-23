import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import css from './ProjectCard.module.css';
import type { Project } from '../../data/projects';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const { t } = useTranslation();
  const imageClass =
    project.image
      ? css.image
      : `${css.image} ${css[`${project.category}Bg`]}`;

  const imageStyle = project.image ? { backgroundImage: `url(${project.image})` } : undefined;

  const content = (
    <div className={css.card}>
      <div className={imageClass} style={imageStyle}>
        <span className={css.type}>
          {project.category === 'tech' ? 'Tech Product' :
           project.category === 'music' ? 'Music/Tech' : 'Experiment'}
        </span>
      </div>
      <div className={css.info}>
        <h3 className={css.title}>{t(project.titleKey)}</h3>
        <p className={css.desc}>{t(project.descriptionKey)}</p>
        <div className={css.tags}>
          {project.tags.map((t, i) => (
            <span key={i} className={css.tag}>{t}</span>
          ))}
        </div>
        <div className={css.actions}>
          {project.caseStudySlug && (
            <Link 
              to={`/case/${project.caseStudySlug}`} 
              className={css.caseBtn}
            >
              {t('projects.buttons.caseStudy')}
            </Link>
          )}
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={css.demoBtn}
            >
              {t('projects.buttons.liveDemo')}
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return content;
};

export default ProjectCard;