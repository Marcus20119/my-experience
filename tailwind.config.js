const {
  COLOR: colors,
} = require('./src/shared/assets/styles/constants/colors.ts');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  important: true,
  plugins: [],
  theme: {
    extend: {
      colors,
    },
  },
};
