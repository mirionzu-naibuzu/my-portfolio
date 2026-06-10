import { useTypewriter } from '../hooks/useTypewriter';
import styles from './Hero.module.css';

const PHRASES = ["Hello, world.", "I'm Ronwell Elen.", "I build for the web."];

export default function Hero() {
  const typed = useTypewriter(PHRASES);

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.badge}>
          <span className={styles.dot} />
          Fresh graduate · Open to opportunities
        </div>
        <h1 className={styles.h1}>
          <span className={styles.typed}>{typed}<span className={styles.cursor} /></span>
          <br />
          <span className={styles.sub}>Full-Stack Developer.</span>
        </h1>
        <p className={styles.bio}>
          Fresh Computer Science graduate with a passion for building clean, 
          user-focused web and mobile applications. I enjoy turning ideas into 
          real products — from designing intuitive interfaces to wiring up solid 
          back-end systems. Currently looking for my first role where I can 
          contribute, grow, and keep shipping.
        </p>
        <div className={styles.cta}>
          <a href="#projects" className={styles.btnFill}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><polyline points="8 21 12 17 16 21"/></svg>
            View projects
          </a>
          <a href="#contact" className={styles.btnOutline}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
