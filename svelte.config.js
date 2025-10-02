import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.env.NODE_ENV === 'development';

export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      fallback: 'index.html',
    }),
    paths: {
      // **CRITICAL FIX: REMOVE 'base'** when 'relative: true' is used for static/SPA deployment
      // base: dev ? '' : '/shiva_builders', 
      
      // Must be true to generate relative links (e.g., ./_app/...)
      relative: true
    },
    prerender: {
      entries: ['/'] 
    }
  }
};