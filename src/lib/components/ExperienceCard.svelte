<script lang="ts">
	export let title: string;
	export let company: string;
	export let date: string;
	export let responsibilities: string[] = [];
	export let link: string = '';
</script>

<a
	href={link}
	target="_blank"
  class="relative rounded-lg border-t-4 border-gray-500 border-gray-700 bg-gray-800 p-6 shadow-lg transition-all delay-50 duration-300 ease-in-out hover:border-sky-400 hover:bg-gray-700 hover:shadow-[0_0_15px_rgba(56,189,248,0.7)]"
  >
	<h3 class="text-xl font-semibold text-white">{title}</h3>
	<p class="mt-2 text-sm text-gray-400">{company}, {date}</p>
	<ul class="mt-3 space-y-2 text-sm text-gray-300">
		{#each responsibilities as responsibility}
			<li>• {responsibility}</li>
		{/each}
	</ul>
</a>
