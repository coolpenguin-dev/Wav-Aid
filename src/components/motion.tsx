"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const viewport = { once: true, margin: "-40px" as const };

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 14 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.5, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

const levels = [0.35, 0.55, 0.78, 0.48, 0.9, 0.62, 0.4, 0.84, 0.52, 1, 0.46, 0.7, 0.38, 0.88, 0.56, 0.32, 0.74, 0.44];

export function SessionWaveform({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <div className={`flex h-10 items-end gap-[3px] ${className}`} aria-hidden="true">
      {levels.map((level, index) => (
        <motion.span
          key={index}
          className={`w-1 origin-bottom rounded-full ${index === 9 ? "bg-red-400" : "bg-violet-300/75"}`}
          style={{ height: 36 }}
          initial={{ scaleY: level }}
          animate={
            reduce
              ? undefined
              : { scaleY: [level, Math.min(1, level + 0.16), Math.max(0.22, level - 0.12), level] }
          }
          transition={
            reduce
              ? undefined
              : { duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: index * 0.06 }
          }
        />
      ))}
    </div>
  );
}

export function RecDot() {
  const reduce = useReducedMotion();

  return (
    <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
      <motion.span
        className="absolute inline-flex h-full w-full rounded-full bg-red-500"
        animate={reduce ? undefined : { opacity: [0.35, 0.7, 0.35] }}
        transition={reduce ? undefined : { duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />
      <span className="relative h-2.5 w-2.5 rounded-full bg-red-500" />
    </span>
  );
}
