/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'azul-escuro': '#1552AA',
        'azul-claro': '#779ACE',
      }
    },
  },
  plugins: [],
}