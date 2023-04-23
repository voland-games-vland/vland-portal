const formKitTailwind = require('@formkit/themes/tailwindcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        emerald: {
          ...require('daisyui/src/colors/themes')['[data-theme=emerald]'],
          "--rounded-box": "0",
          "--rounded-btn:": "0",
          "--rounded-badge": "0",
        }
      }
    ],
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
    formKitTailwind
  ],
}
