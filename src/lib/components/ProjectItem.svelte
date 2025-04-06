<script lang="ts">
  import type { Project } from '$lib/types'; 

  export let project: Project;
</script>

<a
  href={project.url}
  target="_blank"
  rel="noopener noreferrer"
  class="block transform rounded-lg border-t-4 border-gray-500 border-gray-700 bg-gray-800 p-2 shadow-lg transition-all duration-300 ease-in-out hover:border-sky-400 hover:bg-gray-700 hover:shadow-[0_0_32px_rgba(56,189,248,0.7)]"
>
  {#if project.imageUrl}
    <img src={project.imageUrl} alt={project.name} class="mb-4 h-48 w-full rounded-lg object-cover" />
  {/if}
  <div class="pb-4 px-4">
    <h3 class="text-xl font-semibold text-gray-100">{project.name}</h3>
    <p class="mt-2 text-sm text-gray-400">{project.description}</p>
  </div>
</a> 