<script lang="ts">
	import { ProjectCard } from '$lib/project';

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


<section
	class="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-6 py-24"
>
	<div class="absolute inset-0 bg-[url(/images/DWC1.jpg)] bg-cover bg-center lg:bg-fixed"></div>
	<div class="absolute inset-0 bg-black/50"></div>

	<div class="relative z-10 max-w-3xl text-center">
		    <h1 use:inView class="reveal text-4xl sm:text-5xl md:text-6xl font-extrabold text-yellow-500 uppercase leading-snug sm:leading-tight md:leading-tight px-2">
PROJECTS</h1>
		<p class="reveal mt-6 text-lg text-gray-200 sm:text-xl uppercase" use:inView>
			Building with trust, delivering with quality – shaping skylines for over 3 decades.
		</p>
	</div>
</section>

<section class="min-h-screen bg-white px-6 py-20">
	<div class="mx-auto max-w-7xl">
		<div class="flex flex-wrap items-center justify-center gap-12">
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

			<article class="reveal" use:inView>
				<ProjectCard
					imageUrl="/images/HighlandLuxeria.jpeg"
					title="HighLand Luxuria, Zirakpur Punjab"
					href="javascript:void(0);"
				/>
			</article>

			<article class="reveal" use:inView>
				<ProjectCard
					imageUrl="/images/Highlandpark-1.jpeg"
					title="HighLand Park, Zirakpur Punjab"
					href="javascript:void(0);"
				/>
			</article>

			<article class="reveal" use:inView>
				<ProjectCard
					imageUrl="/images/DWC1.jpg"
					title="SBIZonal Office, Panchkula Haryana"
					href="javascript:void(0);"
				/>
			</article>

			<article class="reveal" use:inView>
				<ProjectCard
					imageUrl="/images/PrizmaPlaza.jpeg"
					title="Prisma Plaza, Kharar Punjab"
					href="javascript:void(0);"
				/>
			</article>

			<article class="reveal" use:inView>
				<ProjectCard
					imageUrl="/images/Curo1.jpeg"
					title="Curo One, Mullanpur New Chandigarh"
					href="javascript:void(0);"
				/>
			</article>

			<article class="reveal" use:inView>
				<ProjectCard
					imageUrl="/images/LaborBureau.webp"
					title="Labor Bureau Group Housing, SAS NAgar Punjab"
					href="javascript:void(0);"
				/>
			</article>

			<article class="reveal" use:inView>
				<ProjectCard
					imageUrl="/images/MehakApartments.webp"
					title="Mehak Apartments, Sirhind Punjab"
					href="javascript:void(0);"
				/>
			</article>

			<article class="reveal" use:inView>
				<ProjectCard
					imageUrl="/images/AbottHealthcare.webp"
					title="Abbott Healthcare Pvt Ltd., Baddi Himachal Pradesh"
					href="javascript:void(0);"
				/>
			</article>

			<article class="reveal" use:inView>
				<ProjectCard
					imageUrl="/images/Prizmacity.jpeg"
					title="Prizma City, Kharar Punjab"
					href="javascript:void(0);"
				/>
			</article>

			<article class="reveal" use:inView>
				<ProjectCard
					imageUrl="/images/GovtOfIndiaSociety.webp"
					title="The Government of India Employee Central Group Housing Society, SAS Nagar Punjab"
					href="javascript:void(0);"
				/>
			</article>

			<article class="reveal" use:inView>
				<ProjectCard
					imageUrl="/images/GoldenValley.jpeg"
					title="Golden Valley, Zirakpur Punjab"
					href="javascript:void(0);"
				/>
			</article>

			<article class="reveal" use:inView>
				<ProjectCard
					imageUrl="/images/JLPL.webp"
					title="JLPL, SAS Nagar Mohali"
					href="javascript:void(0);"
				/>
			</article>

			<article class="reveal" use:inView>
				<ProjectCard
					imageUrl="/images/Sanathan.webp"
					title="Sanathan Polycot LTD. Spinning Mill"
					href="javascript:void(0);"
				/>
			</article>

			<article class="reveal" use:inView>
				<ProjectCard
					imageUrl="/images/SPSHelios.jpeg"
					title="SPS Helios"
					href="javascript:void(0);"
				/>
			</article>

			<article class="reveal" use:inView>
				<ProjectCard
					imageUrl="/images/ALC.webp"
					title="ALC Cybrum, SAS Nagar Mohali"
					href="javascript:void(0);"
				/>
			</article>
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
