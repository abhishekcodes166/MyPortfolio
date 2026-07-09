"use client";

import Section, { Reveal } from "./Section";
import { profile } from "@/lib/data";
import { Mail, Phone, Download, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "./icons";

const socials = [
  { href: profile.links.github, icon: GithubIcon, label: "GitHub" },
  { href: profile.links.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
  { href: profile.links.leetcode, icon: LeetCodeIcon, label: "LeetCode" },
];

export default function Contact() {
  return (
    <Section id="contact" index="07" title="Contact" kicker="Let's build something together.">
      <Reveal>
        <div className="overflow-hidden rounded-2xl border border-edge bg-surface">
          <div className="relative px-6 py-12 text-center sm:px-12 sm:py-16">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-64 opacity-20 blur-3xl"
              style={{
                background:
                  "radial-gradient(ellipse at bottom, rgba(16,185,129,0.5), transparent 70%)",
              }}
            />
            <p className="mx-auto max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              I&apos;m currently looking for SDE internship opportunities and open to
              interesting collaborations. If you&apos;re hiring — or just want to talk
              real-time systems, AI agents, or contest problems — my inbox is open.
            </p>

            <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-lg bg-accent-strong px-5 py-3 text-sm font-medium text-emerald-950 transition-colors hover:bg-accent"
              >
                <Mail size={16} />
                {profile.email}
              </a>
              <a
                href={profile.resumeUrl}
                download="Abhishek_Kumar_Jha_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-lg border border-edge px-5 py-3 text-sm text-foreground transition-colors hover:border-edge-strong hover:bg-accent-soft"
              >
                <Download size={16} />
                Resume
              </a>
            </div>

            <div className="relative mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-sm text-muted">
              <span className="inline-flex items-center gap-1.5">
                <Phone size={14} className="text-accent" />
                {profile.phone}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={14} className="text-accent" />
                {profile.location}
              </span>
            </div>

            <div className="relative mt-6 flex items-center justify-center gap-2">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="rounded-lg border border-edge p-3 text-muted transition-all hover:border-edge-strong hover:bg-accent-soft hover:text-accent"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
