import adapter from '@sveltejs/adapter-static';
import {sveltePreprocess} from 'svelte-preprocess'; // Using external svelte-preprocess package

const dev = process.argv.includes('dev');
const base = dev ? '' : '/shiva_builders'; // Subpath base for static hosting

export default {
  preprocess: sveltePreprocess(), // Using svelte-preprocess
  kit: {
    adapter: adapter({
      fallback: 'index.html' // SPA fallback handles routing
    }),
    paths: {
      base, // Applies '/shiva_builders' in production build
      relative: false
    },
    // Removes all automatic prerendering, relying entirely on the SPA fallback.
    prerender: {
      entries: [] 
    }
  }
};