'use client';

import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import SectionHeading from './SectionHeading';
import { contact } from '@/lib/site';
import { fadeUp, stagger, tap, viewportOnce } from '@/lib/motion';

/**
 * The site is a static export with no backend, so there is no honest way to run
 * a submit form here — the previous one printed "Message sent successfully!"
 * without sending anything. These are direct, real links instead.
 */
const methods = [
  {
    icon: HiMail,
    label: 'Email',
    value: contact.email,
    href: `mailto:${contact.email}?subject=${encodeURIComponent('Hello Abim')}`,
    accent: '#00ff41',
  },
  {
    icon: HiPhone,
    label: 'Phone',
    value: contact.phone,
    href: contact.phoneHref,
    accent: '#00d9ff',
  },
  {
    icon: HiLocationMarker,
    label: 'Location',
    value: contact.location,
    href: null,
    accent: '#b877db',
  },
];

const socials = [
  { icon: FaGithub, label: 'GitHub', href: contact.github },
  { icon: FaLinkedin, label: 'LinkedIn', href: contact.linkedin },
];

const Contact = () => (
  <section
    id="contact"
    aria-labelledby="contact-heading"
    className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
  >
    <motion.div
      variants={stagger()}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="max-w-3xl mx-auto"
    >
      <SectionHeading
        id="contact-heading"
        command="mail -s 'hello'"
        title="Get in touch"
        subtitle="Open to new projects and roles. Email is the fastest way to reach me."
      />

      <motion.ul variants={stagger(0.06)} className="space-y-3 mb-6">
        {methods.map(({ icon: Icon, label, value, href, accent }) => {
          const content = (
            <>
              <Icon size={20} style={{ color: accent }} className="shrink-0" />
              <span className="min-w-0">
                <span className="block font-mono text-[11px] uppercase tracking-wider text-[var(--terminal-text-dim)]">
                  {label}
                </span>
                <span className="block text-sm text-[var(--terminal-text)] break-words">
                  {value}
                </span>
              </span>
            </>
          );

          return (
            <motion.li key={label} variants={fadeUp}>
              {href ? (
                <motion.a
                  href={href}
                  whileTap={tap}
                  className="terminal-window panel-interactive flex items-center gap-4 p-4 w-full"
                >
                  {content}
                </motion.a>
              ) : (
                <div className="terminal-window flex items-center gap-4 p-4">
                  {content}
                </div>
              )}
            </motion.li>
          );
        })}
      </motion.ul>

      <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3">
        <a
          href={`mailto:${contact.email}?subject=${encodeURIComponent('Hello Abim')}`}
          className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[#00ff41] text-[#0d1117] font-mono font-bold text-sm transition-colors hover:bg-[#4dff7c]"
        >
          <HiMail size={16} />
          Send an email
        </a>
        {socials.map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-[#30363d] text-[var(--terminal-text)] font-mono text-sm transition-colors hover:border-[#00ff41] hover:text-[#00ff41]"
          >
            <Icon size={16} />
            {label}
          </a>
        ))}
      </motion.div>
    </motion.div>
  </section>
);

export default Contact;
