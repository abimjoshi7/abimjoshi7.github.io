'use client';

import { motion } from 'framer-motion';
import {
  HiChartBar,
  HiClock,
  HiLightningBolt,
  HiShieldCheck,
} from 'react-icons/hi';
import SectionHeading from './SectionHeading';
import { fadeUp, stagger, viewportOnce } from '@/lib/motion';

const highlights = [
  {
    icon: HiChartBar,
    title: 'Built for return visits',
    description:
      'I design for the second open, not the first impression — retention, habit loops and quiet reliability over launch-day theatre.',
  },
  {
    icon: HiLightningBolt,
    title: 'Calm under growth',
    description:
      'When traffic or data climbs, I want the product to feel the same: profile hot paths, cut waste, and keep the UI honest about wait time.',
  },
  {
    icon: HiShieldCheck,
    title: 'Evidence before merge',
    description:
      'Guesses lose to measurements. Tests, crash signals and trade-off notes travel with the change so reviewers are not flying blind.',
  },
  {
    icon: HiClock,
    title: 'Dates that still mean something',
    description:
      'Scope flexes; the calendar often cannot. I sequence risk early, protect the critical path, and say what will slip before it becomes a surprise.',
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
        command="sed -n '1,40p' ~/ABOUT.md"
        title="About"
        subtitle="How I work when the product has to survive real users and real calendars."
      />

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
        <motion.div
          variants={fadeUp}
          className="space-y-4 text-sm sm:text-base leading-relaxed text-terminal-text lg:pt-1"
        >
          <p>
            For 6+ years I’ve shipped production software across mobile and web —
            fishing, aquariums, markets, learning, healthcare, shops and games. The
            common thread is not the domain; it is care for the person who comes
            back tomorrow and for the system that has to carry them.
          </p>
          <p className="text-terminal-text-dim">
            I prefer clarity over cleverness: measure before tuning, cover the
            sharp edges with tests, and keep offline and weak-network paths as
            first-class citizens. Native bridges, media pipelines and APIs only
            earn their keep when they make the next tap feel inevitable.
          </p>
          <p className="text-terminal-text-dim">
            Founder of Attatva Systems Pvt. Ltd. in Kathmandu — owning product
            direction and delivery for Android releases under the same bar:
            habit, speed, proof, and the date.
          </p>
        </motion.div>

        <motion.ul
          variants={stagger(0.06)}
          className="grid sm:grid-cols-2 gap-3 content-start"
        >
          {highlights.map(({ icon: Icon, title, description }) => (
            <motion.li
              key={title}
              variants={fadeUp}
              className="terminal-window panel-interactive p-4 flex gap-3 h-full"
            >
              <Icon className="text-terminal-green shrink-0 mt-0.5" size={20} />
              <div className="min-w-0">
                <h3 className="font-mono text-sm text-terminal-text mb-1">
                  {title}
                </h3>
                <p className="text-xs text-terminal-text-dim leading-relaxed">
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
