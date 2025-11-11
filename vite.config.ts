import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  // For GitHub Pages project site, set base to the repo name.
  // This ensures asset URLs are generated correctly when served from
  // https://<user>.github.io/<repo>/
  base: '/simply-better-code/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      components: path.resolve(__dirname, 'src/components'),
      store: path.resolve(__dirname, 'src/store'),
      static: path.resolve(__dirname, 'src/static'),
      router: path.resolve(__dirname, 'src/router'),
      tests: path.resolve(__dirname, 'src/tests'),
      types: path.resolve(__dirname, 'src/types'),
      utils: path.resolve(__dirname, 'src/utils'),
    },
  },
  server: {
    port: 3000,
  },
  // Output build to `docs` so GitHub Pages can serve from `main`/`docs`
  build: {
    outDir: 'docs',
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: 'src/tests/setupTests.ts',
  },
} as any);
