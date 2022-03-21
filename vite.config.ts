import { defineConfig, searchForWorkspaceRoot } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA as pwa } from 'vite-plugin-pwa';
import { fileURLToPath, URL } from 'url';

export default defineConfig({
  plugins: [
    vue(),
    pwa({
      registerType: 'autoUpdate',
      includeManifestIcons: false,
      manifest: {
        theme_color: '#FF00FF',
        icons: [],
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
