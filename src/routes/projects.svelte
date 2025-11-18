<script lang="ts">
  import { projects } from '$lib/constants';
  import type { Project } from '$lib/types';
  import CompactList from '$lib/components/project-layouts/compact-list.svelte';
  import { inview } from 'svelte-inview';

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
  class={`py-20 ${className}`}
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
      class="transition-all duration-700 ease-out {isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}"
    >
      <h2 class="mb-4 text-3xl font-bold text-gray-100 md:text-4xl bg-gradient-to-r from-sky-300 to-sky-500 bg-clip-text text-transparent pb-1">
        Projects
      </h2>
      <p
        class="text-lg text-gray-400 mb-16 transition-all duration-700 ease-out {isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}"
        style={applyDelay ? 'transition-delay: 150ms' : 'transition-delay: 0ms'}
      >
        Selected projects showcasing my skills and interests.
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
    class="fixed inset-0 z-30 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4"
    data-overlay="project-modal"
  >
    <div class="relative max-w-2xl w-full bg-gray-950 border border-gray-800 rounded-2xl shadow-2xl overflow-hidden">
      <button
        class="absolute top-4 right-4 h-9 w-9 flex items-center justify-center rounded-full bg-gray-900/80 border border-gray-800 text-gray-400 hover:text-white hover:border-sky-600 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-600/60 focus:ring-offset-2 focus:ring-offset-gray-950"
        aria-label="Close project details"
        on:click={closeModal}
      >
        ✕
      </button>
      {#if selectedProject.imageUrl}
        <div class="px-6 pt-6">
          <div class="mx-auto w-full max-w-3xl bg-gray-900 aspect-[16/9] max-h-[45vh] rounded-xl overflow-hidden flex items-center justify-center">
            <img
              src={selectedProject.imageUrl}
              alt={selectedProject.name}
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      {/if}
      <div class="p-6 space-y-4">
        <div>
          <h3 class="text-2xl font-semibold text-white">{selectedProject.name}</h3>
          <p class="text-gray-400 mt-2">
            {selectedProject.longDescription ?? selectedProject.description}
          </p>
        </div>
        {#if selectedProject.technologies?.length}
          <div class="flex flex-wrap gap-2">
            {#each selectedProject.technologies as tech}
              <span class="px-3 py-1 rounded-full bg-gray-900 border border-gray-800 text-xs text-gray-300">
                {tech}
              </span>
            {/each}
          </div>
        {/if}
        <div class="flex flex-wrap gap-3 pt-2">
          {#if selectedProject.url}
            <a
              href={selectedProject.url}
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-sky-600 hover:bg-sky-500 text-white text-sm transition-colors"
            >
              Live demo
            </a>
          {/if}
          {#if selectedProject.repoUrl}
            <a
              href={selectedProject.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-gray-700 text-gray-200 hover:border-sky-600 hover:text-sky-200 text-sm transition-colors"
            >
              View repo
            </a>
          {/if}
        </div>
      </div>
    </div>
  </div>
{/if}
