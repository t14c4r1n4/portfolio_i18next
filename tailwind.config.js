/* eslint-disable no-undef */
const { default: daisyui } = require('daisyui');


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#9d4edd",
          "secondary": "#FF8500",
          "accent": "#63D011",
          "neutral": "#44403c",
          "base-100": "#0C0A09",
          "base-200": "#171717",
          "info": "#0093ff",
          "success": "#92f247",
          "warning": "#ff9c00",
          "error": "#ec0047",
          "bg": "#0C0A09"
        }
      }
    ],
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
        Vegan: ['"Vegan"', "sans-serif"]
      }
    }
  }
}
