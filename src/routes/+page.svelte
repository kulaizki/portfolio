<script>
  import ExperienceCard from '$lib/components/ExperienceCard.svelte';
  import TechItem from '$lib/components/TechItem.svelte';
</script>

<!-- Hero -->
<section class="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen flex items-center justify-center">
  <div class="max-w-4xl px-6 text-center">
    <h1 class="text-4xl md:text-7xl font-bold tracking-tight mb-4">
      Hi, I'm <span class="text-blue-500">Fitz Angelo</span>
    </h1>
    <p class="text-lg md:text-xl text-gray-300 mb-6">
      A developer with a passion for problem-solving and psychology.
    </p>
    <div class="flex justify-center gap-6">
      <a
        href="#experience"
        class="px-6 py-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300"
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
</section>

<!-- Experience -->
<section id="experience" class="py-12 bg-white text-gray-900">
  <div class="max-w-6xl mx-auto px-6">
    <h2 class="text-3xl md:text-4xl font-bold text-center mb-8">Experience</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <ExperienceCard
        title="Software Engineer"
        company="Farmtri"
        date="Aug 2024 - Mar 2025"
        responsibilities={[
          'Developed and optimized the company website.',
          'Managed full-stack development and hosting.'
        ]}
        link="https://farmtri.com"
      />
      <ExperienceCard
        title="Mobile Developer"
        company="Fit Senpai"
        date="Aug 2024 - Nov 2024"
        responsibilities={[
          'Led mobile app development and architecture.',
          'Implemented core features for mobile applications.'
        ]}
        link="https://www.fitsenpai.com/"
      />
      <ExperienceCard
        title="Lead"
        company="GDGoC San Carlos"
        date="Aug 2023 - Present"
        responsibilities={[
          'Organized workshops and technical presentations.',
          'Secured partnerships and sponsorships, including Datacamp.'
        ]}
        link="https://gdg.community.dev/gdg-on-campus-university-of-san-carlos-cebu-philippines/"
      />
      <ExperienceCard
        title="Software Developer Intern"
        company="Symph"
        date="Jun 2024 - Aug 2024"
        responsibilities={[
          'Contributed to unit testing and workflow optimization.',
          'Worked on multiple software development projects.'
        ]}
        link="https://www.symph.co/"
      />
      <ExperienceCard
        title="UI/UX Designer"
        company="Rethinkable"
        date="Oct 2023 - Jan 2024"
        responsibilities={[
          'Designed and implemented UI/UX improvements.',
          'Enhanced digital assets and presentation platforms.'
        ]}
        link="https://rethinkable.xyz/"
      />
    </div>
  </div>
</section>

<!-- Technologies -->
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

<section id="contact" class="py-12 bg-gray-900 text-white">
  <div class="max-w-6xl mx-auto px-6 flex flex-col items-center justify-center text-center">
    <h2 class="text-3xl md:text-4xl font-bold mb-10">Contact Me</h2>
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

<!-- Footer -->
<footer class="py-6 bg-gray-800 text-white">
  <div class="max-w-6xl mx-auto px-6 flex justify-center items-center">
    <p class="text-sm">
      &copy; 2025 <a
        href="https://github.com/kulaizki"
        target="_blank"
        rel="noopener noreferrer"
        class="font-bold text-blue-400 hover:underline"
      >
        kulaizki
      </a>. All rights reserved.
    </p>
  </div>
</footer>
