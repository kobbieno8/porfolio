/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  safelist: [
    'animate-[fade-in_1s_ease-in-out]',
    'animate-[fade-in-down_1s_ease-in-out]',
    'bg-darkBg', 'bg-darkSurface', 'bg-darkElevated',
    'dark:bg-darkBg', 'dark:bg-darkSurface', 'dark:bg-darkElevated',
    'dark:from-darkBg', 'dark:to-darkSurface',
    'dark:border-indigo-500/20', 'dark:border-indigo-500/30', 'dark:border-indigo-900/30',
    'dark:shadow-indigo-950/30', 'dark:shadow-indigo-950/40', 'dark:shadow-indigo-950/50',
    'dark:shadow-indigo-900/40',
    'dark:text-indigo-200', 'dark:text-indigo-300', 'dark:hover:bg-indigo-700',
    'dark:bg-indigo-900/60', 'dark:hover:border-indigo-500/40',
    'dark:border-white/5',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      backgroundImage: {
        'food-vendor': "URL('./src/images/cards/foodvendors.jpg')",
        'database': "URL('./src/images/cards/database.jpg')",
        'project': "URL('./src/images/cards/foodvendors.jpg')"
      },
      colors: {
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        blacki: "#1c1c22",
        darkBg: "#0f0f13",
        darkSurface: "#1a1a24",
        darkElevated: "#22223a",
        indigoGlow: "rgba(99,102,241,0.15)",
      },
    },
  },
  plugins: [],
}