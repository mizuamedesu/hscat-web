import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import imageDownloader from './plugins/image-downloader.mjs';

export default defineConfig({
 site: 'https://hscat.org/',
 integrations: [
   tailwind({
     config: {
       applyBaseStyles: true,
     },
   }), 
   sitemap(),
   imageDownloader()
 ],
});