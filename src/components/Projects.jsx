import SectionTitle from "./SectionTitle";

function Projects({ projects }) {
  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
      <SectionTitle
        eyebrow="Projects"
        title="Selected Work & Production Apps"
        description="Production Flutter and Android applications published on Google Play with real active users, sub-second latency, and scalable architectures."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="glow-card group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition-all duration-300 hover:border-brand-500/50 hover:shadow-card-hover dark:border-slate-700/80 dark:bg-slate-800 dark:hover:border-brand-400/40 dark:hover:shadow-card-hover-dark"
          >
            <div>
              {/* Top Header: Title & 100+ Downloads Badge */}
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div className="flex-1">
                  <h3 className="text-xl font-bold tracking-tight text-slate-900 transition-colors group-hover:text-brand-600 dark:text-slate-100 dark:group-hover:text-brand-300">
                    {project.title}
                  </h3>
                  {project.tagline && (
                    <p className="mt-1 text-xs font-medium text-brand-600 dark:text-brand-300">
                      {project.tagline}
                    </p>
                  )}
                </div>

                {/* 100+ Downloads Badge */}
                {project.downloads && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 shadow-sm dark:border-emerald-400/30 dark:bg-emerald-950/60 dark:text-emerald-300">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 live-pulse-dot" />
                    <span>{project.downloads} Downloads</span>
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {project.description}
              </p>

              {/* Production Metrics Grid (Inspired by Manav's Portfolio) */}
              {project.metrics && (
                <div className="mt-4 grid grid-cols-2 gap-2.5 rounded-xl border border-slate-200/80 bg-slate-50/80 p-3 dark:border-slate-700/60 dark:bg-slate-900/60 sm:grid-cols-4">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="flex flex-col">
                      <span className="text-sm font-black text-slate-900 dark:text-emerald-300 sm:text-base">
                        {m.value}
                      </span>
                      <span className="text-[10px] leading-tight font-medium text-slate-500 dark:text-slate-400">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tech Stack Pills */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs font-semibold text-slate-700 transition hover:border-brand-400 dark:border-slate-700 dark:bg-slate-700/50 dark:text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Highlights List */}
              <ul className="mt-4 space-y-1.5 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                {project.highlights.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Play Store Link Button */}
            {project.playStore && (
              <div className="mt-5 border-t border-slate-100 pt-4 dark:border-slate-700/60">
                <a
                  href={project.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-emerald-glow"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a2.43 2.43 0 0 1-.61-1.636V3.45a2.43 2.43 0 0 1 .61-1.636zm11.602 11.602l2.368 2.369-12.012 6.94 9.644-9.309zm0-2.832L5.567 1.275l12.012 6.94-2.368 2.369zm1.419 1.416l3.208 1.854a1.624 1.624 0 0 1 0 2.292l-3.208 1.854-2.148-2.148 2.148-1.852z" />
                  </svg>
                  <span>Get on Google Play (100+ Downloads)</span>
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
