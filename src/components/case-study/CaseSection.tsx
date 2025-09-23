import React from 'react';
import styles from './CaseSection.module.css';

interface Props {
  id: string;
  title: string;
  children: React.ReactNode;
}

const CaseSection: React.FC<Props> = ({ id, title, children }) => {
  return (
    <section id={id} className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>{children}</div>
    </section>
  );
};

export default CaseSection;