<script lang="ts">
  export let className: string = ''; 
  import { fly } from 'svelte/transition';
	import { inview } from 'svelte-inview';
	let isInView = false;
</script>

<section 
  id="contact" 
  class="py-20 text-white {className}"
  use:inview={{ threshold: 0.1 }}
	on:inview_change={(event) => {
		isInView = event.detail.inView;
  }}
>
  {#if isInView}
    <div 
      class="max-w-6xl mx-auto px-6 flex flex-col items-center"
      in:fly={{ y: 100, duration: 1000 }}
    >
      <h2 class="text-3xl md:text-4xl font-bold mb-8">Contact Me</h2>
      <p class="text-lg md:text-xl text-gray-300 mb-6">
        Feel free to reach out if you'd like to connect or work together!
      </p>
      <a
        href="mailto:fitzsixto.work@gmail.com"
        class="px-6 py-3 bg-sky-500 text-white rounded-full shadow-lg hover:bg-sky-600 transition-all duration-300"
      >
        Get in Touch
      </a>
    </div>
  {/if}
</section>
