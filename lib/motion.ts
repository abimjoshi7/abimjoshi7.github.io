import type { Variants } from 'framer-motion';

/**
 * Shared motion vocabulary. Every section used to declare its own near-identical
 * container/item variants; they live here so the page animates as one system.
 *
 * Distances are deliberately small — on a phone a 30px slide reads as jitter,
 * not as motion design.
 */

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export const stagger = (staggerChildren = 0.07): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren, delayChildren: 0.05 },
  },
});

/** Springy but short — used for tap feedback on touch targets. */
export const tap = { scale: 0.97 } as const;

/** Viewport config so sections animate once, slightly before they are centred. */
export const viewportOnce = { once: true, margin: '-80px' } as const;
