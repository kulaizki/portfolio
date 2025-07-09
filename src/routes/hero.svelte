<script lang="ts">
  import { onMount } from 'svelte';
  import CanvasCursor from '$lib/components/ui/canvas-cursor.svelte';
  import { buttonTheme, buttonContent } from '$lib/theme-config';
  import ButtonIcon from '$lib/components/button-icon.svelte';

  let isInView = $state(false);
  let applyDelay = $state(true);

  onMount(() => {
    // Start the animation shortly after the component mounts
    setTimeout(() => {
      isInView = true;
    }, 100);
    // Remove the transition delay after the initial animation completes
    setTimeout(() => {
      applyDelay = false;
    }, 1200); // Duration should be enough for all staggered animations
  });
</script>

<section
  class="bg-gradient-to-br from-black via-sky-950 to-black text-white min-h-screen flex items-center justify-center relative"
  aria-label="Hero Section"
>
  <!-- Canvas cursor effect for hero section only -->
  <CanvasCursor />
  <div class="max-w-5xl px-6 text-center">
    <h1
      class="[text-shadow:0_0_10px_rgba(0,242,255,0.5)] text-6xl md:text-9xl font-bold tracking-tight mb-6 bg-gradient-to-r from-sky-300 to-sky-600 bg-clip-text text-transparent select-none transition-all duration-700 ease-out {isInView
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-10'}"
      style={applyDelay ? 'transition-delay: 200ms' : 'transition-delay: 0ms'}
    >
      Fitzsixto
    </h1>
    <p
      class="text-xl md:text-2xl text-sky-300 [text-shadow:0_0_25px_theme(colors.sky.600)] mb-12 select-none transition-all duration-700 ease-out {isInView
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-10'}"
      style={applyDelay ? 'transition-delay: 350ms' : 'transition-delay: 0ms'}
    >
      Weaving insights from neuroscience into the world of AI and code.
    </p>
    <div class="flex flex-wrap justify-center items-center gap-6 md:gap-8">
      <div
        class="transition-all duration-500 ease-out {isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}"
        style={applyDelay ? 'transition-delay: 500ms' : 'transition-delay: 0ms'}
      >
        <a
          href="#experience"
          class="group relative z-0 inline-flex items-center gap-2 px-6 py-3 text-white rounded-full shadow-lg overflow-hidden transition-all duration-300 {buttonTheme.primary} hover:shadow-xl"
          title="Explore my experience"
        >
          {#if buttonContent.primary.icon !== 'none'}
            <ButtonIcon icon={buttonContent.primary.icon} class="fill-white" />
          {/if}
          {#if buttonContent.primary.text}
            {buttonContent.primary.text}
          {/if}
        </a>
      </div>
      <div
        class="transition-all duration-500 ease-out {isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}"
        style={applyDelay ? 'transition-delay: 650ms' : 'transition-delay: 0ms'}
      >
        <a
          href="#contact"
          class="group relative z-0 inline-flex items-center gap-2 px-6 py-3 rounded-full shadow-lg overflow-hidden transition-all duration-300 {buttonTheme.secondary}"
          title="Get in touch"
        >
          {#if buttonContent.secondary.icon !== 'none'}
            <ButtonIcon icon={buttonContent.secondary.icon} class="fill-current transition-colors duration-300" />
          {/if}
          {#if buttonContent.secondary.text}
            {buttonContent.secondary.text}
          {/if}
        </a>
      </div>
      <div
        class="transition-all duration-500 ease-out {isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}"
        style={applyDelay ? 'transition-delay: 800ms' : 'transition-delay: 0ms'}
      >
        <a
          href="https://github.com/kulaizki"
          target="_blank"
          rel="noopener noreferrer"
          class="group relative z-0 inline-flex items-center gap-2 px-6 py-3 rounded-full shadow-lg overflow-hidden transition-all duration-300 {buttonTheme.tertiary}"
          title="Check out my code on GitHub"
        >
          {#if buttonContent.tertiary.icon !== 'none'}
            <ButtonIcon icon={buttonContent.tertiary.icon} class="fill-current transition-colors duration-300" />
          {/if}
          {#if buttonContent.tertiary.text}
            {buttonContent.tertiary.text}
          {/if}
        </a>
      </div>
    </div>
  </div>
</section>