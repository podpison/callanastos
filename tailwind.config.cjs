/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'black': '#313131',
        'gray': '#7A7A7A',
        'light-gray': '#D9D9D9',
        'blue': '#52BFFF',
        'blue-hover': '#87d2ff',
        'light-blue': '#F8FCFF',
        'red': '#FE0002',
      },
      screens: {
        'mw': '1160px'
      }
    },
  },
  plugins: [],
}
