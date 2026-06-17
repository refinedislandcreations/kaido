/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./_layouts/**/*.html", "./_includes/**/*.html", "./*.html"],
  theme: {
    extend: {
      colors: {
        oracle: "#A8CD97",
        oracleDark: "#3D5234",
        dark: {
          50: "#f5f5f5",
          100: "#e0e0e0",
          900: "#0a0a0a",
          950: "#000000",
        },
      },
      fontFamily: {
        title: ["Montserrat", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
