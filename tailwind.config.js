/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "780px",
      md: "1070px",
      lg: "1248px",
      kl: "1249px",
      xl: "1440px",
    },
    extend: {},
  },
  plugins: [],
}