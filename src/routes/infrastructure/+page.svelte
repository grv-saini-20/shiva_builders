<script lang="ts">
  import { Button } from "$lib/ui";
  
  function inView(node: HTMLElement, { threshold = 0.2 } = {}) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.style.opacity = "1";
            node.style.transform = "translateY(0)";
          } else {
            node.style.opacity = "0";
            node.style.transform = "translateY(30px)";
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

  const infraData = [
    { num: "3", text: "Batching Plants (M30 & M1)" },
    { num: "8", text: "Transit Mixers (TM’s)" },
    { num: "4", text: "Concrete Pumps" },
    { num: "12 FTC & 6 MTC", text: "Tower Cranes" },
    { num: "10000 MT", text: "MS & Mivan Shuttering" },
    { num: "2", text: "JCB’s" },
    { num: "3", text: "Poclain’s" },
    { num: "12", text: "DG Sets (125 KVA, 64 KVA, 25 KVA)" },
    { num: "20", text: "Builder Hoists" },
    { num: "32", text: "Monkey Hoists" },
    { num: "2", text: "Man/Material Hoists" },
    { num: "40", text: "Bar Bending Machines" },
    { num: "40", text: "Bar Cutting Machines" },
    { num: "55", text: "Motors & Pumps" },
    { num: "16", text: "Concrete Mixers" },
    { num: "4", text: "Heavy Dewatering Pumps" }
  ];
</script>

<!-- Hero Section -->
<section class="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
  <div class="absolute inset-0 bg-[url(/images/DWC1.jpg)] bg-cover bg-center lg:bg-fixed"></div>
  <div class="absolute inset-0 bg-black/50"></div>
  <div class="relative z-10 text-center max-w-3xl px-6">
    <h1 use:inView class="reveal text-4xl sm:text-5xl md:text-6xl font-extrabold text-yellow-500 uppercase leading-snug sm:leading-tight md:leading-tight px-2">
      Infrastructure
    </h1>
  </div>
</section>

<!-- Infrastructure Data -->
<section class="py-16 px-6 md:px-16 bg-gray-50">
  <div class="max-w-6xl mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <!-- Left column with background -->
       <div class="relative">
         <div class="absolute inset-0 bg-[url(/images/Infra.jpg)]  bg-cover bg-center shadow-lg min-h-[500px] hidden md:block"></div>
         <div class="absolute inset-0 bg-black/50"></div>
        </div>
      
      <!-- Right column: clean list -->
      <div class="space-y-6">
        {#each infraData as item, i}
          <div 
            use:inView
            class="reveal flex items-center gap-6 border-s-[5px] border-s-yellow-500 bg-white  shadow p-6 hover:shadow-xl transition"
          >
            <div class="text-3xl font-extrabold text-gray-900 min-w-[80px]">{item.num}</div>
            <p class="text-lg font-medium text-gray-900">{item.text}</p>
          </div>
        {/each}
      </div>
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