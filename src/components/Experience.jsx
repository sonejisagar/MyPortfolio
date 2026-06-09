import SectionTitle from "./SectionTitle";

function Experience({ experience }) {
  return (
    <section id="experience" className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
      <SectionTitle eyebrow="Experience" title="Professional experience" />
      <div className="space-y-5">
        {experience.map((item) => (
          <article
            key={`${item.role}-${item.company}`}
            className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                {item.role} - {item.company}
              </h3>
              <span className="text-xs font-semibold uppercase tracking-wide text-brand-600 dark:text-brand-100">
                {item.duration}
              </span>
            </div>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600 dark:text-slate-300">
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
