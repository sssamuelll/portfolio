import React from 'react';
import styles from './KeyDecision.module.css';

interface Props {
  decision: {
    decision: string;
    rationale: string;
    tradeoffs?: string;
  };
}

const KeyDecision: React.FC<Props> = ({ decision }) => {
  return (
    <div className={styles.card}>
      <h4 className={styles.decision}>{decision.decision}</h4>
      <div className={styles.content}>
        <div className={styles.rationale}>
          <span className={styles.label}>Rationale:</span>
          <p>{decision.rationale}</p>
        </div>
        {decision.tradeoffs && (
          <div className={styles.tradeoffs}>
            <span className={styles.label}>Trade-offs:</span>
            <p>{decision.tradeoffs}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default KeyDecision;