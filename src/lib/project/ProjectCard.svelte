<script lang="ts">
	import { HugeiconsIcon } from '@hugeicons/svelte';
	import { ArrowRight01FreeIcons } from '@hugeicons/core-free-icons';

	interface IProjectCardProps {
		imageUrl: string;
		title: string;
		href: string;
	}

	// Svelte 5: Define props using $props()
	let { imageUrl, title, href }: IProjectCardProps = $props();
</script>

<!-- The card is wrapped in a clickable link -->
<a
	{href}
	class="
    group relative
    flex w-80
    max-w-sm
    flex-col
    overflow-hidden
    bg-black-700 shadow-sm transition-all
    duration-300
    ease-in-out hover:scale-[1.02]
    hover:shadow-lg hover:shadow-gray-900/50
  "
>
	<!-- Image Container -->
	<div class="relative aspect-[3/2] overflow-hidden">
		<!-- Image -->
		<img
			src={imageUrl}
			alt={title}
			class="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.05]"
			loading="lazy"
		/>

		<!-- Dark Overlay on Hover -->
		<div
			class="absolute inset-0 bg-black-900/0 transition-all duration-300 group-hover:bg-black-900/40"
		></div>

		<!-- Action Icon (Circular Button) -->
		<div
			class="
      absolute right-4 bottom-4
      flex h-16 w-16
      translate-x-1/2 translate-y-1/2
      transform
      items-center justify-center
      rounded-full bg-white text-black-900
      transition-all duration-300 ease-in-out
      group-hover:scale-110
      group-hover:bg-yellow-500
      group-hover:text-black-900
    "
		>
			<HugeiconsIcon
				icon={ArrowRight01FreeIcons}
				size={24}
				color="currentColor"
				strokeWidth={1.5}
			/>
		</div>
	</div>

	<!-- Text Content -->
	<div class="p-6">
		<h4 class="font-semibold text-white transition-colors duration-300 group-hover:text-yellow-500">
			{title}
		</h4>
	</div>
</a>
