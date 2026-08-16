import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      // Manual registration happens in src/main.js via virtual:pwa-register
      injectRegister: false,
      // Use the hand-written manifest in public/manifest.json
      manifest: false,
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico,json}'],
        navigateFallback: 'index.html',
      },
    }),
  ],
})
