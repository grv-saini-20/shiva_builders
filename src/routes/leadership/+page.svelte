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
</script>

<!-- HERO -->
<section
	class="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-6 py-24"
>
	<div class="absolute inset-0 bg-[url(/images/DWC1.webp)] bg-cover bg-center lg:bg-fixed"></div>
	<div class="absolute inset-0 bg-black/75"></div>

	<div class="relative z-10 max-w-3xl text-center">
		<h1
			use:inView
			class="reveal px-2 text-4xl leading-snug font-extrabold text-brand-400 uppercase sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight"
		>
			Leadership
		</h1>
		<p use:inView class="reveal mt-6 text-lg text-gray-200 uppercase sm:text-xl">
			At Shiva Builders, our success is driven by the passion, expertise, and vision of our
			leadership team.
		</p>
	</div>
</section>

<!-- LEADERSHIP TIMELINE -->
<section class="relative mx-auto max-w-5xl bg-gray-100 px-6 py-24">
	<!-- Timeline for desktop only -->
	<div
		class="absolute top-0 bottom-0 left-1/2 hidden w-1 -translate-x-1/2 transform bg-brand-200/50 md:block"
	></div>

	<!-- Leader 1 -->
	<div
		class="relative mb-24 flex flex-col items-center text-center md:flex-row md:justify-between md:text-left"
	>
		<div class="md:w-1/2 md:pr-12">
			<h2 use:inView class="reveal text-2xl font-bold text-gray-900">Mr. Deepak Wadhawan</h2>
			<p use:inView class="reveal mb-4 font-semibold text-brand-500">DIRECTOR</p>
			<p use:inView class="reveal mb-2 leading-relaxed text-gray-600">
				Mr. Deepak Wadhawan is the visionary leader of Shiva Builders having experience of more than
				35 years overseeing end-to-end delivery of commercial and residential projects with a focus
				on safety, quality and schedule certainty. He is the one who drives strategic growth, builds
				high-performing teams, and fosters strong client and subcontractor partnerships.
			</p>
			<p use:inView class="reveal my-4 leading-relaxed text-gray-600">
				Under his Leadership, the company has delivered complex builds on time and within budget,
				implemented rigorous QA/QC and safety programs, and expanded into new markets while
				maintaining a reputation for integrity and craftsmanship.
			</p>
			<p use:inView class="reveal leading-relaxed text-gray-600">
				Known for transparent communication and disciplined project controls, he ensures every
				project meets client goals—on time, on budget, and to spec.
			</p>
		</div>
		<div
			class="mt-8 h-6 w-6 rounded-full bg-brand-500 shadow-lg md:absolute md:top-0 md:left-1/2 md:-translate-x-1/2"
		></div>
	</div>

	<!-- Leader 2 -->
	<div
		class="relative flex flex-col items-center text-center md:flex-row-reverse md:justify-between md:text-left my-24"
	>
		<div class="md:w-1/2 md:pl-12">
			<h2 use:inView class="reveal text-2xl font-bold text-gray-900">Mr. Mukul Wadhawan</h2>
			<p use:inView class="reveal mb-4 font-semibold text-brand-500">DIRECTOR</p>
			<p use:inView class="reveal mb-2 leading-relaxed text-gray-600">
				Mr. Mukul Wadhawan, our dynamic Leader, propels building company's strategic growth. With
				extensive expertise in Construction, he leads key decisions, fosters a positive workplace
				culture, and guides us toward our business objectives and Company’s Long term goals and
				initiatives.
			</p>
			<p use:inView class="reveal my-4 leading-relaxed text-gray-600">
				As a seasoned professional in the field, Mr. Mukul embodies an entrepreneurial spirit,
				leveraging his deep industry knowledge to chart our company's course and translate vision
				into action.
			</p>
			<p use:inView class="reveal mb-2 leading-relaxed text-gray-600">
				In his diverse role, Mr. Mukul oversees operations, collaborating with the leadership team
				to execute strategies, forge partnerships, and identify market opportunities. By cultivating
				strong relationships with clients, investors, and stakeholders, Mr. Mukul ensures our
				company's enduring success.
			</p>
		</div>
		<div
			class="mt-8 h-6 w-6 rounded-full bg-brand-500 shadow-lg md:absolute md:top-0 md:left-1/2 md:-translate-x-1/2"
		></div>
	</div>

	<!-- Leader 3 -->
	<div
		class="relative flex flex-col items-center text-center md:flex-row md:justify-between md:text-left"
	>
		<div class="md:w-1/2 md:pr-12">
			<h2 use:inView class="reveal text-2xl font-bold text-gray-900">Mr. Shrey Wadhawan</h2>
			<p use:inView class="reveal mb-4 font-semibold text-brand-500">EXECUTIVE DIRECTOR</p>
			<p use:inView class="reveal mb-2 leading-relaxed text-gray-600">
				At just 23 years old, Shrey Wadhawan is already making rapid growth in the construction
				industry with sharp focus on sustainable and modern infrastructure. With passion for
				innovation, Shrey has a big vision to revolutionize urban development using eco-friendly
				materials and smart building technologies.
			</p>
			<p use:inView class="reveal my-4 leading-relaxed text-gray-600">
				Shrey’s hands-on approach, forward-thinking mindset, and ability to connect with both
				clients and workers on the ground have earned him respect far beyond his years.
			</p>
			<p use:inView class="reveal mb-2 leading-relaxed text-gray-600">
				Driven, focused, and unafraid to challenge outdated industry norms, Shrey represents the new
				generation of construction leaders—proving that age is no barrier when vision meets action.
			</p>
		</div>
		<div
			class="mt-8 h-6 w-6 rounded-full bg-brand-500 shadow-lg md:absolute md:top-0 md:left-1/2 md:-translate-x-1/2"
		></div>
	</div>
</section>

<style>
	.reveal {
		opacity: 0;
		transform: translateY(20px);
		transition: all 0.6s ease-out;
	}
</style>
