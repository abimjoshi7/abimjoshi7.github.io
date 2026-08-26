'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HiMenu, HiX, HiTerminal } from 'react-icons/hi';
import { navItems } from '@/lib/site';
import { tap } from '@/lib/motion';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Highlight whichever section currently owns the upper half of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] }
    );

    navItems.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Stop the page scrolling behind the open mobile sheet.
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-[#0d1117]/95 backdrop-blur-md border-b border-[#30363d]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => scrollToSection('#home')}
            className="flex items-center gap-2 font-mono text-[#00ff41]"
            aria-label="Back to top"
          >
            <HiTerminal size={20} />
            <span className="text-base font-bold">
              <span className="text-[#00d9ff]">~/</span>abim
            </span>
          </button>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.name;
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative px-3 py-2 font-mono text-sm transition-colors ${
                    isActive
                      ? 'text-[#00ff41]'
                      : 'text-[var(--terminal-text-dim)] hover:text-[var(--terminal-text)]'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      className="absolute inset-x-2 -bottom-px h-px bg-[#00ff41]"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile trigger */}
          <motion.button
            whileTap={tap}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="md:hidden -mr-2 p-2 text-[#00ff41]"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <motion.span
              key={isMobileMenuOpen ? 'close' : 'open'}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.18 }}
              className="block"
            >
              {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </motion.span>
          </motion.button>
        </div>
      </div>

      {/* Mobile sheet */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden border-t border-[#30363d] bg-[#0d1117]"
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.045 } } }}
              className="px-4 py-3"
            >
              {navItems.map((item) => (
                <motion.li
                  key={item.name}
                  variants={{
                    hidden: { opacity: 0, x: -12 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={`flex items-center gap-3 w-full text-left px-2 py-3 font-mono text-sm rounded transition-colors ${
                      activeSection === item.name
                        ? 'text-[#00ff41]'
                        : 'text-[var(--terminal-text-dim)]'
                    }`}
                  >
                    <span className="text-[#00ff41] opacity-70">❯</span>
                    {item.label}
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
