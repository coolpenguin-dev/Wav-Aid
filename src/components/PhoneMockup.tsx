"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const ease = [0.22, 1, 0.36, 1] as const;

type PhoneMockupProps = {
  src: string;
  alt: string;
  priority?: boolean;
  glow?: boolean;
  drift?: boolean;
  className?: string;
  sizes?: string;
};

export function PhoneMockup({
  src,
  alt,
  priority = false,
  glow = false,
  drift = false,
  className = "",
  sizes = "(max-width: 640px) 88vw, (max-width: 1024px) 46vw, 460px",
}: PhoneMockupProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={`relative w-full ${className}`}
      initial={reduce ? false : { opacity: 0, y: 18 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.65, ease }}
    >
      <motion.div
        animate={reduce || !drift ? undefined : { y: [0, -6, 0] }}
        transition={reduce || !drift ? undefined : { duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        {glow ? (
          <motion.div
            aria-hidden="true"
            className="absolute -inset-8 -z-10 rounded-full bg-violet-600/30 blur-3xl"
            animate={reduce ? undefined : { opacity: [0.35, 0.62, 0.35] }}
            transition={reduce ? undefined : { duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          />
        ) : null}
        <div className="relative rounded-[2.5rem] bg-gradient-to-b from-white/35 via-zinc-600/50 to-black p-px shadow-[0_28px_70px_rgba(0,0,0,0.55)]">
          <span aria-hidden="true" className="absolute top-[18%] -left-[3px] h-8 w-[3px] rounded-l-sm bg-zinc-500" />
          <span aria-hidden="true" className="absolute top-[28%] -left-[3px] h-12 w-[3px] rounded-l-sm bg-zinc-500" />
          <span aria-hidden="true" className="absolute top-[24%] -right-[3px] h-16 w-[3px] rounded-r-sm bg-zinc-500" />
          <div className="rounded-[2.45rem] bg-[#07070a] p-[9px] sm:p-[10px]">
            <div className="overflow-hidden rounded-[1.95rem] bg-black ring-1 ring-white/10">
              <Image
                src={src}
                alt={alt}
                width={1170}
                height={2532}
                priority={priority}
                quality={90}
                sizes={sizes}
                className="block h-auto w-full"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
