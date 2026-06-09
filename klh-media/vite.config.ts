import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url';
import { ViteWebfontDownload } from 'vite-plugin-webfont-dl';
import vuetify from 'vite-plugin-vuetify'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vuetify({ autoImport: true }), // The plugin handles auto imports
    ViteWebfontDownload([
      'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap',
      'https://fonts.googleapis.com/css2?family=Great+Vibes&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap',
      'https://fonts.googleapis.com/css2?family=Great+Vibes&family=Italiana&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap'
    ]),
  ],
  base: './',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap')
    }
  },
})
