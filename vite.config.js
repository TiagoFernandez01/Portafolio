import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import image from '@rollup/plugin-image'

export default defineConfig({
  plugins: [
    react(),
    image()
  ],
  build: {
    rollupOptions: {
      external: ['react-icons/Bs'],
      output: {
        // Establece la ruta pública para resolver correctamente las rutas de las imágenes
        publicPath: '/'
      }
    }
  }
})