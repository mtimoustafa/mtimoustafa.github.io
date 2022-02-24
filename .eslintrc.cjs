module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  plugins: [
    'svelte3',
  ],
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
  ignorePatterns: [
    'main.css'
  ],
  rules: {
    semi: 0,
  },
}
