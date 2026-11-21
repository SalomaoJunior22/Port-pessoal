"use client";

import { ArrowUpRight, CheckCircle2, Github, Linkedin, Mail } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/data/profile";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageReady, setMessageReady] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setMessageReady(false);

    if (isSubmitting) return;

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setError("Preencha todos os campos antes de continuar.");
      return;
    }

    setIsSubmitting(true);
    const subject = encodeURIComponent(`Contato pelo portfólio — ${name}`);
    const body = encodeURIComponent(`${message}\n\nDe: ${name}\nE-mail: ${email}`);
    const form = event.currentTarget;
    window.setTimeout(() => {
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setIsSubmitting(false);
      setMessageReady(true);
      form.reset();
    }, 180);
  }

  return (
    <section id="contato" aria-labelledby="contact-title" className="section-shell scroll-mt-24">
      <div className="container-shell">
        <SectionHeading
          id="contact-title"
          number="05"
          eyebrow="Vamos conversar?"
          title="Uma boa conversa pode ser o começo."
          description="Tem um projeto em mente, uma oportunidade ou só quer trocar uma ideia? Minha caixa de entrada está aberta."
        />
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <div className="rounded-2xl border border-emerald-900/10 bg-emerald-950/[0.035] p-6 dark:border-mint/10 dark:bg-mint/[0.035] sm:p-8">
              <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">
                Estou sempre aberto a conhecer pessoas, colaborar em projetos interessantes e conversar sobre tecnologia.
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-7 flex items-center gap-3 text-sm font-medium text-slate-900 transition hover:text-emerald-800 dark:text-paper dark:hover:text-mint"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-900/[0.07] text-emerald-800 dark:bg-mint/[0.1] dark:text-mint">
                  <Mail size={17} aria-hidden="true" />
                </span>
                {profile.email}
              </a>
              <div className="mt-8 border-t border-slate-200 pt-6 dark:border-white/10">
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">Também estou por aqui</p>
                <div className="flex gap-3">
                  <a
                    className="icon-button"
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub (abre em nova aba)"
                  >
                    <Github size={17} aria-hidden="true" />
                  </a>
                  <a
                    className="icon-button"
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn (abre em nova aba)"
                  >
                    <Linkedin size={17} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="field-label">Seu nome</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    maxLength={100}
                    className="form-input"
                    placeholder="Como posso te chamar?"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="field-label">Seu e-mail</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={254}
                    className="form-input"
                    placeholder="voce@exemplo.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-message" className="field-label">Sua mensagem</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  maxLength={3000}
                  className="form-input resize-y"
                  placeholder="Conte um pouco sobre o que você tem em mente..."
                />
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <button type="submit" className="button" disabled={isSubmitting}>
                  {isSubmitting ? "Preparando..." : "Preparar mensagem"}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </button>
                <p aria-live="polite" className="text-xs leading-5 text-slate-500 dark:text-slate-500">
                  {error && <span className="text-red-700 dark:text-red-300">{error}</span>}
                  {messageReady && (
                    <span className="inline-flex items-center gap-1.5 text-emerald-800 dark:text-mint">
                      <CheckCircle2 size={14} aria-hidden="true" />
                      Rascunho aberto no seu aplicativo de e-mail. Revise e envie por lá.
                    </span>
                  )}
                  {!error && !messageReady && "Seu aplicativo de e-mail abrirá com a mensagem pronta."}
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
