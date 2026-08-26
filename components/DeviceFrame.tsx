'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

interface DeviceFrameProps {
  /** Intrinsic design size of the mockup, in px. */
  width: number;
  height: number;
  children: ReactNode;
}

/**
 * The device mockups are drawn at a fixed intrinsic size (a 500px tablet does not
 * fit a 360px phone). Rather than duplicating every inner measurement per
 * breakpoint, measure the available width and scale the whole frame down,
 * reserving the scaled height so the frame does not overlap what follows.
 */
const DeviceFrame = ({ width, height, children }: DeviceFrameProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  // null until measured: painting at scale 1 first would flash a horizontal
  // overflow on any viewport narrower than the intrinsic width.
  const [scale, setScale] = useState<number | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const measure = () => {
      const available = el.clientWidth;
      if (!available) return;
      // Never upscale past the intrinsic size — these are pixel-drawn bezels.
      setScale(Math.min(1, available / width));
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [width]);

  return (
    <div ref={containerRef} className="w-full flex justify-center">
      <div
        style={{
          width: width * (scale ?? 1),
          height: height * (scale ?? 1),
          // Reserve the layout box immediately; reveal once the scale is known.
          visibility: scale === null ? 'hidden' : 'visible',
          maxWidth: '100%',
        }}
      >
        <div
          style={{
            width,
            height,
            transform: `scale(${scale ?? 1})`,
            transformOrigin: 'top left',
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default DeviceFrame;
