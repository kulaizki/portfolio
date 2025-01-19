<script lang="ts">
  export let title: string;
  export let company: string;
  export let date: string;
  export let responsibilities: string[] = [];
  export let link: string = '';
</script>

<a 
  href={link} 
  target="_blank" 
  class="relative p-6 bg-gray-800 rounded-lg shadow-lg border-t-4 border-gray-500 border-gray-700 hover:bg-gray-700 hover:border-sky-400 hover:shadow-xl transition-all duration-300"
>
  <h3 class="text-xl font-semibold text-white">{title}</h3>
  <p class="text-sm text-gray-400 mt-2">{company}, {date}</p>
  <ul class="mt-3 space-y-2 text-gray-300 text-sm">
    {#each responsibilities as responsibility}
      <li>• {responsibility}</li>
    {/each}
  </ul>
</a>
