<script>
  import Hero from './hero.svelte';
  import Experience from './experience.svelte';
  import Skills from './skills.svelte';
  import Projects from './projects.svelte';
  import Footer from './footer.svelte';
  import Contact from './contact.svelte';
  import ScrollToTop from '$lib/components/scroll-to-top.svelte';
</script>

<Hero />

<div class="bg-gradient-to-br from-gray-950 via-gray-800 to-black">
  <Skills className="border-y border-gray-700 pb-16" />
  <Experience className="border-b border-gray-700 pb-16" />
  <Projects className="border-b border-gray-700 pb-16" />
  <Contact className="" />
</div>

<Footer />

<ScrollToTop />
