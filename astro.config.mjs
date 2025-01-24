import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import markdown from '@astrojs/markdown-it';

export default defineConfig({
  site: 'http://localhost:4321', 
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: true, // Tailwind 
      },
    }),
    markdown({

    }),
  ],
});
