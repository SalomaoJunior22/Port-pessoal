export type Certificate = {
  name: string;
  issuer: string;
  date: string;
  url?: string;
};

export const certificates: Certificate[] = [
  {
    name: "Fundamentos de React e TypeScript",
    issuer: "Plataforma de cursos online",
    date: "2024",
  },
  {
    name: "Acessibilidade para produtos digitais",
    issuer: "Plataforma de cursos online",
    date: "2023",
  },
];
