<script lang="ts">
  import { cubicOut } from 'svelte/easing';
  import { onMount } from 'svelte';
  
  export let onEnter: () => void;
  export let onLeave: () => void;

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

<section 
  class="bg-gradient-to-br from-black via-sky-950 to-black text-white min-h-screen flex items-center justify-center"
  on:mouseenter={onEnter}
  on:mouseleave={onLeave}
  aria-label="Hero Section"
>
  {#if show}
    <div
      class="max-w-4xl px-6 text-center"
      transition:blurFly
    >
      <h1 class="text-4xl md:text-7xl font-bold tracking-tight mb-4">
        Hi, I'm <span class="bg-gradient-to-r from-sky-300 to-sky-600 bg-clip-text text-transparent">Fitzsixto</span>
      </h1>
      <p class="text-lg md:text-xl text-gray-300 mb-6">
        A developer with a passion for problem-solving and neuroscience.
      </p>
      <div class="flex justify-center gap-4 md:gap-6">
        <a
          href="#experience"
          class="relative z-0 inline-block px-6 py-3 bg-gradient-to-br from-sky-500 via-sky-600 to-sky-800 text-white rounded-full shadow-lg overflow-hidden transition-all duration-300 
               before:absolute before:inset-0 before:-z-10 before:content-[''] before:bg-gradient-to-br before:from-sky-600 before:via-sky-800 before:to-sky-500 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100"
        >
          See My Work
        </a>
        <a
          href="#contact"
          class="relative z-0 inline-block px-6 py-3 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-700 text-white rounded-full shadow-lg overflow-hidden transition-all duration-300 
               before:absolute before:inset-0 before:-z-10 before:content-[''] before:bg-gradient-to-br before:from-gray-800 before:via-gray-700 before:to-gray-800 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100"
        >
          Contact Me
        </a>
      </div>
    </div>
  {/if}
</section>
