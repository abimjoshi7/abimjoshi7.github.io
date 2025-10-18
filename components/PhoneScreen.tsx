'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import AppIcon from './AppIcon';

interface App {
  id: string;
  name: string;
  icon: string;
  gradient: string;
  category: string;
  description: string;
  platform: string;
  tech: string[];
}

interface PhoneScreenProps {
  apps: App[];
  onAppSelect?: (app: App) => void;
  deviceType: 'iphone' | 'android' | 'tablet';
}

const PhoneScreen = ({ apps, onAppSelect, deviceType }: PhoneScreenProps) => {
  const [selectedApp, setSelectedApp] = useState<string | null>(null);

  const handleAppClick = (app: App) => {
    setSelectedApp(app.id);
    onAppSelect?.(app);
    setTimeout(() => setSelectedApp(null), 1000);
  };

  // Determine grid layout based on device
  const gridCols = deviceType === 'tablet' ? 'grid-cols-5' : 'grid-cols-4';

  // Native OS-specific wallpapers
  const isIOS = deviceType === 'iphone' || deviceType === 'tablet';
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
        className="relative h-full overflow-y-auto overflow-x-hidden px-6 py-4 scrollbar-hide"
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
                9:41
              </div>
              <div className="text-white/80 text-base font-medium tracking-wide" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif' }}>
                Friday, October 18
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
                  9:41
                </div>
                <div className="text-white/70 text-sm font-medium" style={{ fontFamily: 'Roboto, system-ui, sans-serif' }}>
                  Friday, October 18
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
        <div className={`grid ${gridCols} gap-4 pb-6`}>
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

          {/* Add Empty Slots for realistic look */}
          {deviceType === 'tablet' && apps.length % 5 !== 0 && (
            <>
              {[...Array(5 - (apps.length % 5))].map((_, i) => (
                <div key={`empty-${i}`} className="w-20" />
              ))}
            </>
          )}
        </div>

        {/* Native OS Dock */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="sticky bottom-0 left-0 right-0 mt-8 mb-2"
        >
          {isIOS ? (
            // iOS Dock with translucent background
            <div className="bg-white/20 backdrop-blur-2xl rounded-[26px] p-3.5 mx-auto max-w-fit shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-white/20">
              <div className="flex gap-5 items-center justify-center">
                {/* iOS-style dock apps */}
                <div className="w-[60px] h-[60px] rounded-[14px] bg-gradient-to-br from-blue-500 to-blue-600 shadow-[0_4px_12px_rgba(59,130,246,0.4)] flex items-center justify-center text-2xl border border-blue-400/20">
                  📱
                </div>
                <div className="w-[60px] h-[60px] rounded-[14px] bg-gradient-to-br from-green-500 to-green-600 shadow-[0_4px_12px_rgba(34,197,94,0.4)] flex items-center justify-center text-2xl border border-green-400/20">
                  💬
                </div>
                <div className="w-[60px] h-[60px] rounded-[14px] bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 shadow-[0_4px_12px_rgba(96,165,250,0.4)] flex items-center justify-center text-2xl border border-blue-300/20">
                  🌐
                </div>
                <div className="w-[60px] h-[60px] rounded-[14px] bg-gradient-to-br from-red-500 via-pink-500 to-red-600 shadow-[0_4px_12px_rgba(239,68,68,0.4)] flex items-center justify-center text-2xl border border-red-400/20">
                  🎵
                </div>
              </div>
            </div>
          ) : (
            // Material You dock (app tray indicator)
            <div className="bg-white/10 backdrop-blur-xl rounded-full p-2 mx-auto max-w-fit shadow-lg border border-white/10">
              <div className="flex gap-4 items-center justify-center px-3">
                {/* Material Design dock apps */}
                <div className="w-[56px] h-[56px] rounded-[18px] bg-gradient-to-br from-blue-500 to-blue-600 shadow-[0_2px_8px_rgba(59,130,246,0.5)] flex items-center justify-center text-2xl">
                  📱
                </div>
                <div className="w-[56px] h-[56px] rounded-[18px] bg-gradient-to-br from-green-500 to-green-600 shadow-[0_2px_8px_rgba(34,197,94,0.5)] flex items-center justify-center text-2xl">
                  💬
                </div>
                <div className="w-[56px] h-[56px] rounded-[18px] bg-gradient-to-br from-indigo-500 to-purple-600 shadow-[0_2px_8px_rgba(99,102,241,0.5)] flex items-center justify-center text-2xl">
                  🌐
                </div>
                <div className="w-[56px] h-[56px] rounded-[18px] bg-gradient-to-br from-orange-500 to-red-500 shadow-[0_2px_8px_rgba(249,115,22,0.5)] flex items-center justify-center text-2xl">
                  🎵
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>

      {/* Page Indicator Dots */}
      {isIOS && (
        <div className="absolute bottom-[88px] left-0 right-0 flex justify-center gap-2.5">
          <div className="w-2 h-2 rounded-full bg-white shadow-sm" />
          <div className="w-2 h-2 rounded-full bg-white/40" />
          <div className="w-2 h-2 rounded-full bg-white/40" />
        </div>
      )}
    </div>
  );
};

export default PhoneScreen;
