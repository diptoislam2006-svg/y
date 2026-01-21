import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
    base:"/y/"
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // This splits your dependencies into a separate 'vendor' file
            return 'vendor';
          }
        },
      },
    },
    // Optional: increase the limit slightly if you prefer 
    // chunkSizewarningLimit: 1000, 
  },
})
