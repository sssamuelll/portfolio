import React from 'react';
import { styles } from '../../styles/styles';

const Waveform: React.FC = () => {
  return (
    <div style={styles.waveform}>
      {[40, 60, 45, 80, 70, 50, 65, 40, 75, 55].map((height, i) => (
        <div 
          key={i}
          style={{
            ...styles.waveBar,
            height: `${height}px`,
            animationDelay: `${i * 0.1}s`
          }}
        />
      ))}
    </div>
  );
};

export default Waveform;
