import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy `/api` requests to backend during development.
      // Set BACKEND_URL env var to change target; falls back to localhost:4900.
      '/api': {
        target: process.env.BACKEND_URL || 'http://localhost:4900',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
