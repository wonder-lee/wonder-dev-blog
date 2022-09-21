/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            code: {
              color: theme("colors.rose[500]"),
              backgroundColor: theme("colors.violet[100]"),
              padding: "0 2px 0 2px",
            },
            hr: {
              borderColor: theme("colors.violet[100]"),
            },
            pre: {
              color: "#999999!important",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
