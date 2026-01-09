<script lang="ts">
  import { projects } from '$lib/constants';
  import CompactList from '$lib/components/project-layouts/compact-list.svelte';
  import { inview } from 'svelte-inview';

  export let className: string = '';
  let isInView = false;
  let hasAnimated = false;
  let applyDelay = true;
</script>

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
        />
      {/each}
    </div>
  </div>
</section>
