<script lang="ts">
	interface IFeatureCardProps {
		iconSrc?: string; // Slot for the icon (SVG or other component)
		title?: string; // Main title text
		description?: string; // Description text
		customClass?: string; // Optional custom Tailwind classes for the card wrapper
	}
	// Define props using $props()
	let {
		iconSrc, // Slot for the icon (SVG or other component)
		title = 'CARD TITLE', // Main title text
		description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, rerum.', // Description text
		customClass = '' // Optional custom Tailwind classes for the card wrapper
	}: IFeatureCardProps = $props();

	const baseClasses = $derived(
		`flex flex-col items-center text-center p-8 rounded-xl  ${customClass}`
	);
</script>

<!-- The card wrapper uses the black-700 background from your theme, rounded corners, and padding. -->
<div class={baseClasses}>
	<!-- Icon Slot: Center-aligned, large size -->
	<div class="mb-6 flex h-16 w-16 items-center justify-center text-brand-500">
		<!-- 
      Placeholder SVG for a construction crane icon, matching the style in the uploaded image.
      You should replace the content of the 'icon' slot when using the component.
    -->
		{#if iconSrc}
			<img src={iconSrc} alt="feature" />
		{/if}
	</div>

	<!-- Title: Uses h4 styles defined in your base layer -->
	<h4 class="mb-3 text-base font-semibold tracking-widest text-black-900 uppercase">
		{title}
	</h4>

	<!-- Description: Uses p styles defined in your base layer, tailored for small card text -->
	<p class="max-w-xs text-sm leading-relaxed text-gray-700">
		{description}
	</p>
</div>
