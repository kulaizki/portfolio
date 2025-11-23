<script lang="ts">
  import SkillItem from "$lib/components/skill-item.svelte";
  import { skills } from "$lib/constants";
  export let className: string = '';
  import { inview } from 'svelte-inview';
	let isInView = false;
  let hasAnimated = false;

  const skillsRow1 = skills.slice(0, Math.ceil(skills.length / 2));
  const skillsRow2 = skills.slice(Math.ceil(skills.length / 2));
</script>

<section
  id="skills"
  class="py-32 text-white overflow-hidden {className}"
	use:inview={{ threshold: 0.1, unobserveOnEnter: true }}
	on:inview_change={(event) => {
    if (event.detail.inView && !hasAnimated) {
      isInView = true;
      hasAnimated = true;
    }
  }}
>
  <div class="mx-auto max-w-6xl px-6 mb-16">
    <div class="transition-all duration-1000 ease-out {isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}">
      <h2 class="mb-6 text-4xl font-bold text-white md:text-5xl tracking-tight">Skills & Tools</h2>
      <p class="text-xl text-gray-400 max-w-2xl font-light leading-relaxed">Technologies I work with to bring ideas to life.</p>
    </div>
  </div>

  <div
    class="relative flex flex-col gap-4 transition-opacity duration-1000 {isInView ? 'opacity-100' : 'opacity-0'}"
    aria-label="Scrolling skill icons"
  >
    <div class="py-2 marquee">
      <div class="marquee-content scroll-left">
        {#each skillsRow1 as skill (skill.name)} <SkillItem {skill} /> {/each}
        {#each skillsRow1 as skill (skill.name + '-clone1')} <SkillItem {skill} /> {/each}
        {#each skillsRow1 as skill (skill.name + '-clone2')} <SkillItem {skill} /> {/each}
        {#each skillsRow1 as skill (skill.name + '-clone3')} <SkillItem {skill} /> {/each}
      </div>
    </div>

    <div class="py-2 marquee">
      <div class="marquee-content scroll-right">
        {#each skillsRow2 as skill (skill.name)} <SkillItem {skill} /> {/each}
        {#each skillsRow2 as skill (skill.name + '-clone1b')} <SkillItem {skill} /> {/each}
        {#each skillsRow2 as skill (skill.name + '-clone2b')} <SkillItem {skill} /> {/each}
        {#each skillsRow2 as skill (skill.name + '-clone3b')} <SkillItem {skill} /> {/each}
      </div>
    </div>

  </div>
</section>

<style>
  .marquee {
    width: 100%;
    overflow: hidden;
    position: relative;
    -webkit-mask-image: linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%);
    mask-image: linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%);
 }

  .marquee-content {
    display: flex;
    width: max-content; 
    flex-shrink: 0;
    align-items: center;
    will-change: transform; 
  }

  .scroll-left {
    animation: scroll-left 40s linear infinite;
  }

  .scroll-right {
    animation: scroll-right 40s linear infinite;
  }

  @keyframes scroll-left {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-25%); }
  }

  @keyframes scroll-right {
    0% { transform: translateX(-25%); }
    100% { transform: translateX(0%); }
  }

  .marquee:hover .marquee-content {
    animation-play-state: paused;
  }
</style>
