import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.argv.includes('dev');
const base = dev ? '' : '/shiva_builders';

export default {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			fallback: 'index.html'
		}),
		paths: {
			// Re-enable base. This is the path the browser needs.
			base: base,
			// Set relative back to false or omit it entirely.
			relative: false
		},
		prerender: {
			entries: ['/']
		}
	}
};
