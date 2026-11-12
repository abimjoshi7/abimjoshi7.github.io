'use client';

import { motion } from 'framer-motion';
import { FcGoogle } from 'react-icons/fc';
import { useCallback, useState } from 'react';
import AppIcon from './AppIcon';
import { useKathmanduClock } from '@/lib/useKathmanduClock';
import { useTheme } from '@/lib/theme';
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
  const { theme } = useTheme();
  const isLight = theme === 'light';
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
    ? isLight
      ? 'from-[#c9daf2] via-[#d7cceb] to-[#e9d6e4]'
      : 'from-[#101a33] via-[#1b2450] to-[#2c1a45]'
    : isLight
      ? 'from-[#e8eef8] via-[#dde5f5] to-[#eef1f7]'
      : 'from-[#070a12] via-[#0d1220] to-[#05070d]';
  // Three icon rows (9+) need a tighter grid so the dock still clears.
  const compact = apps.length > 8;

  return (
    <div
      className={`w-full h-full bg-gradient-to-br ${wallpaper} relative overflow-hidden select-none`}
    >
      {/* Wallpaper — iOS soft two-lobe gradient; One UI Material You wash. */}
      {isIOS ? (
        <>
          <div
            className="absolute inset-0 opacity-70"
            style={{
              backgroundImage: isLight
                ? `radial-gradient(ellipse 70% 55% at 18% 22%, rgba(96,165,250,0.45) 0%, transparent 60%),
                   radial-gradient(ellipse 75% 60% at 82% 78%, rgba(192,132,252,0.38) 0%, transparent 62%)`
                : `radial-gradient(ellipse 70% 55% at 18% 22%, rgba(56,132,255,0.38) 0%, transparent 60%),
                   radial-gradient(ellipse 75% 60% at 82% 78%, rgba(168,85,247,0.34) 0%, transparent 62%)`,
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              opacity: isLight ? 0.04 : 0.06,
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
              backgroundImage: isLight
                ? `radial-gradient(ellipse 65% 50% at 28% 16%, rgba(129,140,248,0.35) 0%, transparent 58%),
                   radial-gradient(ellipse 70% 55% at 74% 84%, rgba(244,114,182,0.22) 0%, transparent 60%)`
                : `radial-gradient(ellipse 65% 50% at 28% 16%, rgba(99,102,241,0.40) 0%, transparent 58%),
                   radial-gradient(ellipse 70% 55% at 74% 84%, rgba(217,70,239,0.30) 0%, transparent 60%)`,
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              opacity: isLight ? 0.035 : 0.05,
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
            <IOSClockWidget
              time={clock.time}
              date={clock.dateLong}
              compact={compact}
              isLight={isLight}
            />
          ) : (
            <OneUIClockWidget
              time={clock.time}
              date={clock.dateShort}
              compact={compact}
              isLight={isLight}
            />
          )}

          <div
            className={`grid grid-cols-4 min-w-0 ${
              compact
                ? isIOS
                  ? 'gap-x-1.5 gap-y-2'
                  : 'gap-x-1 gap-y-1.5'
                : isIOS
                  ? 'gap-x-2 gap-y-3.5'
                  : 'gap-x-1.5 gap-y-3'
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
                  compact={compact}
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
                  className={`flex items-center gap-1.5 rounded-full backdrop-blur-xl px-3.5 py-1 ${
                    isLight
                      ? 'bg-white/55 border border-black/8'
                      : 'bg-black/30'
                  }`}
                >
                  <svg
                    className={`w-2.5 h-2.5 ${isLight ? 'text-black/55' : 'text-white/85'}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.6}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" d="M21 21l-5.2-5.2m2.2-4.8a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span
                    className={`text-[11px] ${isLight ? 'text-black/65' : 'text-white/90'}`}
                    style={{ fontFamily: IOS_FONT }}
                  >
                    Search
                  </span>
                </div>
              </div>

              <div
                aria-hidden="true"
                className={`mx-2.5 mt-2 mb-1 rounded-3xl backdrop-blur-2xl px-2.5 py-2 ${
                  isLight
                    ? 'bg-white/70 border border-black/8 shadow-[0_8px_28px_rgba(0,0,0,0.12)]'
                    : 'bg-white/[0.16] border border-white/15 shadow-[0_8px_28px_rgba(0,0,0,0.35)]'
                }`}
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
                <div
                  className={`flex items-center gap-2.5 h-8 rounded-full backdrop-blur-xl px-3.5 ${
                    isLight
                      ? 'bg-white/70 border border-black/8'
                      : 'bg-white/[0.13] border border-white/10'
                  }`}
                >
                  <FcGoogle className="w-3.5 h-3.5 shrink-0" />
                  <span
                    className={`flex-1 text-xs ${isLight ? 'text-black/45' : 'text-white/55'}`}
                    style={{ fontFamily: ONE_UI_FONT }}
                  >
                    Search
                  </span>
                  <svg
                    className={`w-3 h-3 shrink-0 ${isLight ? 'text-black/55' : 'text-white/70'}`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
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
 * height kept tight so the icon grid still clears the dock.
 */
const IOSClockWidget = ({
  time,
  date,
  compact = false,
  isLight,
}: {
  time: string;
  date: string;
  compact?: boolean;
  isLight: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.96 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    aria-hidden="true"
    className={`w-full min-w-0 max-w-full box-border shrink-0 rounded-[20px] backdrop-blur-2xl flex flex-col ${
      isLight
        ? 'bg-white/55 border border-black/8 shadow-[0_8px_24px_rgba(0,0,0,0.1)]'
        : 'bg-white/[0.14] border border-white/15 shadow-[0_8px_24px_rgba(0,0,0,0.3)]'
    } ${compact ? 'mb-2 px-3 py-2 gap-0.5' : 'mb-3 px-3.5 py-2.5 gap-1'}`}
    style={{ fontFamily: IOS_FONT }}
  >
    <div className="flex items-start justify-between gap-2 min-w-0">
      <span
        className={`text-[10px] font-semibold tracking-[0.08em] uppercase truncate ${
          isLight ? 'text-black/45' : 'text-white/60'
        }`}
      >
        Kathmandu
      </span>
      <span
        className={`text-[10px] font-semibold shrink-0 ${
          isLight ? 'text-black/45' : 'text-white/60'
        }`}
      >
        +05:45
      </span>
    </div>

    <div
      className={`font-light leading-none tracking-tight tabular-nums truncate ${
        isLight ? 'text-black/90' : 'text-white'
      } ${compact ? 'text-[28px]' : 'text-[32px]'}`}
    >
      {time}
    </div>

    <div
      className={`text-[11px] font-medium truncate ${
        isLight ? 'text-black/55' : 'text-white/70'
      }`}
    >
      {date}
    </div>
  </motion.div>
);

/**
 * One UI clock — text on the wallpaper, constrained to the padded content width.
 */
const OneUIClockWidget = ({
  time,
  date,
  compact = false,
  isLight,
}: {
  time: string;
  date: string;
  compact?: boolean;
  isLight: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: -8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    aria-hidden="true"
    className={`w-full min-w-0 max-w-full shrink-0 px-1 ${
      compact ? 'pt-0.5 pb-2' : 'pt-1 pb-3'
    }`}
    style={{ fontFamily: ONE_UI_FONT }}
  >
    <div
      className={`font-extralight leading-none tracking-tight tabular-nums truncate ${
        isLight
          ? 'text-black/90 drop-shadow-[0_1px_2px_rgba(255,255,255,0.5)]'
          : 'text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]'
      } ${compact ? 'text-[32px]' : 'text-[36px]'}`}
    >
      {time}
    </div>
    <div
      className={`mt-1 flex items-center gap-1.5 min-w-0 text-[11px] font-medium ${
        isLight
          ? 'text-black/65 drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]'
          : 'text-white/80 drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]'
      }`}
    >
      <span className="truncate min-w-0">{date}</span>
      <span className={`shrink-0 ${isLight ? 'text-black/25' : 'text-white/35'}`}>|</span>
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
