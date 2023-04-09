import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh'
import imageminPlugin from 'vite-plugin-imagemin'

//https://vitejs.dev/config/
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
  base: '/Portfolio',
  build: {
    rollupOptions: {
      input: 'index.html',
      output: {
        manualChunks: undefined,
      },
    },
    ssr: false,
  },
})
