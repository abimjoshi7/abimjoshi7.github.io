'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode, useState, useEffect } from 'react';

interface DeviceShowcaseProps {
  deviceType: 'iphone' | 'android' | 'tablet';
  children: ReactNode;
  className?: string;
}

const DeviceShowcase = ({ deviceType, children, className = '' }: DeviceShowcaseProps) => {
  const isIPhone = deviceType === 'iphone';
  const isAndroid = deviceType === 'android';
  const isTablet = deviceType === 'tablet';

  const [tabletTime, setTabletTime] = useState<string>('');
  const [tabletDate, setTabletDate] = useState<string>('');
  const [statusBarTime, setStatusBarTime] = useState<string>('');

  useEffect(() => {
    const updateKathmanduTime = () => {
      const now = new Date();

      // Format time with AM/PM for tablet status bar
      const timeString = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kathmandu',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      });

      // Format time for iPhone/Android status bars (24-hour format, just time)
      const statusTime = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kathmandu',
        hour: 'numeric',
        minute: '2-digit',
        hour12: false,
      });

      // Format date as "Weekday, Mon Day" for tablet
      const dateString = now.toLocaleDateString('en-US', {
        timeZone: 'Asia/Kathmandu',
        weekday: 'long',
        month: 'short',
        day: 'numeric',
      });

      setTabletTime(timeString);
      setTabletDate(dateString);
      setStatusBarTime(statusTime);
    };

    // Update immediately
    updateKathmanduTime();

    // Update every minute
    const interval = setInterval(updateKathmanduTime, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={deviceType}
        initial={{ opacity: 0, scale: 0.9, rotateY: 90 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        exit={{ opacity: 0, scale: 0.9, rotateY: -90 }}
        transition={{ duration: 0.5 }}
        className={`relative ${className}`}
      >
        {/* iPhone - Native iOS Design */}
        {isIPhone && (
          <div className="relative mx-auto w-[320px] h-[650px]">
            {/* Advanced shadow with color depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-800/30 to-slate-950/50 rounded-[50px] blur-3xl transform translate-y-6 scale-95" />

            {/* Premium iPhone body - Titanium/Ceramic Shield aesthetic */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1c1c1e] via-[#2c2c2e] to-[#1c1c1e] rounded-[50px] shadow-[0_25px_80px_rgba(0,0,0,0.9),0_0_2px_rgba(255,255,255,0.15)_inset,0_1px_0_rgba(255,255,255,0.1)_inset] border-[14px] border-[#0a0a0a]">
              {/* Brushed metal effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-white/2 to-transparent rounded-[50px] pointer-events-none opacity-60" />

              {/* Dynamic Island (iOS 16+ style) */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[125px] h-[37px] bg-black rounded-b-[30px] z-20 shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                {/* Pill shape with live activity */}
                <div className="absolute top-[8px] left-1/2 -translate-x-1/2 w-[100px] h-[20px] bg-[#1c1c1e] rounded-full flex items-center justify-between px-3">
                  {/* Face ID sensors */}
                  <div className="flex items-center gap-2">
                    <div className="w-[6px] h-[6px] bg-gradient-to-br from-slate-700 to-slate-900 rounded-full" />
                    <div className="w-[4px] h-[4px] bg-red-900/40 rounded-full animate-pulse" />
                  </div>
                  {/* Front camera with lens reflection */}
                  <div className="w-[9px] h-[9px] bg-gradient-radial from-slate-800 via-slate-900 to-black rounded-full border border-slate-700/50 shadow-inner relative">
                    <div className="absolute inset-[2px] bg-gradient-to-br from-blue-500/10 via-transparent to-transparent rounded-full" />
                  </div>
                </div>
              </div>

              {/* True OLED Screen with ProMotion feel */}
              <div className="absolute inset-0 bg-black rounded-[38px] overflow-hidden shadow-[inset_0_0_40px_rgba(0,0,0,0.95)]">
                {/* Oleophobic coating simulation */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/4 via-transparent to-black/30 pointer-events-none z-30" />

                {/* Native iOS Status Bar */}
                <div className="absolute top-0 left-0 right-0 h-[54px] z-10 flex items-end justify-between px-8 pb-2">
                  {/* Left side - Time */}
                  <div className="text-white text-[15px] font-semibold tracking-tight" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif' }}>
                    {statusBarTime || '9:41'}
                  </div>
                  {/* Right side - Status icons */}
                  <div className="flex items-center gap-1.5">
                    {/* Cellular signal */}
                    <svg className="w-[17px] h-[11px]" fill="white" viewBox="0 0 24 14">
                      <circle cx="2.5" cy="11.5" r="2" />
                      <circle cx="8" cy="9" r="2.5" />
                      <circle cx="14" cy="6" r="3" />
                      <circle cx="20.5" cy="2.5" r="3.5" />
                    </svg>
                    {/* WiFi */}
                    <svg className="w-[15px] h-[11px]" fill="white" viewBox="0 0 20 15">
                      <path d="M10 13a2 2 0 100 4 2 2 0 000-4zm0-3a5 5 0 00-3.5 1.5l1.4 1.4A3 3 0 0110 12a3 3 0 012.1.9l1.4-1.4A5 5 0 0010 10zm0-3a8 8 0 00-5.7 2.3l1.4 1.4A6 6 0 0110 9a6 6 0 014.3 1.7l1.4-1.4A8 8 0 0010 7z"/>
                    </svg>
                    {/* Battery */}
                    <div className="flex items-center gap-0.5">
                      <div className="w-[22px] h-[11px] border-[1.5px] border-white rounded-[3px] flex items-center px-[1.5px] relative">
                        <div className="w-full h-[6px] bg-white rounded-[1.5px]" />
                        {/* Battery tip */}
                        <div className="absolute -right-[3px] top-1/2 -translate-y-1/2 w-[1.5px] h-[5px] bg-white rounded-r-sm" />
                      </div>
                      <span className="text-white text-[12px] font-medium ml-0.5">100</span>
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="relative h-full pt-[54px] pb-[34px]">
                  {children}
                </div>

                {/* Native iOS Home Indicator */}
                <div className="absolute bottom-[8px] left-1/2 -translate-x-1/2 w-[134px] h-[5px] bg-white/90 rounded-full z-10 shadow-sm" />
              </div>

              {/* Precisely crafted side buttons - iPhone Pro style */}
              {/* Mute switch */}
              <div className="absolute -left-[3px] top-[95px] w-[4px] h-[28px] bg-gradient-to-r from-[#141414] via-[#2a2a2a] to-[#1a1a1a] rounded-l shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)]" />
              {/* Volume Up */}
              <div className="absolute -left-[3px] top-[155px] w-[4px] h-[50px] bg-gradient-to-r from-[#141414] via-[#2a2a2a] to-[#1a1a1a] rounded-l shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)]" />
              {/* Volume Down */}
              <div className="absolute -left-[3px] top-[215px] w-[4px] h-[50px] bg-gradient-to-r from-[#141414] via-[#2a2a2a] to-[#1a1a1a] rounded-l shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)]" />
              {/* Power button */}
              <div className="absolute -right-[3px] top-[175px] w-[4px] h-[85px] bg-gradient-to-l from-[#141414] via-[#2a2a2a] to-[#1a1a1a] rounded-r shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)]" />
            </div>

            {/* Premium ambient light reflection */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[280px] h-[40px] bg-gradient-radial from-slate-400/20 via-slate-600/10 to-transparent blur-3xl rounded-full" />
          </div>
        )}

        {/* Android - Material Design 3 */}
        {isAndroid && (
          <div className="relative mx-auto w-[320px] h-[650px]">
            {/* Material You shadow system */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-700/25 to-slate-900/45 rounded-[48px] blur-3xl transform translate-y-6 scale-95" />

            {/* Premium Android body - Pixel/Samsung flagship aesthetic */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0a0a0a] rounded-[48px] shadow-[0_25px_80px_rgba(0,0,0,0.9),0_0_2px_rgba(255,255,255,0.12)_inset,0_1px_0_rgba(255,255,255,0.08)_inset] border-[12px] border-black">
              {/* Gorilla Glass effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/2 to-transparent rounded-[48px] pointer-events-none opacity-70" />

              {/* AMOLED Screen */}
              <div className="absolute inset-0 bg-black rounded-[38px] overflow-hidden shadow-[inset_0_0_40px_rgba(0,0,0,0.95)]">
                {/* Anti-reflective coating */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/3 via-transparent to-black/25 pointer-events-none z-30" />

                {/* Material You Status Bar */}
                <div className="absolute top-0 left-0 right-0 h-[36px] z-10 flex items-center justify-between px-6 pt-1">
                  {/* Left side - Time */}
                  <div className="flex items-center gap-3">
                    <div className="text-white text-[14px] font-medium tracking-tight" style={{ fontFamily: 'Roboto, system-ui, sans-serif' }}>
                      {statusBarTime || '9:41'}
                    </div>
                    {/* Notification icons */}
                    <div className="flex items-center gap-1">
                      <svg className="w-[14px] h-[14px]" fill="white" viewBox="0 0 24 24">
                        <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
                      </svg>
                    </div>
                  </div>

                  {/* Right side - System icons */}
                  <div className="flex items-center gap-2">
                    {/* WiFi */}
                    <svg className="w-[16px] h-[12px]" fill="white" viewBox="0 0 24 18">
                      <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
                    </svg>
                    {/* Mobile signal */}
                    <svg className="w-[14px] h-[12px]" fill="white" viewBox="0 0 20 16">
                      <rect x="0" y="10" width="3" height="6" rx="0.5" />
                      <rect x="5" y="7" width="3" height="9" rx="0.5" />
                      <rect x="10" y="4" width="3" height="12" rx="0.5" />
                      <rect x="15" y="1" width="3" height="15" rx="0.5" />
                    </svg>
                    {/* Battery with Material You style */}
                    <div className="flex items-center gap-1">
                      <div className="w-[20px] h-[10px] border-[1.8px] border-white rounded-[2.5px] flex items-center px-[1px] relative">
                        <div className="w-full h-[5px] bg-white rounded-[1px]" />
                        {/* Battery terminal */}
                        <div className="absolute -right-[2.5px] top-1/2 -translate-y-1/2 w-[1.5px] h-[5px] bg-white rounded-r-[1px]" />
                      </div>
                      <span className="text-white text-[11px] font-medium">100</span>
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="relative h-full pt-[36px] pb-[56px]">
                  {children}
                </div>

                {/* Material You Navigation Bar (Gesture bar) */}
                <div className="absolute bottom-0 left-0 right-0 h-[56px] bg-gradient-to-t from-black/95 via-black/80 to-transparent flex items-center justify-center pb-3 z-10">
                  {/* Pill-shaped gesture indicator */}
                  <div className="w-[145px] h-[4px] bg-white/80 rounded-full shadow-lg" />
                </div>
              </div>

              {/* Front camera with punch-hole design */}
              <div className="absolute top-[12px] left-1/2 -translate-x-1/2 w-[11px] h-[11px] bg-gradient-radial from-[#0a0a0a] via-[#141414] to-[#1f1f1f] rounded-full border-[0.5px] border-black/50 shadow-[0_2px_8px_rgba(0,0,0,0.9),inset_0_1px_2px_rgba(0,0,0,0.8)] z-20">
                {/* Camera lens */}
                <div className="absolute inset-[2px] bg-gradient-to-br from-slate-900 via-black to-black rounded-full" />
                {/* Lens reflection */}
                <div className="absolute inset-[3px] bg-gradient-to-br from-blue-500/15 via-transparent to-transparent rounded-full" />
              </div>

              {/* Premium side buttons */}
              {/* Power button with texture */}
              <div className="absolute -right-[3px] top-[130px] w-[4px] h-[70px] bg-gradient-to-l from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f] rounded-r shadow-[inset_0_1px_2px_rgba(0,0,0,0.9)]" />
              {/* Volume rocker */}
              <div className="absolute -left-[3px] top-[110px] w-[4px] h-[90px] bg-gradient-to-r from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f] rounded-l shadow-[inset_0_1px_2px_rgba(0,0,0,0.9)]">
                {/* Volume separator line */}
                <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-black" />
              </div>
            </div>

            {/* Material Design ambient lighting */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[280px] h-[40px] bg-gradient-radial from-blue-400/15 via-purple-500/8 to-transparent blur-3xl rounded-full" />
          </div>
        )}

        {/* Tablet - iPadOS Design */}
        {isTablet && (
          <div className="relative mx-auto w-[500px] h-[650px]">
            {/* Advanced shadow system */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-800/35 to-slate-950/55 rounded-[42px] blur-3xl transform translate-y-6 scale-95" />

            {/* Premium iPad body - Aluminum unibody */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1c1c1e] via-[#2a2a2c] to-[#1c1c1e] rounded-[42px] shadow-[0_28px_90px_rgba(0,0,0,0.95),0_0_3px_rgba(255,255,255,0.18)_inset,0_1px_0_rgba(255,255,255,0.12)_inset] border-[16px] border-[#0a0a0a]">
              {/* Anodized aluminum finish */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/3 to-transparent rounded-[42px] pointer-events-none opacity-70" />

              {/* Liquid Retina XDR Display */}
              <div className="absolute inset-0 bg-black rounded-[28px] overflow-hidden shadow-[inset_0_0_50px_rgba(0,0,0,0.95)]">
                {/* ProMotion display coating */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/30 pointer-events-none z-30" />

                {/* iPadOS Status Bar */}
                <div className="absolute top-0 left-0 right-0 h-[44px] z-10 flex items-center justify-between px-10">
                  {/* Left side - Time and date */}
                  <div className="flex items-center gap-4">
                    <div className="text-white text-[15px] font-semibold tracking-tight" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif' }}>
                      {tabletDate || 'Friday, Oct 18'}
                    </div>
                    <div className="text-white text-[15px] font-semibold tracking-tight">
                      {tabletTime || '9:41 AM'}
                    </div>
                  </div>

                  {/* Right side - Status icons */}
                  <div className="flex items-center gap-2">
                    {/* WiFi */}
                    <svg className="w-[18px] h-[13px]" fill="white" viewBox="0 0 20 15">
                      <path d="M10 13a2 2 0 100 4 2 2 0 000-4zm0-3a5 5 0 00-3.5 1.5l1.4 1.4A3 3 0 0110 12a3 3 0 012.1.9l1.4-1.4A5 5 0 0010 10zm0-3a8 8 0 00-5.7 2.3l1.4 1.4A6 6 0 0110 9a6 6 0 014.3 1.7l1.4-1.4A8 8 0 0010 7z"/>
                    </svg>
                    {/* Cellular (iPad with cellular) */}
                    <svg className="w-[19px] h-[13px]" fill="white" viewBox="0 0 24 14">
                      <circle cx="2.5" cy="11.5" r="2" />
                      <circle cx="8" cy="9" r="2.5" />
                      <circle cx="14" cy="6" r="3" />
                      <circle cx="20.5" cy="2.5" r="3.5" />
                    </svg>
                    {/* Battery percentage */}
                    <div className="text-white text-[14px] font-medium">100%</div>
                    {/* Battery icon */}
                    <div className="flex items-center gap-0.5">
                      <div className="w-[26px] h-[12px] border-[2px] border-white rounded-[3.5px] flex items-center px-[1.5px] relative">
                        <div className="w-full h-[6px] bg-white rounded-[1.5px]" />
                        {/* Battery terminal */}
                        <div className="absolute -right-[3.5px] top-1/2 -translate-y-1/2 w-[2px] h-[6px] bg-white rounded-r-[1px]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="relative h-full pt-[44px] pb-[24px]">
                  {children}
                </div>
              </div>

              {/* Front-facing camera - TrueDepth system */}
              <div className="absolute top-[12px] left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
                {/* IR camera */}
                <div className="w-[7px] h-[7px] bg-gradient-radial from-slate-700 via-slate-900 to-black rounded-full border-[0.5px] border-slate-700/30" />
                {/* Flood illuminator */}
                <div className="w-[5px] h-[5px] bg-gradient-radial from-red-900/30 to-black rounded-full" />
                {/* Front camera */}
                <div className="w-[10px] h-[10px] bg-gradient-radial from-slate-800 via-slate-900 to-black rounded-full border border-slate-700/40 shadow-inner relative">
                  <div className="absolute inset-[2px] bg-gradient-to-br from-blue-500/12 via-transparent to-transparent rounded-full" />
                </div>
              </div>

              {/* Side buttons - iPad Pro style */}
              {/* Volume Up */}
              <div className="absolute -right-[4px] top-[130px] w-[5px] h-[55px] bg-gradient-to-l from-[#141414] via-[#2a2a2a] to-[#1c1c1e] rounded-r shadow-[inset_0_1px_3px_rgba(0,0,0,0.8)]" />
              {/* Volume Down */}
              <div className="absolute -right-[4px] top-[195px] w-[5px] h-[55px] bg-gradient-to-l from-[#141414] via-[#2a2a2a] to-[#1c1c1e] rounded-r shadow-[inset_0_1px_3px_rgba(0,0,0,0.8)]" />
              {/* Power button (top edge on iPad Pro) */}
              <div className="absolute top-[-4px] right-[80px] h-[5px] w-[60px] bg-gradient-to-b from-[#141414] via-[#2a2a2a] to-[#1c1c1e] rounded-t shadow-[inset_0_1px_3px_rgba(0,0,0,0.8)]" />
            </div>

            {/* Premium ambient reflection */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[380px] h-[50px] bg-gradient-radial from-slate-300/25 via-slate-500/12 to-transparent blur-3xl rounded-full" />
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default DeviceShowcase;
