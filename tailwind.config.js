/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-100": "#F2F2F2",
        "gray-200": "#D9D9D9",
        "gray-300": "#808080",
        "gray-400": "#333333",
        "gray-500": "#262626",
        "gray-600": "#1A1A1A",
        "gray-700": "#0D0D0D",
        grayOpacity: "#000000d5",
        purple: "#8284FA",
        purpleDark: "#5E60CE",
        blue: "#4EA8DE",
        blueDark: "#1E6F9F",
        danger: "#E25858",
      },
      fontSize: {
        "3xl": "2.5rem",
      },
    },
    screens: {
      base: "320px",
      xsm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
  },
  plugins: [],
};
