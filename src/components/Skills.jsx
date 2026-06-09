import SectionTitle from "./SectionTitle";

function Skills({ skills }) {
  return (
    <section id="skills" className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
      <SectionTitle
        eyebrow="Skills"
        title="Tools and technologies I work with"
        description="A balanced skill set across Android, backend services, and practical product development."
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((group) => (
          <article
            key={group.group}
            className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-800"
          >
            <h3 className="mb-4 text-base font-semibold text-slate-900 dark:text-slate-100">{group.group}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-xs text-slate-700 dark:border-slate-600 dark:bg-slate-700/40 dark:text-slate-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
