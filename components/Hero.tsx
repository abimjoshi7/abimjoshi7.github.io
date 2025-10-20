'use client';

import { motion } from 'framer-motion';
import { HiTerminal } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);

  const terminalLines = [
    { text: '$ whoami', color: '#00ff41', delay: 0 },
    { text: '> Abim Joshi | Senior Software Engineer - Mobile', color: '#00d9ff', delay: 1000 },
    { text: '$ cat skills.txt', color: '#00ff41', delay: 2500 },
    { text: '> Flutter | KMP | Kotlin | Room | Ktor | WorkManager', color: '#b877db', delay: 3500 },
    { text: '$ echo $MISSION', color: '#00ff41', delay: 5000 },
    { text: '> Crafting production-ready apps with 5+ years of expertise', color: '#00d9ff', delay: 6000 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-[#00ff41]"
              style={{
                top: `${i * 5}%`,
                left: 0,
                right: 0,
              }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-6xl mx-auto z-10"
      >
        {/* Main Terminal Window */}
        <motion.div variants={itemVariants} className="terminal-window p-8 mb-8">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#30363d]">
            <HiTerminal className="text-[#00ff41]" size={20} />
            <div className="flex-1 text-center">
              <span className="text-[#00d9ff] text-sm font-mono">~/portfolio/about</span>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="font-mono space-y-3 min-h-[300px]">
            {/* ASCII Art Name */}
            <motion.div
              variants={itemVariants}
              className="text-[#00ff41] text-sm sm:text-base mb-6 terminal-glow"
            >
              <pre className="overflow-x-auto">
{`╔═══════════════════════════════════════════════════╗
║   ABIM JOSHI / SOFTWARE ENGINEER - MOBILE TECH    ║
╚═══════════════════════════════════════════════════╝`}
              </pre>
            </motion.div>

            {/* Typing Effect Lines */}
            <motion.div variants={itemVariants} className="space-y-2 text-sm sm:text-base">
              <div className="flex items-start gap-2">
                <span className="text-[#00ff41] flex-shrink-0">❯</span>
                <div>
                  <div className="text-[#00ff41] mb-1">$ whoami</div>
                  <div className="text-[#00d9ff] pl-4">
                    &gt; Abim Joshi - Senior Software Engineer - Mobile Technologies
                  </div>
                  <div className="text-[#b877db] pl-4">
                    &gt; 5+ Years of Mobile App Development
                  </div>
                  <div className="text-[#00d9ff] pl-4">
                    &gt; Location: Kathmandu, Nepal
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-3">
                <span className="text-[#00ff41] flex-shrink-0">❯</span>
                <div>
                  <div className="text-[#00ff41] mb-1">$ cat expertise.txt</div>
                  <div className="text-[#00d9ff] pl-4 space-y-1">
                    <div>&gt; Flutter | Dart | Kotlin | Java | KMP</div>
                    <div>&gt; Room | Ktor | WorkManager | Retrofit</div>
                    <div>&gt; Bloc Pattern | SOLID Principles</div>
                    <div>&gt; PostgreSQL | Firestore | Drift | Isar</div>
                    <div>&gt; GitHub Actions | Figma | Postman</div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-3">
                <span className="text-[#00ff41] flex-shrink-0">❯</span>
                <div className="w-full">
                  <div className="text-[#00ff41] mb-1">$ echo $MISSION</div>
                  <div className="text-[#00d9ff] pl-4">
                    &gt; Delivering on time, meeting client expectations
                  </div>
                  <div className="text-[#00d9ff] pl-4">
                    &gt; Writing clean, maintainable code
                  </div>
                  <div className="text-[#b877db] pl-4">
                    &gt; Creating production-ready apps with seamless performance
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-3">
                <span className="text-[#00ff41] flex-shrink-0">❯</span>
                <div className="text-[#00ff41]">
                  $ ./initialize_collaboration.sh
                  <motion.span
                    className="inline-block ml-1"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  >
                    ▋
                  </motion.span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Action Buttons - Terminal Style */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0, 255, 65, 0.6)' }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-3 bg-[#00ff41] text-[#0d1117] font-mono font-bold overflow-hidden"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="flex items-center gap-2">
              <span>./contact.sh</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-[#00ff41] text-[#00ff41] font-mono hover:bg-[#00ff41] hover:text-[#0d1117] transition-all"
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            ls -la ./projects/
          </motion.button>

          <motion.a
            href="/Resume.pdf"
            download="Abim_Joshi_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-[#00d9ff] text-[#00d9ff] font-mono hover:bg-[#00d9ff] hover:text-[#0d1117] transition-all"
          >
            wget resume.pdf
          </motion.a>
        </motion.div>

        {/* Social Links - Terminal Style */}
        <motion.div variants={itemVariants} className="flex justify-center gap-6 mb-8">
          <div className="terminal-window px-6 py-3">
            <div className="flex items-center gap-6">
              <span className="text-[#00d9ff] font-mono text-sm">~/social/</span>
              {[
                { Icon: FaGithub, href: 'https://github.com/abimjoshi7', label: 'GitHub', color: '#00ff41' },
                { Icon: FaLinkedin, href: 'https://linkedin.com/in/abimjoshi7', label: 'LinkedIn', color: '#00d9ff' },
              ].map(({ Icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="transition-all"
                  style={{ color }}
                  aria-label={label}
                  title={label}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* System Stats */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'PROJECTS', value: '15+', color: '#00ff41' },
            { label: 'EXPERIENCE', value: '5+ YRS', color: '#00d9ff' },
            { label: 'CLIENTS', value: '10+', color: '#b877db' },
            { label: 'UPTIME', value: '99.9%', color: '#ffff00' },
          ].map((stat) => (
            <div key={stat.label} className="terminal-window p-4 text-center">
              <div className="font-mono text-xs mb-1" style={{ color: stat.color }}>
                [{stat.label}]
              </div>
              <div className="font-mono text-xl font-bold terminal-glow" style={{ color: stat.color }}>
                {stat.value}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Subtle Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ delay: 2, duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1"
        >
          <div className="text-[#00ff41] font-mono text-[10px] opacity-50">explore</div>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-[#00ff41] text-lg opacity-50"
          >
            ↓
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
