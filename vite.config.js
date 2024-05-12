import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["react-router-dom", '@mui/x-date-pickers', '@mui/lab', '@mui/material', '@mui/icons-material', '@mui/system'],
     
    },
  },
})
