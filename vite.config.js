import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/projects/',
  server: {
    headers: {
      'Permissions-Policy': 'fullscreen=(self)' // Remove interest-cohort here
    }
  }
})
