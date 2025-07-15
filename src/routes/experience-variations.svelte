<script lang="ts">
	import ExperienceCard from '$lib/components/experience-card.svelte';
	import { experiences } from '$lib/constants';
	import { inview } from 'svelte-inview';
	import { fade, fly, scale } from 'svelte/transition';

	export let theme: string = 'neon-glow';
	export let className: string = '';

	let isInView = false;
	let hasAnimated = false;
	let applyDelay = true;

	const themes = {
		'neon-glow': {
			name: 'Neon Glow',
			description: 'Cyberpunk-inspired with glowing gradients and blur effects'
		},
		'glassmorphism': {
			name: 'Glassmorphism',
			description: 'Frosted glass effect with subtle transparency and backdrop blur'
		},
		'brutalist': {
			name: 'Brutalist Minimal',
			description: 'Bold, stark design with strong geometric shapes'
		},
		'retro-terminal': {
			name: 'Retro Terminal',
			description: 'Monospace fonts with green phosphor glow effect'
		},
		'paper-cutout': {
			name: 'Paper Cutout',
			description: 'Layered paper effect with subtle shadows and depth'
		},
		'aurora-borealis': {
			name: 'Aurora Borealis',
			description: 'Flowing gradient animations inspired by northern lights'
		},
		'japanese-minimal': {
			name: 'Japanese Minimal',
			description: 'Clean lines with subtle red accents and negative space'
		},
		'memphis-style': {
			name: 'Memphis Style',
			description: 'Playful geometric shapes with bold colors'
		},
		'swiss-design': {
			name: 'Swiss Design',
			description: 'Grid-based layout with strong typography'
		},
		'dark-mode-elegant': {
			name: 'Dark Mode Elegant',
			description: 'Sophisticated dark theme with gold accents'
		}
	};
</script>

<!-- Theme Selector -->
<div class="fixed top-4 right-4 z-50 bg-gray-900 p-4 rounded-lg border border-gray-700">
	<label for="theme-select" class="block text-sm font-medium text-gray-300 mb-2">Select Theme:</label>
	<select 
		id="theme-select"
		bind:value={theme}
		class="block w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-gray-100 focus:ring-sky-500 focus:border-sky-500"
	>
		{#each Object.entries(themes) as [key, config]}
			<option value={key}>{config.name}</option>
		{/each}
	</select>
	<p class="mt-2 text-xs text-gray-400">{themes[theme].description}</p>
</div>

<!-- Theme 1: Neon Glow -->
{#if theme === 'neon-glow'}
<section
	id="experience"
	class="py-20 text-gray-100 relative overflow-hidden {className}"
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
	<div class="absolute inset-0 overflow-hidden pointer-events-none">
		<div class="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
		<div class="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s"></div>
	</div>

	<div class="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
		<div
			class="md:col-span-1 transition-all duration-700 ease-out {isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}"
			style={applyDelay ? `transition-delay: 200ms` : 'transition-delay: 0ms'}
		>
			<h2 class="text-3xl font-bold md:text-4xl mb-4 relative inline-block">
				<span class="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-purple-400 blur-lg opacity-75"></span>
				<span class="relative bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
					Experience
				</span>
			</h2>
			<p class="text-lg text-gray-300">
				My professional journey and key contributions.
			</p>
		</div>

		<div class="md:col-span-2 relative">
			<div class="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400/50 via-purple-400/50 to-cyan-400/50"></div>
			<ol class="ms-0">
				{#each experiences as experience, i (experience.company + experience.title)}
					<li
						class="mb-10 ms-6 relative group transition-all duration-300 ease-out {isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}"
						style={applyDelay ? `transition-delay: ${400 + i * 200}ms` : 'transition-delay: 0ms'}
					>
						<div class="p-6 rounded-xl border border-transparent hover:border-cyan-500/30 hover:bg-gradient-to-r hover:from-cyan-900/20 hover:to-purple-900/20 transition-all duration-300">
							<div 
								class="absolute w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mt-1.5 -start-[2.1rem] 
									   group-hover:scale-125 transition-all duration-300 ease-out shadow-lg shadow-cyan-500/50"
							></div>
							<ExperienceCard {experience} className="" style="" />
						</div>
					</li>
				{/each}
			</ol>
		</div>
	</div>
</section>

<!-- Theme 2: Glassmorphism -->
{:else if theme === 'glassmorphism'}
<section
	id="experience"
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
	<div class="absolute inset-0 overflow-hidden pointer-events-none">
		<div class="absolute top-20 right-20 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl"></div>
		<div class="absolute bottom-20 left-20 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"></div>
	</div>

	<div class="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
		<div
			class="md:col-span-1 transition-all duration-700 ease-out {isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}"
			style={applyDelay ? `transition-delay: 200ms` : 'transition-delay: 0ms'}
		>
			<div class="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10">
				<h2 class="text-3xl font-bold md:text-4xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent pb-1 mb-4">
					Experience
				</h2>
				<p class="text-lg text-gray-300">
					My professional journey and key contributions.
				</p>
			</div>
		</div>

		<div class="md:col-span-2 relative">
			<div class="absolute left-0 top-0 bottom-0 w-0.5 bg-white/20 backdrop-blur-sm"></div>
			<ol class="ms-0">
				{#each experiences as experience, i (experience.company + experience.title)}
					<li
						class="mb-10 ms-6 relative group transition-all duration-300 ease-out {isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}"
						style={applyDelay ? `transition-delay: ${400 + i * 200}ms` : 'transition-delay: 0ms'}
					>
						<div class="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
							<div 
								class="absolute w-3 h-3 bg-white/50 backdrop-blur-sm rounded-full mt-1.5 -start-[1.85rem] border border-white/30
									   group-hover:bg-white/80 group-hover:scale-110 transition-all duration-300 ease-out"
							></div>
							<ExperienceCard {experience} className="" style="" />
						</div>
					</li>
				{/each}
			</ol>
		</div>
	</div>
</section>

<!-- Theme 3: Brutalist Minimal -->
{:else if theme === 'brutalist'}
<section
	id="experience"
	class="py-20 bg-black text-white {className}"
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
	<div class="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-3 gap-0">
		<div
			class="md:col-span-1 border-4 border-white p-8 transition-all duration-700 ease-out {isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}"
			style={applyDelay ? `transition-delay: 200ms` : 'transition-delay: 0ms'}
		>
			<h2 class="text-4xl font-black uppercase tracking-tighter mb-4">
				EXPERIENCE
			</h2>
			<p class="text-sm uppercase tracking-wider">
				Professional Timeline
			</p>
		</div>

		<div class="md:col-span-2 border-4 border-t-0 md:border-t-4 md:border-l-0 border-white">
			<ol>
				{#each experiences as experience, i (experience.company + experience.title)}
					<li
						class="border-b-4 border-white last:border-b-0 p-8 hover:bg-white hover:text-black transition-all duration-300 {isInView ? 'opacity-100' : 'opacity-0'}"
						style={applyDelay ? `transition-delay: ${400 + i * 200}ms` : 'transition-delay: 0ms'}
					>
						<time class="text-xs font-bold uppercase tracking-widest">{experience.date}</time>
						<h3 class="text-2xl font-black uppercase mt-2">
							{experience.title} / {experience.company}
						</h3>
						<div class="mt-4 space-y-2">
							{#each experience.responsibilities as responsibility}
								<p class="text-sm">{responsibility}</p>
							{/each}
						</div>
					</li>
				{/each}
			</ol>
		</div>
	</div>
</section>

<!-- Theme 4: Retro Terminal -->
{:else if theme === 'retro-terminal'}
<section
	id="experience"
	class="py-20 bg-black text-green-400 font-mono {className}"
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
		<div
			class="mb-8 transition-all duration-700 ease-out {isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}"
			style={applyDelay ? `transition-delay: 200ms` : 'transition-delay: 0ms'}
		>
			<h2 class="text-2xl mb-2">
				<span class="animate-pulse">▶</span> cat /usr/experience.log
			</h2>
			<div class="h-0.5 bg-green-400 w-full mb-4"></div>
		</div>

		<div class="space-y-6">
			{#each experiences as experience, i (experience.company + experience.title)}
				<div
					class="border border-green-400 p-4 hover:shadow-lg hover:shadow-green-400/50 transition-all duration-300 {isInView ? 'opacity-100' : 'opacity-0'}"
					style={applyDelay ? `transition-delay: ${400 + i * 200}ms` : 'transition-delay: 0ms'}
				>
					<div class="flex items-start justify-between mb-2">
						<div>
							<span class="text-green-300">[{experience.date}]</span>
							<h3 class="text-lg">
								{experience.title}@{experience.company}:~$
							</h3>
						</div>
					</div>
					<div class="pl-4 space-y-1">
						{#each experience.responsibilities as responsibility}
							<p class="text-sm text-green-300">→ {responsibility}</p>
						{/each}
					</div>
					{#if experience.technologies}
						<div class="mt-4 text-xs">
							<span class="text-green-500">stack:</span>
							{#each experience.technologies as tech}
								<span class="text-green-300"> [{tech}]</span>
							{/each}
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Theme 5: Paper Cutout -->
{:else if theme === 'paper-cutout'}
<section
	id="experience"
	class="py-20 bg-gray-100 text-gray-900 {className}"
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
	<div class="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-3 gap-16">
		<div
			class="md:col-span-1 bg-white p-8 shadow-xl transform rotate-1 transition-all duration-700 ease-out {isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}"
			style={applyDelay ? `transition-delay: 200ms` : 'transition-delay: 0ms'}
		>
			<h2 class="text-3xl font-bold md:text-4xl text-gray-800 mb-4">
				Experience
			</h2>
			<p class="text-lg text-gray-600">
				My professional journey and key contributions.
			</p>
		</div>

		<div class="md:col-span-2 space-y-6">
			{#each experiences as experience, i (experience.company + experience.title)}
				<div
					class="bg-white p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 {isInView ? 'opacity-100' : 'opacity-0'}"
					style={applyDelay ? `transition-delay: ${400 + i * 200}ms; transform: rotate(${i % 2 === 0 ? '-0.5' : '0.5'}deg)` : 'transition-delay: 0ms'}
				>
					<time class="text-sm text-gray-500">{experience.date}</time>
					<h3 class="text-xl font-bold text-gray-800 mt-1">
						{experience.title} · {experience.company}
					</h3>
					<div class="mt-3 space-y-2">
						{#each experience.responsibilities as responsibility}
							<p class="text-gray-600">{responsibility}</p>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Theme 6: Aurora Borealis -->
{:else if theme === 'aurora-borealis'}
<section
	id="experience"
	class="py-20 text-gray-100 relative overflow-hidden {className}"
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
	<div class="absolute inset-0 overflow-hidden pointer-events-none">
		<div class="absolute inset-0 bg-gradient-to-br from-green-400/20 via-blue-500/20 to-purple-600/20 animate-aurora"></div>
		<div class="absolute inset-0 bg-gradient-to-tr from-purple-400/20 via-pink-500/20 to-green-600/20 animate-aurora" style="animation-delay: 5s"></div>
	</div>

	<div class="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
		<div
			class="md:col-span-1 transition-all duration-700 ease-out {isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}"
			style={applyDelay ? `transition-delay: 200ms` : 'transition-delay: 0ms'}
		>
			<h2 class="text-3xl font-bold md:text-4xl bg-gradient-to-r from-green-300 via-blue-300 to-purple-300 bg-clip-text text-transparent pb-1 mb-4">
				Experience
			</h2>
			<p class="text-lg text-gray-300">
				My professional journey and key contributions.
			</p>
		</div>

		<div class="md:col-span-2 relative">
			<div class="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400/50 via-blue-400/50 to-purple-400/50"></div>
			<ol class="ms-0">
				{#each experiences as experience, i (experience.company + experience.title)}
					<li
						class="mb-10 ms-6 relative group transition-all duration-300 ease-out {isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}"
						style={applyDelay ? `transition-delay: ${400 + i * 200}ms` : 'transition-delay: 0ms'}
					>
						<div class="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
							<div 
								class="absolute w-3 h-3 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 rounded-full mt-1.5 -start-[1.85rem]
									   group-hover:scale-110 transition-all duration-300 ease-out"
							></div>
							<ExperienceCard {experience} className="" style="" />
						</div>
					</li>
				{/each}
			</ol>
		</div>
	</div>
</section>

<!-- Theme 7: Japanese Minimal -->
{:else if theme === 'japanese-minimal'}
<section
	id="experience"
	class="py-20 bg-gray-50 text-gray-900 {className}"
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
	<div class="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-3 gap-16">
		<div
			class="md:col-span-1 transition-all duration-700 ease-out {isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}"
			style={applyDelay ? `transition-delay: 200ms` : 'transition-delay: 0ms'}
		>
			<div class="flex items-center gap-4 mb-6">
				<div class="w-16 h-0.5 bg-red-600"></div>
				<h2 class="text-3xl font-light tracking-wider">経験</h2>
			</div>
			<h2 class="text-2xl font-light tracking-wide mb-4">Experience</h2>
			<p class="text-gray-600 font-light">
				My professional journey and key contributions.
			</p>
		</div>

		<div class="md:col-span-2">
			<ol class="space-y-12">
				{#each experiences as experience, i (experience.company + experience.title)}
					<li
						class="group transition-all duration-700 ease-out {isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}"
						style={applyDelay ? `transition-delay: ${400 + i * 200}ms` : 'transition-delay: 0ms'}
					>
						<div class="flex items-start gap-6">
							<div class="w-2 h-2 bg-red-600 rounded-full mt-2 group-hover:scale-150 transition-transform duration-300"></div>
							<div class="flex-1">
								<time class="text-sm text-gray-500 font-light">{experience.date}</time>
								<h3 class="text-xl font-light mt-1 mb-3">
									{experience.title} <span class="text-red-600">·</span> {experience.company}
								</h3>
								<div class="space-y-2 text-gray-600 font-light">
									{#each experience.responsibilities as responsibility}
										<p>{responsibility}</p>
									{/each}
								</div>
							</div>
						</div>
					</li>
				{/each}
			</ol>
		</div>
	</div>
</section>

<!-- Theme 8: Memphis Style -->
{:else if theme === 'memphis-style'}
<section
	id="experience"
	class="py-20 bg-yellow-50 text-gray-900 relative overflow-hidden {className}"
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
	<!-- Decorative shapes -->
	<div class="absolute inset-0 overflow-hidden pointer-events-none">
		<div class="absolute top-10 left-10 w-20 h-20 bg-pink-400 rounded-full"></div>
		<div class="absolute top-40 right-20 w-16 h-16 bg-blue-400 transform rotate-45"></div>
		<div class="absolute bottom-20 left-1/3 w-24 h-6 bg-green-400 transform -rotate-12"></div>
		<div class="absolute bottom-40 right-1/4 w-0 h-0 border-l-[30px] border-l-transparent border-b-[40px] border-b-orange-400 border-r-[30px] border-r-transparent"></div>
	</div>

	<div class="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
		<div
			class="md:col-span-1 transition-all duration-700 ease-out {isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}"
			style={applyDelay ? `transition-delay: 200ms` : 'transition-delay: 0ms'}
		>
			<div class="bg-black text-white p-6 transform -rotate-2 inline-block">
				<h2 class="text-3xl font-black uppercase">Experience</h2>
			</div>
			<p class="text-lg mt-6 font-bold">
				My professional journey and key contributions.
			</p>
		</div>

		<div class="md:col-span-2 space-y-8">
			{#each experiences as experience, i (experience.company + experience.title)}
				<div
					class="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 {isInView ? 'opacity-100' : 'opacity-0'}"
					style={applyDelay ? `transition-delay: ${400 + i * 200}ms` : 'transition-delay: 0ms'}
				>
					<div class="flex items-start justify-between">
						<div>
							<time class="text-sm font-bold text-pink-600">{experience.date}</time>
							<h3 class="text-xl font-black mt-1">
								{experience.title} → {experience.company}
							</h3>
						</div>
						<div class="w-8 h-8 bg-{['pink', 'blue', 'green', 'orange'][i % 4]}-400 rounded-full"></div>
					</div>
					<div class="mt-4 space-y-2">
						{#each experience.responsibilities as responsibility}
							<p class="font-medium">{responsibility}</p>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Theme 9: Swiss Design -->
{:else if theme === 'swiss-design'}
<section
	id="experience"
	class="py-20 bg-white text-black {className}"
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
		<div class="grid grid-cols-12 gap-4">
			<div
				class="col-span-12 md:col-span-3 transition-all duration-700 ease-out {isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}"
				style={applyDelay ? `transition-delay: 200ms` : 'transition-delay: 0ms'}
			>
				<h2 class="text-6xl font-bold leading-none">Exp.</h2>
				<div class="w-full h-1 bg-red-600 mt-4 mb-6"></div>
				<p class="text-sm leading-tight">
					Professional journey<br/>
					and key contributions
				</p>
			</div>

			<div class="col-span-12 md:col-span-9">
				<div class="grid grid-cols-12 gap-4">
					{#each experiences as experience, i (experience.company + experience.title)}
						<div
							class="col-span-12 grid grid-cols-12 gap-4 py-6 border-b border-gray-200 last:border-b-0 {isInView ? 'opacity-100' : 'opacity-0'}"
							style={applyDelay ? `transition-delay: ${400 + i * 200}ms` : 'transition-delay: 0ms'}
						>
							<div class="col-span-3">
								<time class="text-xs font-bold">{experience.date}</time>
							</div>
							<div class="col-span-9">
								<h3 class="font-bold text-lg mb-1">
									{experience.title}
								</h3>
								<p class="text-red-600 font-bold mb-3">{experience.company}</p>
								<div class="space-y-1 text-sm">
									{#each experience.responsibilities as responsibility}
										<p>{responsibility}</p>
									{/each}
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Theme 10: Dark Mode Elegant -->
{:else if theme === 'dark-mode-elegant'}
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
	<div class="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-3 gap-16">
		<div
			class="md:col-span-1 transition-all duration-700 ease-out {isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}"
			style={applyDelay ? `transition-delay: 200ms` : 'transition-delay: 0ms'}
		>
			<h2 class="text-3xl font-bold md:text-4xl bg-gradient-to-r from-sky-300 to-sky-500 bg-clip-text text-transparent pb-1 mb-4">
				Experience
			</h2>
			<p class="text-lg text-gray-400">
				My professional journey and key contributions.
			</p>
		</div>

		<div class="md:col-span-2 relative">
			<div class="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-sky-400/50 to-transparent"></div>
			<ol class="ms-0">
				{#each experiences as experience, i (experience.company + experience.title)}
					<li
						class="mb-12 ms-6 relative group transition-all duration-500 ease-out {isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}"
						style={applyDelay ? `transition-delay: ${400 + i * 200}ms` : 'transition-delay: 0ms'}
					>
						<div 
							class="absolute w-3 h-3 bg-gray-500 rounded-full mt-1.5 -start-[1.85rem] border border-gray-900 
								   group-hover:bg-sky-400 group-hover:scale-110 transition-all duration-300 ease-out"
						></div>
						<div class="group-hover:pl-4 transition-all duration-300">
							<time class="mb-1 text-xs font-normal leading-none text-gray-500 uppercase tracking-wider block">{experience.date}</time>
							<h3 class="text-lg font-semibold text-gray-100 mt-1">
								{experience.title} <span class="font-medium text-gray-300">·</span> 
								<span class="font-medium text-gray-100 inline-block">
									{experience.company}
									{#if experience.link}
										<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' class='w-4 h-4 inline-block ml-1 opacity-70 group-hover:opacity-100 translate-y-[-1px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 ease-out'>
											<path fill-rule='evenodd' d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z' clip-rule='evenodd'></path>
										</svg>
									{/if}
								</span>
							</h3>
							<div class="mt-2 mb-4 text-sm font-normal text-gray-400 space-y-2">
								{#each experience.responsibilities as responsibility}
									<p class="leading-relaxed">{responsibility}</p>
								{/each}
							</div>
							{#if experience.technologies && experience.technologies.length > 0}
								<div class="flex flex-wrap gap-2 mt-4">
									{#each experience.technologies as tech}
										<span class="inline-flex items-center rounded-full bg-sky-900/50 px-3 py-1 text-xs font-medium leading-5 text-sky-300">
											{tech}
										</span>
									{/each}
								</div>
							{/if}
						</div>
					</li>
				{/each}
			</ol>
		</div>
	</div>
</section>
{/if}

<style>
	@keyframes aurora {
		0%, 100% { transform: translate(0, 0) rotate(0deg); }
		33% { transform: translate(30px, -30px) rotate(120deg); }
		66% { transform: translate(-20px, 20px) rotate(240deg); }
	}
	
	.animate-aurora {
		animation: aurora 15s ease-in-out infinite;
	}
</style>