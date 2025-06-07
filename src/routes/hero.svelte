<script lang="ts">
  import { onMount } from 'svelte';

  export let onEnter: () => void;
  export let onLeave: () => void;

  let isInView = false;
  let applyDelay = true;

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
  class="bg-gradient-to-br from-black via-sky-950 to-black text-white min-h-screen flex items-center justify-center"
  on:mouseenter={onEnter}
  on:mouseleave={onLeave}
  aria-label="Hero Section"
>
  <div class="max-w-4xl px-6 text-center">
    <h1
      class="[text-shadow:0_0_8px_rgba(0,242,255,0.4)] text-5xl md:text-8xl font-bold tracking-tight mb-4 bg-gradient-to-r from-sky-300 to-sky-600 bg-clip-text text-transparent select-none transition-all duration-700 ease-out {isInView
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-10'}"
      style={applyDelay ? 'transition-delay: 200ms' : 'transition-delay: 0ms'}
    >
      Fitzsixto
    </h1>
    <p
      class="text-lg md:text-xl text-gray-400 mb-8 select-none transition-all duration-700 ease-out {isInView
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-10'}"
      style={applyDelay ? 'transition-delay: 350ms' : 'transition-delay: 0ms'}
    >
      A developer with a passion for problem-solving and neuroscience.
    </p>
    <div class="flex flex-wrap justify-center items-center gap-4 md:gap-6">
      <div
        class="transition-all duration-500 ease-out {isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}"
        style={applyDelay ? 'transition-delay: 500ms' : 'transition-delay: 0ms'}
      >
        <a
          href="#experience"
          class="group relative z-0 inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-br from-sky-600 via-sky-700 to-sky-900 text-white rounded-full shadow-md overflow-hidden transition-all duration-300 border border-sky-700 hover:border-sky-400 hover:shadow-sky-500/30 hover:shadow-lg"
          title="Explore my experience"
        >
          <svg class="w-4 h-4 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 15a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 15z" clip-rule="evenodd" />
            <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v8a1 1 0 11-2 0V6a1 1 0 011-1z" clip-rule="evenodd" />
          </svg>
          Explore Work
        </a>
      </div>
      <div
        class="transition-all duration-500 ease-out {isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}"
        style={applyDelay ? 'transition-delay: 650ms' : 'transition-delay: 0ms'}
      >
        <a
          href="#contact"
          class="group relative z-0 inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-br from-gray-600 via-gray-700 to-gray-900 text-gray-200 rounded-full shadow-md overflow-hidden transition-all duration-300 border border-gray-600 hover:border-gray-400 hover:text-white hover:shadow-gray-500/30 hover:shadow-lg"
          title="Get in touch"
        >
          <svg class="w-4 h-4 fill-gray-300 transition-colors duration-300 group-hover:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M5 5l10 5-10 5V5z" />
          </svg>
          Say Hello
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
          class="group relative z-0 inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-br from-gray-800 via-slate-800 to-gray-800 text-gray-300 rounded-full shadow-md overflow-hidden transition-all duration-300 border border-gray-600 hover:border-sky-500 hover:text-sky-300 hover:shadow-sky-500/30 hover:shadow-lg"
          title="Check out my code on GitHub"
        >
          <svg class="w-4 h-4 transition-colors duration-300 group-hover:fill-sky-300 fill-gray-400" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          Peek the Code
        </a>
      </div>
    </div>
  </div>
</section>
