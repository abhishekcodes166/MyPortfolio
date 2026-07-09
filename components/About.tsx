"use client";

import Section, { Reveal } from "./Section";
import { about } from "@/lib/data";
import { GraduationCap, Trophy, Cpu } from "lucide-react";

const facets = [
  {
    icon: GraduationCap,
    title: "MNNIT Allahabad '27",
    text: "B.Tech in Computer Science & Engineering",
  },
  {
    icon: Trophy,
    title: "LeetCode Knight",
    text: "2070 rating · top 1.77% worldwide",
  },
  {
    icon: Cpu,
    title: "AI-first builder",
    text: "WebRTC platforms, system-design tools & ML pipelines",
  },
];

export default function About() {
  return (
    <Section id="about" index="01" title="About" kicker="Engineer by training, builder by habit.">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-base leading-relaxed text-muted sm:text-lg">{p}</p>
            </Reveal>
          ))}
        </div>
        <div className="space-y-4">
          {facets.map((f, i) => (
            <Reveal key={f.title} delay={0.1 + i * 0.08}>
              <div className="group flex items-start gap-4 rounded-xl border border-edge bg-surface p-5 transition-colors hover:border-edge-strong">
                <div className="rounded-lg bg-accent-soft p-2.5 text-accent">
                  <f.icon size={20} />
                </div>
                <div>
                  <p className="font-medium text-foreground">{f.title}</p>
                  <p className="mt-1 text-sm text-muted">{f.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
