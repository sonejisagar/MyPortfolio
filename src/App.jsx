import { useEffect, useMemo, useRef, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { education, experience, profile, projects, skills } from "./data/profile";

const THEME_KEY = "portfolio-theme";

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem(THEME_KEY) || "light");
  const [toastMessage, setToastMessage] = useState(null);
  const spotlightRef = useRef(null);
  const progressBarRef = useRef(null);
  const toastTimeoutRef = useRef(null);

  // Theme management
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  // Interactive Cursor Spotlight Follower
  useEffect(() => {
    const handlePointerMove = (e) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.left = `${e.clientX}px`;
        spotlightRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  // Scroll Progress Bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (scrollHeight > 0 && progressBarRef.current) {
        const progress = (window.scrollY / scrollHeight) * 100;
        progressBarRef.current.style.width = `${progress}%`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver for Scroll Reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    const sections = document.querySelectorAll("section:not(#hero)");
    sections.forEach((sec) => {
      sec.classList.add("reveal-init");
      observer.observe(sec);
    });

    return () => observer.disconnect();
  }, []);

  const showToast = (message) => {
    setToastMessage(message);
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    toastTimeoutRef.current = setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-900 dark:text-slate-100">
      {/* Top Scroll Progress Bar */}
      <div id="scroll-progress" ref={progressBarRef} />

      {/* Ambient Cursor Spotlight Glow */}
      <div className="cursor-spotlight" ref={spotlightRef} />

      {/* Main Navigation */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main className="relative z-10">
        <Hero profile={profile} onCopyEmail={showToast} />
        <About profile={profile} education={education} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Experience experience={experience} />
        <Contact profile={profile} onCopyEmail={showToast} />
      </main>

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 animate-rise rounded-full border border-brand-500/30 bg-slate-900/90 px-4 py-2 text-xs font-semibold text-white shadow-2xl backdrop-blur">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      <footer className="relative z-10 border-t border-slate-200 px-4 py-8 text-center text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 sm:px-6">
          <span>© {year} {profile.name} — Flutter & Android Developer</span>
          <div className="flex gap-4">
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-brand-500">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-brand-500">
              LinkedIn
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.sagarsoneji.doc2contact"
              target="_blank"
              rel="noreferrer"
              className="text-emerald-500 hover:text-emerald-400 font-semibold"
            >
              Google Play (100+ Downloads)
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
