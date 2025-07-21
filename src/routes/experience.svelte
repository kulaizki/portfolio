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
	class="py-20 text-gray-100 {className}"
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
		<!-- Sticky Header Container -->
		<div class="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
			<div
				class="md:col-span-1 sticky top-5 self-start transition-all duration-700 ease-out {isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}"
				style={applyDelay ? `transition-delay: 200ms` : 'transition-delay: 0ms'}
			>
				<div class="backdrop-blur-sm bg-gray-900/80 rounded-lg p-6 -m-6">
					<h2 class="text-3xl font-bold md:text-4xl bg-gradient-to-r from-sky-300 to-sky-500 bg-clip-text text-transparent pb-1 mb-4">
						Experience
					</h2>
					<p class="text-lg text-gray-400">
						My professional journey and key contributions.
					</p>
				</div>
			</div>
			
			<!-- Experience Content -->
			<div class="md:col-span-2 relative border-s border-gray-700">
				<ol class="ms-0">
					{#each experiences as experience, i (experience.company + experience.title)}
						<ExperienceCard
							{experience}
							className="transition-all duration-700 ease-out {isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}"
							style={applyDelay ? `transition-delay: ${400 + i * 200}ms` : 'transition-delay: 0ms'}
						/>
					{/each}
				</ol>
			</div>
		</div>
	</div>
</section>
