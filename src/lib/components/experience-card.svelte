<script lang="ts">
	import type { Experience } from '$lib/types';

	export let experience: Experience;
	export let className: string = '';
	export let style: string = '';
</script>

<li
	class="mb-10 ms-6 relative group transition-all duration-300 ease-out hover:bg-slate-800/50 p-4 rounded-md -m-4 {className}"
	{style}
>
	<div 
		class="absolute w-3 h-3 bg-gray-500 rounded-full mt-1.5 -start-[1.85rem] border border-gray-900 
			   group-hover:bg-sky-400 group-hover:scale-110 transition-all duration-300 ease-out"
	></div>
	
	<svelte:element 
		this={experience.link ? 'a' : 'div'} 
		href={experience.link}
		target={experience.link ? '_blank' : undefined}
		rel={experience.link ? 'noopener noreferrer' : undefined}
		class="block cursor-default {experience.link ? 'group/link cursor-pointer' : ''}"
	>
		<time class="mb-1 text-xs font-normal leading-none text-gray-500 uppercase tracking-wider block">{experience.date}</time>
		<h3 class="text-lg font-semibold text-gray-100 group-hover/link:text-sky-300 transition-colors duration-200 mt-1">
			{experience.title} <span class="font-medium text-gray-300">·</span> 
			<span class="font-medium text-gray-100 inline-block group-hover/link:text-sky-300 transition-colors duration-200">
				{experience.company}
				{#if experience.link}
					<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' class='w-4 h-4 inline-block ml-1 opacity-70 group-hover/link:opacity-100 translate-y-[-1px] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200 ease-out'>
						<path fill-rule='evenodd' d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z' clip-rule='evenodd'></path>
					</svg>
				{/if}
			</span>
		</h3>
		<div class="mt-2 mb-4 text-sm font-normal text-gray-400 space-y-2">
			{#each experience.responsibilities as responsibility}
				<p>{responsibility}</p>
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
	</svelte:element>
</li>
