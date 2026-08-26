'use client';

import { motion } from 'framer-motion';
import { HiCode, HiDeviceMobile, HiLightningBolt, HiSparkles } from 'react-icons/hi';
import SectionHeading from './SectionHeading';
import { fadeUp, stagger, viewportOnce } from '@/lib/motion';

const highlights = [
  {
    icon: HiCode,
    title: 'Web & backend',
    description:
      'Next.js and TypeScript on the front, Rust (Axum) and Spring Boot behind it, SQL underneath.',
  },
  {
    icon: HiDeviceMobile,
    title: 'Mobile clients',
    description:
      'Flutter, Jetpack Compose and SwiftUI — including native platform channels when a feature needs them.',
  },
  {
    icon: HiSparkles,
    title: 'AI-integrated products',
    description:
      'Computer-vision measurement, a 600+ species compatibility engine and in-app AI chat support.',
  },
  {
    icon: HiLightningBolt,
    title: 'Offline-first & real-time',
    description:
      'Resumable background transfers, offline sync and WebSocket chat with delivery and read receipts.',
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
            Full-stack software engineer with 6+ years shipping production-grade
            products across fintech, ed-tech, ERP and commercial domains — from the
            database through the API to whatever the user actually touches.
          </p>
          <p className="text-[var(--terminal-text-dim)]">
            In practice that is Next.js and TypeScript, Rust (Axum) and Spring
            Boot services behind them, and Flutter, Jetpack Compose or SwiftUI at
            the client — dropping into native platform channels when a feature
            calls for it.
          </p>
          <p className="text-[var(--terminal-text-dim)]">
            I specialise in Clean Architecture, offline-first design and
            AI-integrated experiences. Currently at Shrig Solutions in Kathmandu,
            building AI-powered consumer apps.
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
