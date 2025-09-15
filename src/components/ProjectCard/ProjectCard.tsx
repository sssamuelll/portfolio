import React from 'react';
import { styles } from '../../styles/styles';
import type { Project } from '../../data/projects';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const categoryColors: Record<Project['category'], string> = {
    tech: '#034159',
    music: '#02735E',
    experiment: '#047857'
  };

  const backgroundStyle = project.image
    ? {
        ...styles.projectImage,
        backgroundImage: `url(${project.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : {
        ...styles.projectImage,
        background: `linear-gradient(135deg, ${categoryColors[project.category]}, #e5e7eb)`
      };

  const cardContent = (
    <div style={styles.projectCard}>
      <div style={backgroundStyle}>
        <span style={styles.projectType}>
          {project.category === 'tech'
            ? 'Tech Product'
            : project.category === 'music'
            ? 'Music/Tech'
            : 'Experiment'}
        </span>
      </div>
      <div style={styles.projectInfo}>
        <h3 style={styles.projectTitle}>{project.title}</h3>
        <p style={styles.projectDesc}>{project.description}</p>
        <div style={styles.projectTags}>
          {project.tags.map((tag, i) => (
            <span key={i} style={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return project.link ? (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      {cardContent}
    </a>
  ) : (
    cardContent
  );
};

export default ProjectCard;
