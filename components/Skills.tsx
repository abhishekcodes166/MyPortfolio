"use client";

import Section, { Reveal } from "./Section";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <Section id="skills" index="02" title="Skills" kicker="The toolbox I reach for.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.06}>
            <div className="h-full rounded-xl border border-edge bg-surface p-5 transition-colors hover:border-edge-strong">
              <h3 className="font-mono text-sm uppercase tracking-wider text-accent">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-edge bg-surface-2 px-2.5 py-1 text-[13px] text-foreground/85 transition-colors hover:border-edge-strong hover:text-accent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
