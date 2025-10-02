import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.env.NODE_ENV === 'development';

const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      // fallback allows SPA behavior for dynamic routes
      fallback: 'index.html'
    }),
    paths: {
      base: dev ? '' : '/shiva_builders'
    }
  }
};

export default config;
