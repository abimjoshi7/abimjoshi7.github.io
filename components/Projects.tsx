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
      id: 'ecommerce',
      name: 'ShopZone',
      icon: '🛍️',
      gradient: 'from-blue-500 via-blue-600 to-purple-600',
      category: 'E-Commerce',
      description: 'Full-featured shopping app with real-time inventory, secure payment integration via Stripe, and seamless checkout experience. Includes order tracking and wishlist features.',
      platform: 'iOS/Android',
      tech: ['React Native', 'Firebase', 'Stripe', 'Redux'],
      github: 'https://github.com',
      appStore: 'https://apps.apple.com',
      playStore: 'https://play.google.com',
    },
    {
      id: 'fitness',
      name: 'FitTrack Pro',
      icon: '💪',
      gradient: 'from-green-500 via-green-600 to-teal-600',
      category: 'Health & Fitness',
      description: 'Cross-platform fitness tracker with personalized workout plans, progress analytics, calorie tracking, and social features for motivation.',
      platform: 'Android/iOS',
      tech: ['Flutter', 'Dart', 'Firebase', 'Google Fit'],
      github: 'https://github.com',
      playStore: 'https://play.google.com',
    },
    {
      id: 'food',
      name: 'QuickEats',
      icon: '🍔',
      gradient: 'from-orange-500 via-red-500 to-red-600',
      category: 'Food Delivery',
      description: 'Modern food ordering platform with real-time GPS tracking, multiple payment options, restaurant management dashboard, and delivery optimization.',
      platform: 'iOS',
      tech: ['Swift', 'SwiftUI', 'MapKit', 'CoreData'],
      github: 'https://github.com',
      appStore: 'https://apps.apple.com',
    },
    {
      id: 'weather',
      name: 'WeatherNow',
      icon: '⛅',
      gradient: 'from-cyan-500 via-blue-500 to-blue-600',
      category: 'Weather',
      description: 'Beautiful weather app with detailed 7-day forecasts, location-based alerts, weather maps, and offline support with cached data.',
      platform: 'Android',
      tech: ['Kotlin', 'Jetpack Compose', 'Room', 'Retrofit'],
      github: 'https://github.com',
      playStore: 'https://play.google.com',
    },
    {
      id: 'music',
      name: 'BeatStream',
      icon: '🎵',
      gradient: 'from-purple-500 via-pink-500 to-red-500',
      category: 'Music',
      description: 'Music streaming app with offline playback, custom playlists, social sharing, and AI-powered recommendations.',
      platform: 'iOS/Android',
      tech: ['React Native', 'Node.js', 'MongoDB', 'AWS S3'],
      github: 'https://github.com',
      appStore: 'https://apps.apple.com',
      playStore: 'https://play.google.com',
    },
    {
      id: 'chat',
      name: 'ChatFlow',
      icon: '💬',
      gradient: 'from-indigo-500 via-purple-500 to-pink-500',
      category: 'Social',
      description: 'Real-time messaging app with end-to-end encryption, group chats, voice messages, and video calls.',
      platform: 'iOS/Android',
      tech: ['Flutter', 'Firebase', 'WebRTC', 'Socket.io'],
      github: 'https://github.com',
      appStore: 'https://apps.apple.com',
      playStore: 'https://play.google.com',
    },
    {
      id: 'notes',
      name: 'SmartNotes',
      icon: '📝',
      gradient: 'from-yellow-500 via-orange-500 to-red-500',
      category: 'Productivity',
      description: 'Smart note-taking app with markdown support, cloud sync, collaboration features, and AI-powered organization.',
      platform: 'iOS/Android',
      tech: ['Swift', 'Kotlin', 'CloudKit', 'iCloud'],
      github: 'https://github.com',
      appStore: 'https://apps.apple.com',
      playStore: 'https://play.google.com',
    },
    {
      id: 'finance',
      name: 'MoneyTrack',
      icon: '💰',
      gradient: 'from-emerald-500 via-green-500 to-teal-600',
      category: 'Finance',
      description: 'Personal finance manager with expense tracking, budget planning, investment portfolio, and financial insights.',
      platform: 'iOS',
      tech: ['SwiftUI', 'CoreData', 'Charts', 'CloudKit'],
      github: 'https://github.com',
      appStore: 'https://apps.apple.com',
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
        <motion.div variants={itemVariants} className="mb-16">
          <div className="terminal-window p-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <HiTerminal className="text-[#00ff41]" size={18} />
              <div className="flex-1 text-center text-[#00d9ff] text-sm font-mono">
                ~/portfolio/mobile-apps
              </div>
            </div>
            <div className="font-mono text-sm space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-[#00ff41]">❯</span>
                <span className="text-[#00d9ff]">adb devices</span>
              </div>
              <div className="pl-4 text-[#00ff41]">
                <div className="flex items-center gap-2">
                  <HiTerminal className="text-[#00d9ff]" />
                  <h2 className="text-3xl sm:text-4xl font-bold terminal-glow">
                    Mobile Applications
                  </h2>
                </div>
                <p className="text-[#00d9ff] mt-2 text-sm opacity-80">
                  # Interactive device showcase - Select a device and tap apps to view details
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Device Switcher */}
        <motion.div variants={itemVariants} className="flex justify-center gap-3 mb-12">
          <div className="terminal-window px-2 py-2">
            <div className="flex gap-2">
              {deviceOptions.map((option) => (
                <button
                  key={option.type}
                  onClick={() => setDeviceType(option.type)}
                  className={`px-6 py-2.5 font-mono text-sm transition-all duration-300 flex items-center gap-2 ${
                    deviceType === option.type
                      ? 'bg-[#00ff41] text-[#0d1117] shadow-[0_0_20px_rgba(0,255,65,0.5)]'
                      : 'bg-[#161b22] text-[#00d9ff] border border-[#30363d] hover:border-[#00ff41]'
                  }`}
                >
                  <span>{option.icon}</span>
                  <span>{option.label}</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Device Display and Project Info */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Device Showcase */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <DeviceShowcase deviceType={deviceType}>
              <PhoneScreen
                apps={projects}
                deviceType={deviceType}
                onAppSelect={setSelectedApp}
              />
            </DeviceShowcase>
          </motion.div>

          {/* Project Details Terminal */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="terminal-window p-6">
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
                  className="font-mono text-sm space-y-4"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedApp.gradient} shadow-lg flex items-center justify-center text-3xl`}>
                      {selectedApp.icon}
                    </div>
                    <div>
                      <div className="text-[#00ff41] text-xl font-bold terminal-glow">
                        {selectedApp.name}
                      </div>
                      <div className="text-[#b877db] text-xs">{selectedApp.category}</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-[#00d9ff]">
                      <span className="text-[#00ff41]">$</span> cat description.txt
                    </div>
                    <div className="pl-4 text-[#00d9ff] text-xs leading-relaxed opacity-90">
                      {selectedApp.description}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-[#00d9ff]">
                      <span className="text-[#00ff41]">$</span> cat platform.txt
                    </div>
                    <div className="pl-4 text-[#b877db] text-xs">
                      Platform: {selectedApp.platform}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-[#00d9ff]">
                      <span className="text-[#00ff41]">$</span> ls tech-stack/
                    </div>
                    <div className="pl-4 flex flex-wrap gap-2">
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

                  <div className="flex gap-2 pt-4 border-t border-[#30363d]">
                    <a
                      href={selectedApp.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-[#00ff41] text-[#0d1117] font-mono text-xs font-bold hover:shadow-[0_0_15px_rgba(0,255,65,0.5)] transition-all"
                    >
                      <FaGithub size={14} />
                      GitHub
                    </a>
                    {selectedApp.appStore && (
                      <a
                        href={selectedApp.appStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 border border-[#00d9ff] text-[#00d9ff] font-mono text-xs hover:bg-[#00d9ff] hover:text-[#0d1117] transition-all"
                      >
                        <FaAppStore size={14} />
                        App Store
                      </a>
                    )}
                    {selectedApp.playStore && (
                      <a
                        href={selectedApp.playStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 border border-[#00ff41] text-[#00ff41] font-mono text-xs hover:bg-[#00ff41] hover:text-[#0d1117] transition-all"
                      >
                        <FaGooglePlay size={14} />
                        Play Store
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
            <div className="grid grid-cols-2 gap-4">
              <div className="terminal-window p-4">
                <div className="font-mono text-xs text-[#00d9ff] mb-1">TOTAL_APPS</div>
                <div className="font-mono text-2xl font-bold text-[#00ff41] terminal-glow">
                  {projects.length}+
                </div>
              </div>
              <div className="terminal-window p-4">
                <div className="font-mono text-xs text-[#00d9ff] mb-1">DOWNLOADS</div>
                <div className="font-mono text-2xl font-bold text-[#00ff41] terminal-glow">
                  500K+
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Terminal Footer */}
        <motion.div variants={itemVariants} className="mt-16 text-center">
          <div className="inline-block terminal-window px-6 py-3">
            <div className="font-mono text-sm text-[#00d9ff]">
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
