export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  number,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  number: string;
}) {
  return (
    <div className="mb-12 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-mint-deep">
          <span className="font-display text-[11px] text-slate-400">{number}</span>
          <span className="h-px w-8 bg-emerald-700/50 dark:bg-mint-deep/60" />
          {eyebrow}
        </p>
        <h2 id={id} className="max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-slate-900 dark:text-paper sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </div>
      {description && (
        <p className="max-w-md text-sm leading-7 text-slate-600 dark:text-slate-400 md:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
