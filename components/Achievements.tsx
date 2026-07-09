"use client";

import Section, { Reveal } from "./Section";
import { achievements, leadership } from "@/lib/data";
import { Trophy, Users } from "lucide-react";

export default function Achievements() {
  return (
    <Section
      id="achievements"
      index="05"
      title="Achievements"
      kicker="Ranked, awarded, and occasionally on the podium."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {achievements.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.06}>
            <div className="flex h-full gap-4 rounded-xl border border-edge bg-surface p-6 transition-colors hover:border-edge-strong">
              <div className="h-fit rounded-lg bg-accent-soft p-2.5 text-accent">
                <Trophy size={20} />
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-faint">{a.tag}</p>
                <h3 className="mt-1.5 font-semibold leading-snug text-foreground">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{a.detail}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14">
        <p className="flex items-center gap-2 font-mono text-sm tracking-widest text-faint">
          <Users size={15} />
          LEADERSHIP & RESPONSIBILITY
        </p>
      </Reveal>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {leadership.map((l, i) => (
          <Reveal key={l.role} delay={i * 0.06}>
            <div className="h-full rounded-xl border border-edge bg-surface p-5 transition-colors hover:border-edge-strong">
              <h3 className="font-medium text-foreground">{l.role}</h3>
              <p className="mt-0.5 font-mono text-xs text-accent">{l.org}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{l.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
