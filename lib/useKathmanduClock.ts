'use client';

import { useMemo, useSyncExternalStore } from 'react';

const TIME_ZONE = 'Asia/Kathmandu';
const MINUTE = 60_000;

/**
 * Placeholders rendered on the server and on the first client paint. Anything
 * derived from `new Date()` during render would differ between the two and trip
 * a hydration mismatch, so the real time only arrives after hydration. 9:41 is
 * the time Apple ships in its own device mockups.
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
 * The wall clock is state owned outside React, so it is read through
 * `useSyncExternalStore` rather than an effect that calls `setState`.
 * Land the first tick on the minute boundary, then stay on it, so the displayed
 * minute flips when the real one does.
 */
function subscribe(onStoreChange: () => void) {
  let interval: ReturnType<typeof setInterval> | undefined;
  const timeout = setTimeout(() => {
    onStoreChange();
    interval = setInterval(onStoreChange, MINUTE);
  }, MINUTE - (Date.now() % MINUTE));

  return () => {
    clearTimeout(timeout);
    if (interval) clearInterval(interval);
  };
}

/**
 * The current minute, not the current millisecond: the snapshot has to be
 * referentially stable between renders within the same tick or React would
 * re-render in a loop.
 */
const getSnapshot = () => Math.floor(Date.now() / MINUTE);

/** No clock on the server — the placeholder renders instead. */
const getServerSnapshot = (): number | null => null;

/**
 * Kathmandu wall-clock time, shared by the status bars and the home-screen
 * widgets so every clock on the mockup agrees. Nepal runs UTC+05:45, so the
 * offset is deliberately delegated to Intl rather than computed.
 */
export function useKathmanduClock(): KathmanduClock {
  const minute = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  return useMemo(() => {
    if (minute === null) return PLACEHOLDER;

    const now = new Date(minute * MINUTE);
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
  }, [minute]);
}
