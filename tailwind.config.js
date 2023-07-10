/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'nature': "url('./assets/nature.jpg')",
      },
      gridTemplateColumns: {
        // Complex site-specific column configuration
        footer: "repeat(auto-fit, minmax(200px, 1fr))",
      },
      colors: {
        primary: "#00df9a",
      },
    },
  },
  plugins: [],
};
