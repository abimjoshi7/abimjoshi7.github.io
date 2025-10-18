'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface MobileDeviceProps {
  type: 'iphone' | 'android';
  children: ReactNode;
  className?: string;
}

const MobileDevice = ({ type, children, className = '' }: MobileDeviceProps) => {
  const isIPhone = type === 'iphone';

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative ${className}`}
    >
      {/* Device Frame */}
      <div
        className={`relative mx-auto ${
          isIPhone ? 'w-[280px] h-[570px]' : 'w-[280px] h-[570px]'
        }`}
      >
        {/* iPhone Frame */}
        {isIPhone && (
          <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 rounded-[45px] shadow-2xl border-[12px] border-gray-900">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[25px] bg-gray-900 rounded-b-3xl z-10">
              <div className="absolute top-[8px] left-1/2 -translate-x-1/2 w-[50px] h-[5px] bg-gray-800 rounded-full" />
              <div className="absolute top-[7px] left-[20px] w-[8px] h-[8px] bg-gray-800 rounded-full" />
            </div>

            {/* Screen */}
            <div className="absolute inset-0 bg-black rounded-[35px] overflow-hidden">
              {/* Status Bar */}
              <div className="absolute top-0 left-0 right-0 h-[44px] bg-gradient-to-b from-black/50 to-transparent z-10 flex items-center justify-between px-6 pt-2 text-[10px] text-white">
                <div className="font-semibold">9:41</div>
                <div className="flex items-center gap-1">
                  <div className="flex gap-[1px]">
                    <div className="w-[3px] h-[8px] bg-white rounded-sm" />
                    <div className="w-[3px] h-[10px] bg-white rounded-sm" />
                    <div className="w-[3px] h-[12px] bg-white rounded-sm" />
                    <div className="w-[3px] h-[14px] bg-white rounded-sm" />
                  </div>
                  <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="relative h-full pt-[44px] pb-[20px] overflow-hidden">
                {children}
              </div>

              {/* Home Indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[120px] h-[4px] bg-white/40 rounded-full" />
            </div>

            {/* Side Buttons */}
            <div className="absolute -left-[2px] top-[100px] w-[3px] h-[30px] bg-gray-800 rounded-l" />
            <div className="absolute -left-[2px] top-[150px] w-[3px] h-[50px] bg-gray-800 rounded-l" />
            <div className="absolute -left-[2px] top-[210px] w-[3px] h-[50px] bg-gray-800 rounded-l" />
            <div className="absolute -right-[2px] top-[160px] w-[3px] h-[70px] bg-gray-800 rounded-r" />
          </div>
        )}

        {/* Android Frame */}
        {!isIPhone && (
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black rounded-[40px] shadow-2xl border-[10px] border-black">
            {/* Screen */}
            <div className="absolute inset-0 bg-black rounded-[32px] overflow-hidden">
              {/* Status Bar */}
              <div className="absolute top-0 left-0 right-0 h-[28px] bg-gradient-to-b from-black/80 to-transparent z-10 flex items-center justify-between px-4 text-[9px] text-white">
                <div className="font-semibold">9:41</div>
                <div className="flex items-center gap-2">
                  <svg className="w-3 h-3" fill="white" viewBox="0 0 24 24">
                    <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
                  </svg>
                  <div className="flex gap-[1px]">
                    <div className="w-[2px] h-[6px] bg-white rounded-sm" />
                    <div className="w-[2px] h-[8px] bg-white rounded-sm" />
                    <div className="w-[2px] h-[10px] bg-white rounded-sm" />
                    <div className="w-[2px] h-[12px] bg-white rounded-sm" />
                  </div>
                  <div className="text-[8px]">100%</div>
                </div>
              </div>

              {/* Content */}
              <div className="relative h-full pt-[28px] pb-[48px] overflow-hidden">
                {children}
              </div>

              {/* Navigation Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-[48px] bg-gradient-to-t from-black/80 to-transparent flex items-center justify-center gap-16 pb-2">
                <div className="w-[20px] h-[20px] border-2 border-white/60 rounded-sm" />
                <div className="w-[20px] h-[20px] border-2 border-white/60 rounded-full" />
                <div className="w-[20px] h-[20px] border-2 border-white/60 rotate-45" style={{ borderRadius: '2px' }} />
              </div>
            </div>

            {/* Front Camera */}
            <div className="absolute top-[6px] left-1/2 -translate-x-1/2 w-[8px] h-[8px] bg-gray-700 rounded-full border border-gray-800" />

            {/* Side Buttons */}
            <div className="absolute -right-[2px] top-[120px] w-[3px] h-[60px] bg-gray-900 rounded-r" />
          </div>
        )}

        {/* Device Shadow */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[200px] h-[40px] bg-[#00ff41]/10 blur-3xl rounded-full" />
      </div>
    </motion.div>
  );
};

export default MobileDevice;
