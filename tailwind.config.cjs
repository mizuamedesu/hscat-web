/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{astro,html,js,jsx,tsx,vue,svelte}",
    ],
    theme: {
      extend: {
        colors: {
          // 例: ブランディングカラー等あればここで追加
          primary: "#4B9CD3",
          secondary: "#FFAF00"
        }
      }
    },
    plugins: [],
  };
  