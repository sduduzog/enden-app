import { defineConfig, searchForWorkspaceRoot } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'url';

export default defineConfig({
  plugins: [vue()],
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
