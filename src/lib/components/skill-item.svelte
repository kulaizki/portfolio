<script lang="ts">
  import type { Skill } from '$lib/types';

  export let skill: Skill;
</script>

<a 
  href={skill.url}
  target="_blank" 
  rel="noopener noreferrer"
  class="inline-flex items-center justify-center p-3 rounded-lg bg-gradient-to-br from-gray-700 via-slate-800 to-gray-700 shadow-md border border-sky-900/30 
         transition-transform duration-200 ease-in-out hover:scale-110 hover:shadow-lg hover:border-sky-600/50 mx-2 flex-shrink-0"
  title={skill.name}
>
  <img src={skill.icon} alt={skill.name} class="h-8 w-8 sm:h-16 sm:w-16 object-contain" />
</a>
