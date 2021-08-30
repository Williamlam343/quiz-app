const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        cyan: colors.cyan,
        fuchsia: colors.fuchsia,
        rose: colors.rose,
        emerald: colors.emerald,
        amber: colors.amber,
        bluegray: colors.blueGray,
        warmgray: colors.warmGray,
        orange: colors.orange,
        sky: colors.sky,
      },
    },
  },
  variants: {
    extend: {

    },
  },
  plugins: [],
};
