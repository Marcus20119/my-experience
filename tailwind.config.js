const {
  COLOR: colors,
} = require('./src/shared/assets/styles/constants/colors.ts');
const {
  Z_INDEX: zIndex,
} = require('./src/shared/assets/styles/constants/zIndex.ts');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  important: true,
  plugins: [],
  theme: {
    extend: {
      colors,
      zIndex,
    },
  },
};
