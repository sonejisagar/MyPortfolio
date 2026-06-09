import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function Navbar({ theme, toggleTheme }) {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur dark:border-slate-700/70 dark:bg-slate-900/80">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#" className="text-sm font-bold tracking-wide text-slate-900 dark:text-slate-100">
          SAGAR.DEV
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-slate-600 transition hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-100"
            >
              {item.label}
            </a>
          ))}
        </div>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </nav>
    </header>
  );
}

export default Navbar;
