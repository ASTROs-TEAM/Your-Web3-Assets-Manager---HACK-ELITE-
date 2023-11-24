/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    boxShadow: {
      primary: "1px 1px 30px 0px rgba(0,0,0,0.15)",
      "3xl": "1px 35px 60px -15px rgba(0, 0, 0, 0.3)",
    },
    fontWeight: {
      bold: "600",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        geologica: ["Geologica", "sans-serif"],
        gruppo: ["Gruppo", "sans-serif"],
      },
      colors: {
        "black-90": "rgba(0,0,0,0.9)",
        green: "#02B15A",
        purple: "#6359E9",
        red: "#EB001B",
        white: "F5F5FC",
      },
    },
  },
  plugins: [],
};
