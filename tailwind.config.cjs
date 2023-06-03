/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
    container: {
      center: true,
      padding: "1rem",
    },
  },
  daisyui: {
    themes: [
      "dracula",
      "dark",
      "night",
      "forest",
      "halloween",
      {
        yellow: {
          primary: "#f9b4ab",
          secondary: "#679186",
          accent: "#264e70",
          neutral: "#fdebd3",
          "base-100": "#fdebd3",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
        },
      },
      {
        light: {
          primary: "#e9498c",
          secondary: "#484b6a",
          accent: "#880000",
          neutral: "#dedede",
          "base-100": "#ffffff",
          info: "#4aa8bf",
          success: "#81328f",
          warning: "#ef8234",
          error: "#ea4034",
        },
      },
    ],
  },

  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};

module.exports = config;
