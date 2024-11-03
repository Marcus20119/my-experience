import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import envCompatible from 'vite-plugin-env-compatible';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react(), envCompatible()],
  test: {
    browser: {
      // enabled: true,
      name: 'chromium',
      provider: 'playwright',
    },
    reporters: ['basic'],
    environment: 'jsdom',
    coverage: {
      enabled: true,
      provider: 'istanbul', // or 'v8'
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  // TODO: this is to make ecosystem work, remove when fixed
  server: {
    fs: {
      strict: false,
    },
  },
});
