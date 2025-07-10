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
        <CompactList {project} index={i} {isInView} {applyDelay} />
      {/each}
    </div>
  </div>
</section>

