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

<main>
	{@render children()}
</main>

<style global>
	@media (pointer: fine) {
		
	}
</style>