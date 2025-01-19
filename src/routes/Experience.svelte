<script>
  import ExperienceCard from '$lib/components/ExperienceCard.svelte';
</script>

<section id="experience" class="py-20 bg-gradient-to-b from-slate-900 via-sky-600 to-sky-900 text-gray-100">
  <div class="max-w-6xl mx-auto px-6">
    <h2 class="text-3xl md:text-4xl font-bold text-center mb-16">Experience</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <ExperienceCard
        title="Software Engineer"
        company="Farmtri"
        date="Aug 2024 - Mar 2025"
        responsibilities={[ 
          'Architectured, developed, and optimized the company website.',
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
