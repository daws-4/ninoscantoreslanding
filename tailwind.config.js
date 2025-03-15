import { heroui } from "@heroui/theme"
// import { keyframes } from "framer-motion";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        customAmber: "#FFBF00",
        customOrange: "#FF7F50",
        customBlueDark: "#1E3A8A",
        customBlueDarker: "#1E40AF",
        customSkyBlue: "#ddf7ff",
        customSkyCyan: "#A6EAFF",
        customBorder: "#e5bf7a",
        customGold1: "#CDA434",
        customGold2: "#FFBF00",
        customGold3: "#D7AE00",
        customGold4: "#FABD00",
        customDarkBlue: "#172b45",
        customCream: "#fdf2dd",
      },
      animation: {
        'fade-in': 'fade-in 375ms ease-in-out'
      },
      keyframes: {
        'fade-in': {
          from: {
            opacity: 0,
            visibility: 'hidden'
          },
          to: {
            opacity: 1,
            visibility: 'visible'
          },
        }
      }
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
