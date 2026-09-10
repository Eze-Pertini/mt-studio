import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@data': path.resolve(__dirname, './src/data'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@services': path.resolve(__dirname, './src/services'),
      '@animations': path.resolve(__dirname, './src/animations'),
      '@i18n': path.resolve(__dirname, './src/i18n'),
    }
  },
  build: {
    rollupOptions: {
      output: {
        // En el build de servidor que hace vite-react-ssg, react y react-dom
        // quedan como modulos externos, y rollup no permite externos dentro
        // de manualChunks. La separacion en chunks solo aplica al bundle que
        // descarga el navegador.
        manualChunks: isSsrBuild
          ? undefined
          : {
              vendor: ['react', 'react-dom', 'react-router-dom'],
              animations: ['framer-motion'],
            },
      }
    }
  }
}))
