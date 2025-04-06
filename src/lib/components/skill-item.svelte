<script lang="ts">
  import type { Skill } from '$lib/types';

  export let skill: Skill;
</script>

<a 
  href={`https://www.google.com/search?q=${skill.name}`} 
  target="_blank" 
  rel="noopener noreferrer"
  class="flex transform flex-col items-center justify-center rounded-lg bg-gray-700 p-4 shadow-md transition duration-300 ease-in-out hover:-translate-y-1 hover:bg-gray-600"
  title={skill.name}
>
  <img src={skill.icon} alt={skill.name} class="h-10 w-10 object-contain rounded-lg" />
</a>
