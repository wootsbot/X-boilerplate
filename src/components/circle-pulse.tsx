'use client';

import { motion } from 'framer-motion';

import { cls } from '@/utils/cls';

type CirclePulseProps = {
  size?: number;
  color?: 'primary' | 'secondary' | 'danger';
};

const COLORS = {
  primary: 'bg-blue-500',
  secondary: 'bg-green-500',
  danger: 'bg-red-500',
};

const COLORS_ANIMATE = {
  primary: 'bg-blue-400 border-blue-400',
  secondary: 'bg-green-400 border-green-400',
  danger: 'bg-red-400 border-red-400',
};

export const CirclePulse = ({ size = 24, color = 'primary' }: CirclePulseProps) => {
  const pulseVariants = {
    pulse: {
      scale: [1, 1.5, 1],
      opacity: [1, 0, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const outerSize = `${size}px`;
  const innerSize = `${size * 0.83}px`;
  const positionOffset = `${size * 0.085}px`;

  return (
    <div className="relative" style={{ width: outerSize, height: outerSize }}>
      <div
        className={cls('absolute rounded-full', COLORS[color])}
        style={{
          width: innerSize,
          height: innerSize,
          top: positionOffset,
          left: positionOffset,
        }}
      />
      <motion.div
        variants={pulseVariants}
        animate="pulse"
        className={cls('absolute border-4 rounded-full', COLORS_ANIMATE[color])}
        style={{
          width: outerSize,
          height: outerSize,
        }}
      />
    </div>
  );
};
