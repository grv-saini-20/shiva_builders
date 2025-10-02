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

<!-- HERO WITH PARALLAX -->
<section
	class="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-6 py-24"
>
	<div class="absolute inset-0 bg-[url(/images/herobg.webp)] bg-cover bg-center lg:bg-fixed"></div>
	<div class="absolute inset-0 bg-black/50"></div>

	<div class="relative z-10 max-w-3xl text-center">
    <h1 use:inView class="reveal text-4xl sm:text-5xl md:text-6xl font-extrabold text-yellow-500 uppercase leading-snug sm:leading-tight md:leading-tight px-2">
			Why Choose Us
		</h1>
		<p class="reveal mt-6 text-lg text-gray-200 sm:text-xl uppercase" use:inView>
			We combine experience, innovation, and quality to deliver unmatched construction solutions.
		</p>
	</div>
</section>

<!-- REASONS TO CHOOSE US -->
<section class="relative overflow-hidden bg-gray-50 px-6 py-24">
	<!-- Background decorative shapes -->
	<!-- <div class="absolute -top-20 -left-20 w-72 h-72 bg-yellow-200/20 rounded-full blur-3xl animate-blob"></div>
  <div class="absolute -bottom-20 -right-20 w-96 h-96 bg-yellow-300/10 rounded-full blur-3xl animate-blob"></div> -->

	<div class="relative z-10 mb-16 text-start">
		<h2 class="text-4xl font-bold text-gray-900 uppercase">Why Choose Us</h2>
		<div class="mx-auto mt-4 h-1 w-24 rounded-full bg-yellow-500"></div>
	</div>

	<div class="relative z-10 mx-auto grid max-w-7xl gap-12 md:grid-cols-2 lg:grid-cols-3">
		<!-- Card 1 -->
		<div
			use:inView
			class="reveal relative transform overflow-hidden  bg-gradient-to-br from-yellow-50 to-yellow-100 p-10 shadow-xl transition-all duration-500 hover:scale-105"
		>
			<div
				class="animate-blob absolute -top-12 -right-12 h-48 w-48 rounded-full bg-yellow-200/30 blur-3xl"
			></div>
			<div class="mb-6 flex justify-start">
				<img
					src="/images/UnparalleledExtertise.svg"
					alt="Expertise"
					class="relative z-10 h-16 w-16"
				/>
			</div>
			<h3 class="relative z-10 mb-3 text-start text-2xl font-semibold text-gray-900 uppercase">
				Unparalleled Expertise
			</h3>
			<p class="relative z-10 text-start leading-relaxed text-gray-600">
				With years of experience and a track record of success, Shiva Builders brings unparalleled
				expertise to every project. Our team of seasoned professionals boasts a wealth of knowledge
				in all aspects of real estate construction, ensuring that your project is in capable hands
				from start to finish.
			</p>
		</div>

		<!-- Card 2 -->
		<div
			use:inView
			class="reveal relative transform overflow-hidden  bg-gradient-to-br from-pink-50 to-pink-100 p-10 shadow-xl transition-all duration-500 hover:scale-105"
		>
			<div
				class="animate-blob absolute -top-10 -left-10 h-44 w-44 rounded-full bg-pink-200/30 blur-3xl"
			></div>
			<div class="mb-6 flex justify-start">
				<img src="/images/Excellence.svg" alt="Excellence" class="relative z-10 h-16 w-16" />
			</div>
			<h3 class="relative z-10 mb-3 text-start text-2xl font-semibold text-gray-900 uppercase">
				Commitment to Excellence
			</h3>
			<p class="relative z-10 text-start leading-relaxed text-gray-600">
				Excellence isn't just a goal for us; it's a standard that we uphold in everything we do.
				From the quality of our craftsmanship to the level of service we provide, we strive for
				nothing short of perfection. When you choose Shiva Builders, you can rest assured that your
				project will be completed to the highest standards of excellence.Excellence isn't just a
				goal for us; it's a standard that we uphold in everything we do. From the quality of our
				craftsmanship to the level of service we provide, we strive for nothing short of perfection.
				When you choose Shiva Builders, you can rest assured that your project will be completed to
				the highest standards of excellence.
			</p>
		</div>

		<!-- Card 3 -->
		<div
			use:inView
			class="reveal relative transform overflow-hidden  bg-gradient-to-br from-green-50 to-green-100 p-10 shadow-xl transition-all duration-500 hover:scale-105"
		>
			<div
				class="animate-blob absolute -right-6 -bottom-12 h-48 w-48 rounded-full bg-green-200/30 blur-3xl"
			></div>
			<div class="mb-6 flex justify-start">
				<img src="/images/Solutions.svg" alt="Innovation" class="relative z-10 h-16 w-16" />
			</div>
			<h3 class="relative z-10 mb-3 text-start text-2xl font-semibold text-gray-900 uppercase">
				Innovative Solutions
			</h3>
			<p class="relative z-10 text-start leading-relaxed text-gray-600">
				In today's fast-paced world, innovation is key to staying ahead of the curve. At Shiva
				Builders, we embrace innovation at every opportunity, leveraging cutting-edge technologies
				and sustainable practices to deliver projects that are not only functional and beautiful but
				also environmentally friendly and future-proof.
			</p>
		</div>

		<!-- Card 4 -->
		<div
			use:inView
			class="reveal relative transform overflow-hidden  bg-gradient-to-br from-blue-50 to-blue-100 p-10 shadow-xl transition-all duration-500 hover:scale-105"
		>
			<div
				class="animate-blob absolute -bottom-10 -left-8 h-48 w-48 rounded-full bg-blue-200/30 blur-3xl"
			></div>
			<div class="mb-6 flex justify-start">
				<img src="/images/Client.svg" alt="Client-Centric" class="relative z-10 h-16 w-16" />
			</div>
			<h3 class="relative z-10 mb-3 text-start text-2xl font-semibold text-gray-900 uppercase">
				Client-Centric Approach
			</h3>
			<p class="relative z-10 text-start leading-relaxed text-gray-600">
				In today's fast-paced world, innovation is key to staying ahead of the curve. At Shiva
				Builders, we embrace innovation at every opportunity, leveraging cutting-edge technologies
				and sustainable practices to deliver projects that are not only functional and beautiful but
				also environmentally friendly and future-proof.
			</p>
		</div>

		<!-- Card 5 -->
		<div
			use:inView
			class="reveal relative transform overflow-hidden  bg-gradient-to-br from-purple-50 to-purple-100 p-10 shadow-xl transition-all duration-500 hover:scale-105"
		>
			<div
				class="animate-blob absolute top-0 right-0 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-200/30 blur-3xl"
			></div>
			<div class="mb-6 flex justify-start">
				<img src="/images/Transparency.svg" alt="Transparency" class="relative z-10 h-16 w-16" />
			</div>
			<h3 class="relative z-10 mb-3 text-start text-2xl font-semibold text-gray-900 uppercase">
				Transparency & Integrity
			</h3>
			<p class="relative z-10 text-start leading-relaxed text-gray-600">
				We believe that honesty and transparency are the cornerstones of a successful partnership.
				That's why we maintain open lines of communication with our clients throughout the entire
				process, keeping you informed and involved every step of the way. With Shiva Builders, you
				can trust that your project will be completed with the utmost integrity and professionalism.
			</p>
		</div>

		<!-- Card 6 -->
		<div
			use:inView
			class="reveal relative transform overflow-hidden  bg-gradient-to-br from-yellow-50 to-yellow-100 p-10 shadow-xl transition-all duration-500 hover:scale-105"
		>
			<div
				class="animate-blob absolute bottom-0 left-1/2 h-44 w-44 translate-x-1/2 translate-y-1/2 rounded-full bg-yellow-300/30 blur-3xl"
			></div>
			<div class="mb-6 flex justify-start">
				<img src="/images/Proven.svg" alt="Track Record" class="relative z-10 h-16 w-16" />
			</div>
			<h3 class="relative z-10 mb-3 text-start text-2xl font-semibold text-gray-900 uppercase">
				Proven Track Record
			</h3>
			<p class="relative z-10 text-start leading-relaxed text-gray-600">
				Don't just take our word for it – our track record speaks for itself. Over the years, we
				have successfully completed countless projects of varying sizes and scopes, earning the
				trust and loyalty of clients across the region. When you choose [Company Name], you can have
				confidence knowing that you're working with a company with a proven track record of success.
			</p>
		</div>
	</div>
</section>

<style>
	.reveal {
		opacity: 0;
		transform: translateY(20px);
		transition: all 0.6s ease-out;
	}

	@keyframes blob {
		0%,
		100% {
			transform: translate(0, 0) scale(1);
		}
		33% {
			transform: translate(10px, -10px) scale(1.05);
		}
		66% {
			transform: translate(-10px, 10px) scale(0.95);
		}
	}

	.animate-blob {
		animation: blob 8s infinite;
	}
</style>
