import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load environment variables
  const env = loadEnv(mode, process.cwd());
  
  return {
    plugins: [react()],
    define: {
      // Make process.env available in the app
      'process.env': env
    },
    server: {
      port: 3000,
      open: true
    }
  }
})