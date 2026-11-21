import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";

const footerLinks = [
  { title: "Projetos", href: "#projetos" },
  { title: "Sobre", href: "#sobre" },
  { title: "Jornada", href: "#jornada" },
  { title: "Contato", href: "#contato" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200/80 py-8 dark:border-white/[0.08]">
      <div className="container-shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} {profile.name}. Feito com cuidado e um pouco de café.
        </p>
        <nav aria-label="Navegação do rodapé" className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-xs text-slate-500 transition hover:text-emerald-800 dark:hover:text-mint">
              {link.title}
            </a>
          ))}
          <a
            href="#inicio"
            className="flex items-center gap-1 text-xs font-medium text-emerald-800 transition hover:text-emerald-600 dark:text-mint dark:hover:text-white"
          >
            Voltar ao topo <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        </nav>
      </div>
    </footer>
  );
}
