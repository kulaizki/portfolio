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
  <div class="max-w-4xl mx-auto">
    <div class="mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-100 bg-gradient-to-r from-sky-300 to-sky-500 bg-clip-text text-transparent pb-1 mb-4 transition-all duration-700 ease-out {isInView
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-8'}">
        Currently Working On
      </h2>
      <p class="text-lg text-gray-400 transition-all duration-700 ease-out {isInView
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-8'}"
        style={applyDelay ? 'transition-delay: 150ms' : 'transition-delay: 0ms'}>
        Building AI-powered customer support solutions.
      </p>
    </div>
    
    <!-- Compact Bar Layout -->
    <div class="bg-gray-900/10 border border-gray-800/50 rounded-lg p-4 transition-all duration-700 ease-out {isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}"
      style={applyDelay ? 'transition-delay: 300ms' : 'transition-delay: 0ms'}>
      <div class="flex items-center gap-4">
        <div class="flex-1">
          <div class="flex items-center gap-3 mb-2">
            <h3 class="text-lg font-bold text-white">ChatEasy</h3>
            <span class="text-xs text-green-400">• Active</span>
          </div>
          <div class="flex items-center gap-6 text-sm text-gray-400">
            <span>AI Support Platform</span>
            <span>75% Complete</span>
            <span>Next.js • TypeScript • Gemini</span>
          </div>
        </div>
        <a href="https://chateasy-labs.vercel.app/" target="_blank" rel="noopener noreferrer" 
          class="px-4 py-2 bg-sky-900/30 text-sky-300 rounded-md hover:bg-sky-900/50 transition-colors text-sm">
          Demo
        </a>
      </div>
    </div>
  </div>
</section>