/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      cyan: "#19a2ae",
      darkBlue: "hsl(229, 23%, 23%)",
      grayishBlue: "hsl(227, 10%, 46%)",
      DarkGray: "hsl(0, 0%, 59%)",
      white: "hsl(0, 0%, 100%)",
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      tg: "1440px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
