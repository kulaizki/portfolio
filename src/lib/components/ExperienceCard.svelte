<script lang="ts">
	export let title: string;
	export let company: string;
	export let date: string;
	export let responsibilities: string[] = [];
	export let link: string = '';
	export let imageUrl: string = ''; 
</script>

<a
	href={link}
	target="_blank"
	class="delay-50 relative rounded-lg border-t-4 border-gray-500 border-gray-700 bg-gray-800 p-2 shadow-lg transition-all duration-300 ease-in-out hover:border-sky-400 hover:bg-gray-700 hover:shadow-[0_0_32px_rgba(56,189,248,0.7)]"
>
	<img src={imageUrl} alt={title} class="h-48 w-full rounded-lg object-cover" />
	<div class="pb-4 px-4">
		<h3 class="mt-4 text-xl font-semibold text-white">{title}</h3>
		<p class="mt-2 text-sm text-gray-400">{company}, {date}</p>
		<ul class="mt-3 space-y-2 text-sm text-gray-300">
			{#each responsibilities as responsibility}
				<li>• {responsibility}</li>
			{/each}
		</ul>
	</div>
</a>
