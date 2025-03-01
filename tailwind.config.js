/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#c4a86b',
        'custom-black': '#181818',
        'custom-gray': '#3A3A3A',
        'custom-red': '#8B0000',
      }
    },
  },
  plugins: [],
};