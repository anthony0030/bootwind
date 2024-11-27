/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: "#f79b4b",
        customHover: "#e38a3c",
      },
    },
  },
  plugins: [
    require("./src/components/alerts.js"),
    require("./src/components/buttons.js"),
    require("./src/components/form.js"),
    require("./src/components/pagy.js"),
  ],
}
