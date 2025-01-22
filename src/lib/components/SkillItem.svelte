<script lang="ts">
  export let skillName: string = ''; 
  export let skillUrl: string = '';  
  export let skillIcon: string = ''; 
</script>

<a
  href={skillUrl}
  target="_blank"
  rel="noopener noreferrer"
  class="p-4 bg-gray-600 rounded-lg shadow-md hover:bg-sky-500 text-white transition-all ease-in-out duration-300 hover:shadow-[0_0_15px_rgba(56,189,248,0.7)]"
>
  <img
    src={skillIcon} 
    alt={skillName}
    class="w-12 h-12 inline-block"
  />
</a>
