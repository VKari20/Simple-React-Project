// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Simple-React-Project/',
  plugins: [react()],
  server: {
    proxy: {
      '/booksapi': {
        target: 'https://www.googleapis.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/booksapi/, ''),
      }
    }
  }
})
