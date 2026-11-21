import { ArrowUpRight, GraduationCap } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { certificates } from "@/data/certificates";
import { education } from "@/data/education";

export function JourneySection() {
  return (
    <section id="jornada" aria-labelledby="journey-title" className="section-shell scroll-mt-24">
      <div className="container-shell">
        <SectionHeading
          id="journey-title"
          number="03"
          eyebrow="Formação e aprendizado"
          title="Sempre em movimento."
          description="A tecnologia muda rápido — por isso, aprender, praticar e compartilhar fazem parte do meu caminho."
        />
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <h3 className="mb-7 flex items-center gap-3 text-sm font-semibold text-slate-800 dark:text-slate-200">
              <GraduationCap size={18} className="text-emerald-800 dark:text-mint" aria-hidden="true" />
              Formação
            </h3>
            <ol className="relative space-y-8 border-l border-slate-200 pl-6 dark:border-white/10">
              {education.map((item, index) => (
                <li key={`${item.course}-${item.period}`} className="relative">
                  <span className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-emerald-700 bg-paper dark:border-mint dark:bg-ink" />
                  <Reveal delay={index * 0.08}>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="font-display text-[11px] tracking-wide text-emerald-800 dark:text-mint-deep">
                        {item.period}
                      </p>
                      <span className="rounded-full bg-emerald-900/[0.06] px-2.5 py-1 text-[10px] font-medium text-slate-600 dark:bg-white/[0.06] dark:text-slate-400">
                        {item.status}
                      </span>
                    </div>
                    <h4 className="mt-3 text-base font-semibold text-slate-900 dark:text-paper">{item.course}</h4>
                    <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-500">{item.institution}</p>
                    <p className="mt-3 max-w-lg text-sm leading-6 text-slate-600 dark:text-slate-400">{item.description}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h3 className="mb-7 text-sm font-semibold text-slate-800 dark:text-slate-200">Cursos e certificados</h3>
            <div className="space-y-3">
              {certificates.map((certificate, index) => (
                <Reveal key={certificate.name} delay={index * 0.08}>
                  <article className="flex items-start justify-between gap-4 rounded-2xl border border-slate-200/80 bg-white/60 p-5 dark:border-white/[0.08] dark:bg-white/[0.025]">
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-paper">{certificate.name}</h4>
                      <p className="mt-2 text-xs text-slate-500 dark:text-slate-500">
                        {certificate.issuer} <span aria-hidden="true">·</span> {certificate.date}
                      </p>
                    </div>
                    {certificate.url && (
                      <a
                        href={certificate.url}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-0.5 shrink-0 text-slate-400 transition hover:text-emerald-800 dark:hover:text-mint"
                        aria-label={`Visualizar certificado: ${certificate.name} (abre em nova aba)`}
                      >
                        <ArrowUpRight size={17} aria-hidden="true" />
                      </a>
                    )}
                  </article>
                </Reveal>
              ))}
            </div>
            <p className="mt-5 text-xs leading-5 text-slate-500 dark:text-slate-500">
              Os cursos listados são exemplos demonstrativos. Adicione os links de validação ao personalizar seus certificados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
