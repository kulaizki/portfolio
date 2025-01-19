<script>
  import TechItem from "$lib/components/TechItem.svelte";
</script>

<section id="technologies" class="py-12 bg-gray-100 text-gray-900">
  <div class="max-w-6xl mx-auto px-6">
    <h2 class="text-3xl md:text-4xl font-bold text-center mb-8">Technologies</h2>
    <div class="flex flex-wrap justify-center gap-6">
      <TechItem techName="Typescript" />
      <TechItem techName="Node.js" />
      <TechItem techName="Python" />
      <TechItem techName="React" />
      <TechItem techName="Svelte" />
      <TechItem techName="PostgreSQL" />
    </div>
  </div>
</section>