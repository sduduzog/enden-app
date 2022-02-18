import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'url';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // @ts-expect-error
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // @ts-expect-error
      '~': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
