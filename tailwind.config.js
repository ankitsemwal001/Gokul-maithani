/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#C87D53",
        "primary-dark": "#B06A42",
        sage: {
          DEFAULT: "#8A9A82",
          dark: "#4B5D45",
          deep: "#3A4934",
          light: "#E8EBE3",
        },
        linen: "#F7F4EF",
        "linen-light": "#FBFAF6",
        charcoal: "#3A3733",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        sans: ["Manrope", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 20px rgba(58, 55, 51, 0.06)",
        card: "0 6px 30px rgba(58, 55, 51, 0.08)",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
      },
    },
  },
  plugins: [],
};