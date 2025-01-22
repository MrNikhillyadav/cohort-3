/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        blue:{
          300 : '#e1e6ff',
          500 : '#6962cc',
          700 : '#5146e5',
        }

      }
    },
  },
  plugins: [],
}