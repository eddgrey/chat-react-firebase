const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Build your palette here
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        gray: colors.gray,
        red: colors.red,
        blue: colors.blue,
        blueGray: colors.blueGray,
        indigo: colors.indigo,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
