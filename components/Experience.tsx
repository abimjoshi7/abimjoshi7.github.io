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
    title: 'Founder',
    company: 'Attatva Systems Pvt. Ltd.',
    location: 'Kathmandu',
    period: 'June 2026 — Present',
    hash: 'e4a91c2',
    branch: 'main',
    description:
      'Owning product and delivery end to end — ship on the date, keep installs sticky, and stay fast as the catalogue grows.',
    achievements: [
      'ERPesque — shop and warehouse teams ring sales and keep stock and books aligned, even on a weak network',
      'Vaultesque — passwords stay encrypted on-device for people who do not want credentials in someone else’s cloud',
      'Callbreak Quest — offline Callbreak against bots, plus a Himalayan rogue-like climb; no account, no ads',
      'Kaji — property board game with pass-and-play or local Wi‑Fi multiplayer via join code / QR; no cloud game server',
    ],
  },
  {
    type: 'work',
    title: 'Software Engineer',
    company: 'Shrig Solutions',
    location: 'Bishalnagar, Kathmandu',
    period: 'Aug 2024 — June 2026',
    hash: 'c1e94af',
    branch: 'ai-tourney',
    description:
      'AI-powered fish detection for catch-and-release tourneys — media in, verified measurements out, leaderboards that hold up under dispute.',
    achievements: [
      'Flytechy / Fishtechy — anglers measure catches from media, post verified logs and compete on leaderboards without tape-measure disputes (Android + iOS)',
      'Aquabuildr — hobbyists check 600+ species for tank compatibility, track water health and get AI care advice before fish die from a bad mix',
      'Catch videos and photos keep uploading in the background with resume and retries, so a weak trail signal doesn’t lose the trip',
      'In-app FFmpeg editing lets people trim and compress catch clips on-device with live progress instead of bouncing to another app',
      'Chat with delivery/read receipts, media and offline queues so fishing communities stay in sync when the network flaps',
    ],
  },
  {
    type: 'work',
    title: 'Software Engineer',
    company: 'Raindrop Inc.',
    location: 'Pepsicola, Kathmandu',
    period: 'Oct 2023 — Aug 2024',
    hash: 'a7f3c9e',
    branch: 'fintech',
    description:
      'SME ERP and field sales that stay usable as branches and reps multiply — offline-first, audited, and on the release train.',
    achievements: [
      'Bizak: ERP Simplified — sales, inventory, finance and field sales so SME teams stop juggling separate tools',
      'SFM — field sales management for reps away from the desk: sales, stock and routes without the office spreadsheet',
      'Live KPI dashboards that let owners drill into numbers during the day, not after someone exports a weekly CSV',
      'Offline-first sync so field staff can open ledgers, SFM and reports on weak connections and catch up when signal returns',
      'Compliance monitoring, audit trails and RBAC so sensitive financial data stays limited to the right roles and incidents drop',
    ],
  },
  {
    type: 'work',
    title: 'Software Engineer',
    company: 'Podamibe Nepal',
    location: 'Tripureshwor, Kathmandu',
    period: 'May 2022 — Oct 2023',
    hash: '4d8b2f1',
    branch: 'edtech',
    description:
      'Learning products tuned for daily opens — retention work, crash hygiene and store ratings under live student traffic.',
    achievements: [
      'Mero Lagani — investors follow NEPSE live prices, floor sheet, portfolios, alerts and IPO results without waiting on a desktop terminal',
      'Targeted push via Web-Engage lifted retention ~15% by surfacing the market moments people care about',
      'Mero School — online learning for students: coursework, practice and progress on the phone instead of photocopied notes alone',
      'Raised combined store ratings by 1.3★ through crash fixes, feedback-driven polish and A/B-tested UX',
    ],
  },
  {
    type: 'work',
    title: 'Software Engineer',
    company: 'Incube Technologies Pvt Ltd',
    location: 'Patan, Kathmandu',
    period: 'Jun 2020 — Apr 2022',
    hash: '9e1c7a3',
    branch: 'healthtech',
    description:
      'Healthtech and adjacent care flows where a crash mid-visit is unacceptable — architecture discipline and production stability first.',
    achievements: [
      'Multi-vendor commerce with search, cart, eSewa/Khalti checkout and live order tracking so shoppers finish a purchase on their phone',
      'Mero Health Care — find a doctor, book or teleconsult, get a digital prescription and pharmacy delivery without living in a waiting room',
      'Stabilised production with Clean Architecture, Sentry and Crashlytics so fewer sessions ended in a crash mid-task',
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
        command="git log --oneline --graph --decorate --all"
        title="Experience"
        subtitle="Roles where the calendar was real, the users came back, and the system had to hold."
      />

      <ol className="space-y-4">
        {experiences.map((exp) => (
          <motion.li
            key={exp.hash}
            variants={fadeUp}
            className="terminal-window p-5 sm:p-6"
          >
            {/* Commit-style header: one line, no invented diff stats. */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 pb-4 mb-4 border-b border-terminal-border font-mono text-xs">
              {exp.type === 'work' ? (
                <HiBriefcase className="text-terminal-green" size={16} />
              ) : (
                <HiAcademicCap className="text-terminal-purple" size={16} />
              )}
              <span className="text-[#ffff00]">{exp.hash}</span>
              <span
                className={exp.type === 'work' ? 'text-terminal-green' : 'text-terminal-purple'}
              >
                ({exp.branch})
              </span>
              <span className="text-terminal-text-dim sm:ml-auto">
                {exp.period}
              </span>
            </div>

            <h3 className="font-bold text-base sm:text-lg text-terminal-text">
              {exp.title}
            </h3>
            <p className="font-mono text-sm text-terminal-purple mt-1">
              {exp.company} · <span className="text-terminal-text-dim">{exp.location}</span>
            </p>

            {exp.description && (
              <p className="text-sm leading-relaxed text-terminal-text-dim mt-3">
                {exp.description}
              </p>
            )}

            {exp.achievements && (
              <ul className="mt-4 space-y-2">
                {exp.achievements.map((achievement) => (
                  <li
                    key={achievement}
                    className="flex gap-2.5 text-xs sm:text-sm text-terminal-text"
                  >
                    <span className="text-terminal-green font-mono shrink-0">+</span>
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
