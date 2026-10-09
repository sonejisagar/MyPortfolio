import { useState } from "react";
import SectionTitle from "./SectionTitle";

function Contact({ profile, onCopyEmail }) {
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
    <section id="contact" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
      <SectionTitle
        eyebrow="Contact"
        title="Let's build something meaningful"
        description="Available for Flutter & Android Developer opportunities, contract roles, and mobile product collaborations."
      />
      <div className="glow-card rounded-2xl border border-slate-200/90 bg-white p-8 text-center shadow-sm dark:border-slate-700/80 dark:bg-slate-800">
        <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
          Direct Inquiries
        </div>
        
        {/* Click to Copy Email */}
        <button
          onClick={handleCopy}
          className="group inline-flex flex-col items-center gap-1 transition focus:outline-none"
          title="Click to copy email"
        >
          <span className="text-2xl font-bold tracking-tight text-brand-600 transition group-hover:text-brand-700 dark:text-brand-300 dark:group-hover:text-brand-200 sm:text-3xl">
            {profile.email}
          </span>
          <span className="text-xs font-medium text-slate-500 transition group-hover:text-brand-600 dark:text-slate-400 dark:group-hover:text-brand-300">
            {copied ? "Copied to clipboard ✓" : "Click to copy email address"}
          </span>
        </button>

        {/* Social / Dev Links */}
        <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm font-semibold">
          <a
            className="inline-flex items-center gap-1 rounded-lg border border-slate-200 px-3.5 py-1.5 text-slate-700 transition hover:border-brand-500 hover:text-brand-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-brand-400 dark:hover:text-brand-300"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <span>LinkedIn</span>
            <span className="text-xs">↗</span>
          </a>
          <a
            className="inline-flex items-center gap-1 rounded-lg border border-slate-200 px-3.5 py-1.5 text-slate-700 transition hover:border-brand-500 hover:text-brand-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-brand-400 dark:hover:text-brand-300"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            <span>GitHub</span>
            <span className="text-xs">↗</span>
          </a>
          <a
            className="inline-flex items-center gap-1 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-emerald-700 transition hover:bg-emerald-500/20 dark:text-emerald-300"
            href="https://play.google.com/store/apps/developer?id=Sagar+Soneji"
            target="_blank"
            rel="noreferrer"
          >
            <span>Google Play</span>
            <span className="text-xs">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
