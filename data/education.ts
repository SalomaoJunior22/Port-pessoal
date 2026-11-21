export type Education = {
  institution: string;
  course: string;
  period: string;
  description: string;
  status: "Concluído" | "Em andamento";
};

export const education: Education[] = [
  {
    institution: "Universidade Ceuma",
    course: "Engenharia de Software",
    period: "2026 — 2031",
    description:
      "Formação em desenvolvimento de software, fundamentos de programação, banco de dados e engenharia de sistemas.",
    status: "Em andamento",
  },
  {
    institution: "Cursos e estudos independentes",
    course: "Desenvolvimento Front-end",
    period: "2026 — presente",
    description:
      "Aprendizado contínuo em React, TypeScript, acessibilidade e arquitetura de interfaces web.",
    status: "Em andamento",
  },
];
