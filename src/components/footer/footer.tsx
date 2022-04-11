import styles from './footer.module.scss';

const FOOTER_TEXT = "© 2014-2021 Tiqets Amsterdam";

export const Footer = () => <footer className={styles.footer}>{FOOTER_TEXT}</footer>;
