'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaGooglePlay, FaAppStore } from 'react-icons/fa';
import DeviceShowcase from './DeviceShowcase';
import PhoneScreen from './PhoneScreen';
import SectionHeading from './SectionHeading';
import { fadeUp, stagger, tap, viewportOnce } from '@/lib/motion';

export interface App {
  id: string;
  name: string;
  icon: string;
  gradient: string;
  category: string;
  description: string;
  platform: string;
  tech: string[];
  appStore?: string;
  playStore?: string;
}

const projects: App[] = [
  {
    id: 'meroschool',
    name: 'Mero School',
    icon: '🎓',
    gradient: 'from-blue-500 via-blue-600 to-purple-600',
    category: 'Education',
    description:
      'School management app connecting students, teachers and parents — attendance tracking, grade management, assignment submission and real-time notifications.',
    platform: 'iOS · Android',
    tech: ['Flutter', 'Dart', 'Firebase', 'Bloc'],
    playStore: 'https://play.google.com/store/apps/details?id=com.meroschool',
  },
  {
    id: 'merolagani',
    name: 'Mero Lagani',
    icon: '📈',
    gradient: 'from-green-500 via-green-600 to-teal-600',
    category: 'Finance',
    description:
      "Nepal's stock market and investment app. Real-time analytics dashboards, portfolio tracking and compliance monitoring.",
    platform: 'iOS · Android',
    tech: ['Flutter', 'Dart', 'PostgreSQL', 'Bloc', 'Retrofit'],
    playStore: 'https://play.google.com/store/apps/details?id=com.merolagani',
  },
  {
    id: 'merohealthcare',
    name: 'Mero Health Care',
    icon: '🏥',
    gradient: 'from-red-500 via-pink-500 to-red-600',
    category: 'Healthcare',
    description:
      'Healthcare management platform with offline data sync, appointment scheduling and medical records management.',
    platform: 'Android',
    tech: ['Flutter', 'Dart', 'Drift', 'Firestore'],
    playStore: 'https://play.google.com/store/apps/details?id=com.merohealthcare',
  },
  {
    id: 'homaale',
    name: 'Homaale',
    icon: '🏠',
    gradient: 'from-orange-500 via-amber-500 to-yellow-500',
    category: 'Real estate',
    description:
      'Property listing and management app with location-based services, push notifications and personalised content for buyers and sellers.',
    platform: 'Android',
    tech: ['Flutter', 'Dart', 'Firestore', 'Bloc'],
    playStore: 'https://play.google.com/store/apps/details?id=com.homaale',
  },
  {
    id: 'onecorner',
    name: 'One Corner',
    icon: '🛍️',
    gradient: 'from-purple-500 via-indigo-500 to-blue-500',
    category: 'E-commerce',
    description:
      'E-commerce platform with push notifications, engagement analytics and a streamlined checkout flow.',
    platform: 'iOS · Android',
    tech: ['Flutter', 'Dart', 'Isar', 'Retrofit', 'WebEngage'],
    playStore: 'https://play.google.com/store/apps/details?id=com.onecorner',
  },
];

const deviceOptions = [
  { type: 'iphone' as const, label: 'iPhone' },
  { type: 'android' as const, label: 'Android' },
  { type: 'tablet' as const, label: 'Tablet' },
];

const Projects = () => {
  const [deviceType, setDeviceType] = useState<'iphone' | 'android' | 'tablet'>('iphone');
  const [selectedApp, setSelectedApp] = useState<App | null>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  const handleSelect = (app: App) => {
    setSelectedApp(app);
    // Stacked layout on small screens puts the details panel below the fold.
    if (window.matchMedia('(max-width: 1023px)').matches) {
      detailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        variants={stagger()}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="max-w-6xl mx-auto"
      >
        <SectionHeading
          id="projects-heading"
          command="adb devices"
          title="Shipped apps"
          subtitle="Pick a device, then tap an app icon to read what went into it."
        />

        {/* Device switcher */}
        <motion.div
          variants={fadeUp}
          role="tablist"
          aria-label="Preview device"
          className="flex justify-center mb-8"
        >
          <div className="inline-flex gap-1 p-1 rounded-lg border border-[#30363d] bg-[#161b22]">
            {deviceOptions.map((option) => {
              const isActive = deviceType === option.type;
              return (
                <motion.button
                  key={option.type}
                  role="tab"
                  aria-selected={isActive}
                  whileTap={tap}
                  onClick={() => setDeviceType(option.type)}
                  className={`relative px-4 sm:px-6 py-2 font-mono text-xs sm:text-sm rounded-md transition-colors ${
                    isActive
                      ? 'text-[#0d1117]'
                      : 'text-[var(--terminal-text-dim)] hover:text-[var(--terminal-text)]'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="device-pill"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      className="absolute inset-0 bg-[#00ff41] rounded-md"
                    />
                  )}
                  <span className="relative">{option.label}</span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* min-w-0: grid items default to min-width:auto, which would let the
              500px tablet mockup dictate the column width instead of shrinking. */}
          <motion.div variants={fadeUp} className="w-full min-w-0">
            <DeviceShowcase deviceType={deviceType}>
              <PhoneScreen
                apps={projects}
                deviceType={deviceType}
                onAppSelect={handleSelect}
              />
            </DeviceShowcase>
          </motion.div>

          <motion.div ref={detailsRef} variants={fadeUp} className="min-w-0 scroll-mt-24">
            <div className="terminal-window p-5 sm:p-6 min-h-[280px]">
              <AnimatePresence mode="wait">
                {selectedApp ? (
                  <motion.div
                    key={selectedApp.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.24 }}
                    className="space-y-5"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br ${selectedApp.gradient} flex items-center justify-center text-2xl`}
                      >
                        {selectedApp.icon}
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-mono text-base sm:text-lg font-bold text-[#00ff41] truncate">
                          {selectedApp.name}
                        </h3>
                        <p className="font-mono text-xs text-[var(--terminal-text-dim)]">
                          {selectedApp.category} · {selectedApp.platform}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed text-[var(--terminal-text)]">
                      {selectedApp.description}
                    </p>

                    <ul className="flex flex-wrap gap-2">
                      {selectedApp.tech.map((tech) => (
                        <li
                          key={tech}
                          className="px-2.5 py-1 rounded border border-[#30363d] bg-[#0d1117] font-mono text-xs text-[var(--terminal-text-dim)]"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {selectedApp.playStore && (
                        <a
                          href={selectedApp.playStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2.5 rounded-md border border-[#00ff41] text-[#00ff41] font-mono text-xs transition-colors hover:bg-[#00ff41] hover:text-[#0d1117]"
                        >
                          <FaGooglePlay size={13} />
                          Play Store
                        </a>
                      )}
                      {selectedApp.appStore && (
                        <a
                          href={selectedApp.appStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2.5 rounded-md border border-[#00d9ff] text-[#00d9ff] font-mono text-xs transition-colors hover:bg-[#00d9ff] hover:text-[#0d1117]"
                        >
                          <FaAppStore size={13} />
                          App Store
                        </a>
                      )}
                    </div>
                  </motion.div>
                ) : (
                  <motion.p
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="font-mono text-sm text-[var(--terminal-text-dim)] py-16 text-center"
                  >
                    Tap an app icon to see the details
                    <span className="terminal-cursor ml-1">▋</span>
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
