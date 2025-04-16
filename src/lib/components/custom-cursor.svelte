<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  // Prop to control visibility externally
  export let active: boolean = false;

  type Point = { x: number; y: number; timestamp: number };
  const TRAIL_LENGTH = 15; // Number of points in the trail
  const TRAIL_DURATION = 300; // How long a point stays visible (ms)

  let trail: Point[] = [];
  let animationFrameId: number;

  function handleMouseMove(event: MouseEvent) {
    const now = performance.now();
    trail = [{ x: event.clientX, y: event.clientY, timestamp: now }, ...trail];

    if (trail.length > TRAIL_LENGTH) {
      trail = trail.slice(0, TRAIL_LENGTH);
    }
  }

  function updateTrail() {
    const now = performance.now();
    trail = trail.filter(p => now - p.timestamp < TRAIL_DURATION);
    animationFrameId = requestAnimationFrame(updateTrail);
  }

  onMount(() => {
    if (window.matchMedia('(pointer: fine)').matches) {
      document.addEventListener('mousemove', handleMouseMove);
      animationFrameId = requestAnimationFrame(updateTrail);
    } 

    return () => {
      if (window.matchMedia('(pointer: fine)').matches) {
          document.removeEventListener('mousemove', handleMouseMove);
          cancelAnimationFrame(animationFrameId);
      }
    };
  });

</script>

{#if active && trail.length > 0} 
  {#each trail as point, i (point.timestamp)} 
    {@const age = (performance.now() - point.timestamp) / TRAIL_DURATION}
    {@const opacity = (1 - age) * 0.8} 
    {@const scale = Math.max(0, 1 - age * 0.5)} 
    <div
      class="trail-point"
      style="left: {point.x}px; top: {point.y}px; opacity: {opacity}; transform: translate(-50%, -50%) scale({scale}); transition: opacity 0.1s linear, transform 0.1s linear;"
      aria-hidden="true"
    ></div>
  {/each}
{/if}

<style>
  .trail-point {
    position: fixed;
    width: 10px; 
    height: 10px;
    background-color: theme('colors.sky.400'); 
    border-radius: 50%;
    pointer-events: none;
    z-index: 9998;
    will-change: transform, opacity; 
  }

  /* Hide on touch devices */
  @media (pointer: coarse) {
    .trail-point {
      display: none;
    }
  }
</style> 