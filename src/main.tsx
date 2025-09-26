import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/index.css';
import './i18n';
import i18n from './i18n';
import ThemeProvider from './styles/theme/ThemeProvider.tsx';

function LangSync() {
  useEffect(() => {
    const apply = () => (document.documentElement.lang = i18n.resolvedLanguage || 'es');
    apply();
    i18n.on('languageChanged', apply);
    return () => { i18n.off('languageChanged', apply); };
  }, []);
  return null;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <LangSync />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
