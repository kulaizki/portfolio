<script lang="ts">
  import type { Project } from '$lib/types'; 

  export let project: Project;
</script>

<div class="flex flex-col rounded-lg bg-gradient-to-br from-gray-800 via-slate-900 to-gray-800 shadow-lg overflow-hidden h-full border border-sky-900/50 hover:scale-105 hover:border-sky-400 transition-all duration-300">
  {#if project.imageUrl}
    <img src={project.imageUrl} alt={`Screenshot of ${project.name}`} class="w-full h-48 object-cover" />
  {/if}
  <div class="p-6 flex flex-col flex-grow">
    <h3 class="text-xl font-semibold text-sky-300 mb-2">{project.name}</h3>
    <p class="text-gray-400 text-sm mb-4 flex-grow">{project.description}</p>
    <div class="mt-auto flex justify-end gap-3 pt-4 border-t border-gray-700/50">
      <a href={project.url} target="_blank" rel="noopener noreferrer" class="text-sm text-sky-400 hover:text-sky-300 transition-colors duration-200">Visit Project</a>
    </div>
  </div>
</div> 