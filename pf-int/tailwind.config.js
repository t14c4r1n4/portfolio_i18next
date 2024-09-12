const { ListItem } = require('@mui/material');
const { default: daisyui } = require('daisyui');



/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["dark", "light"]
  },
  theme: {
    container: {
      center: true
    },
    listStyleType: 'none'
  }
}

