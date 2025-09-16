import React from 'react';
import css from './ProjectCard.module.css';
import type { Project } from '../../data/projects';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
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
        <h3 className={css.title}>{project.title}</h3>
        <p className={css.desc}>{project.description}</p>
        <div className={css.tags}>
          {project.tags.map((t, i) => (
            <span key={i} className={css.tag}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );

  return project.link ? (
    <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration:'none', color:'inherit' }}>
      {content}
    </a>
  ) : content;
};

export default ProjectCard;