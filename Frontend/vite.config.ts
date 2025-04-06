import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'build'
  },
  server: {
    host: true,
    port: 5173,
    allowedHosts: ["9211-115-247-66-78.ngrok-free.app"],
  }
});
