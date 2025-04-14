<script lang="ts">
  export let className: string = ''; 
	import { inview } from 'svelte-inview';
	let isInView = false;
  let hasAnimated = false;
</script>

<section 
  id="contact" 
  class="py-20 text-white {className}"
  use:inview={{ threshold: 0.1, unobserveOnEnter: true }}
	on:inview_change={(event) => {
    if (event.detail.inView && !hasAnimated) {
      isInView = true;
      hasAnimated = true;
    }
  }}
>
  <div 
    class="max-w-6xl mx-auto px-6 flex flex-col items-center transition-opacity duration-1000 {isInView ? 'opacity-100' : 'opacity-0'}" 
  >
    <h2 class="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-sky-300 to-sky-500 bg-clip-text text-transparent pb-1">Contact Me</h2>
    <p class="text-md md:text-xl text-gray-300 mb-6 text-center">
      Feel free to reach out if you'd like to connect or work together!
    </p>
    <a
      href="mailto:fitzsixto.work@gmail.com"
      class="relative z-0 inline-block px-6 py-3 bg-gradient-to-br from-sky-500 via-sky-600 to-sky-800 text-white rounded-full shadow-lg overflow-hidden transition-all duration-300 
             before:absolute before:inset-0 before:-z-10 before:content-[''] before:bg-gradient-to-br before:from-sky-400 before:via-sky-500 before:to-sky-700 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100"
    >
      Get in Touch
    </a>
  </div>
</section>
