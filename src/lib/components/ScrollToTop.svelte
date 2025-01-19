<script>
  import { onMount } from 'svelte';
  let isVisible = false;

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onMount(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight;
      const scrollHeight = document.body.scrollHeight;

      isVisible = scrollY >= scrollHeight - 100;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<button
  type="button"
  class={`fixed bottom-20 right-6 z-50 w-12 h-12 flex items-center justify-center hover:bg-sky-700 rounded-full bg-sky-600 text-white shadow-lg transform transition-all duration-300 ${
    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
  }`}
  on:click={scrollToTop}
  aria-label="Back to Top"
>
  ↑
</button>