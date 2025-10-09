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

<section class="bg-white px-6 py-20 md:px-16 lg:px-32">
	<div class="mx-auto max-w-5xl text-center">
		<h2 class="reveal text-center text-4xl font-bold text-gray-900 uppercase" use:inView>
			Our team
		</h2>
		<div class="reveal mx-auto mt-4 mb-16 h-1 w-24 rounded-full bg-brand-500" use:inView></div>

		<p class="reveal mb-6 text-lg leading-relaxed text-gray-900 md:text-xl" use:inView>
			Shiva Builders holds pride in talking about its team of
			<span class="font-semibold text-black-900">220 Professionals, Technocrats & Officials</span>
			and more than
			<span class="font-semibold text-black-900">1400 Skilled and Semi-Skilled members</span>
			that make up our Shiva Builders Family.
		</p>

		<p class="reveal mb-6 text-lg leading-relaxed text-gray-700 md:text-xl" use:inView>
			Any Organisation’s biggest strength is its team and management practices, and we too are well
			versed with both of them.
		</p>

		<p class="reveal mb-6 text-lg leading-relaxed text-gray-700 md:text-xl" use:inView>
			From <span class="font-semibold text-black-900"
				>Quality, Time management, Safety, Procurement, Solutions, On-Ground build up, Leveraging,
				Project controls, Estimations, Scheduling and Compliances</span
			>, Our Teams are always well prepared and well equipped to manage one and all.
		</p>

		<p class="text-lg leading-relaxed text-gray-700 md:text-xl" use:inView>
			Our teams are well prepared to take up every kind of complex civil structures taking into
			strict consideration the required safety measures as per not just
			<span class="font-semibold text-black-900">India</span> but
			<span class="font-semibold text-black-900">International standards</span>.
		</p>
	</div>
</section>

<style>
	.reveal {
		opacity: 0;
		transform: translateY(20px);
		transition: all 0.6s ease-out;
	}
</style>
