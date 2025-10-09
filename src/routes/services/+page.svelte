<script lang="ts">
	function inView(
		node: HTMLElement,
		{ threshold = 0.2, onEnter }: { threshold?: number; onEnter?: () => void } = {}
	) {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						node.style.opacity = '1';
						node.style.transform = 'translateY(0)';
						if (onEnter) onEnter();
					} else {
						node.style.opacity = '0';
						node.style.transform = 'translateY(40px)';
					}
				});
			},
			{ threshold }
		);

		observer.observe(node);

		return {
			destroy() {
				observer.unobserve(node);
			}
		};
	}

	const services = [
		{
			title: 'Infrastructure Development',
			content: `Shiva Builders provides experienced and knowledgeable professionals to handle all phases of the project. As a General Contractor, we handle all types and sizes of projects, from fresh constructions to renovations. Workers and qualified sub-contractors deliver your project on-time with the highest degree of safety and quality.`,
			image: '/images/InfrastructureDev.jpg'
		},
		{
			title: 'Design and Build',
			content: `Shiva Builders establishes a single contract with the owner to provide full spectrum design, architectural, engineering, and construction services. Single point responsibility ensures quality, cost, and schedule adherence. Planning and execution evaluate materials and methods efficiently, saving time and money.`,
			image: '/images/Design&Build.png'
		},
		{
			title: 'Joint Venture Model',
			content: `Shiva Builders Infra’s joint venture services bring together industry expertise, advanced technology, and shared resources to deliver superior infrastructure solutions. Partnering with leading firms maximizes efficiency, reduces costs, and drives innovation.`,
			image: '/images/JVM.jpg'
		}
	];
</script>

<!-- HERO SECTION -->
<section
	class="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-6 py-20"
>
	<div class="absolute inset-0 bg-[url('/images/DWC1.jpg')] bg-cover bg-center lg:bg-fixed"></div>
	<div class="absolute inset-0 bg-black/75"></div>
	<div class="relative z-10 max-w-3xl text-center">
		<h1
			use:inView
			class="reveal px-2 text-4xl leading-snug font-extrabold text-brand-400 uppercase sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight"
		>
			Our Services
		</h1>
		<p use:inView class="reveal mt-6 text-lg text-gray-200 uppercase sm:text-xl">
			Delivering excellence through innovation, safety, and reliability across all projects.
		</p>
	</div>
</section>

<!-- SERVICES SECTIONS -->
<section class="bg-gray-50 px-6 py-24">
	<div class="mx-auto max-w-6xl space-y-20">
		{#each services as service, i}
			<div
				id={service.title}
				class="reveal group relative flex flex-col items-center overflow-hidden bg-white shadow-lg transition-shadow duration-500 hover:shadow-2xl md:flex-row md:items-stretch"
				class:md:flex-row-reverse={i % 2 !== 0}
				use:inView
			>
				<!-- IMAGE -->
				<div class="overflow-hidden md:w-1/2">
					<img
						src={service.image}
						alt={service.title}
						class="aspect-video grayscale group-hover:grayscale-0 h-64 w-full transform object-cover transition-all duration-500 group-hover:scale-105 md:h-full"
					/>
				</div>

				<!-- TEXT -->
				<div class="flex flex-col justify-center p-8 md:w-1/2">
					<h3
						class="mb-4 border-l-4 border-brand-500 pl-3 text-2xl font-bold text-gray-900 uppercase"
					>
						{service.title}
					</h3>
					<p class="leading-relaxed text-gray-700">{service.content}</p>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	.reveal {
		opacity: 0;
		transform: translateY(20px);
		transition: all 0.6s ease-out;
	}
</style>
