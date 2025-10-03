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
      // Re-enable base. This is the path the browser needs.
      base: dev ? '' : '/shiva_builders', 
      // Set relative back to false or omit it entirely.
      relative: false 
    },
    prerender: {
      entries: ['/'] 
    }
  }
};
