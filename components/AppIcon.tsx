'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/lib/theme';

interface AppIconProps {
  name: string;
  icon: string;
  gradient: string;
  /** iOS masks icons with a 22.37% squircle; One UI's adaptive mask is rounder. */
  deviceType: 'iphone' | 'android';
  /** Smaller tiles when the home screen needs a third icon row. */
  compact?: boolean;
  onClick?: () => void;
  isSelected?: boolean;
}

const IOS_FONT = '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif';
const ONE_UI_FONT = 'Roboto, "Samsung Sharp Sans", system-ui, sans-serif';

const AppIcon = ({
  name,
  icon,
  gradient,
  deviceType,
  compact = false,
  onClick,
  isSelected = false,
}: AppIconProps) => {
  const isIOS = deviceType === 'iphone';
  const { theme } = useTheme();
  const isLight = theme === 'light';
  // 56px icon: iOS 56 * 0.2237 ~ 13px, Android's adaptive mask sits nearer 30%.
  // Compact (48px) keeps a third row clear of the dock chrome.
  const size = compact ? 'w-12 h-12' : 'w-14 h-14';
  const radius = compact
    ? isIOS
      ? 'rounded-[11px]'
      : 'rounded-[14px]'
    : isIOS
      ? 'rounded-[13px]'
      : 'rounded-[17px]';
  const glyph = compact ? 'text-xl' : 'text-2xl';

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
      aria-label={`${name} — view details`}
      className={`flex flex-col items-center w-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-[13px] ${
        isLight ? 'focus-visible:ring-black/40' : 'focus-visible:ring-white/70'
      }`}
    >
      <motion.span
        className={`relative block ${size} ${radius} bg-gradient-to-br ${gradient} shadow-[0_4px_12px_rgba(0,0,0,0.35)] flex items-center justify-center ${glyph} overflow-hidden`}
        animate={{ scale: isSelected ? [1, 1.06, 1] : 1 }}
        transition={{
          duration: 0.4,
          repeat: isSelected ? Infinity : 0,
          repeatDelay: 0.6,
          ease: 'easeInOut',
        }}
      >
        {/* Icon-sheet gloss: bright at the top-left, falling away to the corner */}
        <span className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/8 to-transparent" />
        <span className="absolute inset-0 bg-gradient-to-tl from-black/15 via-transparent to-transparent" />
        {/* Hairline the OS draws so light icons stay separated from the wallpaper */}
        <span className={`absolute inset-0 ${radius} ring-1 ring-inset ring-black/10`} />

        <span className="relative z-10 drop-shadow-[0_1px_3px_rgba(0,0,0,0.35)]">{icon}</span>

        {isSelected && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.35, 0.7, 0.35] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className={`absolute inset-0 ${radius} ring-[2px] ring-inset ring-terminal-green bg-terminal-green/10`}
          />
        )}
      </motion.span>

      <span
        className={`mt-[6px] w-full truncate text-center leading-tight ${
          isLight
            ? 'text-black/80 drop-shadow-[0_1px_1px_rgba(255,255,255,0.6)]'
            : 'text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]'
        } ${isIOS ? 'text-[11px] font-medium' : 'text-[10.5px] font-normal'}`}
        style={{ fontFamily: isIOS ? IOS_FONT : ONE_UI_FONT }}
      >
        {name}
      </span>
    </motion.button>
  );
};

export default AppIcon;
