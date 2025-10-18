'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiMenu, HiX, HiTerminal } from 'react-icons/hi';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'home', href: '#home', cmd: 'cd ~/' },
    { name: 'about', href: '#about', cmd: 'cat about.txt' },
    { name: 'skills', href: '#skills', cmd: 'ls skills/' },
    { name: 'projects', href: '#projects', cmd: 'git log' },
    { name: 'experience', href: '#experience', cmd: 'history' },
    { name: 'contact', href: '#contact', cmd: 'mail -s' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0d1117]/98 backdrop-blur-md border-b border-[#30363d] shadow-[0_4px_30px_rgba(0,255,65,0.15)]'
          : 'bg-[#0d1117]/80 backdrop-blur-sm border-b border-[#30363d]/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo - Terminal Style */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 font-mono"
          >
            <HiTerminal className="text-[#00ff41] text-2xl terminal-glow" />
            <span className="text-[#00ff41] text-xl font-bold terminal-glow">
              <span className="text-[#00d9ff]">~/</span>portfolio
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-4 py-2 font-mono text-sm transition-all"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[#00ff41] opacity-0 group-hover:opacity-100 transition-opacity">
                    $
                  </span>
                  <span className="text-[#00d9ff] group-hover:text-[#00ff41] transition-colors">
                    {item.name}
                  </span>
                </div>
                {/* Hover Tooltip */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="bg-[#161b22] border border-[#30363d] px-2 py-1 rounded text-xs text-[#00ff41] whitespace-nowrap">
                    {item.cmd}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#00ff41] p-2 hover:bg-[#161b22] rounded transition-colors"
          >
            {isMobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden terminal-window mx-4 mb-4"
        >
          <div className="p-4 space-y-2">
            <div className="text-[#00d9ff] font-mono text-xs mb-3 pb-2 border-b border-[#30363d]">
              <span className="text-[#00ff41]">$</span> ls navigation/
            </div>
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="flex items-center gap-3 w-full text-left px-3 py-2 text-[#00d9ff] hover:text-[#00ff41] hover:bg-[#161b22] rounded transition-all font-mono text-sm group"
              >
                <span className="text-[#00ff41] opacity-60 group-hover:opacity-100">→</span>
                <span>{item.name}</span>
                <span className="ml-auto text-xs text-[#30363d] group-hover:text-[#00d9ff]">
                  {item.cmd}
                </span>
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;
