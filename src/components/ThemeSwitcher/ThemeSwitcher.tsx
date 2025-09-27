import React, { useContext } from 'react';
import { ThemeContext } from '../../styles/theme/ThemeContext';
import styles from './ThemeSwitcher.module.css';

const ThemeSwitcher: React.FC = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) return null;

  const { mode, toggleTheme } = ctx;

  return (
    <button
      className={styles.themeSwitcher}
      onClick={toggleTheme}
      aria-label={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
    >
      {mode === 'light' ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeSwitcher;
