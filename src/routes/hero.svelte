<script lang="ts">
  import { onMount } from 'svelte';
  import CanvasCursor from '$lib/components/ui/canvas-cursor.svelte';
  import { buttonTheme, buttonContent } from '$lib/theme-config';
  import ButtonIcon from '$lib/components/button-icon.svelte';

  let isInView = $state(false);
  let applyDelay = $state(true);

  onMount(() => {
    // Wait for intro loader to complete before starting hero animations
    // The intro loader duration is ~2200ms, so we start after that
    setTimeout(() => {
      isInView = true;
    }, 2400);

    // Remove the transition delay after the initial animation completes
    setTimeout(() => {
      applyDelay = false;
    }, 4000);
  });
</script>

<section
  id="top"
  class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950"
  aria-label="Hero Section"
>
  <!-- Background Effects -->
  <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(56,189,248,0.1),rgba(0,0,0,0))]"></div>
  <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

  <!-- Canvas cursor effect for hero section only -->
  <CanvasCursor />

  <div class="relative z-10 max-w-5xl px-6 text-center">
    <!-- Title with smooth blur and slide animation -->
    <h1
      class="text-7xl md:text-9xl font-bold tracking-tight mb-8 text-white select-none
             transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]
             {isInView ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-sm'}"
      style={applyDelay ? 'transition-delay: 0ms' : 'transition-delay: 0ms'}
    >
      Fitzsixto
    </h1>

    <!-- Subtitle with smooth fade and slide -->
    <p
      class="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed select-none
             transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)]
             {isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}"
      style={applyDelay ? 'transition-delay: 200ms' : 'transition-delay: 0ms'}
    >
      Building tools for better thinking.
    </p>

    <!-- Buttons with smooth scale and fade -->
    <div class="flex flex-wrap justify-center items-center gap-6">
      <div
        class="transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]
               {isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}"
        style={applyDelay ? 'transition-delay: 400ms' : 'transition-delay: 0ms'}
      >
        <a
          href="#experience"
          class="group relative inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition-all duration-300 hover:scale-105"
        >
          Explore Work
        </a>
      </div>

      <div
        class="transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]
               {isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}"
        style={applyDelay ? 'transition-delay: 500ms' : 'transition-delay: 0ms'}
      >
        <a
          href="#contact"
          class="group relative inline-flex items-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-full text-sm font-medium hover:bg-white/10 transition-all duration-300 hover:scale-105"
        >
          Get in Touch
        </a>
      </div>
    </div>
  </div>
</section>
