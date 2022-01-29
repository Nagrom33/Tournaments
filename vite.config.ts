import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';
// import NodeGlobalsPolyfillPlugin from 'rollup-plugin-node-polyfills';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    // NodeGlobalsPolyfillPlugin({
    //   buffer: true,
    // })
  ],
  define: {
    process: {
      global: 'globalThis',
      env: {},
      browser: true,
    }
  },
  resolve: {
    alias: {
      mocha: require.resolve('mocha/browser-entry.js'),
      global: require.resolve('rollup-plugin-node-polyfills/polyfills/global.js'),
      buffer: require.resolve('buffer-es6'),
      process: require.resolve('process-es6'),
      tty: require.resolve('rollup-plugin-node-builtins/src/es6/tty.js'),
      util: require.resolve('rollup-plugin-node-builtins/src/es6/util.js'),
      stream: require.resolve('rollup-plugin-node-builtins/src/es6/stream.js'),
      events: require.resolve('rollup-plugin-node-builtins/src/es6/events.js'),
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
})
