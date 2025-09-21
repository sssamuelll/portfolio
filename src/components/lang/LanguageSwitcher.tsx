import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const languages = [
    { code: 'es', label: 'ES', aria: 'Cambiar a español' },
    { code: 'en', label: 'EN', aria: 'Switch to English' },
    { code: 'de', label: 'DE', aria: 'Auf Deutsch wechseln' },
  ];

  const resolved = (i18n.resolvedLanguage || i18n.language || 'en').toLowerCase();
  const active =
    languages.find(({ code }) => resolved === code || resolved.startsWith(`${code}-`))?.code || 'en';

  return (
    <div
      role="group"
      aria-label="Language selector"
      style={{ display: 'flex', gap: '.25rem' }}
    >
      {languages.map(({ code, label, aria }) => {
        const isActive = active === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => i18n.changeLanguage(code)}
            aria-label={isActive ? undefined : aria}
            aria-pressed={isActive}
            disabled={isActive}
            style={{
              background: isActive ? '#111827' : 'transparent',
              color: isActive ? '#fff' : '#111827',
              border: '1px solid #e5e7eb',
              padding: '.35rem .6rem',
              borderRadius: 6,
              cursor: isActive ? 'default' : 'pointer',
              opacity: isActive ? 0.8 : 1,
              transition: 'background 0.2s ease, color 0.2s ease',
            }}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
