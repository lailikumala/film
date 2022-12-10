/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: "#820000",
        },
        dark: {
          DEFAULT: "#010101",
          100: "#0a0b0e",
          200: "#16181d",
          300: "#16181d",
          500: "#0f1115",
          700: "#202125",
        },
        blue: {
          DEFAULT: "#1E3f66",
          100: "#2E5984",
          200: "#528AAE",
          300: "#73A5C6",
          500: "#91BAD6",
          700: "#BCD2E8"
        },
        green: {
          DEFAULT: "#C1F376",
          100: "#A1DF50",
          200: "#79D021",
          300: "#5FC314",
          500: "#55C233",
          700: "#37AE0F"
        }
      },
      fontSize: {
        sm: '0.80rem'
      },
      lineHeight: {
        11: '3rem',
        12: "4rem",
      }
    },
  },
  plugins: [],
}
