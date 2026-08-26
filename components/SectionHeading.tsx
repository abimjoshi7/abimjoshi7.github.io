'use client';

import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/motion';

interface SectionHeadingProps {
  /** The shell command shown above the title — the one terminal flourish per section. */
  command: string;
  id: string;
  title: string;
  subtitle?: string;
}

/**
 * Replaces the five hand-rolled, mutually inconsistent terminal header blocks.
 * One prompt line, one heading, one optional subtitle — no nested chrome.
 */
const SectionHeading = ({ command, id, title, subtitle }: SectionHeadingProps) => (
  <motion.header variants={fadeUp} className="mb-10 sm:mb-14 max-w-3xl">
    <p className="font-mono text-xs sm:text-sm text-[var(--terminal-text-dim)] mb-3">
      <span className="text-[#00ff41]">❯</span> {command}
    </p>
    <h2
      id={id}
      className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#00ff41] terminal-glow"
    >
      {title}
    </h2>
    {subtitle && (
      <p className="mt-3 text-sm text-[var(--terminal-text-dim)] leading-relaxed">
        {subtitle}
      </p>
    )}
  </motion.header>
);

export default SectionHeading;
