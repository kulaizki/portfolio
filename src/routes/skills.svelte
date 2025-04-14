<script lang="ts">
  import SkillItem from "$lib/components/skill-item.svelte";
  import { skills } from "$lib/constants"; 
  export let className: string = '';
  import { cubicOut } from "svelte/easing";
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
  id="skills" 
  class="py-20 text-white overflow-hidden {className}"
	use:inview={{ threshold: 0.1 }}
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
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-sky-300 to-sky-500 bg-clip-text text-transparent pb-1">Skills</h2>
      <p class="text-center text-lg text-gray-400 mb-12">Technologies and tools I frequently use.</p> 
    </div>
    
    <div class="relative flex" aria-label="Scrolling skill icons">
      <div class="marquee">
        <div class="marquee-content scroll-left py-2">
          {#each skills as skill (skill.name)}
            <SkillItem {skill} />
          {/each}
          {#each skills as skill (skill.name + '-clone')}
            <SkillItem {skill} />
          {/each}
        </div>
      </div>
    </div>
  {/if}
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
    width: max-content; /* Fit all items */
    flex-shrink: 0;
    align-items: center;
    will-change: transform; /* Performance hint */
  }

  .scroll-left {
    animation: scroll-left 40s linear infinite;
  }

  @keyframes scroll-left {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-50%); } /* Scroll by half the duplicated width */
  }

  /* Optional: Pause on hover */
  .marquee:hover .marquee-content {
    animation-play-state: paused;
  }
</style>
