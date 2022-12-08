const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'roseco': '#ECE3E3',
      },
      color: {
        'font' : '#212832'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}