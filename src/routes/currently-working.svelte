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
  <div class="max-w-6xl mx-auto relative z-10">
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
        My latest endeavor in AI-powered solutions.
      </p>
    </div>
    
    <div class="grid grid-cols-1 gap-6">
      <div class="group relative bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/20 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-sky-600/50 transition-all duration-500 {isInView
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-8'}"
        style={applyDelay ? 'transition-delay: 300ms' : 'transition-delay: 0ms'}>
        
        <!-- Gradient accent on hover -->
        <div class="absolute inset-0 bg-gradient-to-br from-sky-600/0 via-sky-500/0 to-sky-400/0 group-hover:from-sky-600/10 group-hover:via-sky-500/5 group-hover:to-sky-400/0 transition-all duration-500"></div>
        
        <div class="relative p-8">
          <div class="flex items-start gap-6">
            <!-- Icon -->
            <div class="flex-shrink-0">
              <div class="relative">
                <div class="absolute inset-0 bg-gradient-to-br from-sky-500 to-sky-700 rounded-xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                <div class="relative w-14 h-14 bg-gradient-to-br from-sky-500 to-sky-700 rounded-xl flex items-center justify-center shadow-xl">
                  <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            <!-- Content -->
            <div class="flex-1">
              <div class="flex items-start justify-between mb-3">
                <h3 class="text-2xl font-bold text-white group-hover:text-sky-300 transition-colors duration-300">ChatEasy</h3>
                <span class="px-3 py-1 bg-gradient-to-r from-green-600/20 to-emerald-600/20 text-green-400 rounded-full text-xs font-medium border border-green-600/30">
                  Active Development
                </span>
              </div>
              
              <p class="text-gray-300 mb-6 leading-relaxed">
                Building an AI-powered customer support chatbot platform that helps businesses automate up to 80% of their support operations. 
                The platform features seamless integration with 20+ platforms, real-time analytics, and multi-language support - all with zero coding required.
              </p>
              
              <!-- Tech Stack -->
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="px-3 py-1.5 bg-gray-800/50 text-gray-300 rounded-lg text-sm border border-gray-700/50 group-hover:border-gray-600 transition-colors duration-300">Next.js</span>
                <span class="px-3 py-1.5 bg-gray-800/50 text-gray-300 rounded-lg text-sm border border-gray-700/50 group-hover:border-gray-600 transition-colors duration-300">TypeScript</span>
                <span class="px-3 py-1.5 bg-gray-800/50 text-gray-300 rounded-lg text-sm border border-gray-700/50 group-hover:border-gray-600 transition-colors duration-300">Gemini</span>
                <span class="px-3 py-1.5 bg-gray-800/50 text-gray-300 rounded-lg text-sm border border-gray-700/50 group-hover:border-gray-600 transition-colors duration-300">Supabase</span>
                <span class="px-3 py-1.5 bg-gray-800/50 text-gray-300 rounded-lg text-sm border border-gray-700/50 group-hover:border-gray-600 transition-colors duration-300">Tailwind CSS</span>
              </div>
              
              <!-- Links -->
              <div class="flex items-center gap-4">
                <a
                  href="https://chateasy-labs.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-all duration-300 group/link"
                >
                  <span class="relative">
                    View Live Demo
                    <span class="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-sky-400 group-hover/link:w-full transition-all duration-300"></span>
                  </span>
                  <svg class="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <!-- Progress indicator -->
          <div class="mt-6 pt-6 border-t border-gray-700/50">
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm text-gray-400">Development Progress</span>
              <span class="text-sm text-sky-400 font-medium">75%</span>
            </div>
            <div class="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
              <div class="h-full bg-gradient-to-r from-sky-500 to-sky-400 rounded-full transition-all duration-1000 ease-out"
                style="width: {isInView ? '75%' : '0%'}; transition-delay: {applyDelay ? '600ms' : '0ms'}">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>