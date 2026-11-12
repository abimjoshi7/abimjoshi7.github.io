'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import { FaGooglePlay, FaAppStore } from 'react-icons/fa';
import { HiExternalLink } from 'react-icons/hi';
import DeviceShowcase from './DeviceShowcase';
import PhoneScreen from './PhoneScreen';
import SectionHeading from './SectionHeading';
import { fadeUp, stagger, tap, viewportOnce } from '@/lib/motion';

import { publishedApps, webProjects, type PublishedApp } from '@/lib/site';

const deviceOptions = [
  { type: 'android' as const, label: 'Android' },
  { type: 'iphone' as const, label: 'iOS' },
];

const Projects = () => {
  // Android first — latest Attatva apps are Play-only.
  const [deviceType, setDeviceType] = useState<'iphone' | 'android'>('android');
  const [selectedApp, setSelectedApp] = useState<PublishedApp | null>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  // Each mockup shows only apps listed on that platform's store.
  const isIOSDevice = deviceType === 'iphone';
  const visibleApps = useMemo(
    () =>
      publishedApps.filter((app) =>
        isIOSDevice ? Boolean(app.appStore) : Boolean(app.playStore),
      ),
    [isIOSDevice],
  );
  const storeFor = (app: PublishedApp) => (isIOSDevice ? app.appStore : app.playStore);
  const platformsFor = (app: PublishedApp) =>
    [app.appStore ? 'iOS' : null, app.playStore ? 'Android' : null]
      .filter(Boolean)
      .join(' · ') || 'Unlisted';

  useEffect(() => {
    if (selectedApp && !visibleApps.some((app) => app.id === selectedApp.id)) {
      setSelectedApp(null);
    }
  }, [visibleApps, selectedApp]);

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
          command="find ~/shipped \\( -name '*.apk' -o -name '*.ipa' \\) | wc -l"
          title="Projects"
          subtitle="Shipped work — judged by return visits, calm performance, and whether it still works when the network does not."
        />

        {/* Web platforms lead the section. */}
        <motion.ul
          variants={stagger(0.08)}
          className="grid sm:grid-cols-2 gap-4 sm:gap-5 mb-14 sm:mb-20 items-stretch"
        >
          {webProjects.map((project) => (
            <motion.li
              key={project.id}
              variants={fadeUp}
              className="terminal-window panel-interactive p-5 sm:p-6 flex flex-col h-full"
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className={`w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-xl`}
                >
                  {project.icon}
                </div>
                <div className="min-w-0">
                  <h3 className="font-mono text-base font-bold text-terminal-green">
                    {project.name}
                  </h3>
                  <p className="font-mono text-xs text-terminal-text-dim">
                    {project.category} · Web
                  </p>
                </div>
              </div>

              <p className="text-sm font-medium leading-snug text-terminal-text mb-2">
                {project.outcome}
              </p>
              <p className="text-sm leading-relaxed text-terminal-text-dim mb-4">
                {project.description}
              </p>

              <div className="mt-auto flex flex-wrap items-center gap-3">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-md border border-terminal-green text-terminal-green font-mono text-xs transition-colors hover:bg-terminal-green hover:text-terminal-on-accent"
                >
                  <HiExternalLink size={14} />
                  Visit site
                </a>
                {project.appsComingSoon && (
                  <span className="font-mono text-[11px] text-terminal-text-dim">
                    iOS &amp; Android apps coming soon
                  </span>
                )}
              </div>
            </motion.li>
          ))}
        </motion.ul>

        <motion.h3
          variants={fadeUp}
          className="font-mono text-lg sm:text-xl font-bold text-terminal-green mb-2"
        >
          Published apps
        </motion.h3>
        <motion.p
          variants={fadeUp}
          className="text-sm text-terminal-text-dim mb-6"
        >
          Thirteen apps in the stores — each one had to earn a second open. Tap an
          icon for details and a store link.
        </motion.p>

        <motion.ul
          variants={fadeUp}
          className="grid sm:grid-cols-2 gap-2 sm:gap-3 mb-8 items-stretch"
        >
          {publishedApps.slice(0, 4).map((app) => (
            <li
              key={`teaser-${app.id}`}
              className="flex gap-2.5 items-start rounded-md border border-terminal-border bg-terminal-bg-alt/60 px-3 py-2.5 h-full min-h-[4.25rem]"
            >
              <span className="text-base shrink-0" aria-hidden="true">
                {app.icon}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-mono text-[11px] text-terminal-green truncate">
                  {app.name}
                </span>
                <span className="block text-xs leading-snug text-terminal-text mt-0.5 line-clamp-2">
                  {app.outcome}
                </span>
              </span>
            </li>
          ))}
        </motion.ul>

        {/* Device switcher */}
        <motion.div
          variants={fadeUp}
          role="tablist"
          aria-label="Preview device"
          className="flex justify-center mb-8"
        >
          <div className="inline-flex gap-1 p-1 rounded-lg border border-terminal-border bg-terminal-bg-alt">
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
                      ? 'text-terminal-on-accent'
                      : 'text-terminal-text-dim hover:text-terminal-text'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="device-pill"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      className="absolute inset-0 bg-terminal-green rounded-md"
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
                apps={visibleApps}
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
                        <h3 className="font-mono text-base sm:text-lg font-bold text-terminal-green truncate">
                          {selectedApp.name}
                        </h3>
                        <p className="font-mono text-xs text-terminal-text-dim">
                          {selectedApp.category} · {platformsFor(selectedApp)}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm font-medium leading-snug text-terminal-text">
                      {selectedApp.outcome}
                    </p>
                    <p className="text-sm leading-relaxed text-terminal-text-dim">
                      {selectedApp.description}
                    </p>

                    <ul className="flex flex-wrap gap-2">
                      {selectedApp.tech.map((tech) => (
                        <li
                          key={tech}
                          className="px-2.5 py-1 rounded border border-terminal-border bg-terminal-bg font-mono text-xs text-terminal-text-dim"
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
                          className="flex items-center gap-2 px-4 py-2.5 rounded-md border border-terminal-green text-terminal-green font-mono text-xs transition-colors hover:bg-terminal-green hover:text-terminal-on-accent"
                        >
                          {isIOSDevice ? <FaAppStore size={13} /> : <FaGooglePlay size={13} />}
                          {isIOSDevice ? 'View on App Store' : 'View on Play Store'}
                        </a>
                      ) : (
                        <p className="font-mono text-xs text-terminal-text-dim">
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
                    className="font-mono text-sm text-terminal-text-dim py-16 text-center"
                  >
                    Tap an app — what it does for the user, how it ships
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
