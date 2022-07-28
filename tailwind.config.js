/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      sms: '580px',
      md: '768px',
      lg: '876px',
      xl: '1440px'
    },
    extend: {},
  },
  plugins: [],
}
