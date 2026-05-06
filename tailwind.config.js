/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'titanium': '#F5F5F7',
        'space-grey': '#1D1D1F',
      }
    },
  },
  plugins: [],
}
