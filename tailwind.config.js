/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    backgroundImage:{
                 'food-vendor': "URL('./src/images/cards/foodvendors.jpg')",
                 'database': "URL('./src/images/cards/database.jpg')",
                 'project': "URL('./src/images/cards/foodvendors.jpg')"
    },
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',

    },
    safelist: ['animate-[fade-in_1s_ease-in-out]', 'animate-[fade-in-down_1s_ease-in-out]'],
    extend: {
      colors: {
   darkGrayishBlue: 'hsl(227, 12%, 61%)',
   blacki:"#1c1c22",
      },
    },
  },
  plugins: [],
}