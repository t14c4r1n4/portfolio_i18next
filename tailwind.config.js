const { keyframes } = require('@emotion/react');
const { default: daisyui } = require('daisyui');


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  plugins: [require('daisyui')],
  daisyui: {
    themes: {
      mytheme: {
        "primary": "#a21caf",
        "secondary": "#8e6ca1",
        "accent": "#7e22ce",
        "neutral": "#44403c",
        "base-100": "#0C0A09",
        "info": "#0093ff",
        "success": "#92f247",
        "warning": "#ff9c00",
        "error": "#ec0047",
        "bg": "#0C0A09"
      },
    }
  },
  theme: {
    container: {
      center: true
    },
    listStyleType: {
      none: 'none',
      disc: 'disc'
    },
    fontFamily: {
      Orbitron: ['"Orbitron"', "sans-serif"],
      Dosis: ['"Dosis"', "sans-serif"],
      Vegan: ['"Vegang"', "sans-serif"]
    }
  }
}
