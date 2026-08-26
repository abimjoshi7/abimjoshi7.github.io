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
    title: 'Flutter Developer',
    company: 'Shrig Solutions',
    location: 'Bishalnagar, Kathmandu',
    period: 'Aug 2024 — Present',
    hash: 'c1e94af',
    branch: 'main',
    description:
      'AI-integrated consumer apps across Android, iOS and Flutter, with heavy native platform work.',
    achievements: [
      'Engineered Flytechy (Android) and Fishtechy (iOS) — AI-powered fishing apps using computer vision to auto-measure fish dimensions from photos, with competition leaderboards, verified catch logging and community sharing',
      'Developed Aquabuildr (iOS and Android), an AI-driven aquarium management app with a 600+ species compatibility engine, real-time water parameter tracking, maintenance scheduling and integrated AI chat support',
      'Engineered a background media upload/download service (WorkManager on Android, BGTaskScheduler on iOS) with resumable transfers, retry logic and progress notifications',
      'Integrated FFmpeg-powered in-app video editing via native platform channels — trimming, compression, format conversion and thumbnail extraction with real-time progress feedback',
      'Implemented real-time chat over WebSocket with delivery/read receipts, media sharing, offline message queuing and push notification alerts',
    ],
  },
  {
    type: 'work',
    title: 'Flutter Developer',
    company: 'Raindrop Inc.',
    location: 'Pepsicola, Kathmandu',
    period: 'Oct 2023 — Aug 2024',
    hash: 'a7f3c9e',
    branch: 'erp',
    description:
      'Cross-platform ERP for SME clients with complex operational workflows.',
    achievements: [
      'Led development of a cross-platform ERP application covering accounts payable/receivable, inventory management, an HR module and multi-branch reporting',
      'Implemented real-time financial analytics dashboards with live KPI tracking and drill-down reporting',
      'Engineered offline-first data synchronisation ensuring uninterrupted access to ledgers and reports in low-connectivity field environments',
      'Integrated compliance monitoring and an audit trail module, reducing compliance incidents and adding role-based access control (RBAC) for sensitive financial data',
    ],
  },
  {
    type: 'work',
    title: 'Mobile Developer',
    company: 'Podamibe Nepal',
    location: 'Tripureshwor, Kathmandu',
    period: 'May 2022 — Oct 2023',
    hash: '4d8b2f1',
    branch: 'fintech',
    description:
      'Fintech and ed-tech products for the Nepali market.',
    achievements: [
      'Enhanced Mero Lagani — a NEPSE stock market app with live share prices, real-time floor sheet, portfolio tracker, watchlists, price alerts, IPO results and market analytics',
      'Integrated Web-Engage to improve user retention by 15% through targeted push notifications',
      'Developed Mero School — a school management platform covering student records, attendance tracking, assignment submission, exam results, fee management and teacher–parent communication',
      'Improved combined app store ratings by 1.3 stars through feedback-driven iteration, Crashlytics-driven crash resolution and A/B-tested UX enhancements',
    ],
  },
  {
    type: 'work',
    title: 'Software Developer',
    company: 'Incube Technologies Pvt Ltd',
    location: 'Patan, Kathmandu',
    period: 'Jun 2020 — Apr 2022',
    hash: '9e1c7a3',
    branch: 'commerce',
    description:
      'E-commerce and healthcare applications built on Clean Architecture.',
    achievements: [
      'Developed a multi-vendor e-commerce app with product catalogue, advanced search and filtering, cart and wishlist management, integrated payment gateways (eSewa / Khalti) and real-time order tracking',
      'Built Mero Health Care — a healthcare platform with doctor discovery, appointment booking, teleconsultation, digital prescriptions, medical history records and pharmacy-to-door delivery',
      'Implemented Clean Architecture and SOLID principles across both apps; resolved production crashes via Sentry and Crashlytics',
    ],
  },
  {
    type: 'education',
    title: 'B.E. — Information Technology',
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
