<script>
  import ExperienceCard from '$lib/components/ExperienceCard.svelte';
</script>

<section class="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen flex items-center justify-center">
  <div class="max-w-4xl px-6 flex flex-col md:flex-row items-center text-center md:gap-6">
    <div class="flex flex-col items-center">
      <h1 class="text-4xl md:text-6xl font-bold md:whitespace-nowrap">
        Hi, I'm <span class="text-blue-500">Fitz Angelo</span>
      </h1>
      <p class="mt-4 text-lg md:text-xl text-gray-300 md:whitespace-nowrap">
        A developer with a passion for problem-solving and psychology.
      </p>

      <div class="mt-6 flex justify-center md:justify-start space-x-4">
        <a
          href="#experience"
          class="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          See My Work
        </a>
        <a
          href="#contact"
          class="px-6 py-3 bg-gray-700 text-white rounded-lg shadow-md hover:bg-gray-600 transition"
        >
          Contact Me
        </a>
      </div>
    </div>
  </div>
</section>

<section id="experience" class="py-12 bg-gray-100 text-gray-900">
  <div class="max-w-6xl mx-auto px-6">
    <h2 class="text-3xl md:text-4xl font-bold text-center mb-8">Experience</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Replacing divs with ExperienceCard component -->
      <ExperienceCard
        title="Software Engineer"
        company="Farmtri"
        date="Aug 2024 - Mar 2025"
        responsibilities={[
          'Developed and optimized the company website.',
          'Managed full-stack development and hosting.'
        ]}
        link="https://farmtri.con"
      />
      
      <ExperienceCard
        title="Mobile Developer"
        company="Fit Senpai"
        date="Aug 2024 - Nov 2024"
        responsibilities={[
          'Led mobile app development and architecture.',
          'Implemented core features for mobile applications.'
        ]}
      />
      
      <ExperienceCard
        title="Lead"
        company="GDGoC San Carlos"
        date="Aug 2023 - Present"
        responsibilities={[
          'Organized workshops and technical presentations.',
          'Secured partnerships and sponsorships, including Datacamp.'
        ]}
      />
      
      <ExperienceCard
        title="Software Developer Intern"
        company="Symph"
        date="Jun 2024 - Aug 2024"
        responsibilities={[
          'Contributed to unit testing and workflow optimization.',
          'Worked on multiple software development projects.'
        ]}
      />
      
      <ExperienceCard
        title="UI/UX Designer"
        company="Rethinkable"
        date="Oct 2023 - Jan 2024"
        responsibilities={[
          'Designed and implemented UI/UX improvements.',
          'Enhanced digital assets and presentation platforms.'
        ]}
      />
    </div>
  </div>
</section>

<section id="technologies" class="py-12 bg-gray-900 text-white">
  <div class="max-w-6xl mx-auto px-6">
    <h2 class="text-3xl md:text-4xl font-bold text-center mb-8">Technologies</h2>
    <div class="flex flex-wrap justify-center gap-4">
      <div class="px-4 py-2 bg-gray-800 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition-all duration-300">
        Typescript
      </div>
      <div class="px-4 py-2 bg-gray-800 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition-all duration-300">
        Node.js
      </div>
      <div class="px-4 py-2 bg-gray-800 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition-all duration-300">
        Python
      </div>
      <div class="px-4 py-2 bg-gray-800 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition-all duration-300">
        React
      </div>
      <div class="px-4 py-2 bg-gray-800 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition-all duration-300">
        Svelte
      </div>
      <div class="px-4 py-2 bg-gray-800 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition-all duration-300">
        PostgreSQL
      </div>
    </div>
  </div>
</section>

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
