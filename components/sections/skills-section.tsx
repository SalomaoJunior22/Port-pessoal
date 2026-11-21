import {
  Accessibility,
  Braces,
  Code2,
  Component,
  Figma,
  GitBranch,
  Gauge,
  Layers3,
  Rocket,
  Server,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { skillGroups } from "@/data/skills";

const skillIcons = [
  Code2,
  Component,
  Braces,
  Layers3,
  Accessibility,
  Smartphone,
  Sparkles,
  Gauge,
  GitBranch,
  Figma,
  Server,
  Rocket,
];

export function SkillsSection() {
  return (
    <section id="sobre" aria-labelledby="skills-title" className="section-shell scroll-mt-24 bg-white/55 dark:bg-white/[0.018]">
      <div className="container-shell">
        <SectionHeading
          id="skills-title"
          number="02"
          eyebrow="O que eu faço"
          title="Da ideia ao detalhe."
          description="Gosto de conectar código bem estruturado a interfaces acolhedoras — com colaboração e curiosidade em cada etapa."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {skillGroups.map((group, groupIndex) => (
            <Reveal key={group.name} delay={groupIndex * 0.08}>
              <article className="h-full rounded-2xl border border-slate-200/80 bg-paper/70 p-6 dark:border-white/[0.08] dark:bg-[#101714] sm:p-7">
                <div className="mb-7 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-paper">{group.name}</h3>
                  <span className="font-display text-xs text-emerald-800/60 dark:text-mint-deep/70">{group.number}</span>
                </div>
                <ul className="space-y-5">
                  {group.skills.map((skill, skillIndex) => {
                    const Icon = skillIcons[groupIndex * group.skills.length + skillIndex];
                    return (
                      <li key={skill.name} className="flex items-center gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-900/[0.06] text-emerald-800 dark:bg-mint/[0.08] dark:text-mint">
                          <Icon size={18} aria-hidden="true" />
                        </span>
                        <span>
                          <span className="block text-sm font-medium text-slate-800 dark:text-slate-200">{skill.name}</span>
                          <span className="mt-1 block text-xs text-slate-500 dark:text-slate-500">{skill.detail}</span>
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
