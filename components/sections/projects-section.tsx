import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function ProjectsSection() {
  return (
    <section id="projetos" aria-labelledby="projects-title" className="section-shell scroll-mt-24">
      <div className="container-shell">
        <SectionHeading
          id="projects-title"
          number="01"
          eyebrow="Projetos selecionados"
          title="Feitos com intenção."
          description="Uma seleção de projetos pessoais e estudos de interface. Cada detalhe é uma oportunidade de tornar a experiência melhor."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.08}>
              <article className="project-card group">
                <div className="relative aspect-[1.55] overflow-hidden bg-slate-100 dark:bg-[#111a16]">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-ink/0 transition duration-300 group-hover:bg-ink/10" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-ink/60 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-white backdrop-blur">
                    {project.category}
                  </span>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Ver demonstração de ${project.name} (abre em nova aba)`}
                    className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-mint text-ink opacity-0 transition duration-300 hover:bg-white group-hover:translate-y-0 group-hover:opacity-100 focus:translate-y-0 focus:opacity-100"
                  >
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </a>
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-paper">
                      {project.name}
                    </h3>
                    <a
                      href={project.repository}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Ver repositório de ${project.name} no GitHub (abre em nova aba)`}
                      className="mt-0.5 text-slate-400 transition hover:text-emerald-700 dark:hover:text-mint"
                    >
                      <Github size={17} aria-hidden="true" />
                    </a>
                  </div>
                  <p className="mt-2 min-h-[3rem] text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {project.description}
                  </p>
                  <ul aria-label="Tecnologias utilizadas" className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <li key={technology} className="tag">
                        {technology}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
