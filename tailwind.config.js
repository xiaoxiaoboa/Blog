/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "l-bg": "#f0f2f5",
      "d-bg": "#18191a",
      "l-text": "#434343",
      "d-text": "#B0B3B8",
      "l-text-date": "#818181",
      "d-text-date": "#91949a"
      // "l-bg": "#f0f2f5",
      // "d-bg": "#18191a",
      // "l-text": "#434343",
      // "d-text": "#B0B3B8",
      // "l-text-date": "#818181",
      // "d-text-date": "#91949a"
    }
  },
  plugins: []
}
