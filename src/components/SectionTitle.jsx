function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mb-8">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-100">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 sm:text-3xl">{title}</h2>
      {description ? (
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">{description}</p>
      ) : null}
    </div>
  );
}

export default SectionTitle;
