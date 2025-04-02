<script lang="ts">
  import type { Project } from '$lib/types'; // Assuming you have or will create this type

  export let project: Project;
</script>

<a
  href={project.url}
  target="_blank"
  rel="noopener noreferrer"
  class="block transform rounded-lg border-t-4 border-gray-500 border-gray-700 bg-gray-800 p-6 shadow-lg transition-all duration-300 ease-in-out hover:border-sky-400 hover:bg-gray-700 hover:shadow-[0_0_32px_rgba(56,189,248,0.7)]"
>
  <h3 class="mb-2 text-xl font-semibold text-gray-100">{project.name}</h3>
  <p class="text-gray-400">{project.description}</p>
</a> 