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

		{#if project.technologies && project.technologies.length > 0}
			<div class="flex flex-wrap gap-2 mb-4">
				{#each project.technologies as tech}
					<span class="inline-flex items-center rounded-full bg-sky-900/50 px-3 py-1 text-xs font-medium leading-5 text-sky-300">
						{tech}
					</span>
				{/each}
			</div>
		{/if}

		<div class="mt-auto flex items-center justify-end gap-4 border-t border-gray-700/50 pt-4">
			{#if project.repoUrl}
				<a
					href={project.repoUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="text-gray-400 transition-colors duration-200 hover:text-sky-300"
					title="View Source Code on GitHub"
				>
					<span class="sr-only">GitHub</span>
					<svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6">
						<title>GitHub</title>
						<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.109-.778.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
					</svg>
				</a>
			{/if}

			{#if project.url}
				<a
					href={project.url}
					target="_blank"
					rel="noopener noreferrer"
					class="text-gray-400 transition-colors duration-200 hover:text-sky-300"
					title="Visit Live Site"
				>
					<span class="sr-only">Visit Project</span>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-6 w-6">
						<path fill-rule="evenodd" d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z" clip-rule="evenodd" />
						<path fill-rule="evenodd" d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.19a.75.75 0 0 0 .053 1.06Z" clip-rule="evenodd" />
					</svg>
				</a>
			{/if}
		</div>
	</div>
</div>
