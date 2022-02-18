const colors = require('tailwindcss/colors');
const defaultConfig = require('tailwindcss/defaultConfig');
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      white: colors.white,
      black: colors.black,
      gray: colors.slate,
      fuchsia: colors.fuchsia,
      rose: colors.rose,
      indigo: colors.indigo,
    },
    fontFamily: {
      sans: ['Inter', ...defaultConfig.theme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
};
