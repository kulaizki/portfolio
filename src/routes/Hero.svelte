<script>
  import { fly } from 'svelte/transition';
  import { onMount } from 'svelte';

  let show = false;

  onMount(() => {
    show = true;
  });
</script>

<section class="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen flex items-center justify-center">
  {#if show}
    <div
      class="max-w-4xl px-6 text-center"
      in:fly={{ y: 100, duration: 1000 }}
    >
      <h1 class="text-4xl md:text-7xl font-bold tracking-tight mb-4">
        Hi, I'm <span class="text-sky-400">Fitz Angelo</span>
      </h1>
      <p class="text-lg md:text-xl text-gray-300 mb-6">
        A developer with a passion for problem-solving and psychology.
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
