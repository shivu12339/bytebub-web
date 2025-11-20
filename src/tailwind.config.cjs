/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand1: "#0ea5a3", // aqua
        brand2: "#6d28d9", // violet
        dark: "#0f172a",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px rgba(13, 17, 23, 0.08)",
      },
    },
  },
  plugins: [],
};
