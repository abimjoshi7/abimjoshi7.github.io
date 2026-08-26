'use client';

import { useEffect, useMemo, useState } from 'react';

const TIME_ZONE = 'Asia/Kathmandu';

/**
 * Placeholders rendered on the server and on the first client paint. Anything
 * derived from `new Date()` during render would differ between the two and trip
 * a hydration mismatch, so the real time only arrives in an effect. 9:41 is the
 * time Apple ships in its own device mockups.
 */
const PLACEHOLDER = {
  time: '9:41',
  dateLong: 'Friday, October 18',
  dateShort: 'Fri, Oct 18',
} as const;

export interface KathmanduClock {
  /** 24-hour clock, e.g. "17:42". */
  time: string;
  /** e.g. "Friday, October 18" — the iOS lock/widget format. */
  dateLong: string;
  /** e.g. "Fri, Oct 18" — the One UI widget format. */
  dateShort: string;
}

/**
 * Kathmandu wall-clock time, shared by the status bars and the home-screen
 * widgets so every clock on the mockup agrees. Nepal runs UTC+05:45, so the
 * offset is deliberately delegated to Intl rather than computed.
 */
export function useKathmanduClock(): KathmanduClock {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());

    let interval: ReturnType<typeof setInterval> | undefined;
    // Land the first tick on the minute boundary, then stay on it, so the
    // displayed minute flips when the real one does.
    const msToNextMinute = 60_000 - (Date.now() % 60_000);
    const timeout = setTimeout(() => {
      setNow(new Date());
      interval = setInterval(() => setNow(new Date()), 60_000);
    }, msToNextMinute);

    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, []);

  return useMemo(() => {
    if (!now) return PLACEHOLDER;
    return {
      time: now.toLocaleTimeString('en-US', {
        timeZone: TIME_ZONE,
        hour: 'numeric',
        minute: '2-digit',
        hour12: false,
      }),
      dateLong: now.toLocaleDateString('en-US', {
        timeZone: TIME_ZONE,
        weekday: 'long',
        month: 'long',
        day: 'numeric',
      }),
      dateShort: now.toLocaleDateString('en-US', {
        timeZone: TIME_ZONE,
        weekday: 'short',
        month: 'short',
        day: 'numeric',
      }),
    };
  }, [now]);
}
