// vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portfolio/",       // 👈 This sets the correct base URL for GitHub Pages
  plugins: [react()]
})
