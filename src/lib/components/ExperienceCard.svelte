<script lang="ts">
	import type { Experience } from '$lib/types';
	export let experience: Experience;
</script>

<a
	href={experience.link}
	target="_blank"
	class="delay-50 relative rounded-lg border-t-4 border-gray-500 border-gray-700 bg-gray-800 p-2 shadow-lg transition-all duration-300 ease-in-out hover:border-sky-400 hover:bg-gray-700 hover:shadow-[0_0_32px_rgba(56,189,248,0.7)]"
>
	<img src={experience.imageUrl} alt={experience.title} class="h-48 w-full rounded-lg object-cover" />
	<div class="pb-4 px-4">
		<h3 class="mt-4 text-xl font-semibold text-white">{experience.title}</h3>
		<p class="mt-2 text-sm text-gray-400">{experience.company}, {experience.date}</p>
		<ul class="mt-3 space-y-2 text-sm text-gray-300">
			{#each experience.responsibilities as responsibility}
				<li>• {responsibility}</li>
			{/each}
		</ul>
	</div>
</a>
