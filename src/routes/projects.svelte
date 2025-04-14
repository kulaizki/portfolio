<script lang="ts">
  import { projects } from '$lib/constants'; 
  export let className: string = '';

</script>

<section id="projects" class={`container mx-auto px-4 py-20 ${className}`}>
  <h2 class="mb-4 text-center text-3xl font-bold text-gray-100 md:text-4xl bg-gradient-to-r from-sky-300 to-sky-500 bg-clip-text text-transparent pb-1">Projects</h2>
  <p class="text-center text-lg text-gray-400 mb-16">Selected projects showcasing my skills and interests.</p>
  <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
    {#each projects as project (project.url)}
      <div class="flex flex-col rounded-lg bg-gradient-to-br from-gray-800 via-slate-900 to-gray-800 shadow-lg overflow-hidden h-full border border-sky-900/50 transition-transform duration-300 hover:scale-105">
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
    {/each}
  </div>
</section> 