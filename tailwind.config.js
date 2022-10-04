/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "250px",
      md: "450px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      textColor: "#09612d",
      white: "#fff",
      topbarColor: "rgb(231, 214, 214)",
      preColor: "#c4e86b",
      corColor: "#ffc656",
      cardSubjectColor: "#f3f3f3",
      black: "#000",
    },
    extend: {},
  },
  plugins: [],
};
