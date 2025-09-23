import React from 'react';
import styles from './MetricsRow.module.css';

interface Props {
  metrics: { label: string; value: string }[];
}

const MetricsRow: React.FC<Props> = ({ metrics }) => {
  return (
    <div className={styles.metrics}>
      {metrics.map((metric, i) => (
        <div key={i} className={styles.metric}>
          <div className={styles.value}>{metric.value}</div>
          <div className={styles.label}>{metric.label}</div>
        </div>
      ))}
    </div>
  );
};

export default MetricsRow;