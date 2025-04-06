<script lang="ts">
  import SkillItem from "$lib/components/SkillItem.svelte";
  import { skills } from "$lib/constants"; // Import data
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
  class="py-20 text-white {className}"
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
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-16">Skills</h2>
      <div class="flex flex-wrap justify-center gap-4">
        {#each skills as skill}
          <SkillItem {skill} />
        {/each}
      </div>
    </div>
  {/if}
</section>
