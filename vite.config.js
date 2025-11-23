import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import postcssNested from 'postcss-nested' // ← أضف السطر ده

import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  css: {
    postcss: {
      plugins: [postcssNested], // ← أضف هنا
    },
  },
  resolve: {
    alias: {
      '#components': resolve(dirname(fileURLToPath(import.meta.url)), 'src/components'),
      '#constants': resolve(dirname(fileURLToPath(import.meta.url)), 'src/constants'),
      '#store': resolve(dirname(fileURLToPath(import.meta.url)), 'src/store'),
      '#hoc': resolve(dirname(fileURLToPath(import.meta.url)), 'src/hoc'),
      '#windows': resolve(dirname(fileURLToPath(import.meta.url)), 'src/windows'),
    }
  }
})
