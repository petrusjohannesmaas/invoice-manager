// @ts-check
import { defineConfig } from 'astro/config';

import node from '@astrojs/node';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),

  // The dev server's port, from ~/Code/ports.toml on runner (dev-port get invoice-manager).
  // strictPort makes Astro stop when the port is taken instead of moving to one
  // that dev-https does not serve. allowedHosts is the tailnet name dev-https serves on.
  server: { port: 8101, strictPort: true, allowedHosts: ['runner.tail9f6fa3.ts.net'] },

  vite: {
    plugins: [tailwindcss()]
  }
});