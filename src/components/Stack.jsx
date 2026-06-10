import styles from './Stack.module.css';
import {
  SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiHtml5, SiCss, SiTailwindcss, SiGit, SiGithub,
  SiSpring, SiSupabase, SiFigma, SiPhp
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { TbBrandCpp } from 'react-icons/tb';
import { BsFiletypeSql } from 'react-icons/bs';
import { SiReact as SiReactNative } from 'react-icons/si';

const STACK = [
  { name: 'JavaScript',    icon: SiJavascript,   color: '#F0DB4F' },
  { name: 'TypeScript',    icon: SiTypescript,   color: '#3178C6' },
  { name: 'Java',          icon: FaJava,         color: '#E76F00' },
  { name: 'Spring Boot',   icon: SiSpring,       color: '#6DB33F' },
  { name: 'React',         icon: SiReact,        color: '#61DAFB' },
  { name: 'React Native',  icon: SiReactNative,  color: '#61DAFB' },
  { name: 'Next.js',       icon: SiNextdotjs,    color: 'var(--text)' },
  { name: 'Tailwind CSS',  icon: SiTailwindcss,  color: '#06B6D4' },
  { name: 'HTML',          icon: SiHtml5,        color: '#E34F26' },
  { name: 'CSS',           icon: SiCss,         color: '#1572B6' },
  { name: 'PHP',           icon: SiPhp,          color: '#777BB4' },
  { name: 'C++',           icon: TbBrandCpp,     color: '#00599C' },
  { name: 'SQL',           icon: BsFiletypeSql,  color: '#00758F' },
  { name: 'Supabase',      icon: SiSupabase,     color: '#3ECF8E' },
  { name: 'Git',           icon: SiGit,          color: '#F05032' },
  { name: 'GitHub',        icon: SiGithub,       color: 'var(--text)' },
  { name: 'Figma',         icon: SiFigma,        color: '#F24E1E' },
];

export default function Stack() {
  return (
    <section id="stack" className={styles.section}>
      <div className={styles.container}>
        <p className={`reveal ${styles.label}`}>Tech stack</p>
        <h2 className={`reveal reveal-d1 ${styles.title}`}>Tools I work with</h2>
        <div className={styles.grid}>
          {STACK.map(({ name, icon: Icon, color }, i) => (
            <div key={name} className={`reveal reveal-d${Math.min(i % 4 + 1, 4)} ${styles.item}`}>
              <Icon style={{ fontSize: '30px', color }} />
              <span className={styles.name}>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
