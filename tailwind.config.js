/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      vs: "510px",
      sm: "780px",
      md: "1070px",
      lg: "1248px",
      kl: "1249px",
      xl: "1440px",
    },
    extend: {
      backgroundImage: {
        "search-bar": "url('/assets/search.svg')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
