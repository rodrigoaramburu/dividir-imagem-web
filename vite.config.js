import { defineConfig } from 'vite';
import path from 'path';
import fs from 'fs';
// import { viteStaticCopy } from 'vite-plugin-static-copy'; // replaced by custom plugin

export default defineConfig({
  root: 'resources',
  base: '/assets/',
  publicDir: false, // we manage public folder ourselves
  plugins: [
    // Custom plugin to copy images from resources/imgs into build output
    {
      name: 'copy-imgs',
      closeBundle() {
        const src = path.resolve(__dirname, 'resources/imgs');
        const dest = path.resolve(__dirname, 'public/assets/imgs');
        if (fs.existsSync(src)) {
          fs.rmSync(dest, { recursive: true, force: true });
          fs.cpSync(src, dest, { recursive: true });
        }
      }
    }
  ],
  build: {
    outDir: path.resolve(__dirname, 'public/assets'),
    emptyOutDir: true,
    minify: 'esbuild',
    sourcemap: false,
    rollupOptions: {
      // multiple entry points for main and splitter
      input: {
        main: path.resolve(__dirname, 'resources/js/app.js'),
        split: path.resolve(__dirname, 'resources/js/split.js')
      },
      output: {
        // use fixed names so Twig can reference them directly
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]'
      }
    }
  }
});
