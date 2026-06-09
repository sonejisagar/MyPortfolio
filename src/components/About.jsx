import SectionTitle from "./SectionTitle";

function About({ profile, education }) {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
      <SectionTitle eyebrow="About Me" title="Building useful products with clarity and intent" />
      <div className="grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
          <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Profile</h3>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {profile.summary} I focus on creating mobile apps that are fast, reliable, and easy to use.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
          <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">Education</h3>
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
            {education.map((item) => (
              <li key={item} className="rounded-md bg-slate-50 p-2 dark:bg-slate-700/40">
                {item}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

export default About;
