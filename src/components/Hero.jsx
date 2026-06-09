function Hero({ profile }) {
  return (
    <section className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1.4fr_1fr] md:py-24">
      <div className="animate-rise">
        <p className="mb-3 inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 dark:bg-brand-700/20 dark:text-brand-100">
          Android Developer
        </p>
        <h1 className="text-3xl font-extrabold leading-tight text-slate-900 dark:text-white sm:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-3 text-lg font-semibold text-slate-700 dark:text-slate-200">{profile.subtitle}</p>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {profile.summary}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:bg-brand-700"
          >
            View Projects
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-brand-500 hover:text-brand-700 dark:border-slate-600 dark:text-slate-200 dark:hover:border-brand-100 dark:hover:text-brand-100"
          >
            Email Me
          </a>
        </div>
      </div>
      <div className="animate-rise rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <div className="rounded-2xl bg-gradient-to-br from-brand-500/40 via-sky-400/20 to-indigo-500/40 p-[2px]">
          <img
            src="/profile.jpg"
            alt="Portrait of Sagar Soneji"
            className="h-80 w-full rounded-2xl bg-slate-100 object-cover object-[center_24%] shadow-md sm:h-96 md:h-[26rem] dark:bg-slate-900"
            loading="eager"
            onError={(event) => {
              event.currentTarget.src = "/profile-placeholder.svg";
            }}
          />
        </div>
        <div className="mt-4 rounded-lg bg-slate-950 p-4 font-mono text-xs text-emerald-300 dark:bg-slate-900">
          {profile.introTerminal.map((line) => (
            <p key={line} className="mb-1 last:mb-0">
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
