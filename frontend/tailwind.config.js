/** @type {import('tailwindcss').Config} */
const f = () => [".", "src", "assets", "images", "dist", "tailwind.gif"].join("/");
const assets = require(f());
const { join } = require('path');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
