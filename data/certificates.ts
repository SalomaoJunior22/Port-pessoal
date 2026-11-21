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
    date: "2026",
  },
  {
    name: "Acessibilidade para produtos digitais",
    issuer: "Plataforma de cursos online",
    date: "2026",
  },
];
