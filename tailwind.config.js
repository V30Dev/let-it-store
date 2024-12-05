/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {    
    extend: {
      colors: {
        "lis-black": "#191716",
        "lis-yellow": "#e6af2e",
        "lis-gray": "#e0e2db"
      },
    },
  },
  plugins: [],
}

