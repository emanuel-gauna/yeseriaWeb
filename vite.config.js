import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // react-snap necesita que las rutas se generen como HTML individuales
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html'
      }
    }
  },
  // configuración para que react-snap maneje correctamente SPA
  server: {
    fs: {
      strict: false
    }
  }
});
