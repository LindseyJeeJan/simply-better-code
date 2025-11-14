import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  // For GitHub Pages project site, set base to the repo name by default.
  // To build for the repo root (for Pages configured to serve from the root
  // of the branch), set the DEPLOY_BASE env var to '/' before running the
  // build. Example: DEPLOY_BASE='/' npm run build:root
  //base: process.env.DEPLOY_BASE || '/simply-better-code/',
  base: '/simply-better-code/',
  build: {
    outDir: 'docs',
  },
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
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: 'src/tests/setupTests.ts',
  },
} as any);
