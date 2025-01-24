<script lang="ts">
	import ExperienceCard from '$lib/components/ExperienceCard.svelte';
	export let className: string = '';
	import { cubicOut } from 'svelte/easing';
	import { inview } from 'svelte-inview';
	let isInView = false;
	let hasAnimated = false;

	function blurFly(node: HTMLElement, params: { 
    delay?: number, 
    duration?: number, 
    easing?: (t: number) => number 
  } = {}): { 
    delay: number, 
    duration: number, 
    easing: (t: number) => number, 
    css: (t: number) => string 
  } {
    const existingTransform = getComputedStyle(node).transform.replace('none', '');
    return {
      delay: params.delay || 0,
      duration: params.duration || 1000,
      easing: params.easing || cubicOut,
      css: (t: number) => `
        transform: ${existingTransform} translateY(${(1 - t) * 100}px);
        opacity: ${t};
        filter: blur(${(1 - t) * 10}px);
      `
    };
  }
</script>

<section
	id="experience"
	class="py-20 text-gray-100 {className}"
	use:inview={{ threshold: 0.3 }}
	on:inview_change={(event) => {
    if (!hasAnimated) {
      isInView = event.detail.inView;
      if (isInView) hasAnimated = true;
    }
	}}
>
	{#if isInView}
		<div 
			class="mx-auto max-w-6xl px-6" 
			transition:blurFly
		>
			<h2 class="mb-16 text-center text-3xl font-bold md:text-4xl">Experience</h2>
			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				<ExperienceCard
					title="Software Engineer"
					company="Farmtri"
					date="Aug 2024 - Mar 2025"
					responsibilities={[
						'Architectured, developed, and optimized the company website.',
						'Managed full-stack development and hosting.'
					]}
					link="https://farmtri.com"
					imageUrl="/images/farmtri-banner.png"
				/>
				<ExperienceCard
					title="Mobile Developer"
					company="Fit Senpai"
					date="Aug 2024 - Nov 2024"
					responsibilities={[
						'Led mobile app development and software architecture.',
						'Implemented core features for the company mobile application.'
					]}
					link="https://www.fitsenpai.com/"
					imageUrl="/images/fitsenpai-banner.png"
				/>
				<ExperienceCard
					title="Software Developer Intern"
					company="Symph"
					date="Jun 2024 - Aug 2024"
					responsibilities={[
						'Worked on multiple software development projects.',
						'Contributed to full-stack dev, testing, and workflow optimization.'
					]}
					link="https://www.symph.co/"
					imageUrl="/images/symph-banner.png"
				/>
				<ExperienceCard
					title="UI/UX Designer"
					company="Rethinkable"
					date="Oct 2023 - Jan 2024"
					responsibilities={[
						'Designed and implemented UI/UX designs and prototypes.',
						'Secured designs and presentations loved by company stakeholders.'
					]}
					link="https://rethinkable.xyz/"
					imageUrl="/images/rethinkable-banner.jpg"
				/>
				<ExperienceCard
					title="Lead"
					company="Google Developer Groups on Campus - San Carlos"
					date="Aug 2023 - Present"
					responsibilities={[
						'Spearheaded 20+ workshops and events covering a wide range of topics',
						'Secured partnerships and sponsorships, including Datacamp.'
					]}
					link="https://gdg.community.dev/gdg-on-campus-university-of-san-carlos-cebu-philippines/"
					imageUrl="/images/gdgoc-pfp.png"
				/>
			</div>
		</div>
	{/if}
</section>
