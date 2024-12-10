/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "san-serif"],
      },
      dropShadow: {
        std: "0 1px 1px rgba(0, 0, 0, 0.15)",
      },
      colors: {
        primary: "#883BF9",
        primaryHover: "#672dbe",
      },
    },
  },
  plugins: [],
};
