import React from 'react';
import css from './SkillPillar.module.css';

interface SkillPillarProps {
  icon: string;
  title: string;
  items: string[];
}

const SkillPillar: React.FC<SkillPillarProps> = ({ icon, title, items }) => {
  return (
    <div className={css.pillar}>
      <div className={css.icon}>{icon}</div>
      <h3 className={css.title}>{title}</h3>
      <ul className={css.items}>
        {items.map((item, i) => (
          <li key={i} className={css.item}>→ {item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillPillar;
