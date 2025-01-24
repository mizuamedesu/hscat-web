/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,tsx,vue,svelte}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4B9CD3",
        secondary: "#FFAF00"
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};