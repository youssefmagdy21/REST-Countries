/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "nunito-sans": '"Nunito Sans", sans-serif',
    },
    fontWeight: {
      light: 300,
      bold: 600,
      extraBold: 800,
    },
    colors: {
      transparent: "transparent",
      white: "white",
      black: "black",
      light: {
        primary: "hsl(0, 0%, 98%)",
        accent: "hsl(0, 0%, 100%)",
        text: "hsl(200, 15%, 8%)",
        input: "hsl(0, 0%, 52%)",
      },
      dark: {
        primary: "hsl(207, 26%, 17%)",
        accent: "hsl(209, 23%, 22%)",
        text: "hsl(0, 0%, 100%)",
      },
    },
    extend: {},
  },
  plugins: [],
};
