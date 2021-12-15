module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "regal-blue": "#65c8ff",
      },
      fontFamily: {
        header: "'Bakbak One', cursive",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
