/** @type {import('tailwindcss').Config} */
import {spacingValues} from './src/assets/config/unit-conversion';
const colors = require('./src/assets/config/variables');
const breakpoints = require('./src/assets/config/breakpoints');

module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    spacing: {
      ...spacingValues
    },
    screens: {
      ...breakpoints
    },
    extend: {
      colors: {
        ...colors
      }
    },
    plugins: [
      require('./src/assets/config/typography')
    ]
  }
}


