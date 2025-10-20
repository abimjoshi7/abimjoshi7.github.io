'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaGithub, FaGooglePlay, FaAppStore } from 'react-icons/fa';
import { HiTerminal } from 'react-icons/hi';
import DeviceShowcase from './DeviceShowcase';
import PhoneScreen from './PhoneScreen';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [deviceType, setDeviceType] = useState<'iphone' | 'android' | 'tablet'>('iphone');
  const [selectedApp, setSelectedApp] = useState<typeof projects[0] | null>(null);

  const projects = [
    {
      id: 'meroschool',
      name: 'Mero School',
      icon: '🎓',
      gradient: 'from-blue-500 via-blue-600 to-purple-600',
      category: 'Education',
      description: 'Comprehensive school management app connecting students, teachers, and parents. Features include attendance tracking, grade management, assignment submissions, and real-time notifications.',
      platform: 'iOS/Android',
      tech: ['Flutter', 'Dart', 'Firebase', 'Bloc'],
      github: 'https://github.com/abimjoshi7',
      appStore: 'https://apps.apple.com',
      playStore: 'https://play.google.com/store/apps/details?id=com.meroschool',
    },
    {
      id: 'merolagani',
      name: 'Mero Lagani',
      icon: '📈',
      gradient: 'from-green-500 via-green-600 to-teal-600',
      category: 'Finance',
      description: 'Nepal\'s premier stock market and investment app. Real-time analytics dashboards, portfolio tracking, financial insights, and compliance monitoring for seamless investment management.',
      platform: 'iOS/Android',
      tech: ['Flutter', 'Dart', 'PostgreSQL', 'Bloc', 'Retrofit'],
      github: 'https://github.com/abimjoshi7',
      appStore: 'https://apps.apple.com',
      playStore: 'https://play.google.com/store/apps/details?id=com.merolagani',
    },
    {
      id: 'merohealthcare',
      name: 'Mero Health Care',
      icon: '🏥',
      gradient: 'from-red-500 via-pink-500 to-red-600',
      category: 'Healthcare',
      description: 'Healthcare management platform with offline data sync, appointment scheduling, medical records management, and telemedicine features for seamless patient care.',
      platform: 'Android',
      tech: ['Flutter', 'Dart', 'Drift', 'Firestore'],
      github: 'https://github.com/abimjoshi7',
      playStore: 'https://play.google.com/store/apps/details?id=com.merohealthcare',
    },
    {
      id: 'homaale',
      name: 'Homaale',
      icon: '🏠',
      gradient: 'from-orange-500 via-amber-500 to-yellow-500',
      category: 'Real Estate',
      description: 'Property listing and management app with location-based services, push notifications, and personalized content for buyers and sellers in Nepal.',
      platform: 'Android',
      tech: ['Flutter', 'Dart', 'Firestore', 'Bloc'],
      github: 'https://github.com/abimjoshi7',
      playStore: 'https://play.google.com/store/apps/details?id=com.homaale',
    },
    {
      id: 'onecorner',
      name: 'One Corner',
      icon: '🛍️',
      gradient: 'from-purple-500 via-indigo-500 to-blue-500',
      category: 'E-Commerce',
      description: 'Modern e-commerce platform with push notifications, user engagement analytics, and seamless shopping experience. Improved app store ratings through continuous feedback integration.',
      platform: 'iOS/Android',
      tech: ['Flutter', 'Dart', 'Isar', 'Retrofit', 'WebEngage'],
      github: 'https://github.com/abimjoshi7',
      appStore: 'https://apps.apple.com',
      playStore: 'https://play.google.com/store/apps/details?id=com.onecorner',
    },
  ];

  const deviceOptions = [
    { type: 'iphone' as const, label: 'iPhone', icon: '📱' },
    { type: 'android' as const, label: 'Android', icon: '🤖' },
    { type: 'tablet' as const, label: 'Tablet', icon: '📱' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="relative max-w-7xl mx-auto z-10"
      >
        {/* Terminal Header */}
        <motion.div variants={itemVariants} className="mb-12 sm:mb-16">
          <div className="terminal-window p-4 sm:p-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <HiTerminal className="text-[#00ff41]" size={18} />
              <div className="flex-1 text-center text-[#00d9ff] text-xs sm:text-sm font-mono">
                ~/portfolio/mobile-apps
              </div>
            </div>
            <div className="font-mono text-sm space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-[#00ff41]">❯</span>
                <span className="text-[#00d9ff] text-xs sm:text-sm">adb devices</span>
              </div>
              <div className="pl-2 sm:pl-4 text-[#00ff41]">
                <div className="flex items-center gap-2">
                  <HiTerminal className="text-[#00d9ff]" />
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold terminal-glow">
                    Mobile Applications
                  </h2>
                </div>
                <p className="text-[#00d9ff] mt-2 text-xs sm:text-sm opacity-80">
                  # Interactive device showcase - Select a device and tap apps to view details
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Device Switcher */}
        <motion.div variants={itemVariants} className="flex justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          <div className="terminal-window px-1.5 sm:px-2 py-1.5 sm:py-2">
            <div className="flex gap-1.5 sm:gap-2">
              {deviceOptions.map((option) => (
                <button
                  key={option.type}
                  onClick={() => setDeviceType(option.type)}
                  className={`px-3 sm:px-6 py-2 sm:py-2.5 font-mono text-xs sm:text-sm transition-all duration-300 flex items-center gap-1.5 sm:gap-2 ${
                    deviceType === option.type
                      ? 'bg-[#00ff41] text-[#0d1117] shadow-[0_0_20px_rgba(0,255,65,0.5)]'
                      : 'bg-[#161b22] text-[#00d9ff] border border-[#30363d] hover:border-[#00ff41]'
                  }`}
                >
                  <span className="text-sm sm:text-base">{option.icon}</span>
                  <span className="hidden xs:inline">{option.label}</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Device Display and Project Info */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Device Showcase */}
          <motion.div variants={itemVariants} className="flex justify-center px-2 sm:px-0">
            <DeviceShowcase deviceType={deviceType}>
              <PhoneScreen
                apps={projects}
                deviceType={deviceType}
                onAppSelect={setSelectedApp}
              />
            </DeviceShowcase>
          </motion.div>

          {/* Project Details Terminal */}
          <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
            <div className="terminal-window p-4 sm:p-6">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#30363d]">
                <HiTerminal className="text-[#00ff41]" size={16} />
                <span className="text-[#00d9ff] text-xs font-mono flex-1 text-center">
                  project-details.log
                </span>
              </div>

              {selectedApp ? (
                <motion.div
                  key={selectedApp.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-mono text-sm space-y-3 sm:space-y-4"
                >
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${selectedApp.gradient} shadow-lg flex items-center justify-center text-2xl sm:text-3xl`}>
                      {selectedApp.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[#00ff41] text-base sm:text-xl font-bold terminal-glow truncate">
                        {selectedApp.name}
                      </div>
                      <div className="text-[#b877db] text-xs">{selectedApp.category}</div>
                    </div>
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <div className="text-[#00d9ff] text-xs sm:text-sm">
                      <span className="text-[#00ff41]">$</span> cat description.txt
                    </div>
                    <div className="pl-3 sm:pl-4 text-[#00d9ff] text-xs leading-relaxed opacity-90">
                      {selectedApp.description}
                    </div>
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <div className="text-[#00d9ff] text-xs sm:text-sm">
                      <span className="text-[#00ff41]">$</span> cat platform.txt
                    </div>
                    <div className="pl-3 sm:pl-4 text-[#b877db] text-xs">
                      Platform: {selectedApp.platform}
                    </div>
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <div className="text-[#00d9ff] text-xs sm:text-sm">
                      <span className="text-[#00ff41]">$</span> ls tech-stack/
                    </div>
                    <div className="pl-3 sm:pl-4 flex flex-wrap gap-1.5 sm:gap-2">
                      {selectedApp.tech.map((tech: string) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 bg-[#0d1117] text-[#00ff41] border border-[#30363d] font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-2 pt-4 border-t border-[#30363d]">
                    <a
                      href={selectedApp.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#00ff41] text-[#0d1117] font-mono text-xs font-bold hover:shadow-[0_0_15px_rgba(0,255,65,0.5)] transition-all"
                    >
                      <FaGithub size={14} />
                      <span>View on GitHub</span>
                    </a>
                    {selectedApp.appStore && (
                      <a
                        href={selectedApp.appStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-2.5 border border-[#00d9ff] text-[#00d9ff] font-mono text-xs hover:bg-[#00d9ff] hover:text-[#0d1117] transition-all"
                      >
                        <FaAppStore size={14} />
                        <span>Download on App Store</span>
                      </a>
                    )}
                    {selectedApp.playStore && (
                      <a
                        href={selectedApp.playStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-2.5 border border-[#00ff41] text-[#00ff41] font-mono text-xs hover:bg-[#00ff41] hover:text-[#0d1117] transition-all"
                      >
                        <FaGooglePlay size={14} />
                        <span>Get it on Play Store</span>
                      </a>
                    )}
                  </div>
                </motion.div>
              ) : (
                <div className="font-mono text-sm text-[#00d9ff] py-12 text-center">
                  <div className="text-4xl mb-4">👆</div>
                  <div className="opacity-70">
                    <span className="text-[#00ff41]">$</span> echo "Tap any app icon to view details"
                    <motion.span
                      className="inline-block ml-1"
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                    >
                      ▋
                    </motion.span>
                  </div>
                </div>
              )}
            </div>

            {/* Terminal Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="terminal-window p-3 sm:p-4">
                <div className="font-mono text-xs text-[#00d9ff] mb-1">PRODUCTION_APPS</div>
                <div className="font-mono text-xl sm:text-2xl font-bold text-[#00ff41] terminal-glow">
                  {projects.length}+
                </div>
              </div>
              <div className="terminal-window p-3 sm:p-4">
                <div className="font-mono text-xs text-[#00d9ff] mb-1">YEARS_EXP</div>
                <div className="font-mono text-xl sm:text-2xl font-bold text-[#00ff41] terminal-glow">
                  5+
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Terminal Footer */}
        <motion.div variants={itemVariants} className="mt-12 sm:mt-16 text-center">
          <div className="inline-block terminal-window px-4 sm:px-6 py-2.5 sm:py-3">
            <div className="font-mono text-xs sm:text-sm text-[#00d9ff]">
              <span className="text-[#00ff41]">$</span> git push origin main --tags
              <span className="terminal-cursor ml-1">_</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
