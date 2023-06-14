/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        first: "#FFF0DE",
        second: "#ECBA82",
        third: "#b1454a",
        fourth: "#758F6D",
        fifth: "#171614",
      },
      backgroundSize: {
        "300%": "300%",
      },
      colors: {
        first: "#FFF0DE",
        second: "#ECBA82",
        third: "#b1454a",
        fourth: "#758F6D",
        fifth: "#171614",
      },
      flex: {
        1.22: "1.22 1.22 0%",
      },
      lineHeight: {
        extra: "4.5rem",
      },
      animation: {
        "typewriter-blink": "typewriter 2s steps(10)  infinite alternate , blink 0.5s steps(10) infinite"
      },
      keyframes: {
        typewriter: {
          "0%": { "width": "0px" },
          "100%": {
            "width": "240px",
          },
        },
        blink: {
          "0%": {
            "border-right-color": "rgba(255,255,255,.75)"
          },
          "100%": {
            "border-right-color": "transparent"
          }
        }
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
