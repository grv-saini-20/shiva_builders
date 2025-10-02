import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.env.NODE_ENV === 'development';

export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      fallback: 'index.html' // SPA fallback for GitHub Pages
    }),
    paths: {
      base: dev ? '' : '/shiva_builders' // GitHub repo name
    },
    prerender: {
      entries: [] // <-- disable prerendering
    }
  }
};
