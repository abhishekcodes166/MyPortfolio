"use client";

import Section, { Reveal } from "./Section";
import { featuredProjects, profile } from "@/lib/data";
import { ExternalLink, Sparkles, Wrench } from "lucide-react";
import { GithubIcon } from "./icons";

export default function Projects() {
  return (
    <Section
      id="projects"
      index="03"
      title="Projects"
      kicker="Things I've actually shipped."
    >
      <div className="space-y-8">
        {featuredProjects.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.05}>
            <article className="group overflow-hidden rounded-2xl border border-edge bg-surface transition-all duration-300 hover:border-edge-strong hover:shadow-[0_0_50px_-18px_rgba(16,185,129,0.35)]">
              <div className="grid gap-0 lg:grid-cols-[1fr_1fr]">
                {/* Left: identity, description, stack, links */}
                <div className="flex flex-col p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-xs text-faint">{project.period}</p>
                      <h3 className="mt-1.5 text-2xl font-semibold tracking-tight text-foreground">
                        {project.name}
                      </h3>
                      <p className="mt-1 text-sm text-accent">{project.summary}</p>
                    </div>
                    <span className="hidden shrink-0 font-mono text-4xl font-semibold text-edge sm:block">
                      0{i + 1}
                    </span>
                  </div>

                  <p className="mt-5 text-[15px] leading-relaxed text-muted">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-accent-soft px-2.5 py-1 font-mono text-xs text-accent"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center gap-3 pt-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-edge px-4 py-2 text-sm text-foreground transition-colors hover:border-edge-strong hover:bg-accent-soft"
                    >
                      <GithubIcon size={15} />
                      Source
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-accent-strong px-4 py-2 text-sm font-medium text-emerald-950 transition-colors hover:bg-accent"
                      >
                        <ExternalLink size={15} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Right: features & challenges */}
                <div className="border-t border-edge bg-surface-2/60 p-6 sm:p-8 lg:border-l lg:border-t-0">
                  <div>
                    <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent">
                      <Sparkles size={13} />
                      Key features
                    </p>
                    <ul className="mt-3 space-y-2">
                      {project.features.map((f) => (
                        <li key={f} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                          <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent">
                      <Wrench size={13} />
                      Challenges solved
                    </p>
                    <ul className="mt-3 space-y-2">
                      {project.challenges.map((c) => (
                        <li key={c} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                          <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 text-center">
        <a
          href={profile.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-sm text-muted transition-colors hover:text-accent"
        >
          view the full archive on github
          <ExternalLink size={14} />
        </a>
      </Reveal>
    </Section>
  );
}
