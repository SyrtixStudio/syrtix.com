import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: ['syrtix.com', 'www.syrtix.com'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': [
            'react', 
            'react-dom', 
            'react-router-dom', 
            'lucide-react', 
            'swiper',
            'aos'
          ],
          'ui-core': [
            'framer-motion',
            'canvas-confetti'
          ]
        }
      }
    },
    chunkSizeWarningLimit: 1000,
  }
})
