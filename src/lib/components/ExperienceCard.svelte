<script>
  export let title;
  export let company;
  export let date;
  export let responsibilities = [];
  export let link = '';
</script>

<a href={link} target="_blank" class="p-6 bg-white rounded-lg shadow-lg border border-transparent hover:border-blue-500 hover:shadow-xl transition-all duration-300">
  <h3 class="text-xl font-semibold">{title}</h3>
  <p class="text-sm text-gray-600 mt-2">{company}, {date}</p>
  <ul class="mt-3 space-y-2 text-gray-700 text-sm">
    {#each responsibilities as responsibility}
      <li>• {responsibility}</li>
    {/each}
  </ul>
</a>