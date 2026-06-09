function ThemeToggle({ theme, toggleTheme }) {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={toggleTheme}
      className="rounded-full border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition hover:shadow-md dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200"
    >
      {isDark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}

export default ThemeToggle;
