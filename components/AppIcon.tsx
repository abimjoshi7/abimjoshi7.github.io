'use client';

import { motion } from 'framer-motion';

interface AppIconProps {
  name: string;
  icon: string;
  gradient: string;
  /** iOS masks icons with a 22.37% squircle; One UI's adaptive mask is rounder. */
  deviceType: 'iphone' | 'android';
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
  onClick,
  isSelected = false,
}: AppIconProps) => {
  const isIOS = deviceType === 'iphone';
  // 56px icon: iOS 56 * 0.2237 ~ 13px, Android's adaptive mask sits nearer 30%.
  const radius = isIOS ? 'rounded-[13px]' : 'rounded-[17px]';

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
      aria-label={`${name} — view details`}
      className="flex flex-col items-center w-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-[13px]"
    >
      <motion.span
        className={`relative block w-14 h-14 ${radius} bg-gradient-to-br ${gradient} shadow-[0_4px_12px_rgba(0,0,0,0.35)] flex items-center justify-center text-2xl overflow-hidden`}
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
            className={`absolute inset-0 ${radius} ring-[2px] ring-inset ring-[#00ff41] bg-[#00ff41]/10`}
          />
        )}
      </motion.span>

      <span
        className={`mt-[6px] w-full truncate text-center text-white ${
          isIOS ? 'text-[11px] font-medium' : 'text-[10.5px] font-normal'
        } leading-tight drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]`}
        style={{ fontFamily: isIOS ? IOS_FONT : ONE_UI_FONT }}
      >
        {name}
      </span>
    </motion.button>
  );
};

export default AppIcon;
