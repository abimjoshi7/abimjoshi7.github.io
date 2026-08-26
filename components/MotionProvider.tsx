'use client';

import { MotionConfig } from 'framer-motion';
import type { ReactNode } from 'react';

/**
 * The CSS `prefers-reduced-motion` block only reaches CSS animations; framer-motion
 * drives transforms from JS. `reducedMotion="user"` makes it honour the same OS
 * setting, so transform/position animation is dropped while opacity still resolves
 * (content must never stay stuck at opacity 0).
 */
const MotionProvider = ({ children }: { children: ReactNode }) => (
  <MotionConfig reducedMotion="user">{children}</MotionConfig>
);

export default MotionProvider;
