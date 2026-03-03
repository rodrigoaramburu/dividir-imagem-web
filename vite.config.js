import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: 'resources',
  base: '/assets/',
  publicDir: false, // we manage public folder ourselves
  build: {
    outDir: path.resolve(__dirname, 'public/assets'),
    emptyOutDir: true,
    rollupOptions: {
      // entry is relative to root
      input: path.resolve(__dirname, 'resources/js/app.js'),
      output: {
        // avoid hashed filenames so we can reference a fixed path
        entryFileNames: 'app.js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]'
      }
    }
  }
});
