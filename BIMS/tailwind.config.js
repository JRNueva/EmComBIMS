/** @type {import('tailwindcss').Config} */
import withMT from '@material-tailwind/react/utils/withMT';

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        black: "0b0706",
        darkestBlue: "#0d1321",
        mediumBlue: "#1d2d44",
        lowBlue: "#3e5c78",
        lowestBlue: "#748cab",
        lightGrayYellow: "#f0ebd8",
        lightGray: "#eaeaea",
        softGray: "#d0d5dd",
        gray97 : "#f7f7f7",
        snow: "#fffafa",
        slate: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
      },
    },
  },
  plugins: [],
});