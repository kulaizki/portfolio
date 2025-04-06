<script lang="ts">
  import { cubicOut } from 'svelte/easing';
  import { onMount } from 'svelte';
  
  let show: boolean = false;
  
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

  onMount(() => {
    show = true;
  });
</script>

<section class="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen flex items-center justify-center">
  {#if show}
    <div
      class="max-w-4xl px-6 text-center"
      transition:blurFly
    >
      <h1 class="text-4xl md:text-7xl font-bold tracking-tight mb-4">
        Hi, I'm <span class="text-sky-400">Fitz Angelo</span>
      </h1>
      <p class="text-lg md:text-xl text-gray-300 mb-6">
        A developer with a passion for problem-solving and neuroscience.
      </p>
      <div class="flex justify-center gap-6">
        <a
          href="#experience"
          class="px-6 py-3 bg-sky-500 text-white rounded-full shadow-lg hover:bg-sky-600 transition-all duration-300"
        >
          See My Work
        </a>
        <a
          href="#contact"
          class="px-6 py-3 bg-gray-700 text-white rounded-full shadow-lg hover:bg-gray-600 transition-all duration-300"
        >
          Contact Me
        </a>
      </div>
    </div>
  {/if}
</section>
