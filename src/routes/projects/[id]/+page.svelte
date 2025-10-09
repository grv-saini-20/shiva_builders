<script lang="ts">
	import Button from '$lib/ui/Button.svelte';
	import { goto } from '$app/navigation';

	const project = {
		title: 'Industrial Park – Phase 2',
		location: 'Panchkula, Haryana',
		category: 'Infrastructure Development',
		status: 'Completed in 2024',
		image: '/images/project-hero.jpg',
		description: `Shiva Builders proudly executed the Industrial Park – Phase 2 project, 
		a large-scale infrastructure development designed to empower local industries 
		with modern facilities, sustainable design, and advanced construction techniques.`,
		highlights: [
			{ label: 'Total Area', value: '250,000 sq. ft' },
			{ label: 'Client', value: 'Haryana Govt. Authority' },
			{ label: 'Completion Year', value: '2024' },
			{ label: 'Project Type', value: 'Infrastructure' }
		],
		gallery: [
			'/images/project1.jpg',
			'/images/project2.jpg',
			'/images/project3.jpg'
		]
	};
</script>

<!-- Hero Section -->
<section class="relative flex min-h-[80vh] items-center justify-center">
	<div class="absolute inset-0 bg-[url({project.image})] bg-cover bg-center"></div>
	<div class="absolute inset-0 bg-black/60"></div>

	<div class="relative z-10 max-w-4xl text-center px-4 text-white">
		<h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-brand-500 uppercase tracking-wide">
			{project.title}
		</h1>
		<p class="mt-4 text-lg text-gray-200">{project.location}</p>
	</div>
</section>

<!-- About Section -->
<section class="py-16 px-6 md:px-12 bg-white text-gray-800">
	<div class="max-w-5xl mx-auto">
		<h2 class="text-3xl md:text-4xl font-bold text-brand-500 uppercase mb-6">
			About the Project
		</h2>
		<p class="text-lg leading-relaxed">{project.description}</p>

		<!-- Highlights Grid -->
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
			{#each project.highlights as item}
				<div class="rounded-xl bg-gray-100 p-6 shadow-sm hover:shadow-md transition">
					<p class="text-sm text-gray-500 uppercase">{item.label}</p>
					<p class="text-lg font-semibold text-gray-900 mt-2">{item.value}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Gallery Section -->
<section class="py-16 px-6 bg-gray-50">
	<div class="max-w-6xl mx-auto text-center">
		<h2 class="text-3xl md:text-4xl font-bold text-brand-500 uppercase mb-10">
			Project Gallery
		</h2>
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
			{#each project.gallery as img}
				<!-- svelte-ignore a11y_img_redundant_alt -->
				<img
					src={img}
					alt="Project photo"
					class="rounded-xl shadow-md hover:scale-105 transition-transform"
				/>
			{/each}
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-16 bg-brand-500 text-white text-center">
	<h2 class="text-3xl font-bold uppercase mb-6">Interested in Building with Us?</h2>
	<p class="mb-8 text-lg text-gray-100 max-w-2xl mx-auto">
		Let’s bring your next project to life with quality, innovation, and precision.
	</p>
	<Button handleClick={() => goto('/contact')}>
		Get in Touch
	</Button>
</section>

<style>
	:global(.text-brand-500) {
		color: #034399;
	}
	:global(.bg-brand-500) {
		background-color: #034399;
	}
</style>
