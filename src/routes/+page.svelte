<script lang="ts">
  import Hero from './hero.svelte';
  import CurrentlyWorking from './currently-working.svelte';
  import Experience from './experience.svelte';
  import ExperienceVariations from './experience-variations.svelte';
  import Skills from './skills.svelte';
  import Projects from './projects.svelte';
  import Footer from './footer.svelte';
  import Contact from './contact.svelte';
  import ScrollToTop from '$lib/components/scroll-to-top.svelte';
</script>

<Hero />

<div class="bg-gradient-to-br from-gray-950 via-gray-900 to-black">
  <CurrentlyWorking />
  <Skills className="border-y border-gray-700 pb-16" />
  <!-- <Experience className="border-b border-gray-700 pb-16" /> -->
  <ExperienceVariations className="border-b border-gray-700 pb-16" />
  <Projects className="border-b border-gray-700 pb-16" />
  <Contact className="" />
</div>

<Footer />

<ScrollToTop />
