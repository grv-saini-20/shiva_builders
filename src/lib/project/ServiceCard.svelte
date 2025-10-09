<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	interface IServiceCardProps extends HTMLAttributes<HTMLElement> {
		imageUrl?: string; // URL for the image at the top of the card
		title?: string; // Main title text
		description?: string; // Description text
		customClass?: string; // Optional custom Tailwind classes for the card wrapper
	}
	// Svelte 5: Define props using $props()
	let {
		imageUrl = 'https://placehold.co/600x400/151a26/ffffff?text=Feature+Image',
		title = 'HOUSE REPAIR',
		description = 'Quisque porttitor dui eget tellus ornare laoreet. Morbi ornare, tellus et finibus pretium, eu est viverra mornaele seaeonne loremipsum.',
		customClass = '',
		...restProps // Optional custom Tailwind classes for the card wrapper
	}: IServiceCardProps = $props();

	const baseClass = $derived(
		`h-full group max-w-xs w-full bg-black-900 hover:bg-white  overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] ${customClass}`
	);
</script>

<!-- The card is wrapped in an anchor tag to make the whole area clickable -->
<article {...restProps} class={baseClass}>
	<!-- Image Container -->
	<div class="relative h-48 overflow-hidden sm:h-56">
		<img
			src={imageUrl}
			alt={`Image for ${title}`}
			class="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-[1.05]"
		/>

		<!-- Aesthetic Overlay (Optional: slightly darkens image for text contrast if used) -->
		<!-- <div class="absolute inset-0 bg-black opacity-10 group-hover:opacity-0 transition-opacity"></div> -->
	</div>

	<!-- Content Block -->
	<div class="p-6">
		<!-- Title: Use h4 style from your base layer, highlighted by yellow hover -->
		<h4
			class="mb-2 tracking-wide text-white uppercase transition-colors duration-200 group-hover:text-brand-500"
		>
			{title}
		</h4>

		<!-- Description: Uses p styles, using gray-300 for contrast -->
		<p class="text-sm leading-relaxed text-gray-300 group-hover:text-gray-700">
			{description}
		</p>
	</div>
</article>
