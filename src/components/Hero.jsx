import { useState } from "react";
import { overviewStats } from "../data/profile";

function Hero({ profile, onCopyEmail }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(profile.email);
      setCopied(true);
      if (onCopyEmail) onCopyEmail("Email copied to clipboard ✓");
      setTimeout(() => setCopied(false), 2400);
    }
  };

  return (
    <section id="hero" className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-20">
      <div className="grid gap-10 md:grid-cols-[1.35fr_1fr] md:items-center">
        <div className="animate-rise">
          {/* Live Status Pill */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span>2 Shipped Apps on Google Play Store</span>
          </div>

          {/* Name with Shimmer Sheen */}
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl md:leading-[1.1]">
            <span className="shimmer-text">{profile.name}</span>
          </h1>

          {/* Title & Subtitle */}
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="inline-flex rounded-md bg-brand-50 px-2.5 py-1 text-sm font-semibold text-brand-700 dark:bg-brand-700/20 dark:text-brand-100">
              {profile.title}
            </span>
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
              • Gemini AI & Cloudflare Integrations
            </span>
          </div>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
            {profile.summary}
          </p>

          {/* Interactive CTA Buttons */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition duration-200 hover:-translate-y-0.5 hover:bg-brand-700"
            >
              <span>Explore Projects</span>
              <span className="text-xs">↓</span>
            </a>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition duration-200 hover:-translate-y-0.5 hover:border-brand-500 hover:text-brand-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-brand-400 dark:hover:text-brand-100"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span>{copied ? "Copied! ✓" : "Copy Email"}</span>
            </button>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 transition hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-300"
            >
              <span>Direct Mail ↗</span>
            </a>
          </div>

          {/* Quick Metrics Bar with 100+ Highlight */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {overviewStats.map((stat) => (
              <div
                key={stat.label}
                className="glow-card rounded-xl border border-slate-200/80 bg-white/80 p-3 shadow-sm backdrop-blur dark:border-slate-700/80 dark:bg-slate-800/80"
              >
                <div className={`text-2xl font-black tracking-tight bg-gradient-to-r ${stat.accent} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className="mt-0.5 text-xs font-semibold text-slate-800 dark:text-slate-100">
                  {stat.label}
                </div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Portrait & Terminal Card */}
        <div className="animate-rise relative rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-800">

          <div className="rounded-xl bg-gradient-to-br from-brand-500/40 via-sky-400/20 to-indigo-500/40 p-[2px]">
            <img
              src="/profile.jpg"
              alt="Portrait of Sagar Soneji"
              className="h-80 w-full rounded-xl bg-slate-100 object-cover object-[center_24%] shadow-md sm:h-96 dark:bg-slate-900"
              loading="eager"
              onError={(event) => {
                event.currentTarget.src = "/profile-placeholder.svg";
              }}
            />
          </div>

          {/* Interactive Terminal with Blinking Cursor */}
          <div className="mt-4 rounded-lg bg-slate-950 p-3.5 font-mono text-xs text-emerald-300 dark:bg-slate-950">
            <div className="mb-2 flex items-center gap-1.5 border-b border-slate-800 pb-2 text-[10px] text-slate-500">
              <span className="h-2 w-2 rounded-full bg-rose-500/80" />
              <span className="h-2 w-2 rounded-full bg-amber-500/80" />
              <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
              <span className="ml-2 font-sans text-slate-400">sagar-terminal.sh</span>
            </div>
            {profile.introTerminal.map((line) => (
              <p key={line} className="mb-1 leading-relaxed last:mb-0">
                {line}
              </p>
            ))}
            <div className="mt-1 flex items-center gap-1 text-emerald-400">
              <span>&gt; ready for next build</span>
              <span className="inline-block h-3.5 w-1.5 animate-pulse bg-emerald-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
