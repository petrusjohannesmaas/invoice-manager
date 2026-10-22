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
  // allowedHosts is the tailnet name dev-https serves on.
  server: { port: 8101, allowedHosts: ['runner.tail9f6fa3.ts.net'] },

  vite: {
    // Stop when the port is taken instead of moving to one dev-https does not
    // serve. Astro's own `server` has no strictPort and drops one put there.
    server: { strictPort: true },
    plugins: [tailwindcss()]
  }
});