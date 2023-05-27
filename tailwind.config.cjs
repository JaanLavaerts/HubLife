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

  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};

module.exports = config;
