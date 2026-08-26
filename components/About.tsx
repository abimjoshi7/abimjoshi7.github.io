'use client';

import { motion } from 'framer-motion';
import { HiCode, HiDeviceMobile, HiLightningBolt, HiUserGroup } from 'react-icons/hi';
import SectionHeading from './SectionHeading';
import { fadeUp, stagger, viewportOnce } from '@/lib/motion';

const highlights = [
  {
    icon: HiDeviceMobile,
    title: 'Cross-platform mobile',
    description:
      'Flutter and Kotlin Multiplatform apps shipped to both stores from a single codebase.',
  },
  {
    icon: HiCode,
    title: 'Clean architecture',
    description:
      'Bloc for state, SOLID boundaries between layers, and a test surface that survives refactors.',
  },
  {
    icon: HiLightningBolt,
    title: 'Offline-first & performance',
    description:
      'Local persistence with Drift, Isar and Room, plus background sync built for weak connectivity.',
  },
  {
    icon: HiUserGroup,
    title: 'Product sense',
    description:
      'Analytics and store feedback drive what gets built next, not just what was specced.',
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
            I build mobile applications that people use every day — school portals,
            trading apps, healthcare records — where correctness and offline
            resilience matter more than novelty.
          </p>
          <p className="text-[var(--terminal-text-dim)]">
            I started in native Android with Java and Kotlin, then moved into Flutter
            and Kotlin Multiplatform as cross-platform tooling matured. Most of my work
            now sits in that overlap: Dart and Flutter on the surface, Kotlin and
            platform APIs underneath when a feature needs to go native.
          </p>
          <p className="text-[var(--terminal-text-dim)]">
            Currently at Raindrop Inc. in Kathmandu, working on financial applications
            with real-time analytics, offline synchronisation and compliance
            requirements.
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
