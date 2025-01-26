import pkg from 'image-downloader';
const { image } = pkg;
import path from 'path';
import fs from 'fs/promises';

export default function imageDownloader() {
  return {
    name: 'image-downloader',
    hooks: {
      'astro:build:done': async ({ dir, pages }) => {
        console.log('Starting image download process...');
        console.log('Output directory:', dir.pathname);
        
        const imageDir = path.join(dir.pathname, 'images');
        await fs.mkdir(imageDir, { recursive: true });
        
        for (const page of pages) {
          console.log(`Processing page: ${page.pathname}`);
          try {
            let htmlPath;
            if (page.pathname === '404/') {
              htmlPath = path.join(dir.pathname, '404.html');
            } else {
              htmlPath = path.join(dir.pathname, page.pathname, 'index.html');
            }
            
            console.log(`Reading file: ${htmlPath}`);
            const content = await fs.readFile(htmlPath, 'utf-8');
            
            const imageUrls = [...content.matchAll(/<img.*?src="(https?:\/\/[^"]+)".*?>/g)]
              .map(match => match[1])
              .filter(url => url.startsWith('http'));

            console.log(`Found ${imageUrls.length} images in ${page.pathname}`);

            if (imageUrls.length === 0) continue;

            let newContent = content;
            for (const url of imageUrls) {
              const filename = path.basename(url);
              const localPath = path.join(imageDir, filename);
              
              console.log(`Downloading: ${url}`);
              await image({
                url: url,
                dest: localPath
              });
              
              newContent = newContent.replace(url, `/images/${filename}`);
              console.log(`Replaced ${url} with /images/${filename}`);
            }

            await fs.writeFile(htmlPath, newContent);
            console.log(`Updated ${htmlPath}`);
          } catch (error) {
            console.error(`Error processing ${page.pathname}:`, error);
          }
        }
        console.log('Image download process complete');
      }
    }
  };
}