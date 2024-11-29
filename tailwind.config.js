/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      ...require("./src/theme/index.js"),
    },
  },
  plugins: [
    require("./src/index.js"),
  ],
}
