import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import mdx from '@mdx-js/rollup'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), mdx({providerImportSource: '@mdx-js/react',})],
  server: {
    port: 3000,
    strictPort: true,
    host: true
  },
  preview: {
    port: 3000,
    strictPort: true
  }
})
