<script lang="ts">
  import { Canvas, T } from '@threlte/core';
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import SpinningShape from './spinning-shape.svelte';

  interface Props {
    duration?: number;
    onComplete?: () => void;
  }

  let { duration = 2200, onComplete }: Props = $props();

  let visible = $state(true);
  let mounted = $state(false);
  let scale = $state(0.2);
  let opacity = $state(1);

  // Custom smooth easing
  function easeOutExpo(t: number): number {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  }

  function easeInOutQuart(t: number): number {
    return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
  }

  onMount(() => {
    mounted = true;

    const startTime = Date.now();
    const growEnd = duration * 0.55;       // Grow until 55%
    const holdEnd = duration * 0.7;        // Hold until 70%
    const shrinkFadeEnd = duration;        // Shrink and fade until end

    const animate = () => {
      const elapsed = Date.now() - startTime;

      if (elapsed < growEnd) {
        // Grow phase: 0.2 -> 1.0 with smooth expo easing
        const progress = elapsed / growEnd;
        const eased = easeOutExpo(progress);
        scale = 0.2 + eased * 0.8;
        opacity = 1;
      } else if (elapsed < holdEnd) {
        // Hold phase: maintain scale
        scale = 1.0;
        opacity = 1;
      } else if (elapsed < shrinkFadeEnd) {
        // Shrink and fade phase: 1.0 -> 1.3 scale, 1 -> 0 opacity
        const progress = (elapsed - holdEnd) / (shrinkFadeEnd - holdEnd);
        const eased = easeInOutQuart(progress);
        scale = 1.0 + eased * 0.3;
        opacity = 1 - eased;
      }

      if (elapsed < duration) {
        requestAnimationFrame(animate);
      } else {
        visible = false;
        onComplete?.();
      }
    };
    requestAnimationFrame(animate);
  });
</script>

{#if visible}
  <div
    class="fixed inset-0 z-[100] bg-gray-950 flex items-center justify-center"
    style="opacity: {opacity}; transition: opacity 100ms ease-out;"
  >
    <!-- Subtle radial glow -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(56,189,248,0.05),rgba(0,0,0,0))]"></div>

    <!-- 3D Canvas -->
    {#if browser && mounted}
      <div
        class="w-72 h-72 md:w-96 md:h-96"
        style="transform: scale({scale}); opacity: {Math.min(1, opacity * 1.2)};"
      >
        <Canvas>
          <T.AmbientLight intensity={0.2} />
          <T.PointLight position={[5, 5, 5]} intensity={0.8} color="#38bdf8" />
          <T.PointLight position={[-5, -5, 5]} intensity={0.4} color="#7dd3fc" />
          <SpinningShape />
        </Canvas>
      </div>
    {/if}
  </div>
{/if}
