/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {      
      fontFamily: {
      ubuntu: ['ubuntu-mono', 'Ubuntu', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'ltr-linear-infinite': 'move-bg 10s linear infinite',
      },
      // Define keyframes
      keyframes: {
        'move-bg': {
          '0%':   { 'background-position': '0 0' },
          '100%': { 'background-position': '0 100%'}
        }
      }
    },
  },
  plugins: [],
}
