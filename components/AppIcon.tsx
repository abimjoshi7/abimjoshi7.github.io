'use client';

import { motion } from 'framer-motion';

interface AppIconProps {
  name: string;
  icon: string;
  gradient: string;
  onClick?: () => void;
  isSelected?: boolean;
}

const AppIcon = ({ name, icon, gradient, onClick, isSelected = false }: AppIconProps) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      className="flex flex-col items-center gap-1.5 w-full cursor-pointer group"
    >
      <motion.div
        className={`relative w-14 h-14 rounded-[14px] bg-gradient-to-br ${gradient} shadow-[0_4px_12px_rgba(0,0,0,0.3)] flex items-center justify-center text-2xl overflow-hidden border border-black/10`}
        animate={{
          scale: isSelected ? [1, 1.08, 1] : 1,
        }}
        transition={{
          duration: 0.4,
          repeat: isSelected ? Infinity : 0,
          repeatDelay: 0.6,
          ease: "easeInOut"
        }}
      >
        {/* Enhanced iOS-style glass morphism shine effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/35 via-white/10 to-transparent opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-tl from-black/10 via-transparent to-transparent" />

        {/* Icon */}
        <div className="relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]">{icon}</div>

        {/* Native iOS Selection Indicator */}
        {isSelected && (
          <>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="absolute inset-0 border-[2.5px] border-[#00ff41] rounded-[14px] shadow-[0_0_20px_rgba(0,255,65,0.6),inset_0_0_15px_rgba(0,255,65,0.2)]"
            />
            {/* Glow effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute inset-0 bg-[#00ff41]/10 rounded-[14px]"
            />
          </>
        )}

        {/* iOS-style badge (optional - uncomment to enable) */}
        {/* <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white text-[10px] font-bold border-2 border-black/90 shadow-lg">
          3
        </div> */}
      </motion.div>

      {/* iOS-style app label with better shadow */}
      <span
        className="text-white text-[11px] font-medium text-center leading-tight w-full truncate drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
        style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", Roboto, system-ui, sans-serif' }}
      >
        {name}
      </span>
    </motion.button>
  );
};

export default AppIcon;
