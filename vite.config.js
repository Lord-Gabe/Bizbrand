import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  eslint: { 
    // Enable ESLint during development and build
    enable: true,
    ignoreDuringBuilds: false
  }
})
