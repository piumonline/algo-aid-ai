/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      spacing: {
        '128': '41rem',
        '120': '40.9rem',
        '130': '42.9rem'
      }
    },
  },
  plugins: [require("tailwind-scrollbar")],
}