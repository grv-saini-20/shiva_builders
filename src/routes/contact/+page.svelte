<script lang="ts">
	import { Button } from "$lib/ui";
	import { Globe02FreeIcons, Location01FreeIcons, Mail01FreeIcons, TelephoneFreeIcons } from "@hugeicons/core-free-icons";
	import { HugeiconsIcon } from "@hugeicons/svelte";

  let name = $state("");
  let email = $state("");
  let message = $state("");

  function inView(node: HTMLElement, { threshold = 0.2 } = {}) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.style.opacity = '1';
            node.style.transform = 'translateY(0)';
          } else {
            node.style.opacity = '0';
            node.style.transform = 'translateY(30px)';
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

  function sendMail() {
    const subject = encodeURIComponent("Inquiry about Your Services");
    const bodyText = `Hello,

My name is ${name}.

I would like to learn more about your services.

${message}

Thank you,
${name}`;

    const body = encodeURIComponent(bodyText);
    const mailtoLink = `mailto:mail@Shiva Builders.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  }
</script>

<!-- Hero Section -->
<section class="relative flex min-h-[70vh] flex-col items-center justify-center px-6 py-20 overflow-hidden">
  <div class="absolute inset-0 bg-[url(/images/DWC1.jpg)] lg:bg-fixed bg-cover bg-center"></div>
  <div class="absolute inset-0 bg-black/60"></div>

  <div class="relative z-10 text-center max-w-3xl">
    <h1 use:inView class="reveal text-4xl sm:text-5xl md:text-6xl font-extrabold text-yellow-500 uppercase leading-snug sm:leading-tight md:leading-tight px-2">
      Contact Us
    </h1>
  </div>
</section>

<!-- Contact Info -->
<section class="px-6 md:px-16 py-16 bg-white text-gray-900">
  <div class="flex flex-wrap  justify-center items-stretch gap-8 max-w-6xl mx-auto text-center">
    
    <!-- Location -->
    <div
      use:inView class="reveal flex flex-col items-center  text-gray-900 p-6 rounded-xl shadow-lg hover:bg-yellow-500 hover:text-black transition"
    >
      <HugeiconsIcon
        icon={Location01FreeIcons}
        size={32}
        color="currentColor"
        strokeWidth={1.8}
      />
      <p class="text-sm text-gray-900 mt-4">373, Phase-2, Industrial Area,<br> Panchkula-134109 (Haryana) INDIA</p>
    </div>

    <!-- Phone -->
    <div
      use:inView class="reveal flex flex-col items-center  text-gray-900 p-6 rounded-xl shadow-lg hover:bg-yellow-500 hover:text-black transition"
    >
      <HugeiconsIcon
        icon={TelephoneFreeIcons}
        size={32}
        color="currentColor"
        strokeWidth={1.8}
      />
      <p class="text-sm text-gray-900 mt-4">9878883436, 9878883447</p>
    </div>

    <!-- Email -->
    <div
      use:inView class="reveal flex flex-col items-center  text-gray-900 p-6 rounded-xl shadow-lg hover:bg-yellow-500 hover:text-black transition"
    >
      <HugeiconsIcon
        icon={Mail01FreeIcons}
        size={32}
        color="currentColor"
        strokeWidth={1.8}
      />
      <p class="text-sm text-gray-900 mt-4">mail@dwcinfra.com</p>
    </div>

    <!-- Website -->
    <div
      use:inView class="reveal flex flex-col items-center  text-gray-900 p-6 rounded-xl shadow-lg hover:bg-yellow-500 hover:text-black transition"
    >
      <HugeiconsIcon
        icon={Globe02FreeIcons}
        size={32}
        color="currentColor"
        strokeWidth={1.8}
      />
      <p class="text-sm text-gray-900 mt-4">www.dwcinfra.com</p>
    </div>

  </div>
</section>


<!-- Contact Form -->
<section class="py-16 px-6 md:px-16 bg-white">
  <div use:inView class="reveal max-w-3xl mx-auto bg-gray-50 rounded-xl shadow-lg p-8">
    <h3 class="text-2xl font-bold text-black text-center">
      We are just a message away!
    </h3>
    <div class="mt-8 space-y-6">
      <input
        type="text"
        bind:value={name}
        placeholder="Name"
        class="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
      />
      <br>
      <br>
      <input
        type="email"
        bind:value={email}
        placeholder="Email"
        class="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
      />
      <br>
      <br>
      <textarea
        bind:value={message}
        placeholder="Enter your message"
        rows="4"
        class="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
      ></textarea>
      <br>
      <br>
      <Button
        handleClick={sendMail}
      >
        Send Message
      </Button>
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
