const {
  COLOR: colors,
} = require('./src/shared/assets/styles/constants/color.ts');
const {
  Z_INDEX: zIndex,
} = require('./src/shared/assets/styles/constants/zIndex.ts');
const {
  WIDTH: width,
} = require('./src/shared/assets/styles/constants/width.ts');
const {
  SPACING: spacing,
} = require('./src/shared/assets/styles/constants/spacing.ts');
const {
  HEIGHT: height,
} = require('./src/shared/assets/styles/constants/height.ts');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  important: true,
  plugins: [],
  theme: {
    extend: {
      colors,
      zIndex,
      width,
      spacing,
      height,
    },
  },
};
