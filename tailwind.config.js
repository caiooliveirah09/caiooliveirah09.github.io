/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        minecraft: ["var(--font-minecraft)"],
        playfairDisplay: ["var(--font-playfair-display)"],
      },
      colors: {
        minecraft: "#B7B2B0",
      },
    },
  },
  plugins: [],
};
