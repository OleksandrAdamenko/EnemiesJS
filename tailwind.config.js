/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        'light': {
          'primary': '#ffffff',
          'secondary': '#f3f4f6',
          'text': '#111827',
          'border': '#e5e7eb',
        },
        'dark': {
          'primary': '#1f2937',
          'secondary': '#111827',
          'text': '#f9fafb',
          'border': '#374151',
        },
      },
    },
  },
  plugins: [],
}