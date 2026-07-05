import type { Transition, Variants } from 'motion/react'

export const SPRING_SOFT: Transition = {
  type: 'spring',
  stiffness: 240,
  damping: 26,
}

export const SPRING_POP: Transition = {
  type: 'spring',
  stiffness: 480,
  damping: 16,
}

export const VIEWPORT_ONCE = {
  once: true,
  amount: 0.3,
  margin: '0px 0px -10% 0px',
} as const

export function riseIn(delay = 0): Variants {
  return {
    hidden: { opacity: 0, y: 28, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { ...SPRING_SOFT, delay } },
  }
}

export function fadeUp(delay = 0): Variants {
  return {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { ...SPRING_SOFT, delay } },
  }
}

export function slideIn(delay = 0): Variants {
  return {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0, transition: { ...SPRING_SOFT, delay } },
  }
}

export function popIn(delay = 0, rotate = 0, fromScale = 0): Variants {
  return {
    hidden: { opacity: 0, scale: fromScale, rotate: rotate - 12 },
    show: {
      opacity: 1,
      scale: 1,
      rotate,
      transition: { ...SPRING_POP, delay },
    },
  }
}
