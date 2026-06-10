import styles from './Contact.module.css';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';

const LINKS = [
  { label: 'Email',    value: 'elen.ronwell@gmail.com',                     href: 'mailto:elen.ronwell@gmail.com',                        icon: FiMail },
  { label: 'GitHub',   value: 'mirionzu-naibuzu',                href: 'https://github.com/mirionzu-naibuzu',                  icon: FiGithub },
  { label: 'LinkedIn', value: 'linkedin.com/in/ronwell',   href: 'https://www.linkedin.com/in/ronwell-elen-547a76377/',  icon: FiLinkedin },
];

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <p className={`reveal ${styles.label}`}>Contact</p>
        <h2 className={`reveal reveal-d1 ${styles.title}`}>Let's build something</h2>
        <p className={`reveal reveal-d2 ${styles.subtitle}`}>
          I'm actively looking for my first full-time role. Whether you have an opening, 
          a freelance project, or just want to connect — my inbox is open.
        </p>
        <div className={styles.grid}>
          {LINKS.map(({ label, value, href, icon: Icon }, i) => (
            <a key={label} href={href} target={href.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer"
               className={`reveal reveal-d${i + 2} ${styles.card}`}>
              <Icon size={20} className={styles.icon} />
              <div>
                <div className={styles.cardLabel}>{label}</div>
                <div className={styles.cardVal}>{value}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
