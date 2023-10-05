/** @type {import('tailwindcss').Config} */
const primaryColor = "#f26a22";

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': primaryColor,
      }
    },
  },
  plugins: [],
}

