<script lang="ts">
	import '../app.css';
	import 'lenis/dist/lenis.css';
	import Lenis from 'lenis';
	import { onMount, onDestroy } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	
	let { children } = $props();
	let lenisInstance: Lenis | null = null;
	let rafId: number | null = null;
	let isMenuOpen = $state(false);
	
	onMount(() => {
		// Initialize Lenis
		lenisInstance = new Lenis({
			duration: 1.2, // Smooth scroll duration
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
			orientation: 'vertical', // Scroll orientation
			gestureOrientation: 'vertical', // Gesture orientation
			smoothWheel: true, // Enable smooth wheel scrolling
			wheelMultiplier: 1, // Wheel scroll multiplier
			touchMultiplier: 2, // Touch scroll multiplier
			autoResize: true, // Auto resize on window resize
			// Prevent Lenis on specific elements (e.g., modals, dropdowns)
			prevent: (node) => {
				return node.hasAttribute('data-lenis-prevent') || 
				       node.closest('[data-lenis-prevent]') !== null;
			},
		});
		
		// Animation frame update
		function raf(time: number) {
			lenisInstance?.raf(time);
			rafId = requestAnimationFrame(raf);
		}
		
		rafId = requestAnimationFrame(raf);
		
		// Handle anchor links
		const handleAnchorClick = (e: MouseEvent) => {
			const target = e.target as HTMLElement;
			const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement;
			
			if (anchor && lenisInstance) {
				e.preventDefault();
				const targetId = anchor.getAttribute('href');
				if (targetId) {
					lenisInstance.scrollTo(targetId, {
						offset: -100, // Offset for fixed headers
						duration: 1.5,
					});
				}
			}
		};
		
		document.addEventListener('click', handleAnchorClick);
		
		return () => {
			document.removeEventListener('click', handleAnchorClick);
		};
	});
	
	onDestroy(() => {
		// Clean up Lenis instance
		if (rafId !== null) {
			cancelAnimationFrame(rafId);
		}
		lenisInstance?.destroy();
		lenisInstance = null;
	});
</script>

<svelte:head>
	<title>Fitzsixto</title>
	<meta name="description" content="Explore Fitz's portfolio featuring expertise in multiple skills." />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta charset="UTF-8" />
	<link rel="icon" href="/images/favicon.png" />
</svelte:head>

<nav class="fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300">
	<div class="max-w-7xl mx-auto">
		<div class="bg-gray-900/40 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 flex items-center justify-between shadow-lg relative z-50">
			<a href="#top" class="block w-8 h-8 transition-transform hover:scale-110 duration-300" onclick={() => isMenuOpen = false}>
				<img src="/images/favicon.png" alt="Fitzsixto" class="w-full h-full" />
			</a>
			
			<!-- Desktop Menu -->
			<div class="hidden md:flex items-center gap-8">
				<a href="#experience" class="text-sm text-gray-300 hover:text-white transition-colors">Experience</a>
				<a href="#projects" class="text-sm text-gray-300 hover:text-white transition-colors">Projects</a>
				<a href="#skills" class="text-sm text-gray-300 hover:text-white transition-colors">Skills</a>
				<a href="#contact" class="px-4 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">Contact</a>
			</div>

			<!-- Mobile Hamburger Button -->
			<button 
				class="md:hidden text-white focus:outline-none" 
				onclick={() => isMenuOpen = !isMenuOpen}
				aria-label="Toggle menu"
			>
				<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					{#if isMenuOpen}
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
					{:else}
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
					{/if}
				</svg>
			</button>
		</div>

		<!-- Mobile Menu Overlay -->
		{#if isMenuOpen}
			<div 
				class="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 md:hidden"
				onclick={() => isMenuOpen = false}
				role="button"
				tabindex="0"
				onkeydown={(e) => e.key === 'Enter' && (isMenuOpen = false)}
				transition:fade={{ duration: 300 }}
			>
				<div class="flex flex-col items-center gap-8" in:fly={{ y: 20, duration: 400, delay: 150 }} out:fly={{ y: 20, duration: 200 }}>
					<a href="#experience" class="text-3xl text-gray-300 hover:text-white transition-colors font-light tracking-wide">Experience</a>
					<a href="#projects" class="text-3xl text-gray-300 hover:text-white transition-colors font-light tracking-wide">Projects</a>
					<a href="#skills" class="text-3xl text-gray-300 hover:text-white transition-colors font-light tracking-wide">Skills</a>
					<a href="#contact" class="px-8 py-3 bg-white text-black rounded-full text-xl font-medium hover:bg-gray-200 transition-colors mt-4">Contact</a>
				</div>
			</div>
		{/if}
	</div>
</nav>

<main class="relative z-10">
	{@render children()}
</main>

<style global>
	@media (pointer: fine) {
		
	}
</style>