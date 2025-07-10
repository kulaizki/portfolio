<script lang="ts">
  import type { Project } from '$lib/types';
  export let project: Project;
  export let index: number;
  export let isInView: boolean;
  export let applyDelay: boolean;
</script>

<div
  class="group flex gap-4 p-4 rounded-lg bg-gray-900/20 border border-gray-800/50 hover:bg-gray-900/40 hover:border-sky-900/50 transition-all duration-300 {isInView ? 'opacity-100' : 'opacity-0'}"
  style={applyDelay ? `transition-delay: ${100 + index * 50}ms` : 'transition-delay: 0ms'}
>
  <!-- Side Image -->
  <div class="flex-shrink-0 w-32 md:w-40 aspect-video rounded-md overflow-hidden bg-gray-800">
    {#if project.imageUrl}
      <img
        src={project.imageUrl}
        alt={project.name}
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    {:else}
      <div class="w-full h-full flex items-center justify-center">
        <span class="text-2xl text-gray-700">{index + 1}</span>
      </div>
    {/if}
  </div>
  
  <!-- Content -->
  <div class="flex-grow min-w-0 flex flex-col justify-center">
    <h3 class="text-base font-medium text-white mb-1 truncate group-hover:text-sky-300 transition-colors">
      {project.name}
    </h3>
    
    <p class="text-sm text-gray-400 mb-2 line-clamp-1">
      {project.description}
    </p>
    
    <div class="flex items-center gap-4">
      <div class="flex gap-2">
        {#each project.technologies.slice(0, 2) as tech}
          <span class="text-xs text-gray-600">{tech}</span>
        {/each}
      </div>
      
      <div class="flex gap-3 ml-auto">
        {#if project.repoUrl}
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-600 hover:text-sky-400 transition-colors"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.109-.778.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        {/if}
        {#if project.url}
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-600 hover:text-sky-400 transition-colors"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        {/if}
      </div>
    </div>
  </div>
</div>