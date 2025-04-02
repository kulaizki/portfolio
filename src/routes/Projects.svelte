<script lang="ts">
  export let className: string = '';

  const projects = [
    {
      name: 'nexleague',
      description: 'An AI-powered League of Legends profile analyzer providing personalized performance insights & coaching.',
      url: 'https://nexleague.vercel.app/'
    },
    {
      name: 'z1',
      description: 'An AI-powered Dota 2 profile analyzer providing personalized performance insights & coaching.',
      url: 'https://z1-dota.vercel.app/'
    },
    {
      name: 'Neurotypical vs. ASD',
      description: 'An app that visualizes Neurotypical vs. Autism Brain Disorder Brain Connectivity using the Harvard-Oxford atlases.',
      url: 'https://neurotypical-vs-asd.streamlit.app/'
    }
  ];
</script>

<section id="projects" class={`container mx-auto px-4 py-16 ${className}`}>
  <h2 class="mb-8 text-center text-3xl font-bold text-gray-100 md:text-4xl">Projects</h2>
  <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
    {#each projects as project}
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        class="block transform rounded-lg border border-gray-700 bg-gray-800 p-6 shadow-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:border-cyan-500 hover:bg-gray-700"
      >
        <h3 class="mb-2 text-xl font-semibold text-gray-100">{project.name}</h3>
        <p class="text-gray-400">{project.description}</p>
      </a>
    {/each}
  </div>
</section> 