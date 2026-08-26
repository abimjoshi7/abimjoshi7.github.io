'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import AppIcon from './AppIcon';
import {
  IOSPhoneIcon,
  IOSMessagesIcon,
  IOSSafariIcon,
  IOSMusicIcon,
  AndroidPhoneIcon,
  AndroidMessagesIcon,
  AndroidChromeIcon,
  AndroidMusicIcon,
} from './NativeIcons';

/**
 * Only the fields needed to render a home-screen icon. Kept structural rather
 * than importing the full App type from Projects, which would be circular.
 */
interface HomeScreenApp {
  id: string;
  name: string;
  icon: string;
  gradient: string;
}

interface PhoneScreenProps<T extends HomeScreenApp> {
  apps: T[];
  onAppSelect?: (app: T) => void;
  deviceType: 'iphone' | 'android';
}

const PhoneScreen = <T extends HomeScreenApp>({ apps, onAppSelect, deviceType }: PhoneScreenProps<T>) => {
  const [selectedApp, setSelectedApp] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState<string>('');
  const [currentDate, setCurrentDate] = useState<string>('');

  useEffect(() => {
    const updateKathmanduTime = () => {
      const now = new Date();

      // Format time for Kathmandu timezone (Asia/Kathmandu - UTC+5:45)
      const timeString = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kathmandu',
        hour: 'numeric',
        minute: '2-digit',
        hour12: false,
      });

      // Format date for Kathmandu timezone
      const dateString = now.toLocaleDateString('en-US', {
        timeZone: 'Asia/Kathmandu',
        weekday: 'long',
        month: 'long',
        day: 'numeric',
      });

      setCurrentTime(timeString);
      setCurrentDate(dateString);
    };

    // Update immediately
    updateKathmanduTime();

    // Update every minute
    const interval = setInterval(updateKathmanduTime, 60000);

    return () => clearInterval(interval);
  }, []);

  const handleAppClick = (app: T) => {
    setSelectedApp(app.id);
    onAppSelect?.(app);
    setTimeout(() => setSelectedApp(null), 1000);
  };

  const gridCols = 'grid-cols-4';

  // Native OS-specific wallpapers
  const isIOS = deviceType === 'iphone';
  const wallpaper = isIOS
    ? 'from-slate-900 via-blue-950 to-purple-950' // iOS-style gradient
    : 'from-slate-950 via-slate-900 to-slate-950'; // Material Design 3 dark

  return (
    <div className={`w-full h-full bg-gradient-to-br ${wallpaper} relative overflow-hidden`}>
      {/* Native OS Wallpaper Patterns */}
      {isIOS ? (
        // iOS dynamic wallpaper effect
        <>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(ellipse at 20% 30%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                               radial-gradient(ellipse at 80% 70%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)`,
            }} />
          </div>
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.3) 1px, transparent 0)`,
              backgroundSize: '50px 50px',
            }} />
          </div>
        </>
      ) : (
        // Material You wallpaper with subtle pattern
        <>
          <div className="absolute inset-0 opacity-15">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(ellipse at 30% 20%, rgba(99, 102, 241, 0.4) 0%, transparent 50%),
                               radial-gradient(ellipse at 70% 80%, rgba(168, 85, 247, 0.4) 0%, transparent 50%)`,
            }} />
          </div>
          <div className="absolute inset-0 opacity-8">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0.02) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.02) 75%, rgba(255,255,255,0.02))`,
              backgroundSize: '60px 60px',
            }} />
          </div>
        </>
      )}

      {/* Scrollable App Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative h-full overflow-y-auto overflow-x-hidden px-4 py-4 scrollbar-hide"
      >
        {/* Native OS Widgets */}
        {isIOS ? (
          // iOS Lock Screen Widget Style
          <>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-8 text-center"
            >
              <div className="text-white text-6xl font-extralight tracking-tight mb-2" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif' }}>
                {currentTime || '9:41'}
              </div>
              <div className="text-white/80 text-base font-medium tracking-wide" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif' }}>
                {currentDate || 'Friday, October 18'}
              </div>
            </motion.div>

            {/* iOS Spotlight Search */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-7 px-2"
            >
              <div className="bg-white/15 backdrop-blur-2xl rounded-[14px] px-4 py-3 flex items-center gap-3 shadow-lg border border-white/10">
                <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="text-white/60 text-[15px] font-normal" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif' }}>
                  Search
                </span>
              </div>
            </motion.div>
          </>
        ) : (
          // Android Material You Widget Style
          <>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6 px-2"
            >
              <div className="bg-white/8 backdrop-blur-xl rounded-[28px] p-5 border border-white/10 shadow-2xl">
                <div className="text-white text-5xl font-light tracking-tight mb-2" style={{ fontFamily: 'Roboto, system-ui, sans-serif' }}>
                  {currentTime || '9:41'}
                </div>
                <div className="text-white/70 text-sm font-medium" style={{ fontFamily: 'Roboto, system-ui, sans-serif' }}>
                  {currentDate || 'Friday, October 18'}
                </div>
              </div>
            </motion.div>

            {/* Material Design Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6 px-2"
            >
              <div className="bg-white/12 backdrop-blur-xl rounded-full px-5 py-3.5 flex items-center gap-3 shadow-lg border border-white/10">
                <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="text-white/60 text-sm font-normal" style={{ fontFamily: 'Roboto, system-ui, sans-serif' }}>
                  Search apps
                </span>
              </div>
            </motion.div>
          </>
        )}

        {/* Apps Grid */}
        <div className={`grid ${gridCols} gap-3 pb-6 place-items-center`}>
          {apps.map((app, index) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.4 + index * 0.05,
                type: 'spring',
                stiffness: 260,
                damping: 20,
              }}
              className="w-full flex justify-center"
            >
              <AppIcon
                name={app.name}
                icon={app.icon}
                gradient={app.gradient}
                onClick={() => handleAppClick(app)}
                isSelected={selectedApp === app.id}
              />
            </motion.div>
          ))}

        </div>

        {/* Native OS Dock */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="sticky bottom-0 left-0 right-0 mt-8 mb-2"
        >
          {isIOS ? (
            // Decorative only: these are OS chrome, not controls, so they stay out
            // of the tab order and the accessibility tree.
            <div aria-hidden="true" className="bg-white/20 backdrop-blur-2xl rounded-[26px] p-2.5 mx-auto max-w-fit shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-white/20">
              <div className="flex gap-3 items-center justify-center">
                {/* Native iOS dock apps with authentic icons */}
                <span className="relative group block">
                  <IOSPhoneIcon className="w-[52px] h-[52px] drop-shadow-[0_4px_12px_rgba(52,199,89,0.5)]" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[13px] pointer-events-none" />
                </span>
                <span className="relative group block">
                  <IOSMessagesIcon className="w-[52px] h-[52px] drop-shadow-[0_4px_12px_rgba(52,199,89,0.5)]" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[13px] pointer-events-none" />
                </span>
                <span className="relative group block">
                  <IOSSafariIcon className="w-[52px] h-[52px] drop-shadow-[0_4px_12px_rgba(10,132,255,0.5)]" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[13px] pointer-events-none" />
                </span>
                <span className="relative group block">
                  <IOSMusicIcon className="w-[52px] h-[52px] drop-shadow-[0_4px_12px_rgba(255,59,48,0.5)]" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[13px] pointer-events-none" />
                </span>
              </div>
            </div>
          ) : (
            // Decorative only — see the iOS branch above.
            <div aria-hidden="true" className="bg-white/10 backdrop-blur-xl rounded-full p-2 mx-auto max-w-fit shadow-lg border border-white/10">
              <div className="flex gap-3 items-center justify-center px-2">
                {/* Native Android dock apps with Material Design icons */}
                <span className="relative block">
                  <AndroidPhoneIcon className="w-[50px] h-[50px] drop-shadow-[0_2px_8px_rgba(76,175,80,0.6)]" />
                </span>
                <span className="relative block">
                  <AndroidMessagesIcon className="w-[50px] h-[50px] drop-shadow-[0_2px_8px_rgba(30,136,229,0.6)]" />
                </span>
                <span className="relative block">
                  <AndroidChromeIcon className="w-[50px] h-[50px] drop-shadow-[0_2px_8px_rgba(66,133,244,0.6)]" />
                </span>
                <span className="relative block">
                  <AndroidMusicIcon className="w-[50px] h-[50px] drop-shadow-[0_2px_8px_rgba(255,111,0,0.6)]" />
                </span>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>

    </div>
  );
};

export default PhoneScreen;
