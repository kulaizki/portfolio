<script lang="ts">
  export let className: string = ''; 
  import { cubicOut } from 'svelte/easing';
	import { inview } from 'svelte-inview';
	let isInView = false;
  let hasAnimated = false;

  function blurFly(node: HTMLElement, params: { 
    delay?: number, 
    duration?: number, 
    easing?: (t: number) => number 
  } = {}): { 
    delay: number, 
    duration: number, 
    easing: (t: number) => number, 
    css: (t: number) => string 
  } {
    const existingTransform = getComputedStyle(node).transform.replace('none', '');
    return {
      delay: params.delay || 0,
      duration: params.duration || 1000,
      easing: params.easing || cubicOut,
      css: (t: number) => `
        transform: ${existingTransform} translateY(${(1 - t) * 100}px);
        opacity: ${t};
        filter: blur(${(1 - t) * 10}px);
      `
    };
  }
</script>

<section 
  id="contact" 
  class="py-20 text-white {className}"
  use:inview={{ threshold: 0.3 }}
	on:inview_change={(event) => {
    if (!hasAnimated) {
      isInView = event.detail.inView;
      if (isInView) hasAnimated = true;
    }
  }}
>
  {#if isInView}
    <div 
      class="max-w-6xl mx-auto px-6 flex flex-col items-center"
      transition:blurFly
    >
      <h2 class="text-3xl md:text-4xl font-bold mb-8">Contact Me</h2>
      <p class="text-md md:text-xl text-gray-300 mb-6 text-center">
        Feel free to reach out if you'd like to connect or work together!
      </p>
      <a
        href="mailto:fitzsixto.work@gmail.com"
        class="px-6 py-3 bg-gradient-to-br from-sky-500 via-sky-600 to-sky-800 text-white rounded-full shadow-lg hover:bg-sky-400 transition-all duration-300"
      >
        Get in Touch
      </a>
    </div>
  {/if}
</section>
