<script lang="ts">
	import { Button } from '$lib/ui';
	import {
		Globe02FreeIcons,
		Location01FreeIcons,
		Mail01FreeIcons,
		TelephoneFreeIcons
	} from '@hugeicons/core-free-icons';
	import { HugeiconsIcon } from '@hugeicons/svelte';

	let name = $state('');
	let email = $state('');
	let message = $state('');

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
		const subject = encodeURIComponent('Inquiry about Your Services');
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
<section
	class="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-6 py-20"
>
	<div class="absolute inset-0 bg-[url(/images/DWC1.jpg)] bg-cover bg-center lg:bg-fixed"></div>
	<div class="absolute inset-0 bg-black/60"></div>

	<div class="relative z-10 max-w-3xl text-center">
		<h1
			use:inView
			class="reveal px-2 text-4xl leading-snug font-extrabold text-yellow-500 uppercase sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight"
		>
			Contact Us
		</h1>
	</div>
</section>

<!-- Contact Info -->
<section class="bg-white px-6 py-16 text-gray-900 md:px-16">
	<div class="mx-auto flex max-w-6xl flex-wrap items-stretch justify-center gap-8 text-center">
		<!-- Location -->
		<div
			use:inView
			class="reveal flex flex-col items-center rounded-xl p-6 text-gray-900 shadow-lg transition hover:bg-yellow-500 hover:text-black"
		>
			<HugeiconsIcon icon={Location01FreeIcons} size={32} color="currentColor" strokeWidth={1.8} />
			<p class="mt-4 text-sm text-gray-900">
				373, Phase-2, Industrial Area,<br /> Panchkula-134109 (Haryana) INDIA
			</p>
		</div>

		<!-- Phone -->
		<div
			use:inView
			class="reveal flex flex-col items-center rounded-xl p-6 text-gray-900 shadow-lg transition hover:bg-yellow-500 hover:text-black"
		>
			<HugeiconsIcon icon={TelephoneFreeIcons} size={32} color="currentColor" strokeWidth={1.8} />
			<p class="mt-4 text-sm text-gray-900">9878883436, 9878883447</p>
		</div>

		<!-- Email -->
		<div
			use:inView
			class="reveal flex flex-col items-center rounded-xl p-6 text-gray-900 shadow-lg transition hover:bg-yellow-500 hover:text-black"
		>
			<HugeiconsIcon icon={Mail01FreeIcons} size={32} color="currentColor" strokeWidth={1.8} />
			<p class="mt-4 text-sm text-gray-900">mail@dwcinfra.com</p>
		</div>

		<!-- Website -->
		<div
			use:inView
			class="reveal flex flex-col items-center rounded-xl p-6 text-gray-900 shadow-lg transition hover:bg-yellow-500 hover:text-black"
		>
			<HugeiconsIcon icon={Globe02FreeIcons} size={32} color="currentColor" strokeWidth={1.8} />
			<p class="mt-4 text-sm text-gray-900">www.dwcinfra.com</p>
		</div>
	</div>
</section>

<!-- Contact Form -->
<section class="bg-white px-6 py-16 md:px-16">
	<div use:inView class="reveal mx-auto max-w-3xl rounded-xl bg-gray-50 p-8 shadow-lg">
		<h3 class="text-center text-2xl font-bold text-black">We are just a message away!</h3>
		<div class="mt-8 space-y-6">
			<input
				type="text"
				bind:value={name}
				placeholder="Name"
				class="w-full rounded-lg border border-gray-300 bg-gray-100 px-4 py-3 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
			/>
			<br />
			<br />
			<input
				type="email"
				bind:value={email}
				placeholder="Email"
				class="w-full rounded-lg border border-gray-300 bg-gray-100 px-4 py-3 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
			/>
			<br />
			<br />
			<textarea
				bind:value={message}
				placeholder="Enter your message"
				rows="4"
				class="w-full rounded-lg border border-gray-300 bg-gray-100 px-4 py-3 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
			></textarea>
			<br />
			<br />
			<Button handleClick={sendMail}>Send Message</Button>
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
