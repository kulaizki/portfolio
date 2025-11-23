<script lang="ts">
	import ExperienceCard from '$lib/components/experience-card.svelte';
	import { experiences } from '$lib/constants';
	import { inview } from 'svelte-inview';

	export let className: string = '';

	let isInView = false;
	let hasAnimated = false;
	let applyDelay = true;
</script>

<section
	id="experience"
	class="py-32 text-gray-100 {className}"
	use:inview={{ unobserveOnEnter: true, threshold: 0.1 }}
	on:inview_change={(event) => {
		if (event.detail.inView && !hasAnimated) {
			isInView = true;
			hasAnimated = true;
			setTimeout(() => {
				applyDelay = false;
			}, 1200);
		}
	}}
>
	<div class="mx-auto max-w-6xl px-6">
		<!-- Header -->
		<div class="mb-16">
			<div class="transition-all duration-1000 ease-out {isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}">
				<h2 class="mb-6 text-4xl font-bold text-white md:text-5xl tracking-tight">
					Experience
				</h2>
				<p class="text-xl text-gray-400 max-w-2xl font-light leading-relaxed">
					My professional journey and key contributions.
				</p>
			</div>
		</div>
		
		<!-- Experience Content -->
		<div class="max-w-4xl mx-auto relative border-s border-gray-700 ml-4 md:ml-8">
			<ol class="ms-0">
				{#each experiences as experience, i (experience.company + experience.title)}
					<ExperienceCard
						{experience}
						className="transition-all duration-700 ease-out {isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}"
						style={applyDelay ? `transition-delay: ${200 + i * 200}ms` : 'transition-delay: 0ms'}
					/>
				{/each}
			</ol>
		</div>
	</div>
</section>
