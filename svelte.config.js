import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.env.NODE_ENV === 'development';

export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      // SPA fallback
      fallback: 'index.html'
    }),
    paths: {
      base: dev ? '' : '/shiva_builders',
    },
    prerender: {
      // disable prerender entirely for SPA
      entries: []
    }
  }
};
