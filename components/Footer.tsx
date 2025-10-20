'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiArrowUp, HiTerminal } from 'react-icons/hi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/abimjoshi7', label: 'GitHub', cmd: 'git clone' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/abimjoshi7', label: 'LinkedIn', cmd: 'curl -L' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home', cmd: 'cd ~/' },
    { name: 'About', href: '#about', cmd: 'cat about.txt' },
    { name: 'Skills', href: '#skills', cmd: 'ls skills/' },
    { name: 'Projects', href: '#projects', cmd: 'git log' },
    { name: 'Experience', href: '#experience', cmd: 'history' },
    { name: 'Contact', href: '#contact', cmd: 'mail -s' },
  ];

  return (
    <footer className="bg-[#0d1117] border-t border-[#30363d] py-12 px-4 sm:px-6 lg:px-8 relative">
      {/* Scroll to Top Button - Terminal Style */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#00ff41] rounded flex items-center justify-center shadow-[0_0_20px_rgba(0,255,65,0.5)] hover:shadow-[0_0_30px_rgba(0,255,65,0.8)] transition-all"
        aria-label="Scroll to top"
      >
        <HiArrowUp className="text-[#0d1117]" size={24} />
      </motion.button>

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand - Terminal Window */}
          <div className="terminal-window p-6">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#30363d]">
              <HiTerminal className="text-[#00ff41]" size={14} />
              <span className="text-[#00d9ff] text-xs font-mono">whoami.sh</span>
            </div>

            <div className="font-mono text-sm space-y-3">
              <div className="flex items-center gap-2">
                <HiTerminal className="text-[#00ff41]" size={20} />
                <span className="text-[#00ff41] text-xl font-bold terminal-glow">Abim Joshi</span>
              </div>
              <div className="text-[#00d9ff] text-xs leading-relaxed opacity-90">
                <span className="text-[#00ff41]">$</span> echo $ROLE
                <div className="pl-4 text-white opacity-80 mt-1">
                  Senior Software Engineer - Mobile Technologies with 5+ years crafting production-ready apps. Specializing in Flutter, KMP, and native Android development.
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links - Terminal Window */}
          <div className="terminal-window p-6">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#30363d]">
              <HiTerminal className="text-[#00ff41]" size={14} />
              <span className="text-[#00d9ff] text-xs font-mono">navigation.txt</span>
            </div>

            <div className="font-mono text-xs space-y-2">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[#00ff41]">$</span>
                <span className="text-[#00d9ff]">ls sections/</span>
              </div>
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex items-center justify-between w-full px-2 py-1.5 hover:bg-[#161b22] transition-colors group text-left"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-[#00ff41] opacity-60 group-hover:opacity-100">→</span>
                    <span className="text-white opacity-80 group-hover:text-[#00ff41] transition-colors">
                      {link.name}
                    </span>
                  </div>
                  <span className="text-[#30363d] group-hover:text-[#00d9ff] transition-colors text-[10px]">
                    {link.cmd}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Contact & Social - Terminal Window */}
          <div className="terminal-window p-6">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#30363d]">
              <HiTerminal className="text-[#00ff41]" size={14} />
              <span className="text-[#00d9ff] text-xs font-mono">contact.json</span>
            </div>

            <div className="font-mono text-xs space-y-3">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[#00ff41]">$</span>
                <span className="text-[#00d9ff]">cat contact.json</span>
              </div>
              <div className="space-y-2 pl-2">
                <div className="flex items-start gap-2">
                  <span className="text-[#00d9ff]">"email":</span>
                  <span className="text-white opacity-80">"abimjoshi7@gmail.com"</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#00d9ff]">"phone":</span>
                  <span className="text-white opacity-80">"+977 9860920006"</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#00d9ff]">"location":</span>
                  <span className="text-white opacity-80">"Kathmandu, Nepal"</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-3 mt-3 border-t border-[#30363d]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[#00ff41]">$</span>
                  <span className="text-[#00d9ff]">ls social/</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {socialLinks.map(({ icon: Icon, href, label, cmd }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex flex-col items-center gap-1 p-2 border border-[#30363d] hover:border-[#00ff41] transition-all group"
                      aria-label={label}
                      title={cmd}
                    >
                      <Icon className="text-[#00d9ff] group-hover:text-[#00ff41] transition-colors" size={16} />
                      <span className="text-[10px] text-white opacity-60 group-hover:opacity-100 transition-opacity">
                        {label}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright - Terminal Style */}
        <div className="border-t border-[#30363d] pt-8">
          <div className="terminal-window p-4 max-w-2xl mx-auto">
            <div className="font-mono text-xs text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-[#00ff41]">$</span>
                <span className="text-[#00d9ff]">echo "© {currentYear} Abim Joshi. All rights reserved."</span>
              </div>
              <div className="text-white opacity-70">
                © {currentYear} Abim Joshi. All rights reserved.
              </div>
              <div className="mt-3 text-[#00d9ff] opacity-60">
                <span className="text-[#00ff41]">// </span>Built with Next.js, TypeScript & Flutter Spirit
                <motion.span
                  className="inline-block ml-1"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                >
                  ▋
                </motion.span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
