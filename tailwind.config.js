/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        "primary": "#F93943",
        "gray-light": "#FAFAFA",
        "green-light": "#05FF00"
      }
    },
  },
  plugins: [],
}
