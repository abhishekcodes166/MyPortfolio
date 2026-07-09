"use client";

import Section, { Reveal } from "./Section";
import { education } from "@/lib/data";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <Section id="education" index="06" title="Education" kicker="Where the fundamentals come from.">
      <div className="relative space-y-8 border-l border-edge pl-8 sm:pl-10">
        {education.map((e, i) => (
          <Reveal key={e.degree} delay={i * 0.07}>
            <div className="relative">
              <span className="absolute -left-[41px] top-1 flex h-6 w-6 items-center justify-center rounded-full border border-edge-strong bg-surface text-accent sm:-left-[49px]">
                <GraduationCap size={13} />
              </span>
              <p className="font-mono text-xs text-faint">{e.period}</p>
              <h3 className="mt-1.5 text-lg font-semibold text-foreground">{e.institution}</h3>
              <p className="mt-1 text-sm text-accent">{e.degree}</p>
              {e.detail && <p className="mt-1.5 text-sm text-muted">{e.detail}</p>}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
