/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],

  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#bd927a',
          hover: '#af7960',
          focus: '#a26854',
          active: '#875447',
          disabled: '#f1eae3',
        },

        secondary: {
          DEFAULT: '#c1a5b4',
          hover: '#ac889a',
          focus: '#946c7e',
          active: '#7d5968',
          disabled: '#f4eff2',
        },

        three: {
          DEFAULT: '#8790a9',
          hover: '#68738f',
          focus: '#4d556d',
          active: '#444b60',
          disabled: '#eceef2',
        },

        gray: {},

        black: {
          DEFAULT: '#313131',
        },

        success: {},

        danger: {},

        alert: {},
      },

      boxShadow: {
        DEFAULT: '0px 8px 3px rgba(0, 0, 0, 0.25)',
      },
    },
  },

  plugins: [],
};
