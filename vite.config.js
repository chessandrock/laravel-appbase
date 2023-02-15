import { defineConfig } from 'vite'

import laravel from 'laravel-vite-plugin'
import eslint from 'vite-plugin-eslint'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

const config = defineConfig({
  plugins: [
    eslint(),
    laravel({
      input: ['resources/js/app.js'],
      refresh: true
    }),
    react(),
    svgr()
  ]
})

export default config
