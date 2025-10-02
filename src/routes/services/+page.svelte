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

  const services = [
    {
      title: 'Infrastructure Development',
      content: `DWC provides experienced and knowledgeable professionals to handle all phases of the project. As a General Contractor, we handle all types and sizes of projects, from fresh constructions to renovations. Workers and qualified sub-contractors deliver your project on-time with the highest degree of safety and quality.`,
      image: '/images/InfrastructureDev.jpg'
    },
    {
      title: 'Design and Build',
      content: `DWC establishes a single contract with the owner to provide full spectrum design, architectural, engineering, and construction services. Single point responsibility ensures quality, cost, and schedule adherence. Planning and execution evaluate materials and methods efficiently, saving time and money.`,
      image: '/images/Design&Build.png'
    },
    {
      title: 'Joint Venture Model',
      content: `DWC Infra’s joint venture services bring together industry expertise, advanced technology, and shared resources to deliver superior infrastructure solutions. Partnering with leading firms maximizes efficiency, reduces costs, and drives innovation.`,
      image: '/images/JVM.jpg'
    }
  ];
</script>

<!-- HERO SECTION -->
<section class="relative flex min-h-[70vh] flex-col items-center justify-center px-6 py-20 overflow-hidden">
  <div class="absolute inset-0 bg-[url('/images/DWC1.jpg')] bg-cover bg-center lg:bg-fixed"></div>
  <div class="absolute inset-0 bg-black/50"></div>
  <div class="relative z-10 text-center max-w-3xl">
    <h1 use:inView class="reveal text-4xl sm:text-5xl md:text-6xl font-extrabold text-yellow-500 uppercase leading-snug sm:leading-tight md:leading-tight px-2">
      Our Services
    </h1>
    <p use:inView class="reveal mt-6 text-lg text-gray-200 sm:text-xl uppercase">
      Delivering excellence through innovation, safety, and reliability across all projects.
    </p>
  </div>
</section>

<!-- SERVICES SECTIONS -->
<section class="bg-white px-6 py-24 max-w-6xl mx-auto">
  {#each services as service, i}
    <div
      class="relative flex flex-col md:flex-row items-center md:justify-between mb-24"
      class:md:flex-row-reverse={i % 2 !== 0}
    >
      <!-- IMAGE -->
      <div class="md:w-1/2 flex justify-center md:justify-start reveal" use:inView>
        <img src={service.image} alt={service.title} class="shadow-lg w-full md:w-[90%] object-cover aspect-video" />
      </div>

      <!-- TEXT -->
      <div class="md:w-1/2 mt-8 md:mt-0 reveal" use:inView>
        <h3 class="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-yellow-500 ps-4 uppercase">{service.title}</h3>
        <p class="text-gray-700 leading-relaxed">{service.content}</p>
      </div>
    </div>
  {/each}
</section>

<style>
  .reveal {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease-out;
  }
</style>
