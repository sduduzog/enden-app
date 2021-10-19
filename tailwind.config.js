const colors = require('tailwindcss/colors');
const defaultConfig = require('tailwindcss/defaultConfig');
module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      white: colors.white,
      gray: colors.blueGray,
      fuchsia: colors.fuchsia,
      rose: colors.rose,
      indigo: colors.indigo,
    },
    fontFamily: {
      sans: ['Inter', ...defaultConfig.theme.fontFamily.sans],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
