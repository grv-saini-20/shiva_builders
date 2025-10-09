<script lang="ts">
	import {
		Building01FreeIcons,
		Call02FreeIcons,
		Mail01FreeIcons
	} from '@hugeicons/core-free-icons';
	import { HugeiconsIcon } from '@hugeicons/svelte';
</script>

<!-- Main Footer Container -->
<footer class="bg-white font-inter text-gray-900">
	<div class="mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
		<!-- Top Section: Logo, Services, Contact -->
		<div class="grid grid-cols-1 gap-12 border-b border-gray-200 pb-12 md:grid-cols-3">
			<!-- Column 1: Logo and Brand Info -->
			<div class="flex flex-col space-y-4 md:col-span-1">
				<div class="flex items-center space-x-2">
					<a href="/" class="text-xl font-bold text-gray-900">
    <img src="/images/SBLOGO.jpg" alt="logo" class="h-8 w-auto" />
				</a>
				</div>
			</div>

			<!-- Column 2: Our Services Links -->
			<div class="md:col-span-1">
				<h4 class="relative mb-4 inline-block text-lg font-semibold text-gray-900 uppercase">
					Pages
					<span class="absolute bottom-[-5px] left-0 h-[2px] w-1/3 bg-brand-500"></span>
				</h4>
				<ul class="grid grid-cols-2 space-y-2 text-sm text-gray-900">
					<li><a href="/about" class="transition-colors hover:text-brand-500">About</a></li>
					<li><a href="/services" class="transition-colors hover:text-brand-500">Services</a></li>
					<li><a href="/industries" class="transition-colors hover:text-brand-500">Industries</a></li>
					<li><a href="/projects" class="transition-colors hover:text-brand-500">Projects</a></li>
					<li><a href="/infrastructure" class="transition-colors hover:text-brand-500">Infrastructure</a></li>
					<li><a href="/careers" class="transition-colors hover:text-brand-500">Careers</a></li>
					<li><a href="/contact" class="transition-colors hover:text-brand-500">Contact</a></li>
				</ul>
			</div>

			<!-- Column 3: Contact Info -->
			<div class="md:col-span-1">
				<h4 class="relative mb-4 inline-block text-lg font-semibold text-gray-900 uppercase">
					Contact Us
					<span class="absolute bottom-[-5px] left-0 h-[2px] w-1/3 bg-brand-500"></span>
				</h4>
				<ul class="space-y-4 text-sm text-gray-900">
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
						/>
						<span>Address: 373, Phase-2, Industrial Area, Panchkula 134109, Haryana (INDIA)</span>
					</li>
					<li class="flex items-start space-x-3">
						<HugeiconsIcon
							icon={Mail01FreeIcons}
							size={24}
							color="currentColor"
							strokeWidth={1.5}
						/>
						<span>
							Email:
							<a href="mailto:mail@shivabuilders.com" class="transition-colors hover:text-brand-500">
								mail@shivabuilders.com
							</a>
						</span>
					</li>
				</ul>
			</div>
		</div>

		<!-- Bottom Section: Copyright Bar -->
		<div class="flex flex-col items-center justify-between space-y-4 pt-8 md:flex-row md:space-y-0">
			<div class="text-center text-sm text-gray-900 md:text-left">
				© {new Date().getFullYear()} ShivaBuilders. All rights reserved.
			</div>
			<div class="flex space-x-6">
				<a href="/privacy-policy" class="text-sm text-gray-900 transition-colors hover:text-brand-500">
					Privacy Policy
				</a>
				<a href="/terms" class="text-sm text-gray-900 transition-colors hover:text-brand-500">
					Terms of Service
				</a>
				<a href="/legal" class="text-sm text-gray-900 transition-colors hover:text-brand-500">
					Legal
				</a>
			</div>
		</div>
	</div>
</footer>
