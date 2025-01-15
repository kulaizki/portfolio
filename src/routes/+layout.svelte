<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>Fitz Angelo</title>
	<meta name="description" content="Explore Fitz's developer portfolio featuring expertise in software engineering, mobile app development, and UI/UX design." />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta charset="UTF-8" />
	<link rel="icon" href="/favicon.png" />
</svelte:head>

<main>
	{@render children()}
</main>