const colors = require('tailwindcss/colors');
module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: colors.white,
      gray: colors.blueGray,
      fuchsia: colors.fuchsia,
      rose: colors.rose,
      indigo: colors.indigo,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
