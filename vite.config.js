import { defineConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'
import adapter from '@sveltejs/adapter-static'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    sveltekit({ adapter: adapter({ pages: 'dist', fallback: '404.html' }) }),
    tailwindcss(),
  ],
})
