<script lang="ts">
  import type { Project } from '$lib/types';
  import { fade } from 'svelte/transition';

  export let project: Project;
  export let index: number;
  export let isInView: boolean;
  export let applyDelay: boolean;
  export let onSelect: ((project: Project) => void) | undefined;

  const handleActivate = () => {
    if (onSelect) onSelect(project);
  };
</script>

<div
  class="group relative flex flex-col h-full rounded-3xl overflow-hidden bg-gray-900/40 border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-900/20 cursor-pointer {isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}"
  style={applyDelay ? `transition-delay: ${100 + index * 100}ms` : 'transition-delay: 0ms'}
  role="button"
  tabindex="0"
  on:click={handleActivate}
  on:keydown={(event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleActivate();
    }
  }}
>
  <!-- Image Container -->
  <div class="relative aspect-video w-full overflow-hidden bg-gray-800">
    {#if project.imageUrl}
      <img
        src={project.imageUrl}
        alt={project.name}
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
    {:else}
      <div class="w-full h-full flex items-center justify-center bg-gray-800">
        <span class="text-4xl font-bold text-gray-700">{project.name[0]}</span>
      </div>
    {/if}
    
    <!-- Hover Overlay -->
    <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
      <span class="px-6 py-3 bg-white text-black rounded-full text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        View Details
      </span>
    </div>
  </div>

  <!-- Content -->
  <div class="p-6 flex flex-col flex-grow">
    <h3 class="text-xl font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
      {project.name}
    </h3>
    
    <p class="text-gray-400 text-sm line-clamp-2 mb-4 flex-grow font-light leading-relaxed">
      {project.description}
    </p>
    
    <div class="flex flex-wrap gap-2 mt-auto">
      {#each project.technologies.slice(0, 3) as tech}
        <span class="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-white/5 text-gray-300 border border-white/5">
          {tech}
        </span>
      {/each}
      {#if project.technologies.length > 3}
        <span class="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-white/5 text-gray-500 border border-white/5">
          +{project.technologies.length - 3}
        </span>
      {/if}
    </div>
  </div>
</div>
