import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // build: {
  //   rollupOptions: {
  //     external: ["react-router-dom", '@mui/x-date-pickers', "@mui/icons-material/Menu", '@mui/lab', '@mui/material', '@mui/icons-material', 
  //     '@mui/system', '@mui/icons-material/ArrowForward', "@mui/icons-material/Adb", '@mui/icons-material/Share', ],
     
  //   },
  //   outDir: 'dist', // Output directory
  //   assetsDir: 'assets', // Assets directory
  //   sourcemap: true, // Generate source maps
  //   minify: true, 
  // },
})
