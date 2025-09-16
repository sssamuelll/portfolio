import React from 'react';
import css from './Waveform.module.css';

const Waveform: React.FC = () => {
  return (
    <div className={css.waveform}>
      {[40, 60, 45, 80, 70, 50, 65, 40, 75, 55].map((h, i) => (
        <div
          key={i}
          className={css.bar}
          style={{ height: `${h}px`, animationDelay: `${i * 0.1}s` }}
        />
      ))}
    </div>
  );
};

export default Waveform;

