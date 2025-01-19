<script>
  import Hero from './Hero.svelte';
  import Experience from './Experience.svelte';
  import Technologies from './Technologies.svelte';
  import Footer from './Footer.svelte';
  import Contact from './Contact.svelte';
</script>

<Hero />

<div class="bg-gradient-to-br from-gray-900 via-gray-800 to-black">
  <Experience className="border-y border-gray-700 pb-16" />
  <Technologies className="border-b border-gray-700 pb-16" />
  <Contact className="pb-16" />
</div>

<Footer />
