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
Ethos</h1>
		<p class="reveal mt-6 text-lg text-gray-200 sm:text-xl uppercase" use:inView>
			Driven by principles, powered by people – delivering excellence every step of the way.
		</p>
	</div>
</section>

<!-- CORE PRINCIPLES -->
<section class="bg-white px-6 py-20">
	<div class="mb-12 text-center">
		<h2 class="text-3xl font-bold text-gray-900 uppercase">Our Core Principles</h2>
		<div class="mx-auto mt-3 h-1 w-20 rounded-full bg-yellow-500"></div>
	</div>

	<div class="mx-auto grid max-w-7xl gap-12 sm:grid-cols-2 lg:grid-cols-3">
		<!-- Card 1: Integrity -->
		<div
			use:inView
			class="reveal relative overflow-hidden  bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 shadow-xl transition-transform duration-500 hover:scale-105"
		>
			<div
				class="animate-blob absolute -top-12 -right-12 h-48 w-48 rounded-full bg-yellow-200/30 blur-3xl"
			></div>
			<img src="/images/Integrity.svg" alt="Integrity" class="relative z-10 mb-4 h-16 w-16" />
			<h3 class="relative z-10 text-2xl font-semibold text-gray-900 uppercase">Integrity</h3>
			<p class="relative z-10 mt-4 leading-relaxed text-gray-600">
				Integrity is the bedrock of our operations. We conduct ourselves with honesty, transparency,
				and accountability in all our interactions, ensuring that our clients, partners, and
				stakeholders trust us implicitly. Our commitment to integrity extends beyond words to
				actions, as we strive to uphold the highest ethical standards in everything we do.
			</p>
		</div>

		<!-- Card 2: Community -->
		<div
			use:inView
			class="reveal relative overflow-hidden  bg-gradient-to-br from-pink-50 to-pink-100 p-8 shadow-xl transition-transform duration-500 hover:scale-105"
		>
			<div
				class="animate-blob absolute -top-10 -left-10 h-44 w-44 rounded-full bg-pink-200/30 blur-3xl"
			></div>
			<img src="/images/Community.svg" alt="Community" class="relative z-10 mb-4 h-16 w-16" />
			<h3 class="relative z-10 text-2xl font-semibold text-gray-900 uppercase">Community</h3>
			<p class="relative z-10 mt-4 leading-relaxed text-gray-600">
				We are more than just a construction company; we are members of the communities we serve. We
				recognize the importance of giving back and actively engage in initiatives that enrich the
				lives of those around us. Whether it's supporting local charities, promoting education, or
				investing in infrastructure development, we are committed to making a positive impact and
				building stronger, more resilient communities.
			</p>
		</div>

		<!-- Card 3: Excellence -->
		<div
			use:inView
			class="reveal relative overflow-hidden  bg-gradient-to-br from-green-50 to-green-100 p-8 shadow-xl transition-transform duration-500 hover:scale-105"
		>
			<div
				class="animate-blob absolute -right-6 -bottom-12 h-48 w-48 rounded-full bg-green-200/30 blur-3xl"
			></div>
			<img src="/images/Excellence.svg" alt="Excellence" class="relative z-10 mb-4 h-16 w-16" />
			<h3 class="relative z-10 text-2xl font-semibold text-gray-900 uppercase">Excellence</h3>
			<p class="relative z-10 mt-4 leading-relaxed text-gray-600">
				Excellence is not just a goal for us; it is a relentless pursuit. From conceptualization to
				execution, we aim for nothing short of perfection in every aspect of our projects. Our team
				of experts, equipped with unparalleled skills and knowledge, ensures that each structure we
				build is a masterpiece of craftsmanship and innovation. We set the bar high and constantly
				challenge ourselves to exceed expectations, delivering results that inspire and endure.
			</p>
		</div>

		<!-- Card 4: Sustainability -->
		<div
			use:inView
			class="reveal relative overflow-hidden  bg-gradient-to-br from-blue-50 to-blue-100 p-8 shadow-xl transition-transform duration-500 hover:scale-105"
		>
			<div
				class="animate-blob absolute -top-8 -right-10 h-44 w-44 rounded-full bg-blue-200/30 blur-3xl"
			></div>
			<img
				src="/images/Sustainability.svg"
				alt="Sustainability"
				class="relative z-10 mb-4 h-16 w-16"
			/>
			<h3 class="relative z-10 text-2xl font-semibold text-gray-900 uppercase">Sustainability</h3>
			<p class="relative z-10 mt-4 leading-relaxed text-gray-600">
				As stewards of the environment, we recognize the profound impact our actions have on the
				world around us. That's why sustainability lies at the heart of everything we do. From
				adopting eco-friendly construction practices to integrating green technologies into our
				designs, we are committed to minimizing our environmental footprint and contributing to a
				more sustainable future.
			</p>
		</div>

		<!-- Card 5: Collaboration -->
		<div
			use:inView
			class="reveal relative overflow-hidden  bg-gradient-to-br from-purple-50 to-purple-100 p-8 shadow-xl transition-transform duration-500 hover:scale-105"
		>
			<div
				class="animate-blob absolute -bottom-10 -left-8 h-48 w-48 rounded-full bg-purple-200/30 blur-3xl"
			></div>
			<img src="/images/Collab.svg" alt="Collaboration" class="relative z-10 mb-4 h-16 w-16" />
			<h3 class="relative z-10 text-2xl font-semibold text-gray-900 uppercase">Collaboration</h3>
			<p class="relative z-10 mt-4 leading-relaxed text-gray-600">
				Collaboration is key to our success. We believe in the power of synergy, leveraging the
				diverse talents and perspectives of our team, clients, and partners to achieve shared goals.
				By fostering a culture of collaboration and open communication, we create an environment
				where creativity flourishes, ideas thrive, and innovation thrives.
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
			transform: translate(0px, 0px) scale(1);
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
