<script lang="ts">
	import { goto } from '$app/navigation';
	import { ProjectCard } from '$lib/project';
	import FeatureCard from '$lib/project/FeatureCard.svelte';
	import ServiceCard from '$lib/project/ServiceCard.svelte';
	import Button from '$lib/ui/Button.svelte';

	let projects = $state(0);
	let sqft = $state(0);
	let ongoing = $state(0);
	let personnel = $state(0);
	let experience = $state(0);

	let counted = {
		projects: false,
		sqft: false,
		ongoing: false,
		personnel: false,
		experience: false
	};

	// Generic counter function
	const statCounter = (target: number, setter: (val: number) => void, delay: number) => {
		for (let i = 0; i <= target; i++) {
			setTimeout(() => {
				setter(i);
			}, i * delay);
		}
	};

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
</script>

<!-- HERO -->
<section class="relative flex min-h-screen flex-col items-center justify-center px-6 py-24">
	<div class="absolute inset-0 bg-[url(/images/DWC1.jpg)] bg-cover bg-center lg:bg-fixed"></div>
	<div class="absolute inset-0 bg-black/50"></div>

	<div class="relative z-10 max-w-3xl text-center uppercase">
		<h1
			use:inView
			class="reveal px-2 text-4xl leading-snug font-extrabold text-yellow-500 uppercase sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight"
		>
			Pioneering Futuristic Construction
		</h1>
		<p class="reveal mt-6 mb-8 text-lg text-gray-300 uppercase sm:text-xl" use:inView>
			From visionary designs to on-time delivery, Shiva Builders brings innovation and quality to
			every project.
		</p>
		<div use:inView class="reveal">
			<Button handleClick={() => goto('/contact')}>Get in Touch</Button>
		</div>
	</div>
</section>

<!-- FEATURES -->
<section class="bg-gray-300 px-6 py-20">
	<div class="flex flex-wrap items-center justify-center gap-12">
		<div use:inView class="reveal">
			<FeatureCard title="Health & Safety First" iconSrc="/images/Health.svg" />
		</div>
		<div use:inView class="reveal">
			<FeatureCard title="Experienced Experts" iconSrc="images/Expert.svg" />
		</div>
		<div use:inView class="reveal">
			<FeatureCard title="We're Innovative" iconSrc="images/Bulb.svg" />
		</div>
	</div>
</section>

<!-- SERVICES -->
<section class="bg-white px-6 py-20">
	<div class="text-center">
		<h3 class="reveal text-4xl font-bold text-black uppercase" use:inView>
			What We Offer
		</h3>
		<div
			class="reveal mx-auto mt-4 h-1 w-20 rounded-full bg-yellow-500"
			use:inView
		></div>
	</div>

	<div class="mt-16 flex flex-wrap justify-center gap-12 md:gap-8 lg:gap-6">
		<div use:inView class="reveal flex max-w-sm min-w-[280px]">
			<ServiceCard
				imageUrl="/images/JLPL.webp"
				title="Commercial"
				description="Shiva Builders redefines commercial construction by merging modern design with functionality. Each project reflects our commitment to quality and creativity, setting new industry standards."
				class="flex h-full flex-col"
			/>
		</div>

		<div use:inView class="reveal flex max-w-sm min-w-[280px]">
			<ServiceCard
				title="Resedential"
				imageUrl="/images/MehakApartments.webp"
				description="Our residential projects, whether single-family homes or multi-unit developments, prioritize comfort, aesthetics, and energy efficiency, helping you find the perfect place to call home."
				class="flex h-full flex-col"
			/>
		</div>

		<div use:inView class="reveal flex max-w-sm min-w-[280px]">
			<ServiceCard
				title="Infrastructure"
				imageUrl="/images/ALC.webp"
				description="Shiva Builders transforms traditional construction with innovative designs that prioritize functionality and aesthetics. Our projects enhance community landscapes while ensuring quality and sustainability, effectively addressing the evolving needs of modern businesses."
				class="flex h-full flex-col"
			/>
		</div>
	</div>
</section>


<!-- STATS -->
<section class="bg-gray-700 px-6 py-20">
	<div class="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 lg:grid-cols-5">
		<div
			use:inView={{
				onEnter: () => {
					if (!counted.projects) {
						statCounter(36, (v) => (projects = v), 30);
						counted.projects = true;
					}
				}
			}}
			class="reveal"
		>
			<h2 class="text-4xl font-bold text-yellow-300">{projects}</h2>
			<p class="mt-3 text-gray-300 uppercase">Completed Projects</p>
		</div>
		<div
			use:inView={{
				onEnter: () => {
					if (!counted.sqft) {
						statCounter(19, (v) => (sqft = v), 30);
						counted.sqft = true;
					}
				}
			}}
			class="reveal"
		>
			<h2 class="text-4xl font-bold text-yellow-300">{sqft}</h2>
			<p class="mt-3 text-gray-300 uppercase">Million SQ.FTS.<br />Completed Development</p>
		</div>
		<div
			use:inView={{
				onEnter: () => {
					if (!counted.ongoing) {
						statCounter(14, (v) => (ongoing = v), 30);
						counted.ongoing = true;
					}
				}
			}}
			class="reveal"
		>
			<h2 class="text-4xl font-bold text-yellow-300">{ongoing}</h2>
			<p class="mt-3 text-gray-300 uppercase">Ongoing Projects</p>
		</div>
		<div
			use:inView={{
				onEnter: () => {
					if (!counted.personnel) {
						statCounter(1460, (v) => (personnel = v), 2);
						counted.personnel = true;
					}
				}
			}}
			class="reveal"
		>
			<h2 class="text-4xl font-bold text-yellow-300">{personnel}</h2>
			<p class="mt-3 text-gray-300 uppercase">Personnel Strength</p>
		</div>
		<div
			use:inView={{
				onEnter: () => {
					if (!counted.experience) {
						statCounter(35, (v) => (experience = v), 30);
						counted.experience = true;
					}
				}
			}}
			class="reveal"
		>
			<h2 class="text-4xl font-bold text-yellow-300">{experience}</h2>
			<p class="mt-3 text-gray-300 uppercase">Total Experience</p>
		</div>
	</div>
</section>

<section class="bg-white px-6 py-20">
	<div class="mx-auto max-w-7xl">
		<!-- Section Header -->
		<div class="mb-16 text-center">
			<h2 class="reveal text-4xl font-bold text-black-900 uppercase" use:inView>PROJECTS</h2>
			<div class="reveal mx-auto mt-3 h-1 w-20 rounded-full bg-yellow-500" use:inView></div>
		</div>

		<!-- Projects Grid -->
		<div class="grid justify-items-center gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			<article class="reveal" use:inView>
				<ProjectCard
					imageUrl="/images/ALC.webp"
					title="ALC District One, SAS Nagar Mohali"
					href="javascript:void(0);"
				/>
			</article>

			<article class="reveal" use:inView>
				<ProjectCard
					imageUrl="/images/Aerovista.webp"
					title="Aerovista, SAS Nagar Punjab"
					href="javascript:void(0);"
				/>
			</article>

			<article class="reveal" use:inView>
				<ProjectCard
					imageUrl="/images/TeadreRealcon.webp"
					title="Teadre Realcon Pvt. Ltd., SAS Nagar Punjab"
					href="javascript:void(0);"
				/>
			</article>

			<article class="reveal" use:inView>
				<ProjectCard
					imageUrl="/images/MCC4.jpeg"
					title="Mohali City Center IV, Mohali"
					href="javascript:void(0);"
				/>
			</article>
		</div>
		<div use:inView class="reveal mt-10 text-center">
			<Button variant="primary" handleClick={() => goto('/projects')}>View all Projects</Button>
		</div>
	</div>
</section>

<style>
	.reveal {
		opacity: 0;
		transform: translateY(20px);
		transition: all 0.6s ease-out;
		will-change: opacity, transform;
	}
</style>
