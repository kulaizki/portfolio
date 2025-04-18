<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  export let active: boolean = false;

  type Point = { x: number; y: number; timestamp: number };
  const TRAIL_LENGTH = 100; 
  const TRAIL_DURATION = 600; 

  const skyColors = {
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
  };
  const colorShades = [skyColors[300], skyColors[400], skyColors[500], skyColors[400]]; 

  let trail: Point[] = [];
  let animationFrameId: number;

  function handleMouseMove(event: MouseEvent) {
    const now = performance.now();
    trail = [{ x: event.clientX, y: event.clientY, timestamp: now }, ...trail];
    
    // Trim the trail if it exceeds the max length
    if (trail.length > TRAIL_LENGTH) {
      trail = trail.slice(0, TRAIL_LENGTH);
    }
  }

  function updateTrail() {
    const now = performance.now();
    // Filter out points that have exceeded the duration
    trail = trail.filter(p => now - p.timestamp < TRAIL_DURATION);
    animationFrameId = requestAnimationFrame(updateTrail);
  }

  onMount(() => {
    // Only run on devices with fine pointers 
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
    {@const opacity = Math.max(0, (1 - age) * 0.7)} 
    {@const scale = Math.max(0, 1 - age * 0.4)} 
    
    {@const colorIndex = i % colorShades.length} 
    {@const selectedColor = colorShades[colorIndex]}

    {@const shapeIndex = i % 3} // 0: triangle, 1: square, 2: circle

    {@const isTriangle = shapeIndex === 0}
    {@const isSquare = shapeIndex === 1}
    {@const isCircle = shapeIndex === 2}

    <div
      class="trail-point"
      class:shape-triangle={isTriangle}
      class:shape-square={isSquare}
      class:shape-circle={isCircle}
      style="left: {point.x}px; 
             top: {point.y}px; 
             opacity: {opacity}; 
             transform: translate(-50%, -50%) scale({scale}); 
             background-color: {isTriangle ? 'transparent' : selectedColor};
             border-bottom-color: {isTriangle ? selectedColor : 'transparent'};" 
      aria-hidden="true"
    ></div>
  {/each}
{/if}

<style>
  .trail-point {
    position: fixed;
    pointer-events: none;
    z-index: 9998;
    will-change: transform, opacity, background-color, border-bottom-color;
  }

  .shape-triangle {
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom-width: 14px;
    border-bottom-style: solid;
  }

  .shape-square {
    width: 12px; 
    height: 12px;
  }

  .shape-circle {
    width: 12px; 
    height: 12px;
    border-radius: 50%;
  }

  /* Hide on touch devices */
  @media (pointer: coarse) {
    .trail-point, .shape-triangle, .shape-square, .shape-circle {
      display: none;
    }
  }
</style> 