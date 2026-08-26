'use client';

import { motion } from 'framer-motion';
import { HiBriefcase, HiAcademicCap } from 'react-icons/hi';
import SectionHeading from './SectionHeading';
import { fadeUp, stagger, viewportOnce } from '@/lib/motion';

interface Entry {
  type: 'work' | 'education';
  title: string;
  company: string;
  location: string;
  period: string;
  hash: string;
  branch: string;
  description?: string;
  achievements?: string[];
}

const experiences: Entry[] = [
  {
    type: 'work',
    title: 'Senior Flutter Developer',
    company: 'Raindrop Inc.',
    location: 'Pepsicola, Kathmandu',
    period: 'Oct 2023 — Present',
    hash: 'a7f3c9e',
    branch: 'main',
    description:
      'Flutter development for financial applications — real-time analytics, offline sync and compliance monitoring.',
    achievements: [
      'Built automated workflows that cut account-management processing time',
      'Shipped real-time analytics dashboards for financial insights',
      'Engineered offline data synchronisation for low-connectivity environments',
      'Integrated compliance monitoring to meet regulatory requirements',
    ],
  },
  {
    type: 'work',
    title: 'Flutter Developer',
    company: 'Podamibe Nepal',
    location: 'Tripureshwor, Kathmandu',
    period: 'May 2022 — Oct 2023',
    hash: '4d8b2f1',
    branch: 'develop',
    description:
      'Production Flutter and native Android apps, focused on engagement and performance.',
    achievements: [
      'Improved retention by 15% using WebEngage engagement analysis',
      'Raised engagement 20% via push notifications and location-based services',
      'Lifted store ratings by 1.5 stars through continuous feedback integration',
    ],
  },
  {
    type: 'work',
    title: 'Software Developer',
    company: 'Incube Technologies Pvt Ltd',
    location: 'Patan, Kathmandu',
    period: 'Jun 2020 — Apr 2022',
    hash: '9e1c7a3',
    branch: 'feature',
    description:
      'Built mobile applications with modern architecture patterns.',
    achievements: [
      'Adopted the Bloc pattern to separate business logic from UI',
      'Applied SOLID principles to improve maintainability',
      'Diagnosed and fixed production issues with Crashlytics and Sentry',
      'Tracked mobile technology trends and applied them to live projects',
    ],
  },
  {
    type: 'education',
    title: 'Bachelor of Engineering in Information Technology',
    company: 'Maharashtra Institute of Technology',
    location: 'Pune, India',
    period: '2013 — 2019',
    hash: 'f2b5d8c',
    branch: 'education',
  },
];

const Experience = () => (
  <section
    id="experience"
    aria-labelledby="experience-heading"
    className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
  >
    <motion.div
      variants={stagger()}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="max-w-4xl mx-auto"
    >
      <SectionHeading
        id="experience-heading"
        command="git log --oneline"
        title="Experience"
      />

      <ol className="space-y-4">
        {experiences.map((exp) => (
          <motion.li
            key={exp.hash}
            variants={fadeUp}
            className="terminal-window p-5 sm:p-6"
          >
            {/* Commit-style header: one line, no invented diff stats. */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 pb-4 mb-4 border-b border-[#30363d] font-mono text-xs">
              {exp.type === 'work' ? (
                <HiBriefcase className="text-[#00ff41]" size={16} />
              ) : (
                <HiAcademicCap className="text-[#b877db]" size={16} />
              )}
              <span className="text-[#ffff00]">{exp.hash}</span>
              <span
                className={exp.type === 'work' ? 'text-[#00ff41]' : 'text-[#b877db]'}
              >
                ({exp.branch})
              </span>
              <span className="text-[var(--terminal-text-dim)] sm:ml-auto">
                {exp.period}
              </span>
            </div>

            <h3 className="font-bold text-base sm:text-lg text-[var(--terminal-text)]">
              {exp.title}
            </h3>
            <p className="font-mono text-sm text-[#b877db] mt-1">
              {exp.company} · <span className="text-[var(--terminal-text-dim)]">{exp.location}</span>
            </p>

            {exp.description && (
              <p className="text-sm leading-relaxed text-[var(--terminal-text-dim)] mt-3">
                {exp.description}
              </p>
            )}

            {exp.achievements && (
              <ul className="mt-4 space-y-2">
                {exp.achievements.map((achievement) => (
                  <li
                    key={achievement}
                    className="flex gap-2.5 text-xs sm:text-sm text-[var(--terminal-text)]"
                  >
                    <span className="text-[#00ff41] font-mono shrink-0">+</span>
                    <span className="leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.li>
        ))}
      </ol>
    </motion.div>
  </section>
);

export default Experience;
