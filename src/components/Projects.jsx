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
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
