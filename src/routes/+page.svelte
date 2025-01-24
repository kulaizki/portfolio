<script>
  import Hero from './Hero.svelte';
  import Experience from './Experience.svelte';
  import Skills from './Skills.svelte';
  import Footer from './Footer.svelte';
  import Contact from './Contact.svelte';
  import ScrollToTop from '$lib/components/ScrollToTop.svelte';
</script>

<Hero />

<div class="bg-gradient-to-br from-gray-950 via-gray-800 to-black">
  <Experience className="border-y border-gray-700 pb-16" />
  <Skills className="border-b border-gray-700 pb-16" />
  <Contact className="" />
</div>

<Footer />

<ScrollToTop />
