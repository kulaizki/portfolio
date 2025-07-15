<script lang="ts">
  import { inview } from 'svelte-inview';
  
  let isInView = false;
  let hasAnimated = false;
  let applyDelay = true;
</script>

<section
  id="currently-working"
  class="py-20 px-6 md:px-12 lg:px-24 xl:px-32 relative overflow-hidden"
  aria-label="Currently Working On"
  use:inview={{ unobserveOnEnter: true, threshold: 0.1 }}
  on:inview_change={(event) => {
    if (event.detail.inView && !hasAnimated) {
      isInView = true;
      hasAnimated = true;
      setTimeout(() => {
        applyDelay = false;
      }, 1200);
    }
  }}
>
  <div class="mx-auto max-w-6xl px-6">
    <h2 class="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-sky-300 to-sky-500 bg-clip-text text-transparent pb-1">Currently Working On</h2>
    <p class="text-lg text-gray-400 mb-12">Building AI-powered customer support solutions.</p>
  </div>

  <div class="mx-auto max-w-4xl px-6">
    <!-- Compact Bar Layout -->
    <div class="bg-gray-900/10 border border-gray-800/50 rounded-lg p-4 md:p-6 transition-all duration-700 ease-out {isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}"
      style={applyDelay ? 'transition-delay: 300ms' : 'transition-delay: 0ms'}>
      <div class="flex flex-col sm:flex-row sm:items-center gap-4">
        <div class="flex-1">
          <div class="flex items-center gap-3 mb-2">
            <h3 class="text-lg font-bold text-white">ChatEasy</h3>
            <span class="text-xs text-green-400">• Active</span>
          </div>
          <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm text-gray-400">
            <span>AI Support Platform</span>
            <span class="hidden sm:inline">•</span>
            <span>75% Complete</span>
            <span class="hidden sm:inline">•</span>
            <span class="text-xs sm:text-sm">Next.js • TypeScript • Gemini</span>
          </div>
        </div>
        <a href="https://chateasy.fitzsixto.com/" target="_blank" rel="noopener noreferrer" 
          class="self-start sm:self-auto px-4 py-2 bg-sky-900/30 text-sky-300 rounded-md hover:bg-sky-900/50 transition-colors text-sm">
          Demo
        </a>
      </div>
    </div>
  </div>
</section>