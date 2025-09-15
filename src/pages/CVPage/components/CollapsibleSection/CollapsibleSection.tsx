import React, { useState } from 'react';
import styles from './CollapsibleSection.module.css';
import { DownArrowSVG } from '../../../../assets/svgs/DownArrow';
import { RightArrowSVG } from '../../../../assets/svgs/RightArrow';

interface Props {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  defaultSubtitle?: boolean;
}

const CollapsibleSection: React.FC<Props> = ({ title, children, defaultOpen = true, defaultSubtitle = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const isSubtitle = defaultSubtitle;

  return (
    <div className={styles.section}>
        {isSubtitle ? 
            <div className={styles.header}>
                <h2>{title}</h2>
            </div>
        :
            <div className={styles.header} onClick={() => setIsOpen(!isOpen)}>
                <h2>{title}</h2>
                <span className={styles.arrow}>{isOpen ? <DownArrowSVG sizeHeight='14' sizeWidth='13'/> : <RightArrowSVG sizeHeight='14' sizeWidth='13' />}</span>
            </div> 
        }
      {isOpen && <div className={styles.content}>{children}</div>}
    </div>
  );
};

export default CollapsibleSection;
