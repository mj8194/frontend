/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // scan all React components
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb", // blue-600
        secondary: "#f59e0b", // amber-500
      },
      spacing: {
        35: "8.75rem", // custom spacing for header padding etc.
      },
    },
  },
  plugins: [],
};
