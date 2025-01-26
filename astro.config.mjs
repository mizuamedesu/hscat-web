import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://hscat.org/', 
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: true, // Tailwind 
      },
    }),
  ],
});
