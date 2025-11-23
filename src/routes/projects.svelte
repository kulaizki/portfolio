<script lang="ts">
  import { projects } from '$lib/constants';
  import type { Project } from '$lib/types';
  import CompactList from '$lib/components/project-layouts/compact-list.svelte';
  import { inview } from 'svelte-inview';
  import { fade, scale } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  export let className: string = '';
  let isInView = false;
  let hasAnimated = false;
  let applyDelay = true;
  let selectedProject: Project | null = null;

  const closeModal = () => {
    selectedProject = null;
  };
</script>

<svelte:window
  on:keydown={(event) => {
    if (event.key === 'Escape') closeModal();
  }}
  on:click={(event) => {
    // Close when clicking outside the modal content
    if (selectedProject && (event.target as HTMLElement).dataset?.overlay === 'project-modal') {
      closeModal();
    }
  }}
/>

<section
  id="projects"
  class={`py-32 ${className}`}
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
      class="transition-all duration-1000 ease-out {isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}"
    >
      <h2 class="mb-6 text-4xl font-bold text-white md:text-5xl tracking-tight">
        Selected Projects
      </h2>
      <p
        class="text-xl text-gray-400 mb-20 max-w-2xl font-light leading-relaxed transition-all duration-1000 ease-out {isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}"
        style={applyDelay ? 'transition-delay: 150ms' : 'transition-delay: 0ms'}
      >
        A showcase of my technical explorations and creative solutions.
      </p>
    </div>
    
    <!-- Compact List Layout -->
    <div class="space-y-3 max-w-4xl mx-auto">
      {#each projects as project, i (project.url)}
        <CompactList
          {project}
          index={i}
          {isInView}
          {applyDelay}
          onSelect={(p) => (selectedProject = p)}
        />
      {/each}
    </div>
  </div>
</section>

{#if selectedProject}
  <div
    class="fixed inset-0 z-[60] bg-black/80 backdrop-blur-md flex items-center justify-center px-4 p-4 md:p-8"
    data-overlay="project-modal"
    transition:fade={{ duration: 200 }}
  >
    <div 
      class="relative max-w-5xl w-full bg-gray-900 border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
      transition:scale={{ duration: 300, start: 0.95, opacity: 0, easing: quintOut }}
    >
      <button
        class="absolute top-4 right-4 h-10 w-10 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors focus:outline-none z-20 backdrop-blur-sm border border-white/10"
        aria-label="Close project details"
        on:click={closeModal}
      >
        ✕
      </button>
      
      <!-- Modal Image Section -->
      {#if selectedProject.imageUrl}
        <div class="w-full md:w-1/2 bg-gray-800 relative overflow-hidden">
          <img
            src={selectedProject.imageUrl}
            alt={selectedProject.name}
            class="w-full h-full object-cover"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent md:hidden"></div>
        </div>
      {/if}
      
      <!-- Modal Content Section -->
      <div class="w-full md:w-1/2 p-8 md:p-10 overflow-y-auto bg-gray-900 flex flex-col">
        <div class="mb-auto">
          <h3 class="text-3xl md:text-4xl font-bold text-white mb-4">{selectedProject.name}</h3>
          <p class="text-lg text-gray-300 leading-relaxed font-light mb-8">
            {selectedProject.longDescription ?? selectedProject.description}
          </p>
          
          {#if selectedProject.technologies?.length}
            <div class="mb-8">
              <h4 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Technologies</h4>
              <div class="flex flex-wrap gap-2">
                {#each selectedProject.technologies as tech}
                  <span class="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-sm text-gray-300">
                    {tech}
                  </span>
                {/each}
              </div>
            </div>
          {/if}
        </div>
        
        <div class="flex flex-wrap gap-4 pt-4 mt-8 border-t border-white/5">
          {#if selectedProject.url}
            <a
              href={selectedProject.url}
              target="_blank"
              rel="noopener noreferrer"
              class="flex-1 inline-flex justify-center items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-medium hover:bg-gray-200 transition-colors"
            >
              Visit Website
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            </a>
          {/if}
          {#if selectedProject.repoUrl}
            <a
              href={selectedProject.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              class="flex-1 inline-flex justify-center items-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-colors"
            >
              View Code
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.109-.778.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
          {/if}
        </div>
      </div>
    </div>
  </div>
{/if}
