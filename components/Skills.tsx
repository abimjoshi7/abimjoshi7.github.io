'use client';

import { motion } from 'framer-motion';
import { HiTerminal } from 'react-icons/hi';
import {
  SiFlutter,
  SiDart,
  SiKotlin,
  SiFirebase,
  SiPostgresql,
  SiFigma,
  SiGit,
  SiSwagger,
  SiGithubactions,
  SiPostman,
  SiGnubash,
  SiSqlite,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import SectionHeading from './SectionHeading';
import { spokenLanguages } from '@/lib/site';
import { fadeUp, stagger, viewportOnce } from '@/lib/motion';

/** Groups mirror the résumé sidebar: Tech Stack, Database, Tools. */
const skillCategories = [
  {
    title: 'Tech stack',
    skills: [
      { name: 'Flutter', icon: SiFlutter, color: '#47C5FB' },
      { name: 'Dart', icon: SiDart, color: '#0175C2' },
      { name: 'Kotlin', icon: SiKotlin, color: '#A97BFF' },
      { name: 'Java', icon: FaJava, color: '#E76F00' },
      { name: 'Bash', icon: SiGnubash, color: '#4EAA25' },
      { name: 'SQL', icon: SiSqlite, color: '#00d9ff' },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'Drift', icon: HiTerminal, color: '#00d9ff' },
      { name: 'Isar', icon: HiTerminal, color: '#00d9ff' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'Firestore', icon: SiFirebase, color: '#FFCA28' },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { name: 'Swagger', icon: SiSwagger, color: '#85EA2D' },
      { name: 'Shorebird', icon: HiTerminal, color: '#00ff41' },
      { name: 'GitHub Actions', icon: SiGithubactions, color: '#2088FF' },
      { name: 'Retrofit', icon: HiTerminal, color: '#00ff41' },
      { name: 'Git', icon: SiGit, color: '#F05032' },
    ],
  },
  {
    title: 'Architecture',
    skills: [
      { name: 'Bloc pattern', icon: SiFlutter, color: '#47C5FB' },
      { name: 'SOLID principles', icon: HiTerminal, color: '#00ff41' },
    ],
  },
];

const Skills = () => (
  <section
    id="skills"
    aria-labelledby="skills-heading"
    className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
  >
    <motion.div
      variants={stagger()}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="max-w-5xl mx-auto"
    >
      <SectionHeading
        id="skills-heading"
        command="ls skills/"
        title="Skills"
        subtitle="What I reach for day to day, grouped by where it sits in the stack."
      />

      <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            variants={fadeUp}
            className="terminal-window p-5"
          >
            <h3 className="font-mono text-sm text-[#00ff41] mb-4">
              {category.title}
            </h3>
            <motion.ul variants={stagger(0.035)} className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <motion.li
                  key={skill.name}
                  variants={{
                    hidden: { opacity: 0, scale: 0.94 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  className="flex items-center gap-2 px-2.5 py-1.5 rounded border border-[#30363d] bg-[#0d1117] font-mono text-xs text-[var(--terminal-text)] transition-colors hover:border-[#00ff41]/50"
                >
                  <skill.icon size={14} style={{ color: skill.color }} />
                  {skill.name}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}

        <motion.div variants={fadeUp} className="terminal-window p-5">
          <h3 className="font-mono text-sm text-[#00ff41] mb-4">Languages</h3>
          <p className="font-mono text-xs text-[var(--terminal-text)]">
            {spokenLanguages.join('  ·  ')}
          </p>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default Skills;
