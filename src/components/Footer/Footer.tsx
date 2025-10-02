import styles from "./Footer.module.css"
import { useTranslation, Trans } from 'react-i18next';

const Footer: React.FC = () => {
    const { t } = useTranslation();
    return (
        <footer id="contact" className={`${styles.contact}`}>
            <div className={styles.contactInner}>
                <h2 className={styles.contactTitle}>{t('contact.title')}</h2>
                <p className={styles.contactSubtitle}>
                  <Trans i18nKey="contact.subtitle" />
                </p>
                <div className={styles.contactButtons}>
                  <a href="mailto:contact@sdar.dev" className={styles.contactBtn}>{t('contact.email')}</a>
                  <a href="https://www.linkedin.com/in/samuelballesteros/" className={styles.contactBtn}>{t('contact.linkedin')}</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;