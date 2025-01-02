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
      background: "hsl(var(--color-background) / <alpha-value>)",
      accent: "hsl(var(--color-accent) / <alpha-value>)",
      text: "hsl(var(--color-text) / <alpha-value>)",
      input: "hsl(var(--color-input) / <alpha-value>)",
    },
    extend: {},
  },
  plugins: [],
};
