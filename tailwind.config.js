/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Cabinet Grotesk', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        frank: ['Frank Ruhl Libre', 'serif'],
      },
      colors: {
        teal: {
          400: '#4FD1C5',
          500: '#38B2AC',
          600: '#319795',
        },
      },
    },
  },
  plugins: [],
};