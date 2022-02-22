const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Source Sans Pro"', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      'sky': {
        500: '#A2FDDD',
      },
      'white': {
        500: '#F1F9F7',
      },
    },
  },
  plugins: [],
}
