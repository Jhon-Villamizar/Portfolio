import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh'
import imageminPlugin from 'vite-plugin-imagemin'
import dotenv from 'dotenv'

dotenv.config()

export default defineConfig({
  plugins: [
    react(),
    reactRefresh(),
    imageminPlugin({
      svgo: {
        plugins: [{ removeViewBox: false }, { cleanupIDs: false }],
      },
      pngquant: {
        quality: [0.8, 0.9],
      },
    }),
  ],
  build: {
    rollupOptions: {
      input: 'index.html',
      output: {
        manualChunks: undefined,
      },
    },
    ssr: false,
  },
  base: '',
})
