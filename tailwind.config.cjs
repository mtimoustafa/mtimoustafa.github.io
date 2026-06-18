const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{html,js,svelte,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['"Sansita Swashed"', ...defaultTheme.fontFamily.serif],
        sans: ['"Signika Negative"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'f-blue-50': '#f0f9ff',
        'f-blue-100': '#a8f9ff',
        'f-blue-900': '#0a1a1b',
      },
    },
  },
  plugins: [],
}
