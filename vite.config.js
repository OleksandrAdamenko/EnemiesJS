import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/OleksandrAdamenko/',
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          return `assets/${assetInfo.name}-[hash][extname]`
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      }
    }
  }
})