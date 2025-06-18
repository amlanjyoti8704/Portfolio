import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // /* tailwind.config.js */
  // theme: {
  //   extend: {
  //     zIndex: {
  //       '10': '10',
  //       '20': '20',
  //     }
  //   }
  // },
})
