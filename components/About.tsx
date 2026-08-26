'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { HiCode, HiDeviceMobile, HiLightningBolt, HiUserGroup, HiTerminal } from 'react-icons/hi';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [typedText, setTypedText] = useState('');
  const fullText = 'Seasoned software engineer with 5+ years in hybrid app development, focusing on user satisfaction and seamless performance...';

  useEffect(() => {
    if (isInView && typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [isInView, typedText]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const highlights = [
    {
      icon: HiDeviceMobile,
      title: 'Flutter Expert',
      description: 'Production-ready Flutter apps with Bloc pattern & SOLID principles',
      command: 'flutter_skills.sh',
    },
    {
      icon: HiCode,
      title: 'Clean Architecture',
      description: 'Separation of concerns with maintainable, testable code',
      command: 'architecture.sh',
    },
    {
      icon: HiLightningBolt,
      title: 'Performance',
      description: 'Improved retention by 15% and user engagement by 20%',
      command: 'analytics.sh',
    },
    {
      icon: HiUserGroup,
      title: 'User-Centric',
      description: 'Improved app ratings by 1.5 stars through feedback integration',
      command: 'user_focus.sh',
    },
  ];

  return (
    <section id="about" aria-labelledby="about-heading" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="relative max-w-7xl mx-auto"
      >
        {/* Terminal Header */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="terminal-window p-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <HiTerminal className="text-[#00ff41]" size={18} />
              <div className="flex-1 text-center text-[#00d9ff] text-sm font-mono">
                ~/portfolio/about-me
              </div>
            </div>
            <div className="font-mono text-sm space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-[#00ff41]">❯</span>
                <span className="text-[#00d9ff]">cat</span>
                <span className="text-[#b877db]">profile.md</span>
              </div>
              <div className="pl-4 text-[#00ff41]">
                <h2 id="about-heading" className="text-3xl sm:text-4xl font-bold terminal-glow mb-2">
                  About Me
                </h2>
                <div className="text-[#00d9ff] text-sm">
                  {typedText}
                  {typedText.length < fullText.length && (
                    <span className="terminal-cursor">▋</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Bio Terminal */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="terminal-window p-6">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#30363d]">
                <HiTerminal className="text-[#00ff41]" size={16} />
                <span className="text-[#00d9ff] text-xs font-mono flex-1 text-center">
                  bio.sh
                </span>
              </div>

              <div className="font-mono text-sm space-y-4">
                <div>
                  <div className="text-[#00ff41] mb-2">
                    <span>$</span> ./get_bio.sh
                  </div>
                  <div className="pl-4 text-[#00d9ff] text-xs leading-relaxed space-y-3">
                    <p>
                      With 5+ years of experience in software development, I specialize in crafting
                      exceptional mobile and web applications that users love.
                    </p>
                    <p>
                      My journey started with native Android development and evolved to include
                      modern cross-platform frameworks like React Native and Flutter.
                    </p>
                    <p>
                      I&apos;m passionate about user experience, performance optimization, and staying
                      current with emerging technologies.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#30363d]">
                  <div className="text-[#00ff41] mb-2">
                    <span>$</span> ls achievements/
                  </div>
                  <div className="pl-4 space-y-2 text-xs">
                    <div className="flex items-center gap-3">
                      <span className="text-[#00ff41]">✓</span>
                      <span className="text-[#00d9ff]">Open source contributor</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[#00ff41]">✓</span>
                      <span className="text-[#00d9ff]">Technical writer & mentor</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[#00ff41]">✓</span>
                      <span className="text-[#00d9ff]">Agile certified professional</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[#00ff41]">✓</span>
                      <span className="text-[#00d9ff]">Published mobile apps</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Terminal */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: 'PROJECTS', value: '15+', color: '#00ff41' },
                { label: 'EXPERIENCE', value: '5 YRS', color: '#00d9ff' },
                { label: 'CLIENTS', value: '10+', color: '#b877db' },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="terminal-window p-4 text-center"
                >
                  <div className="font-mono text-xs mb-1" style={{ color: stat.color }}>
                    {stat.label}
                  </div>
                  <div
                    className="font-mono text-2xl font-bold terminal-glow"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Highlights */}
          <motion.div variants={itemVariants} className="space-y-4">
            {highlights.map(({ icon: Icon, title, description, command }) => (
              <motion.div
                key={title}
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className="terminal-window p-5 hover:shadow-[0_0_20px_rgba(0,255,65,0.2)] transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#00ff41] to-[#00d9ff] rounded-lg flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(0,255,65,0.3)]">
                    <Icon className="text-[#0d1117]" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[#00ff41] font-mono text-xs">./</span>
                      <span className="text-[#00ff41] font-mono font-bold">
                        {command}
                      </span>
                    </div>
                    <h3 className="text-[#00d9ff] font-mono text-sm mb-1">{title}</h3>
                    <p className="text-[#00d9ff] text-xs opacity-80 leading-relaxed">
                      {description}
                    </p>
                  </div>
                  <div className="text-[#00ff41] text-xs opacity-50 font-mono">
                    [RUN]
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Quick Commands */}
            <motion.div variants={itemVariants} className="terminal-window p-5">
              <div className="font-mono text-xs space-y-2">
                <div className="text-[#00d9ff] mb-3 pb-2 border-b border-[#30363d]">
                  <span className="text-[#00ff41]">$</span> cat quick_commands.txt
                </div>
                <div className="space-y-1 text-[#00d9ff] pl-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[#00ff41]">→</span>
                    <span>./download_resume.sh</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#00ff41]">→</span>
                    <span>./view_projects.sh</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#00ff41]">→</span>
                    <span>./contact_me.sh</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#00ff41]">→</span>
                    <span>./check_availability.sh</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
