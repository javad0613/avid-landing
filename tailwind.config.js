/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        vazir: ['Vazirmatn', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#00A7C5', // Cyan/Turquoise
          dark: '#008ba3',
          light: '#e0f7fa',
        },
        secondary: {
          DEFAULT: '#111827', // Dark Gray/Blue
          light: '#374151',
        }
      }
    },
  },
  plugins: [],
}
