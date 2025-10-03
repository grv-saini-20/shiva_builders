<script lang="ts">
	import type { Snippet } from 'svelte';

	// Define custom types for props
	type Variant = 'primary' | 'secondary';
	type ButtonType = 'button' | 'submit' | 'reset';

	interface IButtonProps {
		variant?: Variant;
		href?: string | null;
		type?: ButtonType;
		disabled?: boolean;
		customClass?: string;
		handleClick?: () => void; // Optional click handler
		children?: Snippet; // Type for the default slot content
	}

	// Svelte 5: Define props using $props() with explicit types
	let {
		variant = 'primary', // 'primary' (solid yellow) or 'secondary' (outlined)
		href = null, // If provided, renders as an <a> tag
		type = 'button', // HTML button type (only used if href is null)
		disabled = false, // Disable state
		customClass = '', // Allows passing external classes
		handleClick = () => {}, // Click handler function
		children // Slot prop to render content
	}: IButtonProps = $props();

	// Base classes pulled from your @layer base and theme
	const baseClasses =
		'font-inter text-base font-semibold px-6 py-3 transition-all duration-200 ease-in-out cursor-pointer text-center whitespace-nowrap rounded-none';

	// Classes for the Primary (Solid Yellow) variant: "GET IN TOUCH"
	const primaryClasses = `
    bg-yellow-500 text-black-900 
    hover:bg-yellow-300
    active:scale-[0.98]
  `;

	// Classes for the Secondary (Outlined) variant: "LEARN MORE"
	const secondaryClasses = `
    bg-transparent text-white border-2 border-white
    hover:bg-white hover:text-black-900 
    active:scale-[0.98]
  `;

	// Svelte 5: $derived is used to compute the final class string reactively
	const finalClasses = $derived(
		`${baseClasses} ${variant === 'primary' ? primaryClasses : secondaryClasses} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${customClass}`
	);
</script>

<!-- 
  The component uses an if block to decide whether to render an <a> tag (for navigation) 
  or a <button> tag (for actions/form submission).
-->
{#if href}
	<a {href} class={finalClasses} role="button" aria-disabled={disabled}>
		{@render children?.()}
	</a>
{:else}
	<button {type} {disabled} class={finalClasses} onclick={handleClick}>
		{@render children?.()}
	</button>
{/if}
