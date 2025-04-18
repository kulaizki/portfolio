<script lang="ts">
	import type { Project } from '$lib/types';

	export let project: Project;
</script>

<div
	class="flex h-full flex-col overflow-hidden rounded-lg border border-sky-900/50 bg-gradient-to-br from-gray-800 via-slate-900 to-gray-800 shadow-lg transition-all duration-300 hover:scale-105 hover:border-sky-400"
>
	{#if project.imageUrl}
		<img
			src={project.imageUrl}
			alt={`Screenshot of ${project.name}`}
			class="h-48 w-full object-cover"
		/>
	{/if}
	<div class="flex flex-grow flex-col p-6">
		<h3 class="mb-2 text-xl font-semibold text-sky-300">{project.name}</h3>
		<p class="mb-4 flex-grow text-sm text-gray-400">{project.description}</p>

		<!-- Technologies/Skills -->
		{#if project.technologies && project.technologies.length > 0}
			<div class="flex flex-wrap gap-2 mb-4">
				{#each project.technologies as tech}
					<span class="inline-flex items-center rounded-full bg-sky-900/50 px-3 py-1 text-xs font-medium leading-5 text-sky-300">
						{tech}
					</span>
				{/each}
			</div>
		{/if}

		<div class="mt-auto flex justify-end gap-3 border-t border-gray-700/50 pt-4">
			<a
				href={project.url}
				target="_blank"
				rel="noopener noreferrer"
				class="text-sm text-sky-400 transition-colors duration-200 hover:text-sky-300"
				>Visit Project</a
			>
		</div>
	</div>
</div>
