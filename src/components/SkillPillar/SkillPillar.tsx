import React from 'react';
import { styles } from '../../styles/styles';

interface SkillPillarProps {
  icon: string;
  title: string;
  items: string[];
}

// Skill Pillar Component
const SkillPillar: React.FC<SkillPillarProps> = ({ icon, title, items }) => {
  return (
    <div style={styles.pillar}>
      <div style={styles.pillarIcon}>{icon}</div>
      <h3 style={styles.pillarTitle}>{title}</h3>
      <ul style={styles.pillarItems}>
        {items.map((item, i) => (
          <li key={i} style={styles.pillarItem}>→ {item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillPillar;
