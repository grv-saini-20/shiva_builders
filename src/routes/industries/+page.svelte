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

	const industries = [
		{
			title: 'Commercial',
			description: `In the commercial sector, Shiva Builders delivers a streamlined approach by establishing a single contract to provide comprehensive design, architectural, engineering, and construction services. This method ensures clear accountability for quality, cost efficiency, and adherence to project timelines. Our collaborative teams assess alternative materials and methods to optimize performance and reduce costs effectively. By leveraging continuous value engineering and construction expertise, we enable businesses to achieve their goals while saving valuable time and resources.`,
			image: '/images/Commercial.jpg'
		},
		{
			title: 'Residential',
			description: `In the residential sector, Shiva Builders adopts a holistic approach by providing a single contract for comprehensive design, architectural, engineering, and construction services. This ensures a unified point of responsibility for quality, cost management, and timely delivery. Our dedicated teams evaluate alternative materials and methods to enhance efficiency and accuracy in every project. Through continuous value engineering and construction expertise, we empower homeowners to realize their visions while saving time and reducing costs. Choose Shiva Builders to transform your residential dreams into reality with exceptional quality and craftsmanship.`,
			image: '/images/Resedential.jpg'
		},
		{
			title: 'Hospitality Sector',
			description: `Shiva Builders simplifies the design and construction process in the hospitality sector by establishing a single contract with the owner. This approach provides a unified responsibility for quality, cost management, and timeline adherence. Our integrated teams evaluate alternative materials and methods to enhance efficiency and accuracy. Through continuous value engineering and construction expertise, we deliver significant cost and time savings, transforming your hospitality vision into reality.`,
			image: '/images/Hotel.jpg'
		},
		{
			title: 'Education Sector',
			description: `In the educational sector, Shiva Builders simplifies the entire process by offering a single contract for design, architectural, engineering, and construction services. This ensures streamlined responsibility for quality, cost control, and schedule adherence. Our integrated planning and execution teams evaluate materials and methods to deliver efficient, accurate solutions. With continuous value engineering and construction expertise, we help educational institutions save both time and money, while ensuring projects meet their vision and operational needs.`,
			image: '/images/School.jpg'
		},
		{
			title: 'Healthcare',
			description: `In the hospital sector, Shiva Builders offers a comprehensive approach by establishing a single contract for design, architectural, engineering, and construction services. This ensures a centralized responsibility for quality, cost efficiency, and adherence to strict timelines. Our specialized teams assess alternative materials and methods to enhance operational efficiency and meet the unique demands of healthcare facilities. Through continuous value engineering and construction expertise, we help hospitals optimize their resources, ensuring patient-centric environments while saving time and reducing costs. Partner with Shiva Builders to create state-of-the-art healthcare facilities that prioritize patient care and operational excellence.`,
			image: '/images/Hospital.jpg'
		},
		{
			title: 'Retail Spaces',
			description: `In the office spaces sector, Shiva Builders adopts a comprehensive approach by offering a single contract for design, architectural, engineering, and construction services. This method ensures a unified point of responsibility for quality, cost management, and timely project delivery. Our expert teams evaluate alternative materials and methods to enhance efficiency and functionality in modern work environments. Through continuous value engineering and construction expertise, we empower businesses to create productive office spaces that align with their goals while saving time and resources. Choose Shiva Builders to transform your office vision into a reality, fostering collaboration and innovation in every workspace.`,
			image: '/images/OfficeSpaces.jpeg'
		},
		{
			title: 'IT Sector',
			description: `In the IT sector, Shiva Builders provides a holistic approach by establishing a single contract for design, architectural, engineering, and construction services. This ensures streamlined accountability for quality, cost efficiency, and adherence to tight project timelines. Our specialized teams evaluate alternative materials and methods to create innovative and flexible workspaces that cater to the dynamic needs of IT companies. Through continuous value engineering and construction expertise, we help organizations optimize their environments for productivity and collaboration while effectively managing time and costs.`,
			image: '/images/IT.png'
		}
	];
</script>

<!-- HERO -->
<section
	class="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-6 py-20"
>
	<div class="absolute inset-0 bg-[url(/images/DWC1.jpg)] bg-cover bg-center lg:bg-fixed"></div>
	<div class="absolute inset-0 bg-black/50"></div>

	<div class="relative z-10 max-w-3xl text-center">
		<h1
			use:inView
			class="reveal px-2 text-4xl leading-snug font-extrabold text-yellow-500 uppercase sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight"
		>
			Industries
		</h1>
		<p use:inView class="reveal mt-6 text-lg text-gray-200 uppercase sm:text-xl">
			Delivering excellence across sectors through innovation, quality, and expertise.
		</p>
	</div>
</section>

<!-- INDUSTRIES CARDS -->
<section class="bg-gray-50 px-6 py-24">
	<div class="mx-auto max-w-6xl space-y-20">
		{#each industries as industry, i}
			<div
				id={industry.title}
				class="reveal group relative flex flex-col items-center overflow-hidden bg-white shadow-lg transition-shadow duration-500 hover:shadow-2xl md:flex-row md:items-stretch"
				class:md:flex-row-reverse={i % 2 !== 0}
				use:inView
			>
				<!-- IMAGE -->
				<div class="overflow-hidden md:w-1/2">
					<img
						src={industry.image}
						alt={industry.title}
						class="aspect-video h-64 w-full transform object-cover transition-transform duration-700 group-hover:scale-105 md:h-full"
					/>
				</div>

				<!-- TEXT -->
				<div class="flex flex-col justify-center p-8 md:w-1/2">
					<h3
						class="mb-4 border-l-4 border-yellow-500 pl-3 text-2xl font-bold text-gray-900 uppercase"
					>
						{industry.title}
					</h3>
					<p class="leading-relaxed text-gray-700">{industry.description}</p>
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
