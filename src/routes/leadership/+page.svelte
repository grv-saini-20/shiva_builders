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
<section class="relative flex min-h-[70vh] flex-col items-center justify-center px-6 py-24 overflow-hidden">
  <div class="absolute inset-0 lg:bg-fixed bg-[url(/images/DWC1.jpg)] bg-cover bg-center"></div>
  <div class="absolute inset-0 bg-black/50"></div>

  <div class="relative z-10 text-center max-w-3xl">
    <h1 use:inView class="reveal text-4xl sm:text-5xl md:text-6xl font-extrabold text-yellow-500 uppercase leading-snug sm:leading-tight md:leading-tight px-2">
      Leadership
    </h1>
    <p use:inView class="reveal mt-6 text-lg text-gray-200 sm:text-xl uppercase">
      At Shiva Builders, our success is driven by the passion, expertise, and vision of our leadership team.
    </p>
  </div>
</section>

<!-- LEADERSHIP TIMELINE -->
<section class="relative bg-gray-100 px-6 py-24 max-w-5xl mx-auto">
  <!-- Timeline for desktop only -->
  <div class="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-yellow-200/50 transform -translate-x-1/2"></div>

  <!-- Leader 1 -->
  <div class="relative mb-24 flex flex-col items-center text-center md:flex-row md:justify-between md:text-left">
    <div class="md:w-1/2 md:pr-12">
      <h2 use:inView class="reveal text-2xl font-bold text-gray-900">MR. DEEPAK WADHAWAN</h2>
      <p use:inView class="reveal text-yellow-500 font-semibold mb-4">DIRECTOR</p>
      <p use:inView class="reveal text-gray-600 leading-relaxed mb-2">
Mr. Deepak Wadhawan is the visionary leader of Shiva Builders having experience of more than 35 years overseeing end-to-end delivery of commercial and residential projects with a focus on safety, quality and schedule certainty. He is the one who drives strategic growth, builds high-performing teams, and fosters strong client and subcontractor partnerships.      </p>
      <p use:inView class="reveal text-gray-600 leading-relaxed my-4">
Under his Leadership, the company has delivered complex builds on time and within budget, implemented rigorous QA/QC and safety programs, and expanded into new markets while maintaining a reputation for integrity and craftsmanship.      </p>
<p use:inView class="reveal text-gray-600 leading-relaxed">
Known for transparent communication and disciplined project controls, he ensures every project meets client goals—on time, on budget, and to spec.</p>
    </div>
    <div class="w-6 h-6 bg-yellow-500 rounded-full shadow-lg mt-8 md:absolute md:top-0 md:left-1/2 md:-translate-x-1/2"></div>
  </div>

  <!-- Leader 2 -->
<div class="relative flex flex-col items-center text-center md:flex-row-reverse md:justify-between md:text-left">
    <div class="md:w-1/2 md:pl-12">
      <h2 use:inView class="reveal text-2xl font-bold text-gray-900">MR. MUKUL WADHAWAN</h2>
      <p use:inView class="reveal text-yellow-500 font-semibold mb-4">DIRECTOR</p>
      <p use:inView class="reveal text-gray-600 leading-relaxed mb-2">
        Mr. Mukul Wadhawan, our dynamic Leader, propels building company's strategic growth. With extensive expertise in Construction, he leads key decisions, fosters a positive workplace culture, and guides us toward our business objectives and Company’s Long term goals and initiatives.
      </p>
      <p use:inView class="reveal text-gray-600 leading-relaxed my-4">
As a seasoned professional in the field, Mr. Mukul embodies an entrepreneurial spirit, leveraging his deep industry knowledge to chart our company's course and translate vision into action.
      </p>
      <p use:inView class="reveal text-gray-600 leading-relaxed mb-2">
In his diverse role, Mr. Mukul oversees operations, collaborating with the leadership team to execute strategies, forge partnerships, and identify market opportunities. By cultivating strong relationships with clients, investors, and stakeholders, Mr. Mukul ensures our company's enduring success.
      </p>
    </div>
    <div class="w-6 h-6 bg-yellow-500 rounded-full shadow-lg mt-8 md:absolute md:top-0 md:left-1/2 md:-translate-x-1/2"></div>
  </div>

  <!-- Leader 3 -->
  <div class="relative flex flex-col items-center text-center md:flex-row md:justify-between md:text-left">
    <div class="md:w-1/2 md:pr-12">
      <h2 use:inView class="reveal text-2xl font-bold text-gray-900">MR. SHREY Wadhawan</h2>
      <p use:inView class="reveal text-yellow-500 font-semibold mb-4">EXECUTIVE DIRECTOR</p>
      <p use:inView class="reveal text-gray-600 leading-relaxed mb-2">
At just 23 years old, Shrey Wadhawan is already making rapid growth in the
construction industry with sharp focus on sustainable and modern infrastructure.
With passion for innovation, Shrey has a big vision to revolutionize urban
development using eco-friendly materials and smart building technologies.
      </p>
      <p use:inView class="reveal text-gray-600 leading-relaxed my-4">
Shrey’s hands-on approach, forward-thinking mindset, and ability to connect with both clients and workers on the ground have earned him respect far beyond his years.
      </p>
      <p use:inView class="reveal text-gray-600 leading-relaxed mb-2">
Driven, focused, and unafraid to challenge outdated industry norms, Shrey represents the new generation of construction leaders—proving that age is no barrier when vision meets action.
      </p>
    </div>
    <div class="w-6 h-6 bg-yellow-500 rounded-full shadow-lg mt-8 md:absolute md:top-0 md:left-1/2 md:-translate-x-1/2"></div>
  </div>
</section>


<style>
  .reveal {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease-out;
  }
</style>
