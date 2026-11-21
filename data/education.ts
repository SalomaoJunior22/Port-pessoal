export type Education = {
  institution: string;
  course: string;
  period: string;
  description: string;
  status: "Concluído" | "Em andamento";
};

export const education: Education[] = [
  {
    institution: "Sua instituição de ensino",
    course: "Análise e Desenvolvimento de Sistemas",
    period: "2022 — 2024",
    description:
      "Formação em desenvolvimento de software, fundamentos de programação, banco de dados e engenharia de sistemas.",
    status: "Concluído",
  },
  {
    institution: "Cursos e estudos independentes",
    course: "Desenvolvimento Front-end",
    period: "2021 — presente",
    description:
      "Aprendizado contínuo em React, TypeScript, acessibilidade e arquitetura de interfaces web.",
    status: "Em andamento",
  },
];
