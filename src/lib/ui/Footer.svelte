<script lang="ts">
	import {
		Building01FreeIcons,
		Call02FreeIcons,
		Mail01FreeIcons
	} from '@hugeicons/core-free-icons';
	import { HugeiconsIcon } from '@hugeicons/svelte';
</script>

<!-- Main Footer Container -->
<footer class="bg-gray-800 font-inter text-white">
	<div class="mx-auto max-w-7xl px-4 py-16 md:py-20">
		<!-- Top Section: Logo, Services, Contact -->
		<div class="grid grid-cols-1 gap-12 border-b border-gray-700 pb-12 md:grid-cols-3">
			<!-- Column 1: Logo and Brand Info -->
			<div class="flex flex-col space-y-4 md:col-span-1">
				<div class="flex items-center space-x-2">
					<!-- Logo (Using Lucide Icon for a clean, vector look) -->
					<HugeiconsIcon
						icon={Building01FreeIcons}
						size={32}
						color="currentColor"
						strokeWidth={1.5}
					/>
					<div>
						<h3 class="text-xl font-bold tracking-wider uppercase">Shiva Builders</h3>
						<p class="text-xs text-gray-400">Construction & Design Services</p>
					</div>
				</div>
				<!-- Optional: Add a short, descriptive blurb here if needed -->
			</div>

			<!-- Column 2: Our Services Links -->
			<div class="md:col-span-1">
				<h4 class="relative mb-4 inline-block text-lg font-semibold text-white uppercase">
					Pages
					<!-- Yellow underline aesthetic -->
					<span class="absolute bottom-[-5px] left-0 h-[2px] w-1/3 bg-yellow-500"></span>
				</h4>
				<ul class="grid grid-cols-2 space-y-2 text-sm text-gray-400">
					<li>
						<a href="/about" class="transition-colors hover:text-yellow-500">About</a>
					</li>
					<li><a href="/services" class="transition-colors hover:text-yellow-500">Services</a></li>
					<li>
						<a href="/industries" class="transition-colors hover:text-yellow-500">Industries</a>
					</li>
					<li>
						<a href="/projects" class="transition-colors hover:text-yellow-500">Projects</a>
					</li>
					<li>
						<a href="/infrastructure" class="transition-colors hover:text-yellow-500"
							>Infrastructure</a
						>
					</li>
					<li>
						<a href="/careers" class="transition-colors hover:text-yellow-500">Careers</a>
					</li>
					<li>
						<a href="/contact" class="transition-colors hover:text-yellow-500">Contact</a>
					</li>
				</ul>
			</div>

			<!-- Column 3: Contact Info -->
			<div class="md:col-span-1">
				<h4 class="relative mb-4 inline-block text-lg font-semibold text-white uppercase">
					CONTACT US
					<!-- Yellow underline aesthetic -->
					<span class="absolute bottom-[-5px] left-0 h-[2px] w-1/3 bg-yellow-500"></span>
				</h4>
				<ul class="space-y-4 text-sm text-gray-400">
					<li class="flex items-start space-x-3">
						<HugeiconsIcon
							icon={Call02FreeIcons}
							size={24}
							color="currentColor"
							strokeWidth={1.5}
						/>
						<span class="font-medium">Phone: 9878883436, 9878883447</span>
					</li>
					<li class="flex items-start space-x-3">
						<HugeiconsIcon
							icon={Building01FreeIcons}
							size={32}
							color="currentColor"
							strokeWidth={1.5}
						/> <span>Address: 373, Phase-2, Indusrial Area, Panchkula 134109, Haryana (INDIA)</span>
					</li>
					<li class="flex items-start space-x-3">
						<HugeiconsIcon
							icon={Mail01FreeIcons}
							size={24}
							color="currentColor"
							strokeWidth={1.5}
						/>
						<span
							>Email: <a
								href="mailto:contact@yoursite.com"
								class="transition-colors hover:text-yellow-500">mail@shivabuilders.com</a
							></span
						>
					</li>
				</ul>
			</div>
		</div>

		<!-- Bottom Section: Copyright Bar -->
		<div class="flex flex-col items-center justify-between space-y-4 pt-8 md:flex-row md:space-y-0">
			<div class="text-center text-sm text-gray-400 md:text-left">
				© {new Date().getFullYear()} ShivaBuilders. All rights reserved.
			</div>
			<div class="flex space-x-6">
				<a
					href="/privacy-policy"
					class="text-sm text-gray-400 transition-colors hover:text-yellow-500">Privacy Policy</a
				>
				<a href="/terms" class="text-sm text-gray-400 transition-colors hover:text-yellow-500"
					>Terms of Service</a
				>
				<a href="/legal" class="text-sm text-gray-400 transition-colors hover:text-yellow-500"
					>Legal</a
				>
			</div>
		</div>
	</div>
</footer>
