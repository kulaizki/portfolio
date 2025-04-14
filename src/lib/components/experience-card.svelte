<script lang="ts">
	import type { Experience } from '$lib/types';
	export let experience: Experience;
</script>

<div 
	class="flex flex-col rounded-lg bg-gradient-to-br from-gray-800 via-slate-900 to-gray-800 shadow-lg overflow-hidden h-full border border-sky-900/50 hover:scale-105 hover:border-sky-400 transition-all duration-300"
>
	{#if experience.imageUrl}
		<img src={experience.imageUrl} alt={`Logo for ${experience.company}`} class="w-full h-48 object-cover" />
	{/if}
	<div class="p-6 flex flex-col flex-grow">
		<h3 class="text-xl font-semibold text-sky-300 mb-1">{experience.title}</h3>
		<p class="text-sm font-medium text-gray-400 mb-3">{experience.company} <span class="text-gray-500">({experience.date})</span></p>
		<ul class="text-sm text-gray-300 space-y-1 list-disc list-inside mb-4 flex-grow">
			{#each experience.responsibilities as responsibility}
				<li>{responsibility}</li>
			{/each}
		</ul>
		<div class="mt-auto flex justify-end gap-3 pt-4 border-t border-gray-700/50">
			{#if experience.link}
				<a href={experience.link} target="_blank" rel="noopener noreferrer" class="text-sm text-sky-400 hover:text-sky-300 transition-colors duration-200">Visit Company</a>
			{/if}
		</div>
	</div>
</div>
