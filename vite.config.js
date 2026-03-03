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
      // multiple entry points for main and splitter
      input: {
        main: path.resolve(__dirname, 'resources/js/app.js'),
        split: path.resolve(__dirname, 'resources/js/split.js')
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]'
      }
    }
  }
});
