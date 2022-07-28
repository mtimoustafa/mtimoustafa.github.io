const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{html,js,svelte,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['"Sansita Swashed"', 'cursive', ...defaultTheme.fontFamily.serif],
        sans: ['"Signika Negative"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'f-blue-100': '#a8f9ff',
        'f-blue-300': '#5cf4ff',
      },
    },
  },
  plugins: [],
}
