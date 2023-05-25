/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: ['./src/**/*.{html,ts}']
  },
  theme: {
    colors: {
      primary: '#F2C5E0',
      secondary: '#800080',
      white: '#FFFFFF',
      black: '#000000',
      purple: '#800080',
      skyblue: '#87ceeb',
      crimson: '#D21F3c',
      silver: '#DCDCDC',
      cream: '#FAE8E0',
      lavender: '#e6e6fa',
      dodger_blue: '#005A9C',
      transparent: '#FFFFFF00',
    },
  },
}


