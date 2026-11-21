export type Skill = {
  name: string;
  detail: string;
};

export type SkillGroup = {
  name: string;
  number: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    name: "Front-end",
    number: "01",
    skills: [
      { name: "React", detail: "Componentes e interfaces" },
      { name: "Next.js", detail: "Aplicações web completas" },
      { name: "TypeScript", detail: "Código seguro e escalável" },
      { name: "Tailwind CSS", detail: "Estilização consistente" },
    ],
  },
  {
    name: "Experiência",
    number: "02",
    skills: [
      { name: "Acessibilidade", detail: "Experiências para todos" },
      { name: "Design responsivo", detail: "Do celular ao desktop" },
      { name: "Animação UI", detail: "Movimento com propósito" },
      { name: "Performance", detail: "Web rápida e eficiente" },
    ],
  },
  {
    name: "Ferramentas",
    number: "03",
    skills: [
      { name: "Git & GitHub", detail: "Fluxo de colaboração" },
      { name: "Figma", detail: "Prototipação e handoff" },
      { name: "Node.js", detail: "Ferramentas e APIs" },
      { name: "Vercel", detail: "Deploy e observabilidade" },
    ],
  },
];
