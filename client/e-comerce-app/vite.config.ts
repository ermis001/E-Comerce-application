import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@src": "/src",
      "@api": "/src/api",
      "@assets": "/src/assets",
      "@components": "/src/components",
      "@hooks": "/src/hooks",
      "@style": "/src/style",
      "@utils": "/src/utils",
      "@views": "/src/views",
      "@store": "/src/store",
      "@interfaces": "/src/interfaces",
      "@routes": "/src/routes",
    }
  }
})
