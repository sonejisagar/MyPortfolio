/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Segoe UI", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#eff6ff",
          100: "#dbeafe",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
        },
      },
      boxShadow: {
        glow: "0 10px 30px -10px rgba(59,130,246,0.35)",
        "emerald-glow": "0 10px 30px -10px rgba(16,185,129,0.35)",
        "card-hover": "0 20px 40px -15px rgba(0,0,0,0.1), 0 0 25px -5px rgba(59,130,246,0.15)",
        "card-hover-dark": "0 20px 40px -15px rgba(0,0,0,0.5), 0 0 30px -5px rgba(59,130,246,0.2)",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "title-sheen": {
          "0%, 70%": { backgroundPosition: "120% 0" },
          "100%": { backgroundPosition: "-120% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(1.15)" },
        },
      },
      animation: {
        rise: "rise .6s ease-out both",
        "title-sheen": "title-sheen 6s infinite cubic-bezier(0.4, 0, 0.2, 1)",
        float: "float 4s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};
