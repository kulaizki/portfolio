<script lang="ts">
  import { projects } from '$lib/constants'; 
  import ProjectItem from '$lib/components/project-item.svelte';
  export let className: string = '';

</script>

<section id="projects" class={`py-20 ${className}`}>
  <div class="mx-auto max-w-6xl px-6">
  <h2 class="mb-4 text-3xl font-bold text-gray-100 md:text-4xl bg-gradient-to-r from-sky-300 to-sky-500 bg-clip-text text-transparent pb-1">Projects</h2>
  <p class="text-lg text-gray-400 mb-16">Selected projects showcasing my skills and interests.</p>
  <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
    {#each projects as project (project.url)}
      <ProjectItem {project} />
    {/each}
    </div>
  </div>
</section> 