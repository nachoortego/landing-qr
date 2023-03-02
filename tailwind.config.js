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
      akira: ['Akira Expanded', 'sans-serif'],
      },
      animation: {
        'ltr-vertical-infinite': 'move-bg-ver 15s linear infinite',
        'glitch': 'glitch-text 3s linear infinite',
      },
      // Define keyframes
      keyframes: {
        'move-bg-ver': {
          '0%':   { 'background-position': '0 0' },
          '100%': { 'background-position': '0 100%'}
        },
        'glitch-text': {
          '0%':   { 'translateY': '0 0' },
          '100%': { 'background-position': '100% 0'}
        }
      }
    },
  },
  plugins: [],
}
