import { defineConfig, searchForWorkspaceRoot } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA as pwa } from 'vite-plugin-pwa';
import { fileURLToPath, URL } from 'url';

export default defineConfig({
  plugins: [
    vue(),
    pwa({
      registerType: 'autoUpdate',
      manifest: {
        theme_color: '#FF00FF',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  server: {
    fs: {
      allow: [searchForWorkspaceRoot(process.cwd())],
    },
  },
  resolve: {
    alias: {
      // @ts-expect-error
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // @ts-expect-error
      '~': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
