export type Project = {
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  category: string;
  technologies: string[];
  demo: string;
  repository: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "Fluxo Financeiro",
    description:
      "Um painel claro e prático para acompanhar despesas, definir metas e entender para onde vai cada real.",
    image: "/images/project-finance.svg",
    imageAlt: "Prévia ilustrada do painel Fluxo Financeiro",
    category: "Produto digital",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
    demo: "https://example.com",
    repository: "https://github.com/SalomaoJunior22",
    featured: true,
  },
  {
    name: "Casa Forma",
    description:
      "Experiência de compra para uma marca de decoração autoral, com foco em navegação simples e editorial.",
    image: "/images/project-casa.svg",
    imageAlt: "Prévia ilustrada da loja Casa Forma",
    category: "E-commerce",
    technologies: ["React", "Vite", "CSS"],
    demo: "https://example.com",
    repository: "https://github.com/SalomaoJunior22",
  },
  {
    name: "Clima de Bairro",
    description:
      "Previsão do tempo direta ao ponto, com informações locais e uma interface que muda com o clima.",
    image: "/images/project-weather.svg",
    imageAlt: "Prévia ilustrada do app Clima de Bairro",
    category: "Aplicação web",
    technologies: ["React", "API", "JavaScript"],
    demo: "https://example.com",
    repository: "https://github.com/SalomaoJunior22",
  },
];
