'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiArrowUp } from 'react-icons/hi';
import { contact, navItems, siteConfig } from '@/lib/site';
import { tap } from '@/lib/motion';

const socialLinks = [
  { icon: FaGithub, href: contact.github, label: 'GitHub' },
  { icon: FaLinkedin, href: contact.linkedin, label: 'LinkedIn' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="border-t border-[#30363d] px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="grid sm:grid-cols-[1.4fr_1fr] gap-8 mb-10">
          <div>
            <p className="font-mono text-[#00ff41] font-bold mb-2">
              <span className="text-[#00d9ff]">~/</span>abim
            </p>
            <p className="text-sm text-[var(--terminal-text-dim)] leading-relaxed max-w-sm">
              {siteConfig.jobTitle} in Kathmandu. Flutter, Kotlin Multiplatform and
              native Android.
            </p>
            <div className="flex gap-2 mt-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={tap}
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-md border border-[#30363d] text-[var(--terminal-text-dim)] transition-colors hover:border-[#00ff41] hover:text-[#00ff41]"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="font-mono text-sm text-[var(--terminal-text-dim)] transition-colors hover:text-[#00ff41]"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* One copyright line — it used to be printed twice, once wrapped in a fake echo. */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#30363d]">
          <p className="font-mono text-xs text-[var(--terminal-text-dim)]">
            © {currentYear} {siteConfig.name}. Built with Next.js and Tailwind.
          </p>
          <motion.button
            whileTap={tap}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="flex items-center gap-2 font-mono text-xs text-[var(--terminal-text-dim)] transition-colors hover:text-[#00ff41]"
          >
            <HiArrowUp size={14} />
            Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
