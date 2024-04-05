import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vueImages from 'vite-plugin-vue-images'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  vueImages()],
  build:{
    rollupOptions: {
      external: ['react-icons/Bs']
    }
  }
})
