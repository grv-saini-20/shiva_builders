<script lang="ts">
	import { goto } from '$app/navigation';
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

<!-- HERO with Parallax -->
<section
	class="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-6 py-24"
>
	<div class="absolute inset-0 bg-[url(/images/DWC1.jpg)] bg-cover bg-center lg:bg-fixed"></div>
	<div class="absolute inset-0 bg-black/50"></div>

	<div class="relative z-10 max-w-3xl text-center">
		    <h1 use:inView class="reveal text-4xl sm:text-5xl md:text-6xl font-extrabold text-yellow-500 uppercase leading-snug sm:leading-tight md:leading-tight px-2">
ABOUT US</h1>
		<p class="reveal mt-6 text-lg text-gray-200 sm:text-xl uppercase" use:inView>
			Building with trust, delivering with quality – shaping skylines for over 3 decades.
		</p>
	</div>
</section>

<!-- WHO WE ARE -->
<section class="bg-white px-6 py-20">
	<div class="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
		<div use:inView class="reveal">
			<img
				src="/images/JLPL.webp"
				alt="About Company"
				class="aspect-square w-full max-w-lg object-cover shadow-lg"
			/>
		</div>
		<div class="">
			<h2 use:inView class="reveal text-3xl font-bold text-gray-900 uppercase">Who We Are</h2>
			<div use:inView class="reveal mt-4 h-1 w-20 rounded-full bg-yellow-500"></div>
			<p use:inView class="reveal mt-6 leading-relaxed text-gray-600">
				At Shiva Builders, we build more than structures - we craft legacies with a focus on
				innovation, reliability, and client satisfaction. Our dedicated team transforms your vision
				into reality. Explore the possibilities with us and experience Development excellence like
				never before .
			</p>
			<p use:inView class="reveal mt-4 leading-relaxed text-gray-600">
				Our journey has been marked by continuous growth, client trust, and a passion for
				transforming visions into enduring landmarks.
			</p>
			<div class="reveal mt-6" use:inView>
				<Button handleClick={() => goto('/contact')}>Contact Us</Button>
			</div>
		</div>
	</div>
</section>

<!-- MISSION & VISION -->
<section class="bg-gray-100 px-6 py-20">
	<div class="mb-12 text-center">
		<h2 class="text-3xl font-bold text-gray-900 uppercase">Mission & Vision</h2>
		<div class="mx-auto mt-3 h-1 w-20 rounded-full bg-yellow-500"></div>
	</div>

	<div class="mx-auto grid h-auto max-w-6xl items-start gap-12 md:grid-cols-2">
		<!-- Mission -->
		<div use:inView class="reveal h-full  bg-white p-8 shadow-lg">
			<h3 class="text-2xl font-semibold text-gray-900 uppercase">Our Mission</h3>
			<p class="mt-4 leading-relaxed text-gray-600">
				Empowering dreams through precision and passion, Shiva Builders is committed to constructing
				a world of enduring beauty and functionality. We at Shiva Builders are on a mission to
				redefine construction and excellence through innovation, quality and client satisfaction.
			</p>
		</div>

		<!-- Vision -->
		<div use:inView class="reveal h-full  bg-white p-8 shadow-lg">
			<h3 class="text-2xl font-semibold text-gray-900 uppercase">Our Vision</h3>
			<p class="mt-4 leading-relaxed text-gray-600">
				Embarking on a journey of transformative construction, Shiva Builders envisions a future
				where every project is a masterpiece and every structure tells a story of innovation and
				craftmanship. Our vision is to be trailblazers of cutting edge construction, seamlessly
				blending creativity with functionality. Committed to exceed expectations, we aspire to shape
				skylines, enrich communities and leave an indelible mark of excellence in every endeavour.
				At Shiva Builders, we don’t just build structures, we craft legacies that stand the test,
				making tomorrow’s history today.
			</p>
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

<!-- CTA with Parallax -->
<section class="relative flex items-center justify-center overflow-hidden px-6 py-24">
	<div class="absolute inset-0 bg-[url(/images/DWC1.jpg)] bg-cover bg-center lg:bg-fixed"></div>
	<div class="absolute inset-0 bg-black/60"></div>

	<div class="relative z-10 max-w-2xl text-center">
		<h2 class="text-4xl font-bold text-yellow-400 uppercase">Let’s Build the Future Together</h2>
		<p class="mt-6 text-lg text-gray-200 uppercase">
			Partner with us to turn your vision into reality with precision and quality.
		</p>
		<div class="mt-8">
			<Button variant="primary" handleClick={() => goto('/contact')}>Get in Touch</Button>
		</div>
	</div>
</section>

<style>
	.reveal {
		opacity: 0;
		transform: translateY(20px);
		transition: all 0.6s ease-out;
	}
</style>
