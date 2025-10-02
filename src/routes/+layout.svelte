<script lang="ts">
	export const prerender = true;
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { Footer, Navbar } from '$lib/ui';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Navbar />
<main class="min-h-screen pt-16">
	{@render children?.()}
</main>
<Footer />
