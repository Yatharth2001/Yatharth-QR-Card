/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        yellow: "#B0DB9C ",
        red: "#CAE8BD",
        blue: "#ECFAE5",
      },
    },
  },
  plugins: [],
};
