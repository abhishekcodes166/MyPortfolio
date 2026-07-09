"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}

export default function Section({
  id,
  index,
  title,
  kicker,
  children,
}: {
  id: string;
  index: string;
  title: string;
  kicker?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-24">
      <Reveal>
        <div className="mb-10 sm:mb-14">
          <p className="font-mono text-sm tracking-widest text-accent">
            {index} <span className="text-faint">/</span>{" "}
            <span className="uppercase">{title}</span>
          </p>
          {kicker && (
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {kicker}
            </h2>
          )}
          <div className="mt-5 h-px w-full bg-gradient-to-r from-edge-strong/60 via-edge to-transparent" />
        </div>
      </Reveal>
      {children}
    </section>
  );
}
