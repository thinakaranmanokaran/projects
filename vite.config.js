import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    headers: {
      'Permissions-Policy': 'fullscreen=(self)' // Remove interest-cohort here
    },
    host: process.env.VITE_HOST || 'localhost', // Default to localhost if not defined
    port: parseInt(process.env.VITE_PORT, 10) || 3000, // Default to 3000 if not defined
  }
})
