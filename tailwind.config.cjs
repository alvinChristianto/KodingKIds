/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: '#042f2e', //safety orange

        secondary: '#d97706', //lovely teal
      },
      fontFamily: {
        inter: ["Inter Variable", "Inter", ...defaultTheme.fontFamily.sans],
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
