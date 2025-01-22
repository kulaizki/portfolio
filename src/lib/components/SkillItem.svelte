<script>
  export let skillName = '';
  export let skillUrl = '';
</script>

<a
  href={skillUrl}
  target="_blank"
  rel="noopener noreferrer"
  class="px-4 py-2 bg-gray-600 rounded-lg shadow-md hover:bg-sky-500 text-white transition-all ease-in-out duration-300 hover:shadow-[0_0_15px_rgba(56,189,248,0.7)]"
>
  {skillName}
</a>
