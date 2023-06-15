/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "second-dark-clr": "#4B5563",
        "background--yellow": "#FEF3C7",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(250px , 1fr))",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
