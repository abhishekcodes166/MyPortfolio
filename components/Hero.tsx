"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "./icons";
import { profile, about } from "@/lib/data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export default function Hero() {
  return (
    <section id="top" className="flex min-h-screen flex-col justify-center pb-16 pt-28 sm:pt-32">
      {/* green ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[480px] w-[720px] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(16,185,129,0.35), transparent 65%)",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]"
      >
        <div>
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-edge bg-surface px-3.5 py-1.5 font-mono text-xs text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Open to SDE internships · {profile.location}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-6xl"
          >
            Abhishek
            <br />
            Kumar{" "}
            <span className="bg-gradient-to-r from-accent to-emerald-200 bg-clip-text text-transparent">
              Jha
            </span>
          </motion.h1>

          <motion.p variants={item} className="mt-5 font-mono text-base text-accent sm:text-lg">
            {profile.role}
          </motion.p>

          <motion.p variants={item} className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-accent-strong px-5 py-3 text-sm font-medium text-emerald-950 transition-all hover:bg-accent"
            >
              View Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={profile.resumeUrl}
              download="Abhishek_Kumar_Jha_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-lg border border-edge px-5 py-3 text-sm font-medium text-foreground transition-all hover:border-edge-strong hover:bg-accent-soft"
            >
              <Download size={16} />
              Download Resume
            </a>
            <div className="ml-1 flex items-center gap-1">
              {[
                { href: profile.links.github, icon: GithubIcon, label: "GitHub" },
                { href: profile.links.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
                { href: profile.links.leetcode, icon: LeetCodeIcon, label: "LeetCode" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="rounded-md p-2.5 text-muted transition-colors hover:bg-accent-soft hover:text-accent"
                >
                  <Icon size={19} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-12 grid max-w-xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-edge bg-edge sm:grid-cols-4"
          >
            {about.highlights.map((h) => (
              <div key={h.label} className="bg-surface px-4 py-4">
                <p className="font-mono text-lg font-semibold text-accent sm:text-xl">{h.value}</p>
                <p className="mt-1 text-xs text-faint">{h.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Photo card */}
        <motion.div variants={item} className="hidden lg:block">
          <div className="overflow-hidden rounded-xl border border-edge bg-surface shadow-[0_0_60px_-15px_rgba(16,185,129,0.25)]">
            <div className="flex items-center gap-2 border-b border-edge bg-surface-2 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 font-mono text-xs text-faint">abhishek.jpeg</span>
            </div>
            <Image
              src="/abhishek.jpeg"
              alt="Abhishek Kumar Jha"
              width={640}
              height={640}
              priority
              className="aspect-square w-full object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
