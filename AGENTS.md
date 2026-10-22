## Development

The dev server runs on runner on port 8101, the port `~/Code/ports.toml` gives this project (`dev-port get invoice-manager`). `astro.config.mjs` sets it, with Vite's `strictPort`, so Astro stops with an error when 8101 is taken instead of moving to a port nothing serves. Start it in the foreground under `dev-https`, which serves it at `https://runner.tail9f6fa3.ts.net:8101` on the tailnet while it runs and stops serving when it ends:

```
dev-https 8101 -- npm run dev
```

`dev-https --list` shows the open ports and `dev-https --off 8101` closes one a crash left behind.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
