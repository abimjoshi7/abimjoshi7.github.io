'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { HiTerminal } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { contact, stats } from '@/lib/site';
import { fadeUp, stagger, tap } from '@/lib/motion';

const socials = [
  { Icon: FaGithub, href: contact.github, label: 'GitHub' },
  { Icon: FaLinkedin, href: contact.linkedin, label: 'LinkedIn' },
];

const Hero = () => {
  const reduceMotion = useReducedMotion();

  const scrollTo = (selector: string) =>
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative min-h-[100svh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        variants={stagger(0.09)}
        initial="hidden"
        animate="visible"
        className="relative w-full max-w-4xl mx-auto z-10"
      >
        {/* The one full terminal window on the page. Every other section uses a plain heading. */}
        <motion.div variants={fadeUp} className="terminal-window overflow-hidden mb-8">
          <div className="flex items-center gap-2 px-4 sm:px-5 py-3 border-b border-terminal-border">
            <HiTerminal className="text-terminal-green shrink-0" size={16} />
            <span className="text-terminal-text-dim text-xs font-mono">
              ~/portfolio
            </span>
          </div>

          <div className="p-4 sm:p-6 lg:p-8 font-mono">
            <h1 className="mb-6">
              <span className="sr-only">
                Abim Joshi — Software Engineer
              </span>
              {/* Banner scales with the viewport instead of forcing a horizontal scroll. */}
              <pre
                aria-hidden="true"
                className="text-terminal-green leading-tight text-[clamp(0.44rem,2.35vw,0.95rem)]"
              >
{`╔══════════════════════════════════════╗
║  ABIM JOSHI · SOFTWARE ENGINEER      ║
╚══════════════════════════════════════╝`}
              </pre>
            </h1>

            <div className="space-y-4 text-sm sm:text-base">
              <div>
                <p className="text-terminal-green">$ whoami --verbose</p>
                <div className="pl-4 mt-1 space-y-1 text-terminal-text">
                  <p>Software Engineer</p>
                  <p className="text-terminal-text-dim">
                    I build for habits, not demos — products people open again
                    tomorrow, and backends that stay calm when usage climbs. I
                    profile before I guess, cover risk with tests, and still hit
                    the date that was agreed. Founder of Attatva Systems in
                    Kathmandu.
                  </p>
                </div>
              </div>

              <div>
                <p className="text-terminal-green">$ git remote get-url origin</p>
                <p className="pl-4 mt-1 text-terminal-text-dim">
                  https://attatva.web.app
                </p>
              </div>

              <p className="text-terminal-green">
                $ ./say_hello.sh
                <span className="terminal-cursor ml-1">▋</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-3 sm:justify-center mb-8"
        >
          <motion.button
            whileTap={tap}
            onClick={() => scrollTo('#contact')}
            className="px-6 py-3 bg-terminal-green text-terminal-on-accent font-mono font-bold text-sm rounded-md transition-colors hover:bg-terminal-green-hover"
          >
            Get in touch →
          </motion.button>

          <motion.button
            whileTap={tap}
            onClick={() => scrollTo('#projects')}
            className="px-6 py-3 border border-terminal-border text-terminal-text font-mono text-sm rounded-md transition-colors hover:border-terminal-green hover:text-terminal-green"
          >
            View projects
          </motion.button>

          <motion.a
            href="/Resume.pdf"
            download="Abim_Joshi_Resume.pdf"
            whileTap={tap}
            className="px-6 py-3 border border-terminal-border text-terminal-text font-mono text-sm rounded-md text-center transition-colors hover:border-terminal-blue hover:text-terminal-blue"
          >
            Download résumé
          </motion.a>
        </motion.div>

        {/* Socials */}
        <motion.div variants={fadeUp} className="flex justify-center gap-3 mb-10">
          {socials.map(({ Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={tap}
              aria-label={label}
              className="w-11 h-11 flex items-center justify-center rounded-md border border-terminal-border text-terminal-text-dim transition-colors hover:border-terminal-green hover:text-terminal-green"
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </motion.div>

        {/* Headline numbers — stated once here, not repeated in About or Projects. */}
        <motion.dl variants={fadeUp} className="grid grid-cols-2 gap-3 sm:gap-4 max-w-md mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="terminal-window px-3 py-4 text-center"
            >
              <dd className="font-mono text-xl sm:text-2xl font-bold text-terminal-green">
                {stat.value}
              </dd>
              <dt className="font-mono text-[10px] sm:text-xs text-terminal-text-dim mt-1 tracking-wide">
                {stat.label}
              </dt>
            </div>
          ))}
        </motion.dl>
      </motion.div>

      {/* Always rendered: dropping it on the client for reduced-motion users
          left the server HTML with an element the client did not have, which
          fails hydration. Only the pulse is conditional, and `initial` is the
          same either way, so the server and client markup match. */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={reduceMotion ? { opacity: 0.45 } : { opacity: [0, 0.5, 0] }}
        transition={
          reduceMotion
            ? { duration: 0 }
            : { delay: 1.5, duration: 2.4, repeat: Infinity, ease: 'easeInOut' }
        }
        className="absolute bottom-5 left-1/2 -translate-x-1/2 text-terminal-green text-sm"
      >
        ↓
      </motion.div>
    </section>
  );
};

export default Hero;
