<script>
  export let skillName = '';
  export let skillUrl = '';
</script>

<a
  href={skillUrl}
  target="_blank"
  rel="noopener noreferrer"
  class="px-4 py-2 bg-gray-600 rounded-lg shadow-md hover:bg-sky-500 text-white transition-all duration-300"
>
  {skillName}
</a>
