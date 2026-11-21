import { BookOpen, Camera, Coffee, Trees } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { hobbies } from "@/data/hobbies";

const hobbyIcons = {
  BookOpen,
  Camera,
  Coffee,
  Trees,
};

export function HobbiesSection() {
  return (
    <section id="interesses" aria-labelledby="hobbies-title" className="section-shell scroll-mt-24 bg-white/55 dark:bg-white/[0.018]">
      <div className="container-shell">
        <SectionHeading
          id="hobbies-title"
          number="04"
          eyebrow="Fora da tela"
          title="Também sou feito de outras coisas."
          description="Um pouco de vida offline é o que traz novas referências e deixa a criatividade respirar."
        />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {hobbies.map((hobby, index) => {
            const Icon = hobbyIcons[hobby.icon as keyof typeof hobbyIcons];
            return (
              <Reveal key={hobby.name} delay={index * 0.06}>
                <article className="h-full rounded-2xl border border-slate-200/80 bg-paper p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald-800/20 dark:border-white/[0.08] dark:bg-[#101714] dark:hover:border-mint/20 sm:p-6">
                  <span className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-emerald-900/[0.06] text-emerald-800 dark:bg-mint/[0.08] dark:text-mint">
                    <Icon size={19} aria-hidden="true" />
                  </span>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-paper">{hobby.name}</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-600 dark:text-slate-400">{hobby.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
