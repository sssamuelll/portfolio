import React, { useState } from 'react';
import styles from './CodeBlock.module.css';

interface Props {
  label: string;
  language: string;
  code: string;
}

const CodeBlock: React.FC<Props> = ({ label, language, code }) => {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <div className={styles.block}>
      <div className={styles.header}>
        <span className={styles.label}>{label}</span>
        <div className={styles.actions}>
          <span className={styles.language}>{language}</span>
          <button onClick={handleCopy} className={styles.copyBtn}>
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
      <pre className={styles.code}>
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;