import SectionTitle from "./SectionTitle";

function Contact({ profile }) {
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
      <SectionTitle
        eyebrow="Contact"
        title="Let's build something meaningful"
        description="For collaboration, opportunities, or product discussions, reach out via email."
      />
      <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center dark:border-slate-700 dark:bg-slate-800">
        <a
          href={`mailto:${profile.email}`}
          className="text-lg font-semibold text-brand-600 transition hover:text-brand-700 dark:text-brand-100"
        >
          {profile.email}
        </a>
        <div className="mt-4 flex justify-center gap-5 text-sm">
          <a
            className="text-slate-600 transition hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-100"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="text-slate-600 transition hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-100"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
