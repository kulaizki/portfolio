<script>
  import Hero from './Hero.svelte';
  import Experience from './Experience.svelte';
  import Technologies from './Technologies.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<Hero />
<Experience />
<Technologies />

<section id="contact" class="py-12 bg-gray-900 text-white">
  <div class="max-w-6xl mx-auto px-6 flex flex-col items-center justify-center text-center">
    <h2 class="text-3xl md:text-4xl font-bold mb-8">Contact Me</h2>
    <p class="text-lg md:text-xl text-gray-300 mb-6">
      Feel free to reach out if you'd like to connect or work together!
    </p>
    <a
      href="mailto:fitzsixto.work@gmail.com"
      class="px-6 py-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300"
    >
      Get in Touch
    </a>
  </div>
</section>

<Footer />
