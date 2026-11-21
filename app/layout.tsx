import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { MotionProvider } from "@/components/motion-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const siteUrl = "https://salomao.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Salomão Junior — Desenvolvedor Front-end",
    template: "%s | Salomão Junior",
  },
  description:
    "Portfólio de Salomão Junior, desenvolvedor front-end. Interfaces acessíveis, intuitivas e feitas com atenção aos detalhes.",
  applicationName: "Portfólio Salomão Junior",
  keywords: [
    "Salomão Junior",
    "desenvolvedor front-end",
    "React",
    "Next.js",
    "TypeScript",
    "portfólio",
  ],
  authors: [{ name: "Salomão Junior" }],
  creator: "Salomão Junior",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Salomão Junior",
    title: "Salomão Junior — Desenvolvedor Front-end",
    description:
      "Interfaces acessíveis e intuitivas que aproximam pessoas e tecnologia.",
    images: [
      {
        url: "/images/profile-illustration.svg",
        width: 480,
        height: 480,
        alt: "Ilustração de perfil de Salomão Junior",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Salomão Junior — Desenvolvedor Front-end",
    description:
      "Interfaces acessíveis e intuitivas que aproximam pessoas e tecnologia.",
    images: ["/images/profile-illustration.svg"],
  },
  robots: { index: true, follow: true },
};

const themeScript = `
  try {
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme === "light") document.documentElement.classList.remove("dark");
    if (savedTheme === "dark") document.documentElement.classList.add("dark");
  } catch {
    document.documentElement.classList.add("dark");
  }
`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`dark ${inter.variable} ${jetBrainsMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
