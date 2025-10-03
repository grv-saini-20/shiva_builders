import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	// CRITICAL: Set the base path here to match the repo name.
	base: '/shiva_builders/',
	plugins: [tailwindcss(), sveltekit()]
});
