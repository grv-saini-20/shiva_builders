<script>
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { goto } from '$app/navigation';

	let isOpen = false;
	let activeSubmenu = null;

	const menuItems = [
		{
			name: 'About',
			href: '/about',
			subOptions: [
				{ name: 'Company', href: '/about' },
				{ name: 'Ethos', href: '/ethos' },
				{ name: 'Why Choose Us', href: '/whychooseus' },
				{ name: 'CSR', href: '/csr' },
				{ name: 'Leadership', href: '/leadership' },
				{ name: 'Our Team', href: '/our-team' }
			]
		},
		{
			name: 'Services',
			href: '/services',
			subOptions: [
				{ name: 'Infrastructure Development', href: '/services' },
				{ name: 'Design and Build', href: '/services' },
				{ name: 'Joint Venture Model', href: '/services' }
			]
		},
		{
			name: 'Industries',
			href: '/industries',
			subOptions: [
				{ name: 'Commercial', href: '/industries#Commercial' },
				{ name: 'Residential', href: '/industries#Residential' },
				{ name: 'Hospitality', href: '/industries#Hospitality Sector' },
				{ name: 'Education', href: '/industries#Education Sector' },
				{ name: 'Healthcare', href: '/industries#Healthcare' },
				{ name: 'Retail Spaces', href: '/industries#Retail Spaces' },
				{ name: 'IT Sector', href: '/industries#IT Sector' }
			]
		},
		{
			name: 'Projects',
			href: '/projects'
		},
		{
			name: 'Infrastructure',
			href: '/infrastructure'
		},
		{
			name: 'Careers',
			href: '/careers'
		},
		{ name: 'Contact', href: '/contact', subOptions: null }
	];

	function toggleSubmenu(name) {
		activeSubmenu = activeSubmenu === name ? null : name;
	}

	function closeAll() {
		isOpen = false;
		activeSubmenu = null;
	}

	// Mobile: when user taps the left label
	async function handleMobileTopClick(item) {
		// if no subOptions -> navigate immediately
		if (!item.subOptions) {
			closeAll();
			await goto(item.href);
			return;
		}

		// if submenu is closed -> open it (do not navigate)
		if (activeSubmenu !== item.name) {
			activeSubmenu = item.name;
			return;
		}

		// if submenu already open -> navigate to the parent page
		closeAll();
		await goto(item.href);
	}
</script>

<nav class="fixed top-0 z-50 w-full bg-white shadow-md">
	<div class="mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<!-- Logo -->
			<div class="flex items-center">
				<a href="/" class="text-xl font-bold text-gray-900">
    <img src="/images/SBLOGO.jpg" alt="logo" class="h-9 w-auto" />
				</a>
			</div>

			<!-- Desktop Menu -->
			<div class="hidden items-center space-x-8 md:flex">
				{#each menuItems as item}
					<div class="group relative">
						<!-- Parent link is clickable -->
						<a
							href={item.href}
							class="flex items-center font-medium text-gray-900 transition-colors duration-300 hover:text-yellow-500"
						>
							{item.name}
							{#if item.subOptions}
								<svg
									class="ml-1 h-4 w-4 transition-transform group-hover:rotate-180"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M19 9l-7 7-7-7"
									></path>
								</svg>
							{/if}
						</a>

						{#if item.subOptions}
							<!-- submenu shows on hover and stays while hovering submenu -->
							<div
								class="invisible absolute left-0 z-50 mt-2 w-56 bg-white opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100"
							>
								{#each item.subOptions as subItem}
									<a
										href={subItem.href}
										class="block px-4 py-3 font-medium text-gray-900 transition-colors hover:bg-yellow-50 hover:text-yellow-500"
									>
										{subItem.name}
									</a>
								{/each}
							</div>
						{/if}
					</div>
				{/each}
			</div>

			<!-- Mobile Hamburger -->
			<div class="flex items-center md:hidden">
				<button
					onclick={() => (isOpen = !isOpen)}
					class="rounded-md p-2 hover:bg-gray-100 focus:outline-none"
				>
					{#if isOpen}
						<svg
							class="h-6 w-6 text-gray-900"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					{:else}
						<svg
							class="h-6 w-6 text-gray-900"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					{/if}
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile Menu -->
	{#if isOpen}
		<div
			class="z-40 bg-white shadow-md md:hidden"
			transition:fly={{ y: -10, duration: 200, easing: cubicOut }}
		>
			<div class="space-y-1 px-2 pt-2 pb-3">
				{#each menuItems as item}
					<div>
						{#if item.subOptions}
							<!-- Row with label (left) and chevron (right). Label handles open/navigate logic -->
							<div class="flex items-center justify-between">
								<button
									onclick={() => handleMobileTopClick(item)}
									class="flex-1 rounded-md px-3 py-2 text-left font-medium text-gray-900 hover:bg-yellow-50 hover:text-yellow-600"
								>
									{item.name}
								</button>

								<button
									onclick={(e) => {
										e.stopPropagation();
										toggleSubmenu(item.name);
									}}
									aria-expanded={activeSubmenu === item.name}
									class="rounded-md p-2 hover:bg-gray-100"
									aria-label="Toggle submenu"
								>
									<svg
										class="h-4 w-4 text-gray-700 transition-transform"
										class:rotate-180={activeSubmenu === item.name}
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M19 9l-7 7-7-7"
										></path>
									</svg>
								</button>
							</div>

							{#if activeSubmenu === item.name}
								<div class="py-1 pl-4">
									{#each item.subOptions as subItem}
										<a
											href={subItem.href}
											onclick={() => {
												closeAll();
												goto(subItem.href);
											}}
											class="block rounded-md px-3 py-2 font-medium text-gray-900 transition-colors hover:bg-yellow-50 hover:text-yellow-600"
										>
											{subItem.name}
										</a>
									{/each}
								</div>
							{/if}
						{:else}
							<a
								href={item.href}
								onclick={() => {
									closeAll();
									goto(item.href);
								}}
								class="block rounded-md px-3 py-2 font-medium text-gray-900 transition-colors hover:bg-yellow-50 hover:text-yellow-600"
							>
								{item.name}
							</a>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	{/if}
</nav>

<style>
	/* small helper so rotated class works nicely */
	.rotate-180 {
		transform: rotate(180deg);
	}
</style>
