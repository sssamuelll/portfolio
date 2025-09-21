import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importa los JSON de traducciones
import es from './locales/es.json';
import en from './locales/en.json';
import de from './locales/de.json';
import ja from './locales/ja.json';

i18n
  .use(LanguageDetector)           // detecta ?lng=, localStorage, navigator
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: es },
      en: { translation: en },
      de: { translation: de },
      ja: { translation: ja },
    },
    fallbackLng: 'en',
    supportedLngs: ['es', 'en', 'de', 'ja'],
    detection: {
      order: ['querystring', 'localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    interpolation: { escapeValue: false },
    returnEmptyString: false,
  });

export default i18n;
