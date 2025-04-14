<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>Fitzsixto</title>
	<meta name="description" content="Explore Fitz's portfolio featuring expertise in multiple skills." />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta charset="UTF-8" />
	<link rel="icon" href="/images/favicon.png" />
</svelte:head>

<main>
	{@render children()}
</main>

<style global>
	@media (pointer: fine) {
		html {
			cursor: none;
		}
	}
</style>