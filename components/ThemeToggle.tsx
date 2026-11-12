'use client';

import { motion } from 'framer-motion';
import { HiMoon, HiSun } from 'react-icons/hi';
import { useTheme } from '@/lib/theme';
import { tap } from '@/lib/motion';

const ThemeToggle = ({ className = '' }: { className?: string }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      type="button"
      whileTap={tap}
      onClick={toggleTheme}
      className={`relative p-2 rounded-md border border-terminal-border text-terminal-green transition-colors hover:border-terminal-green ${className}`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
    >
      {/* CSS-driven icons avoid a hydration flash when the stored theme differs from SSR. */}
      <HiSun
        size={18}
        className="block [[data-theme=light]_&]:hidden"
        aria-hidden
      />
      <HiMoon
        size={18}
        className="hidden [[data-theme=light]_&]:block"
        aria-hidden
      />
    </motion.button>
  );
};

export default ThemeToggle;
