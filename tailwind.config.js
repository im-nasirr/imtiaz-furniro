/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
        "2xl": '1920px',
        "3xl": '2500px',
      },
      colors: {
        'black': '#333333',
        "gray": "#666666",
        "brown": "#B88E2F"
      },

    },
  },
  "plugins": ["prettier-plugin-tailwindcss"]
}

