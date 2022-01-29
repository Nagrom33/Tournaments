import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';
import nodePolyfills from "rollup-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    nodePolyfills(),
  ],
  define: {
    'process.env': {}
  },
  resolve: {
    alias: {
      web3: path.resolve(__dirname, './node_modules/web3/dist/web3.min.js')
    },
  }
})
