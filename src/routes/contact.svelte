<script lang="ts">
  export let className: string = '';
	import { inview } from 'svelte-inview';
	let isInView = false;
  let hasAnimated = false;
  let applyDelay = true;
</script>

<section
  id="contact"
  class="py-20 text-white {className}"
  use:inview={{ unobserveOnEnter: true, threshold: 0.1 }}
	on:inview_change={(event) => {
    if (event.detail.inView && !hasAnimated) {
      isInView = true;
      hasAnimated = true;
      setTimeout(() => {
        applyDelay = false;
      }, 1000);
    }
  }}
>
  <div
    class="max-w-6xl mx-auto px-6 flex flex-col items-center"
  >
    <h2
      class="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-sky-300 to-sky-500 bg-clip-text text-transparent pb-1 transition-all duration-700 ease-out {isInView
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-8'}"
      style={applyDelay ? `transition-delay: 200ms` : 'transition-delay: 0ms'}
    >
      Contact
    </h2>
    <p
      class="text-md md:text-xl text-gray-300 mb-6 text-center transition-all duration-700 ease-out {isInView
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-8'}"
      style={applyDelay ? `transition-delay: 350ms` : 'transition-delay: 0ms'}
    >
      Feel free to reach out if you'd like to connect or work together!
    </p>
    <a
      href="mailto:fitzsixto.work@gmail.com"
      class="relative z-0 inline-block px-6 py-3 bg-gradient-to-br from-sky-500 via-sky-600 to-sky-800 text-white rounded-full shadow-lg overflow-hidden transition-all duration-500 ease-out {isInView
        ? 'opacity-100 scale-100'
        : 'opacity-0 scale-90'}
             before:absolute before:inset-0 before:-z-10 before:content-[''] before:bg-gradient-to-br before:from-sky-400 before:via-sky-500 before:to-sky-700 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100"
      style={applyDelay ? `transition-delay: 500ms` : 'transition-delay: 0ms'}
    >
      Get in Touch
    </a>
  </div>
</section>
