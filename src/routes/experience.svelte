<script lang="ts">
	import ExperienceCard from '$lib/components/experience-card.svelte';
	import { experiences } from '$lib/constants';
	export let className: string = '';
	import { inview } from 'svelte-inview';
	let isInView = false;
	let hasAnimated = false;
</script>

<section
	id="experience"
	class="py-20 text-gray-100 {className}"
	use:inview={{ threshold: 0.1, unobserveOnEnter: true }}
	on:inview_change={(event) => {
		if (event.detail.inView && !hasAnimated) {
			isInView = true;
			hasAnimated = true;
		}
	}}
>
	<div class="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-3 gap-16"> 
		<div class="md:col-span-1">
			<h2 class="text-3xl font-bold md:text-4xl bg-gradient-to-r from-sky-300 to-sky-500 bg-clip-text text-transparent pb-1 mb-4">
				Experience
			</h2>
			<p class="text-lg text-gray-400">
				My professional journey and key contributions.
			</p>
		</div>

		<div 
			class="md:col-span-2 relative border-s border-gray-700 transition-opacity duration-1000 {isInView ? 'opacity-100' : 'opacity-0'}"
		>
			<ol class="ms-0"> 
				{#each experiences as experience (experience.company + experience.title)}
					<ExperienceCard {experience} /> 
				{/each}
			</ol>
		</div>
	</div>
</section>
