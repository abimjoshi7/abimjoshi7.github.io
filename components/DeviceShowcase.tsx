'use client';

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import DeviceFrame from './DeviceFrame';
import { useKathmanduClock } from '@/lib/useKathmanduClock';

interface DeviceShowcaseProps {
  deviceType: 'iphone' | 'android';
  children: ReactNode;
  className?: string;
}

/**
 * Both mockups are drawn on a 320px-wide canvas, scaled from the real bodies so
 * their proportions stay honest relative to each other:
 *
 *   iPhone 17 Pro      150.0 x 71.9 mm  ->  320 x 668 @ 4.45 px/mm
 *   Galaxy S25 Ultra   162.8 x 77.6 mm  ->  320 x 671 @ 4.12 px/mm
 *
 * Rounded to a shared 320x670 so the two frames swap without the surrounding
 * layout reflowing. The silhouettes still read as different phones because the
 * corner radii are the real ones: Apple's continuous ~55pt curve against
 * Samsung's much squarer ~5mm corner.
 */
const CANVAS = { width: 320, height: 670 };

const DeviceShowcase = ({ deviceType, children, className = '' }: DeviceShowcaseProps) => {
  const isIPhone = deviceType === 'iphone';
  const isAndroid = deviceType === 'android';

  const reduceMotion = useReducedMotion();

  // Shared with the home-screen widgets so every clock on the mockup agrees.
  const { time: statusBarTime } = useKathmanduClock();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={deviceType}
        initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 12 }}
        animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
        exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: -12 }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        className={`relative w-full ${className}`}
      >
        <DeviceFrame width={CANVAS.width} height={CANVAS.height}>
        {/* iPhone 17 Pro — aluminium unibody, Deep Blue */}
        {isIPhone && (
          <div className="relative mx-auto w-[320px] h-[670px]">
            {/* Contact shadow */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-800/30 to-slate-950/50 rounded-[56px] blur-3xl transform translate-y-6 scale-95" />

            {/* Body: the unibody rail. 8px to the glass, matching the ~1.2mm bezel. */}
            <div className="absolute inset-0 rounded-[56px] bg-gradient-to-br from-[#33455a] via-[#48607a] to-[#26364a] shadow-[0_25px_80px_rgba(0,0,0,0.9)]">
              {/* Machined rail highlight along the top-left edge */}
              <div className="absolute inset-0 rounded-[56px] bg-gradient-to-br from-white/25 via-white/5 to-transparent pointer-events-none" />
              {/* Anodised falloff toward the bottom-right */}
              <div className="absolute inset-0 rounded-[56px] bg-gradient-to-tl from-black/40 via-transparent to-transparent pointer-events-none" />
              {/* Antenna band */}
              <div className="absolute left-0 right-0 top-[124px] h-[1.5px] bg-black/25 pointer-events-none" />

              {/* Ceramic Shield glass, inset by the bezel */}
              <div className="absolute inset-[8px] bg-black rounded-[48px] overflow-hidden shadow-[inset_0_0_0_1px_rgba(0,0,0,0.9)]">
                {/* Oleophobic coating sheen */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-black/25 pointer-events-none z-30" />

                {/* Dynamic Island — a floating pill 10px below the glass edge,
                    not a notch cut into it. 98px is 125pt scaled to this canvas. */}
                <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[98px] h-[29px] bg-black rounded-full z-20 flex items-center justify-between px-[9px]">
                  {/* Face ID dot projector */}
                  <div className="w-[5px] h-[5px] rounded-full bg-[#101418]" />
                  {/* Front camera with lens tint */}
                  <div className="relative w-[9px] h-[9px] rounded-full bg-[#0b0d10] ring-[0.5px] ring-white/10">
                    <div className="absolute inset-[1.5px] rounded-full bg-gradient-to-br from-[#1b3a5c]/70 via-transparent to-transparent" />
                  </div>
                </div>

                {/* iOS status bar — clock centred in the left ear */}
                <div className="absolute top-0 left-0 right-0 h-[46px] z-10 flex items-center justify-between px-[26px]">
                  <div className="w-[54px] text-center text-white text-[15px] font-semibold tracking-tight" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif' }}>
                    {statusBarTime || '9:41'}
                  </div>
                  <div className="flex items-center gap-[5px]">
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
                    <div className="w-[25px] h-[12px] rounded-[3.5px] border-[1px] border-white/40 flex items-center p-[1.5px] relative">
                      <div className="w-full h-full bg-white rounded-[1.5px]" />
                      <div className="absolute -right-[3px] top-1/2 -translate-y-1/2 w-[1.5px] h-[4px] bg-white/40 rounded-r-full" />
                    </div>
                  </div>
                </div>

                {/* Content area, inset past the status bar and home indicator */}
                <div className="absolute inset-0 pt-[46px] pb-[30px] min-h-0 overflow-hidden">
                  {children}
                </div>

                {/* Home indicator */}
                <div className="absolute bottom-[8px] left-1/2 -translate-x-1/2 w-[104px] h-[5px] bg-white/90 rounded-full z-10" />
              </div>

              {/* Left rail: Action Button, then the volume pair */}
              <div className="absolute -left-[2px] top-[118px] w-[3px] h-[24px] bg-gradient-to-r from-[#16202b] via-[#2d3d4e] to-[#1b2733] rounded-l-[2px]" />
              <div className="absolute -left-[2px] top-[164px] w-[3px] h-[46px] bg-gradient-to-r from-[#16202b] via-[#2d3d4e] to-[#1b2733] rounded-l-[2px]" />
              <div className="absolute -left-[2px] top-[222px] w-[3px] h-[46px] bg-gradient-to-r from-[#16202b] via-[#2d3d4e] to-[#1b2733] rounded-l-[2px]" />

              {/* Right rail: side button, and the Camera Control below it */}
              <div className="absolute -right-[2px] top-[176px] w-[3px] h-[78px] bg-gradient-to-l from-[#16202b] via-[#2d3d4e] to-[#1b2733] rounded-r-[2px]" />
              <div className="absolute -right-[2px] top-[288px] w-[3px] h-[30px] bg-gradient-to-l from-[#0f1620] via-[#3a4d61] to-[#1b2733] rounded-r-[2px] shadow-[0_0_2px_rgba(255,255,255,0.25)]" />
            </div>

            {/* Ambient bounce light */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[280px] h-[40px] bg-gradient-radial from-slate-400/20 via-slate-600/10 to-transparent blur-3xl rounded-full" />
          </div>
        )}

        {/* Galaxy S25 Ultra — flat titanium frame, near-square corners */}
        {isAndroid && (
          <div className="relative mx-auto w-[320px] h-[670px]">
            {/* Contact shadow */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-700/25 to-slate-900/45 rounded-[26px] blur-3xl transform translate-y-6 scale-95" />

            {/* Body: flat titanium rail. The 26px radius is what separates this
                silhouette from the iPhone's 56px — Samsung's corners are square. */}
            <div className="absolute inset-0 rounded-[26px] bg-gradient-to-br from-[#33353a] via-[#4a4d54] to-[#212327] shadow-[0_25px_80px_rgba(0,0,0,0.9)]">
              {/* Brushed titanium highlight */}
              <div className="absolute inset-0 rounded-[26px] bg-gradient-to-br from-white/20 via-white/[0.04] to-transparent pointer-events-none" />
              <div className="absolute inset-0 rounded-[26px] bg-gradient-to-tl from-black/45 via-transparent to-transparent pointer-events-none" />
              {/* Antenna bands on the flat rail */}
              <div className="absolute left-0 right-0 top-[92px] h-[1.5px] bg-black/30 pointer-events-none" />
              <div className="absolute left-0 right-0 bottom-[92px] h-[1.5px] bg-black/30 pointer-events-none" />

              {/* Gorilla Armor glass — 6px bezel, uniform on all four sides */}
              <div className="absolute inset-[6px] bg-black rounded-[20px] overflow-hidden shadow-[inset_0_0_0_1px_rgba(0,0,0,0.9)]">
                {/* Anti-reflective coating */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.035] via-transparent to-black/20 pointer-events-none z-30" />

                {/* Centred punch-hole camera */}
                <div className="absolute top-[9px] left-1/2 -translate-x-1/2 w-[11px] h-[11px] rounded-full bg-black z-20 ring-[0.5px] ring-white/[0.06]">
                  <div className="absolute inset-[2px] rounded-full bg-[#05060a]" />
                  <div className="absolute inset-[3px] rounded-full bg-gradient-to-br from-[#1b3a5c]/60 via-transparent to-transparent" />
                </div>

                {/* One UI status bar — clock hard left, system icons right */}
                <div className="absolute top-0 left-0 right-0 h-[34px] z-10 flex items-center justify-between px-[14px]">
                  <div className="flex items-center gap-2">
                    <div className="text-white text-[13px] font-medium tracking-tight" style={{ fontFamily: 'Roboto, system-ui, sans-serif' }}>
                      {statusBarTime || '9:41'}
                    </div>
                    <svg className="w-[12px] h-[12px] opacity-90" fill="white" viewBox="0 0 24 24">
                      <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
                    </svg>
                  </div>

                  <div className="flex items-center gap-[5px]">
                    {/* WiFi */}
                    <svg className="w-[14px] h-[11px]" fill="white" viewBox="0 0 24 18">
                      <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
                    </svg>
                    {/* Mobile signal */}
                    <svg className="w-[13px] h-[11px]" fill="white" viewBox="0 0 20 16">
                      <rect x="0" y="10" width="3" height="6" rx="0.5" />
                      <rect x="5" y="7" width="3" height="9" rx="0.5" />
                      <rect x="10" y="4" width="3" height="12" rx="0.5" />
                      <rect x="15" y="1" width="3" height="15" rx="0.5" />
                    </svg>
                    {/* Battery — One UI draws the percentage inside the cell */}
                    <div className="w-[24px] h-[12px] rounded-[3px] border-[1px] border-white/50 flex items-center p-[1.5px] relative">
                      <div className="w-full h-full bg-white rounded-[1.5px]" />
                      <div className="absolute -right-[2.5px] top-1/2 -translate-y-1/2 w-[1.5px] h-[4px] bg-white/50 rounded-r-full" />
                    </div>
                  </div>
                </div>

                {/* Content area */}
                <div className="absolute inset-0 pt-[34px] pb-[26px] min-h-0 overflow-hidden">
                  {children}
                </div>

                {/* One UI gesture bar — a thin pill, no opaque nav bar behind it */}
                <div className="absolute bottom-[7px] left-1/2 -translate-x-1/2 w-[104px] h-[4px] bg-white/85 rounded-full z-10" />
              </div>

              {/* Both keys sit on the right on the S25 Ultra: volume rocker above
                  the side key, and the left rail is left clean. */}
              <div className="absolute -right-[2px] top-[152px] w-[3px] h-[76px] bg-gradient-to-l from-[#17181b] via-[#3b3e45] to-[#1d1f23] rounded-r-[2px]">
                <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-black/70" />
              </div>
              <div className="absolute -right-[2px] top-[246px] w-[3px] h-[44px] bg-gradient-to-l from-[#17181b] via-[#3b3e45] to-[#1d1f23] rounded-r-[2px]" />
            </div>

            {/* Ambient bounce light */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[280px] h-[40px] bg-gradient-radial from-blue-400/15 via-purple-500/8 to-transparent blur-3xl rounded-full" />
          </div>
        )}

        </DeviceFrame>
      </motion.div>
    </AnimatePresence>
  );
};

export default DeviceShowcase;
