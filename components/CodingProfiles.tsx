"use client";

import Section, { Reveal } from "./Section";
import { codingProfiles } from "@/lib/data";
import { ExternalLink } from "lucide-react";

export default function CodingProfiles() {
  return (
    <Section
      id="profiles"
      index="04"
      title="Coding Profiles"
      kicker="The numbers behind the practice."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {codingProfiles.map((p, i) => (
          <Reveal key={p.platform} delay={i * 0.06}>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full rounded-xl border border-edge bg-surface p-6 transition-all hover:-translate-y-1 hover:border-edge-strong hover:shadow-[0_0_40px_-18px_rgba(16,185,129,0.4)]"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{p.platform}</h3>
                  <p className="font-mono text-sm text-accent">{p.handle}</p>
                </div>
                <ExternalLink
                  size={18}
                  className="text-faint transition-colors group-hover:text-accent"
                />
              </div>
              <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3">
                {p.stats.map((s) => (
                  <div key={s.label}>
                    <dt className="text-xs text-faint">{s.label}</dt>
                    <dd className="mt-0.5 font-mono text-sm text-foreground">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
