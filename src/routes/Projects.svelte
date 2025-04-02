<script lang="ts">
  import { projects } from '$lib/constants';
  import ProjectItem from '$lib/components/ProjectItem.svelte';

  export let className: string = '';
</script>

<section id="projects" class={`container mx-auto px-4 py-16 ${className}`}>
  <h2 class="mb-8 text-center text-3xl font-bold text-gray-100 md:text-4xl">Projects</h2>
  <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
    {#each projects as project}
      <ProjectItem {project} />
    {/each}
  </div>
</section> 