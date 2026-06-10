import styles from './Projects.module.css';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const PROJECTS = [
  {
    name: 'Enies Hobby TCG',
    desc: 'A personal project built for One Piece TCG fans — browse the full card catalogue, dive into detailed card info, and track your personal collection all in one place. Designed with collectors in mind, making it easy to manage what you own and discover cards you want.',
    tags: ['React', 'Next.js', 'Supabase', 'Tailwind CSS', 'TypeScript'],
    github: 'https://github.com/mirionzu-naibuzu/enies-hobby-tcg',
    live: 'https://enieshobby-tcg.vercel.app/',
  },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <p className={`reveal ${styles.label}`}>Work</p>
        <h2 className={`reveal reveal-d1 ${styles.title}`}>Selected projects</h2>
        <div className={styles.grid}>
          {PROJECTS.map((p, i) => (
            <div key={p.name} className={`reveal reveal-d${i + 2} ${styles.card}`}>
              <div className={styles.cardTop}>
                <div>
                  <span className={styles.projName}>{p.name}</span>
                  <span className={styles.personal}>Personal project</span>
                </div>
                <div className={styles.links}>
                  <a href={p.github} target="_blank" rel="noreferrer" className={styles.link} aria-label="GitHub">
                    <FiGithub size={14} /> Code
                  </a>
                  <a href={p.live} target="_blank" rel="noreferrer" className={styles.link} aria-label="Live demo">
                    <FiExternalLink size={14} /> Live
                  </a>
                </div>
              </div>
              <p className={styles.desc}>{p.desc}</p>
              <div className={styles.tags}>
                {p.tags.map((t) => <span key={t} className={styles.tag}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
