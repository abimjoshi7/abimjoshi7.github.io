'use client';

import { motion } from 'framer-motion';
import { FcGoogle } from 'react-icons/fc';
import { useCallback, useState } from 'react';
import AppIcon from './AppIcon';
import { useKathmanduClock } from '@/lib/useKathmanduClock';
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

const IOS_FONT = '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif';
const ONE_UI_FONT = 'Roboto, "Samsung Sharp Sans", system-ui, sans-serif';

const PhoneScreen = <T extends HomeScreenApp>({
  apps,
  onAppSelect,
  deviceType,
}: PhoneScreenProps<T>) => {
  const isIOS = deviceType === 'iphone';
  const clock = useKathmanduClock();
  const [selectedApp, setSelectedApp] = useState<string | null>(null);

  const handleAppClick = useCallback(
    (app: T) => {
      setSelectedApp(app.id);
      onAppSelect?.(app);
      window.setTimeout(() => setSelectedApp(null), 1000);
    },
    [onAppSelect],
  );

  const wallpaper = isIOS
    ? 'from-[#101a33] via-[#1b2450] to-[#2c1a45]'
    : 'from-[#070a12] via-[#0d1220] to-[#05070d]';

  return (
    <div
      className={`w-full h-full bg-gradient-to-br ${wallpaper} relative overflow-hidden select-none`}
    >
      {/* Wallpaper — iOS soft two-lobe gradient; One UI darker Material You wash. */}
      {isIOS ? (
        <>
          <div
            className="absolute inset-0 opacity-70"
            style={{
              backgroundImage: `radial-gradient(ellipse 70% 55% at 18% 22%, rgba(56,132,255,0.38) 0%, transparent 60%),
                                radial-gradient(ellipse 75% 60% at 82% 78%, rgba(168,85,247,0.34) 0%, transparent 62%)`,
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.35) 1px, transparent 0)',
              backgroundSize: '48px 48px',
            }}
          />
        </>
      ) : (
        <>
          <div
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage: `radial-gradient(ellipse 65% 50% at 28% 16%, rgba(99,102,241,0.40) 0%, transparent 58%),
                                radial-gradient(ellipse 70% 55% at 74% 84%, rgba(217,70,239,0.30) 0%, transparent 60%)`,
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                'linear-gradient(45deg, rgba(255,255,255,0.25) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.25) 75%)',
              backgroundSize: '56px 56px',
            }}
          />
        </>
      )}

      {/* Single home screen: widget + icons above fixed search / dock chrome. */}
      <div className="relative h-full flex flex-col min-h-0">
        <div
          className={`flex-1 min-h-0 min-w-0 overflow-hidden flex flex-col ${
            isIOS ? 'px-3.5 pt-2' : 'px-3 pt-1.5'
          }`}
        >
          {isIOS ? (
            <IOSClockWidget time={clock.time} date={clock.dateLong} />
          ) : (
            <OneUIClockWidget time={clock.time} date={clock.dateShort} />
          )}

          <div
            className={`grid grid-cols-4 min-w-0 ${
              isIOS ? 'gap-x-2 gap-y-3.5' : 'gap-x-1.5 gap-y-3'
            }`}
          >
            {apps.map((app, index) => (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.18 + index * 0.04,
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                }}
                className="flex justify-center min-w-0"
              >
                <AppIcon
                  name={app.name}
                  icon={app.icon}
                  gradient={app.gradient}
                  deviceType={deviceType}
                  onClick={() => handleAppClick(app)}
                  isSelected={selectedApp === app.id}
                />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="shrink-0">
          {isIOS ? (
            <>
              <div className="flex justify-center mt-2">
                <div
                  aria-hidden="true"
                  className="flex items-center gap-1.5 rounded-full bg-black/30 backdrop-blur-xl px-3.5 py-1"
                >
                  <svg
                    className="w-2.5 h-2.5 text-white/85"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.6}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" d="M21 21l-5.2-5.2m2.2-4.8a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span className="text-white/90 text-[11px]" style={{ fontFamily: IOS_FONT }}>
                    Search
                  </span>
                </div>
              </div>

              <div
                aria-hidden="true"
                className="mx-2.5 mt-2 mb-1 rounded-3xl bg-white/[0.16] backdrop-blur-2xl border border-white/15 px-2.5 py-2 shadow-[0_8px_28px_rgba(0,0,0,0.35)]"
              >
                <div className="flex items-center justify-around">
                  <IOSPhoneIcon className="w-11 h-11 drop-shadow-[0_3px_8px_rgba(0,0,0,0.35)]" />
                  <IOSMessagesIcon className="w-11 h-11 drop-shadow-[0_3px_8px_rgba(0,0,0,0.35)]" />
                  <IOSSafariIcon className="w-11 h-11 drop-shadow-[0_3px_8px_rgba(0,0,0,0.35)]" />
                  <IOSMusicIcon className="w-11 h-11 drop-shadow-[0_3px_8px_rgba(0,0,0,0.35)]" />
                </div>
              </div>
            </>
          ) : (
            <>
              <div aria-hidden="true" className="mx-3.5 mt-1.5">
                <div className="flex items-center gap-2.5 h-8 rounded-full bg-white/[0.13] backdrop-blur-xl border border-white/10 px-3.5">
                  <FcGoogle className="w-3.5 h-3.5 shrink-0" />
                  <span
                    className="flex-1 text-white/55 text-xs"
                    style={{ fontFamily: ONE_UI_FONT }}
                  >
                    Search
                  </span>
                  <svg className="w-3 h-3 text-white/70 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14a3 3 0 003-3V6a3 3 0 10-6 0v5a3 3 0 003 3zm5-3a5 5 0 01-10 0H5a7 7 0 006 6.92V21h2v-3.08A7 7 0 0019 11h-2z" />
                  </svg>
                </div>
              </div>

              <div
                aria-hidden="true"
                className="flex items-center justify-around px-5 mt-2 mb-1"
              >
                <AndroidPhoneIcon className="w-11 h-11 drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]" />
                <AndroidMessagesIcon className="w-11 h-11 drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]" />
                <AndroidChromeIcon className="w-11 h-11 drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]" />
                <AndroidMusicIcon className="w-11 h-11 drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]" />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

/**
 * iOS medium clock widget — full content width inside the screen padding,
 * height kept tight so two icon rows still clear the dock.
 */
const IOSClockWidget = ({ time, date }: { time: string; date: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.96 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    aria-hidden="true"
    className="w-full min-w-0 max-w-full box-border shrink-0 mb-3 rounded-[20px] bg-white/[0.14] backdrop-blur-2xl border border-white/15 shadow-[0_8px_24px_rgba(0,0,0,0.3)] px-3.5 py-2.5 flex flex-col gap-1"
    style={{ fontFamily: IOS_FONT }}
  >
    <div className="flex items-start justify-between gap-2 min-w-0">
      <span className="text-white/60 text-[10px] font-semibold tracking-[0.08em] uppercase truncate">
        Kathmandu
      </span>
      <span className="text-white/60 text-[10px] font-semibold shrink-0">+05:45</span>
    </div>

    <div className="text-white text-[32px] font-light leading-none tracking-tight tabular-nums truncate">
      {time}
    </div>

    <div className="text-white/70 text-[11px] font-medium truncate">{date}</div>
  </motion.div>
);

/**
 * One UI clock — text on the wallpaper, constrained to the padded content width.
 */
const OneUIClockWidget = ({ time, date }: { time: string; date: string }) => (
  <motion.div
    initial={{ opacity: 0, y: -8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    aria-hidden="true"
    className="w-full min-w-0 max-w-full shrink-0 px-1 pt-1 pb-3"
    style={{ fontFamily: ONE_UI_FONT }}
  >
    <div className="text-white text-[36px] font-extralight leading-none tracking-tight tabular-nums drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] truncate">
      {time}
    </div>
    <div className="mt-1 flex items-center gap-1.5 min-w-0 text-white/80 text-[11px] font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
      <span className="truncate min-w-0">{date}</span>
      <span className="text-white/35 shrink-0">|</span>
      <span className="flex items-center gap-1 shrink-0">
        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
          <circle cx="12" cy="12" r="4" />
          <path strokeLinecap="round" d="M12 3v2m0 14v2M3 12h2m14 0h2M5.6 5.6l1.4 1.4m10 10l1.4 1.4m0-12.8l-1.4 1.4m-10 10l-1.4 1.4" />
        </svg>
        Kathmandu
      </span>
    </div>
  </motion.div>
);

export default PhoneScreen;
