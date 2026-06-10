import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>© {new Date().getFullYear()} Ronwell Elen. All rights reserved.</p>
        <span className={styles.mono}>Designed &amp; built by hand.</span>
      </div>
    </footer>
  );
}
