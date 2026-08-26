'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaGooglePlay, FaAppStore } from 'react-icons/fa';
import { HiExternalLink } from 'react-icons/hi';
import DeviceShowcase from './DeviceShowcase';
import PhoneScreen from './PhoneScreen';
import SectionHeading from './SectionHeading';
import { fadeUp, stagger, tap, viewportOnce } from '@/lib/motion';

import { publishedApps, webProjects, type PublishedApp } from '@/lib/site';

const deviceOptions = [
  { type: 'iphone' as const, label: 'iOS' },
  { type: 'android' as const, label: 'Android' },
];

const Projects = () => {
  const [deviceType, setDeviceType] = useState<'iphone' | 'android'>('iphone');
  const [selectedApp, setSelectedApp] = useState<PublishedApp | null>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  // Each mockup links only to the store for the platform it represents.
  const isIOSDevice = deviceType === 'iphone';
  const storeFor = (app: PublishedApp) => (isIOSDevice ? app.appStore : app.playStore);
  const platformsFor = (app: PublishedApp) =>
    [app.appStore ? 'iOS' : null, app.playStore ? 'Android' : null]
      .filter(Boolean)
      .join(' · ') || 'Unlisted';

  const handleSelect = (app: PublishedApp) => {
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
          command="ls projects/"
          title="Projects"
          subtitle="Web platforms I built end to end, plus the apps I've shipped to the stores."
        />

        {/* Web platforms lead the section. */}
        <motion.ul
          variants={stagger(0.08)}
          className="grid sm:grid-cols-2 gap-4 sm:gap-5 mb-14 sm:mb-20"
        >
          {webProjects.map((project) => (
            <motion.li
              key={project.id}
              variants={fadeUp}
              className="terminal-window panel-interactive p-5 sm:p-6 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className={`w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-xl`}
                >
                  {project.icon}
                </div>
                <div className="min-w-0">
                  <h3 className="font-mono text-base font-bold text-[#00ff41]">
                    {project.name}
                  </h3>
                  <p className="font-mono text-xs text-[var(--terminal-text-dim)]">
                    {project.category} · Web
                  </p>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-[var(--terminal-text)] mb-4">
                {project.description}
              </p>

              <div className="mt-auto flex flex-wrap items-center gap-3">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-md border border-[#00ff41] text-[#00ff41] font-mono text-xs transition-colors hover:bg-[#00ff41] hover:text-[#0d1117]"
                >
                  <HiExternalLink size={14} />
                  Visit site
                </a>
                {project.appsComingSoon && (
                  <span className="font-mono text-[11px] text-[var(--terminal-text-dim)]">
                    iOS &amp; Android apps coming soon
                  </span>
                )}
              </div>
            </motion.li>
          ))}
        </motion.ul>

        <motion.h3
          variants={fadeUp}
          className="font-mono text-lg sm:text-xl font-bold text-[#00ff41] mb-2"
        >
          Published apps
        </motion.h3>
        <motion.p
          variants={fadeUp}
          className="text-sm text-[var(--terminal-text-dim)] mb-8"
        >
          Pick a platform, then tap an app icon — the link goes straight to that
          platform&apos;s store.
        </motion.p>

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
              320px mockup dictate the column width instead of shrinking. */}
          <motion.div variants={fadeUp} className="w-full min-w-0">
            <DeviceShowcase deviceType={deviceType}>
              <PhoneScreen
                apps={publishedApps}
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
                          {selectedApp.category} · {platformsFor(selectedApp)}
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
                      {storeFor(selectedApp) ? (
                        <a
                          href={storeFor(selectedApp)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2.5 rounded-md border border-[#00ff41] text-[#00ff41] font-mono text-xs transition-colors hover:bg-[#00ff41] hover:text-[#0d1117]"
                        >
                          {isIOSDevice ? <FaAppStore size={13} /> : <FaGooglePlay size={13} />}
                          {isIOSDevice ? 'View on App Store' : 'View on Play Store'}
                        </a>
                      ) : (
                        <p className="font-mono text-xs text-[var(--terminal-text-dim)]">
                          Not published on {isIOSDevice ? 'iOS' : 'Android'}.
                        </p>
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
