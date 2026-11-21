"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, MapPin } from "lucide-react";
import { profile } from "@/data/profile";

export function HeroSection() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative flex min-h-[760px] scroll-mt-20 items-center overflow-hidden bg-hero-grid bg-[size:52px_52px] pt-28 sm:min-h-[820px]"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-paper/25 to-paper dark:via-ink/15 dark:to-ink" />
      <div className="container-shell relative grid items-center gap-14 pb-20 pt-10 md:grid-cols-[1.15fr_0.85fr] md:gap-10 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-800/15 bg-white/70 px-3 py-2 text-xs font-medium text-slate-700 dark:border-mint/15 dark:bg-white/[0.04] dark:text-slate-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600 dark:bg-mint-deep" />
            </span>
            Disponível para novos projetos
          </div>
          <p className="mb-4 text-sm font-medium tracking-wide text-emerald-800 dark:text-mint-deep">
            Olá, eu sou {profile.firstName} 👋
          </p>
          <h1
            id="hero-title"
            className="max-w-3xl text-5xl font-semibold leading-[1.06] tracking-[-0.06em] text-slate-950 dark:text-paper sm:text-6xl lg:text-7xl"
          >
            Interfaces que fazem{" "}
            <span className="text-emerald-700 dark:text-mint">sentido.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg font-medium text-slate-700 dark:text-slate-300 sm:text-xl">
            {profile.role}{" "}
            <span className="font-normal text-slate-500 dark:text-slate-500">
              — {profile.headline}
            </span>
          </p>
          <p className="mt-4 max-w-lg text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
            {profile.introduction}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projetos" className="button">
              Ver projetos <ArrowDownRight size={16} aria-hidden="true" />
            </a>
            <a href="#contato" className="button button-secondary">
              Entrar em contato <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="social-link"
              aria-label="GitHub de Salomão Junior (abre em nova aba)"
            >
              <Github size={17} aria-hidden="true" /> GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="social-link"
              aria-label="LinkedIn de Salomão Junior (abre em nova aba)"
            >
              <Linkedin size={17} aria-hidden="true" /> LinkedIn
            </a>
            <span className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-500">
              <MapPin size={14} aria-hidden="true" /> {profile.location}
            </span>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-[390px]"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute -inset-6 rounded-[2.5rem] border border-emerald-800/10 dark:border-mint/10" />
          <div className="absolute -inset-12 rounded-[3rem] border border-emerald-800/[0.06] dark:border-mint/[0.06]" />
          <div className="relative overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-[#13211c] shadow-glow">
            <Image
              src="/images/profile-illustration.svg"
              alt="Ilustração de perfil representando Salomão Junior"
              width={480}
              height={480}
              priority
              className="aspect-square h-auto w-full"
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl border border-white/10 bg-ink/80 p-4 text-white backdrop-blur-md">
              <div>
                <p className="text-sm font-semibold">{profile.name}</p>
                <p className="mt-1 text-xs text-slate-400">Código, café e boas ideias.</p>
              </div>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-mint text-ink">
                <span className="font-display text-xs font-bold">{"</>"}</span>
              </span>
            </div>
          </div>
          <div className="absolute -right-7 top-12 hidden animate-float rounded-xl border border-emerald-900/10 bg-white/90 p-3 shadow-lg dark:border-white/10 dark:bg-[#17211c] sm:block">
            <span className="font-display text-xs text-emerald-800 dark:text-mint">{"{ UI }"}</span>
          </div>
          <div className="absolute -left-7 bottom-24 hidden animate-float rounded-xl border border-emerald-900/10 bg-white/90 p-3 shadow-lg dark:border-white/10 dark:bg-[#17211c] sm:block">
            <span className="font-display text-xs text-emerald-800 dark:text-mint">{"<code />"}</span>
          </div>
        </motion.div>
      </div>
      <a
        href="#projetos"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[10px] font-medium uppercase tracking-[0.22em] text-slate-500 transition hover:text-emerald-800 dark:hover:text-mint md:flex"
      >
        Role para explorar <span className="h-px w-8 bg-current" />
      </a>
    </section>
  );
}
