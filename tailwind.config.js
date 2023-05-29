/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        first: "#FFF0DE",
        second: "#ECBA82",
        third: "#b1454a",
        fourth: "#758F6D",
        fifth: "#171614"
      },
      colors: {
        first: "#FFF0DE",
        second: "#ECBA82",
        third: "#b1454a",
        fourth: "#758F6D",
        fifth: "#171614"
      },
      flex: {
        '1.22': '1.22 1.22 0%'
      },
      lineHeight: {
        extra: "4.5rem"
      }
    },
  },
  plugins: [require("flowbite/plugin")],
}
