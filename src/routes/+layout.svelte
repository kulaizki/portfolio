<script lang="ts">
	import '../app.css';
	import 'lenis/dist/lenis.css';
	import Lenis from 'lenis';
	import { onMount, onDestroy } from 'svelte';
	
	let { children } = $props();
	let lenisInstance: Lenis | null = null;
	let rafId: number | null = null;
	
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
		<div class="bg-gray-900/40 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 flex items-center justify-between shadow-lg">
			<a href="#top" class="block w-8 h-8 transition-transform hover:scale-110 duration-300">
				<img src="/images/favicon.png" alt="Fitzsixto" class="w-full h-full" />
			</a>
			
			<div class="hidden md:flex items-center gap-8">
				<a href="#experience" class="text-sm text-gray-300 hover:text-white transition-colors">Experience</a>
				<a href="#projects" class="text-sm text-gray-300 hover:text-white transition-colors">Projects</a>
				<a href="#skills" class="text-sm text-gray-300 hover:text-white transition-colors">Skills</a>
				<a href="#contact" class="px-4 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">Contact</a>
			</div>
		</div>
	</div>
</nav>

<main class="relative z-10">
	{@render children()}
</main>

<style global>
	@media (pointer: fine) {
		
	}
</style>