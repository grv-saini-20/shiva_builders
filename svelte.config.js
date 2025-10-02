import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.env.NODE_ENV === 'development';

export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      fallback: 'index.html'
    }),
    paths: {
      base: dev ? '' : '/shivabuilder',
      relative: false
    },
    prerender: {
      entries: [] // disable prerender crawling for SPA
    }
  }
};
