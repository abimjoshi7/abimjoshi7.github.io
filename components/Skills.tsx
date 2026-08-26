'use client';

import { motion } from 'framer-motion';
import {
  SiFlutter,
  SiDart,
  SiKotlin,
  SiFigma,
  SiSwagger,
  SiGithubactions,
  SiPostman,
  SiGnubash,
  SiSqlite,
  SiNextdotjs,
  SiTypescript,
  SiRust,
  SiSpringboot,
  SiSwift,
  SiJetpackcompose,
  SiFastlane,
  SiFfmpeg,
  SiXcode,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import SectionHeading from './SectionHeading';
import { spokenLanguages } from '@/lib/site';
import { fadeUp, stagger, viewportOnce } from '@/lib/motion';

/**
 * Grouped as the résumé groups them, but ordered so the full-stack web and
 * backend work reads before the mobile stack.
 */
const skillCategories = [
  {
    title: 'Full-stack & backend',
    skills: [
      { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Rust', icon: SiRust, color: '#DEA584' },
      { name: 'Axum', icon: SiRust, color: '#DEA584' },
      { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
      { name: 'SQL', icon: SiSqlite, color: '#00d9ff' },
      { name: 'Bash', icon: SiGnubash, color: '#4EAA25' },
    ],
  },
  {
    title: 'Mobile',
    skills: [
      { name: 'Flutter', icon: SiFlutter, color: '#47C5FB' },
      { name: 'Dart', icon: SiDart, color: '#0175C2' },
      { name: 'Jetpack Compose', icon: SiJetpackcompose, color: '#4285F4' },
      { name: 'Kotlin', icon: SiKotlin, color: '#A97BFF' },
      { name: 'SwiftUI', icon: SiSwift, color: '#F05138' },
      { name: 'Swift', icon: SiSwift, color: '#F05138' },
      { name: 'Java', icon: FaJava, color: '#E76F00' },
    ],
  },
  {
    title: 'DevOps & tools',
    skills: [
      { name: 'GitHub Actions', icon: SiGithubactions, color: '#2088FF' },
      { name: 'Fastlane', icon: SiFastlane, color: '#00F200' },
      { name: 'Shorebird', icon: SiFlutter, color: '#47C5FB' },
      { name: 'FFmpeg', icon: SiFfmpeg, color: '#007808' },
      { name: 'Xcode', icon: SiXcode, color: '#1575F9' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { name: 'Swagger', icon: SiSwagger, color: '#85EA2D' },
      { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
    ],
  },
  {
    title: 'Methodology',
    skills: [
      { name: 'Clean Architecture', icon: SiFlutter, color: '#47C5FB' },
      { name: 'SOLID', icon: SiGnubash, color: '#00ff41' },
      { name: 'TDD', icon: SiGnubash, color: '#00ff41' },
      { name: 'Agile', icon: SiGnubash, color: '#00ff41' },
      { name: 'CI/CD', icon: SiGithubactions, color: '#2088FF' },
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
