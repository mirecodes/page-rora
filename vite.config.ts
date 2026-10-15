import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// anonymous.4open.science serves pages with `CSP: sandbox` (no allow-same-origin),
// so the page has a null origin and CORS-mode loads (module scripts, crossorigin
// links) fail. Ship a classic IIFE script instead.
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'classic-script',
      transformIndexHtml: (html) =>
        html.replace(/ type="module" crossorigin/g, ' defer').replace(/ crossorigin(?=[ >])/g, ''),
    },
  ],
  base: './',
  build: {
    rollupOptions: { output: { format: 'iife' } },
  },
})
