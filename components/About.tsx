'use client';

import { motion } from 'framer-motion';
import { HiCode, HiDeviceMobile, HiLightningBolt, HiUserGroup } from 'react-icons/hi';
import SectionHeading from './SectionHeading';
import { fadeUp, stagger, viewportOnce } from '@/lib/motion';

const highlights = [
  {
    icon: HiDeviceMobile,
    title: 'Hybrid app development',
    description:
      'Production Flutter apps shipped to Google Play and the App Store from one codebase.',
  },
  {
    icon: HiCode,
    title: 'Clean, maintainable code',
    description:
      'Bloc to separate business logic from UI, and SOLID principles to keep it easy to scale.',
  },
  {
    icon: HiLightningBolt,
    title: 'Offline-first data',
    description:
      'Drift, Isar, PostgreSQL and Firestore, with sync built for low-connectivity environments.',
  },
  {
    icon: HiUserGroup,
    title: 'User satisfaction',
    description:
      'Engagement analytics and store feedback drive what gets built next — and it shows in the ratings.',
  },
];

const About = () => (
  <section
    id="about"
    aria-labelledby="about-heading"
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
        id="about-heading"
        command="cat profile.md"
        title="About"
      />

      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-12 items-start">
        <motion.div
          variants={fadeUp}
          className="space-y-4 text-sm sm:text-base leading-relaxed text-[var(--terminal-text)]"
        >
          <p>
            Seasoned software engineer with more than five years in hybrid app
            development. I&apos;ve crafted several production-ready apps, focusing on
            user satisfaction and seamless performance.
          </p>
          <p className="text-[var(--terminal-text-dim)]">
            I&apos;m all about delivering on time, meeting client expectations and
            writing clean code — school portals, trading apps and healthcare records,
            where correctness and offline resilience matter more than novelty.
          </p>
          <p className="text-[var(--terminal-text-dim)]">
            Currently Senior Flutter Developer at Raindrop Inc. in Kathmandu, working
            on financial applications with real-time analytics, offline
            synchronisation and compliance monitoring.
          </p>
        </motion.div>

        <motion.ul variants={stagger(0.06)} className="space-y-3">
          {highlights.map(({ icon: Icon, title, description }) => (
            <motion.li
              key={title}
              variants={fadeUp}
              className="terminal-window panel-interactive p-4 flex gap-4"
            >
              <Icon className="text-[#00ff41] shrink-0 mt-0.5" size={20} />
              <div>
                <h3 className="font-mono text-sm text-[var(--terminal-text)] mb-1">
                  {title}
                </h3>
                <p className="text-xs text-[var(--terminal-text-dim)] leading-relaxed">
                  {description}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  </section>
);

export default About;
