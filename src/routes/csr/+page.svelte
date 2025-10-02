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
	<div class="absolute inset-0 bg-[url(/images/DWC1.jpg)] bg-cover bg-center lg:bg-fixed"></div>
	<div class="absolute inset-0 bg-black/50"></div>

	<div class="relative z-10 max-w-3xl text-center">
		    <h1 use:inView class="reveal text-4xl sm:text-5xl md:text-6xl font-extrabold text-yellow-500 uppercase leading-snug sm:leading-tight md:leading-tight px-2">
CORPORATE SOCIAL RESPONSIBILITY</h1>
		<p class="reveal mt-6 text-lg text-gray-200 sm:text-xl uppercase" use:inView>
MAKING A POSITIVE IMPACT		</p>
	</div>
</section>

<!-- CORE PRINCIPLES -->
<section class="bg-white px-6 py-20">
	<div class="mb-12 text-center">
		<h2 class="text-3xl font-bold text-gray-900 uppercase">Our CSR Philosophy</h2>
		<div class="mx-auto mt-3 h-1 w-20 rounded-full bg-yellow-500"></div>
	</div>

	<div class="mx-auto grid max-w-7xl gap-12 sm:grid-cols-2 lg:grid-cols-3">
		<!-- Card 1:-->
		<div
			use:inView
			class="reveal relative overflow-hidden  bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 shadow-xl transition-transform duration-500 hover:scale-105"
		>
			<div
				class="animate-blob absolute -top-12 -right-12 h-48 w-48 rounded-full bg-yellow-200/30 blur-3xl"
			></div>
			<img src="/images/Integrity.svg" alt="Integrity" class="relative z-10 mb-4 h-16 w-16" />
			<h3 class="relative z-10 text-2xl font-semibold text-gray-900 uppercase">ENVIRONMENTAL SUSTAINABILITY</h3>
			<p class="relative z-10 mt-4 leading-relaxed text-gray-600">
				We are committed to minimizing our environmental footprint. We actively promote sustainable practices within our company, such as energy conservation, waste reduction, and responsible resource management. We strive to leverage technology to develop eco-friendly solutions and encourage our employees to adopt environmentally conscious behaviors. Diversity and Inclusion: We embrace diversity and foster an inclusive work environment. We believe that diverse teams bring unique perspectives and enhance creativity and innovation. We promote equal opportunities, respect individual differences, and ensure a workplace that values and celebrates diversity in all its forms.
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
			<h3 class="relative z-10 text-2xl font-semibold text-gray-900 uppercase">ETHICAL BUSINESS PRACTICES
</h3>
			<p class="relative z-10 mt-4 leading-relaxed text-gray-600">
				We adhere to the highest ethical standards in all aspects of our business. We conduct our operations with integrity, honesty, and transparency. We prioritize ethical decision-making and compliance with legal and regulatory requirements. Our commitment to ethical business practices extends to our relationships with clients, partners, suppliers, and the communities we serve. Community Engagement: We actively engage with our local communities and support initiatives that drive positive change. We encourage our employees to volunteer their time and skills to meaningful causes. We contribute to community development by sponsoring events, participating in charitable activities, and supporting nonprofit organizations aligned with our values.
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
			<h3 class="relative z-10 text-2xl font-semibold text-gray-900 uppercase">DATA PRIVACY AND SECURITY
</h3>
			<p class="relative z-10 mt-4 leading-relaxed text-gray-600">
				We recognize the importance of protecting data privacy and maintaining robust cybersecurity practices. We prioritize the security of our clients' information and employ stringent measures to safeguard data against unauthorized access or breaches. We adhere to relevant data protection regulations and continuously invest in advanced security technologies and employee training.
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
			<h3 class="relative z-10 text-2xl font-semibold text-gray-900 uppercase">EMPLOYEE WELL BEING
</h3>
			<p class="relative z-10 mt-4 leading-relaxed text-gray-600">
				We value the well-being and professional growth of our employees. We foster a supportive work environment that promotes work-life balance, health, and personal development. We provide opportunities for skill enhancement, ongoing training, and career advancement. Our goal is to create a workplace where employees feel valued, motivated, and empowered to reach their full potential.
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
