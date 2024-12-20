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
      fontFamily: {
        noto: ['Noto Serif', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        vibes: ['Great Vibes', 'sans-serif'],
      },

      colors: {
        primary: {
          DEFAULT: '#bd927a',
          hover: '#af7960',
          focus: '#a26854',
          active: '#875447',
          disabled: '#f1eae3',
        },
        secondary: {
          DEFAULT: '#5f4b3b',
          hover: '#4a3a29',
          focus: '#3b2c1b',
          active: '#322111',
          disabled: '#f1eae3',
        },
        accent: {
          DEFAULT: '#b83a58',
          hover: '#a0314b',
          focus: '#8b293d',
          active: '#6f1f30',
          disabled: '#fce8ed',
        },
        background: {
          DEFAULT: '#f2f2f2',
        },

        neutral: {
          DEFAULT: '#263238',
          darkGray: '#4D4D4D',
          gray: '#717171',
          lightGray: '#89939E',
          silver: '#F5F7FA',
          white: '#FFFFFF',
        },
      },

      boxShadow: {
        DEFAULT: '0px 1px 4px 2px rgba(0, 0, 0, 0.15)',
      },
    },
  },

  plugins: [],
};
