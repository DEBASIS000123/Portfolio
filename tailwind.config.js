/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Primary': '#D943FF',
        'navbg': '#181a28',
        'white': '#ffffff',
      },
    },
  },
  plugins: [],
}

