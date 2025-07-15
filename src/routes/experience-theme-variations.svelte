<!-- Theme Variation 1: Neon Glow -->
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
	id="experience-neon"
	class="py-20 text-gray-100 relative {className}"
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
	<!-- Background gradient orbs -->
	<div class="absolute inset-0 overflow-hidden pointer-events-none">
		<div class="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"></div>
		<div class="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
	</div>

	<div class="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
		<div
			class="md:col-span-1 transition-all duration-700 ease-out {isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}"
			style={applyDelay ? `transition-delay: 200ms` : 'transition-delay: 0ms'}
		>
			<h2 class="text-3xl font-bold md:text-4xl mb-4 relative">
				<span class="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-400 blur-lg opacity-75"></span>
				<span class="relative bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
					Experience
				</span>
			</h2>
			<p class="text-lg text-gray-300">
				My professional journey and key contributions.
			</p>
		</div>

		<div class="md:col-span-2 relative">
			<!-- Glowing timeline line -->
			<div class="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400/50 via-purple-400/50 to-cyan-400/50"></div>
			<ol class="ms-0">
				{#each experiences as experience, i (experience.company + experience.title)}
					<li
						class="mb-10 ms-6 relative group transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-cyan-900/20 hover:to-purple-900/20 p-4 rounded-xl -m-4 border border-transparent hover:border-cyan-500/30 {isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}"
						style={applyDelay ? `transition-delay: ${400 + i * 200}ms` : 'transition-delay: 0ms'}
					>
						<div 
							class="absolute w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mt-1.5 -start-[2rem] 
								   group-hover:scale-125 transition-all duration-300 ease-out shadow-lg shadow-cyan-500/50"
						></div>
						<!-- Rest of the card content would be customized here -->
					</li>
				{/each}
			</ol>
		</div>
	</div>
</section>

<style>
	/* Custom animations for neon theme */
	@keyframes pulse-glow {
		0%, 100% { opacity: 0.5; }
		50% { opacity: 1; }
	}
</style>