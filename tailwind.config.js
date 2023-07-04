/** @type {import('tailwindcss').Config} */
import {spacingValues} from "./src/assets/config/unit-conversion";
const colors = require('./src/assets/config/variables');
const breakpoints = require('./src/assets/config/breakpoints')
const {spacingValues} = require("./src/assets/config/unit-conversion");
module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: ['./src/**/*.{html,ts}']
  },
  theme: {
    spacing: {
      ...spacingValues
    },
    screens: {
      ...breakpoints
    },
    colors: {
      ...colors
    }
  },
  plugin: [
    require('./src/assets/config/typography')
  ],
}


