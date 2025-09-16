import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const isEs = (i18n.resolvedLanguage || i18n.language || 'es').startsWith('es');

  const toggle = () => i18n.changeLanguage(isEs ? 'en' : 'es');

  return (
    <button
      onClick={toggle}
      aria-label={isEs ? 'Cambiar a inglés' : 'Switch to Spanish'}
      style={{ background:'transparent', border:'1px solid #e5e7eb', padding:'.35rem .6rem', borderRadius:6, cursor:'pointer' }}
    >
      {isEs ? 'ES' : 'EN'}
    </button>
  );
};

export default LanguageSwitcher;
