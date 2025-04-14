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
	<div class="mx-auto max-w-6xl px-6">
		<h2 class="mb-4 text-center text-3xl font-bold md:text-4xl bg-gradient-to-r from-sky-300 to-sky-500 bg-clip-text text-transparent pb-1">Experience</h2>
		<p class="text-center text-lg text-gray-400 mb-16">My professional journey and key contributions.</p>
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 transition-opacity duration-1000 {isInView ? 'opacity-100' : 'opacity-0'}">
			{#each experiences as experience}
				<ExperienceCard {experience} />
			{/each}
		</div>
	</div>
</section>
