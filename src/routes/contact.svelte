<script lang="ts">
  export let className: string = '';
  import { inview } from 'svelte-inview';
  
  let isInView = false;
  let hasAnimated = false;
  let applyDelay = true;
  
  // Form state
  let formData = {
    email: '',
    subject: '',
    message: ''
  };
  
  let isSubmitting = false;
  let submitStatus: 'idle' | 'success' | 'error' = 'idle';
  let statusMessage = '';
  
  // Form validation errors
  let errors: {
    email?: string;
    subject?: string;
    message?: string;
  } = {};
  
  // Email validation
  function validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  
  // Validate form
  function validateForm(): boolean {
    errors = {};
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Please enter a valid email';
    }
    
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }
    
    return Object.keys(errors).length === 0;
  }
  
  // Handle form submission
  async function handleSubmit(e: Event) {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    isSubmitting = true;
    submitStatus = 'idle';
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }
      
      // Success
      submitStatus = 'success';
      statusMessage = 'Message sent successfully! I\'ll get back to you soon.';
      
      // Reset form
      formData = {
        email: '',
        subject: '',
        message: ''
      };
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        submitStatus = 'idle';
        statusMessage = '';
      }, 5000);
      
    } catch (error) {
      submitStatus = 'error';
      statusMessage = error instanceof Error ? error.message : 'Failed to send message. Please try again.';
      
      // Hide error message after 5 seconds
      setTimeout(() => {
        submitStatus = 'idle';
        statusMessage = '';
      }, 5000);
    } finally {
      isSubmitting = false;
    }
  }
  
  // Clear error on input
  function clearError(field: keyof typeof errors) {
    errors[field] = undefined;
    errors = errors;
  }
</script>

<section
  id="contact"
  class="py-20 text-white {className}"
  use:inview={{ unobserveOnEnter: true, threshold: 0.1 }}
  on:inview_change={(event) => {
    if (event.detail.inView && !hasAnimated) {
      isInView = true;
      hasAnimated = true;
      setTimeout(() => {
        applyDelay = false;
      }, 1000);
    }
  }}
>
  <div class="max-w-2xl mx-auto px-6">
    <h2
      class="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-sky-300 to-sky-500 bg-clip-text text-transparent pb-1 transition-all duration-700 ease-out text-center {isInView
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-8'}"
      style={applyDelay ? `transition-delay: 200ms` : 'transition-delay: 0ms'}
    >
      Contact
    </h2>
    <p
      class="text-md md:text-xl text-gray-300 mb-8 text-center transition-all duration-700 ease-out {isInView
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-8'}"
      style={applyDelay ? `transition-delay: 350ms` : 'transition-delay: 0ms'}
    >
      Feel free to reach out if you'd like to connect or work together!
    </p>
    
    <form
      on:submit={handleSubmit}
      class="space-y-6 transition-all duration-700 ease-out {isInView
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-8'}"
      style={applyDelay ? `transition-delay: 500ms` : 'transition-delay: 0ms'}
    >
      <!-- Email field -->
      <div>
        <label for="email" class="block text-sm font-medium text-gray-300 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          bind:value={formData.email}
          on:input={() => clearError('email')}
          class="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200"
          placeholder="your@email.com"
          disabled={isSubmitting}
        />
        {#if errors.email}
          <p class="mt-1 text-sm text-red-400">{errors.email}</p>
        {/if}
      </div>
      
      <!-- Subject field -->
      <div>
        <label for="subject" class="block text-sm font-medium text-gray-300 mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          bind:value={formData.subject}
          on:input={() => clearError('subject')}
          class="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200"
          placeholder="What's this about?"
          disabled={isSubmitting}
        />
        {#if errors.subject}
          <p class="mt-1 text-sm text-red-400">{errors.subject}</p>
        {/if}
      </div>
      
      <!-- Message field -->
      <div>
        <label for="message" class="block text-sm font-medium text-gray-300 mb-2">
          Message
        </label>
        <textarea
          id="message"
          bind:value={formData.message}
          on:input={() => clearError('message')}
          rows="5"
          class="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200 resize-none"
          placeholder="Tell me about your project..."
          disabled={isSubmitting}
        ></textarea>
        {#if errors.message}
          <p class="mt-1 text-sm text-red-400">{errors.message}</p>
        {/if}
      </div>
      
      <!-- Submit button -->
      <div class="flex flex-col items-center space-y-4">
        <button
          type="submit"
          disabled={isSubmitting}
          class="relative z-0 inline-block px-6 py-3 bg-gradient-to-br from-sky-500 via-sky-600 to-sky-800 text-white rounded-full shadow-lg overflow-hidden transition-all duration-500
                 before:absolute before:inset-0 before:-z-10 before:content-[''] before:bg-gradient-to-br before:from-sky-400 before:via-sky-500 before:to-sky-700 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100
                 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:before:opacity-0"
        >
          {#if isSubmitting}
            <span class="flex items-center">
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          {:else}
            Send Message
          {/if}
        </button>
        
        <!-- Status messages -->
        {#if submitStatus !== 'idle'}
          <div
            class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 {submitStatus === 'success'
              ? 'bg-green-500/20 text-green-400 border border-green-500/30'
              : 'bg-red-500/20 text-red-400 border border-red-500/30'}"
          >
            {statusMessage}
          </div>
        {/if}
      </div>
    </form>
  </div>
</section>