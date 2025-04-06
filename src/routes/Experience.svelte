<script lang="ts">
	import ExperienceCard from '$lib/components/ExperienceCard.svelte';
	import { experiences } from '$lib/constants'; // Import data
	export let className: string = '';
	import { cubicOut } from 'svelte/easing';
	import { inview } from 'svelte-inview';
	let isInView = false;
	let hasAnimated = false;

	function blurFly(node: HTMLElement, params: { 
    delay?: number, 
    duration?: number, 
    easing?: (t: number) => number 
  } = {}): { 
    delay: number, 
    duration: number, 
    easing: (t: number) => number, 
    css: (t: number) => string 
  } {
    const existingTransform = getComputedStyle(node).transform.replace('none', '');
    return {
      delay: params.delay || 0,
      duration: params.duration || 1000,
      easing: params.easing || cubicOut,
      css: (t: number) => `
        transform: ${existingTransform} translateY(${(1 - t) * 100}px);
        opacity: ${t};
        filter: blur(${(1 - t) * 10}px);
      `
    };
  }
</script>

<section
	id="experience"
	class="py-20 text-gray-100 {className}"
	use:inview={{ threshold: 0.3 }}
	on:inview_change={(event) => {
    if (!hasAnimated) {
      isInView = event.detail.inView;
      if (isInView) hasAnimated = true;
    }
	}}
>
	{#if isInView}
		<div 
			class="mx-auto max-w-6xl px-6" 
			transition:blurFly
		>
			<h2 class="mb-16 text-center text-3xl font-bold md:text-4xl">Experience</h2>
			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each experiences as experience}
					<ExperienceCard {experience} />
				{/each}
			</div>
		</div>
	{/if}
</section>
