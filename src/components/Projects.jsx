import SectionTitle from "./SectionTitle";

function Projects({ projects }) {
  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
      <SectionTitle
        eyebrow="Projects"
        title="Selected work"
        description="Projects that demonstrate engineering depth, product thinking, and practical problem solving."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-800"
          >
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">{project.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-brand-50 px-2 py-1 text-xs font-semibold text-brand-700 dark:bg-brand-700/20 dark:text-brand-100"
                >
                  {tech}
                </span>
              ))}
            </div>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600 dark:text-slate-300">
              {project.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            {project.playStore && (
              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-700/60">
                <a
                  href={project.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-emerald-700 hover:shadow"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a2.43 2.43 0 0 1-.61-1.636V3.45a2.43 2.43 0 0 1 .61-1.636zm11.602 11.602l2.368 2.369-12.012 6.94 9.644-9.309zm0-2.832L5.567 1.275l12.012 6.94-2.368 2.369zm1.419 1.416l3.208 1.854a1.624 1.624 0 0 1 0 2.292l-3.208 1.854-2.148-2.148 2.148-1.852z" />
                  </svg>
                  Get on Google Play
                </a>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
