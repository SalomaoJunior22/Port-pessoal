"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { profile } from "@/data/profile";

const navigation = [
  { label: "Projetos", href: "#projetos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Jornada", href: "#jornada" },
  { label: "Interesses", href: "#interesses" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-paper/90 backdrop-blur-xl dark:border-white/[0.08] dark:bg-ink/85">
      <a
        href="#conteudo"
        className="sr-only z-[60] rounded-md bg-mint px-4 py-2 text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Pular para o conteúdo
      </a>
      <div className="container-shell flex h-[72px] items-center justify-between">
        <Link
          href="#inicio"
          onClick={closeMenu}
          className="group flex items-center gap-3"
          aria-label={`${profile.name}, início`}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-emerald-700/25 text-xs font-bold tracking-tight text-emerald-800 dark:border-mint/30 dark:text-mint">
            SJ
          </span>
          <span className="text-sm font-semibold tracking-tight text-slate-900 dark:text-paper">
            salomão<span className="text-emerald-700 dark:text-mint-deep">.dev</span>
          </span>
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="#contato" className="button button-small hidden sm:inline-flex">
            Vamos conversar <span aria-hidden="true">↗</span>
          </a>
          <ThemeToggle />
          <button
            type="button"
            className="icon-button md:hidden"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={19} aria-hidden="true" /> : <Menu size={19} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Navegação móvel"
          className="border-t border-slate-200 bg-paper px-6 py-4 dark:border-white/[0.08] dark:bg-ink md:hidden"
        >
          <div className="container-shell flex flex-col">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="border-b border-slate-200/70 py-3 text-sm text-slate-700 last:border-0 dark:border-white/[0.08] dark:text-slate-300"
              >
                {item.label}
              </a>
            ))}
            <a href="#contato" onClick={closeMenu} className="mt-4 text-sm font-semibold text-emerald-800 dark:text-mint">
              Entrar em contato <span aria-hidden="true">↗</span>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
