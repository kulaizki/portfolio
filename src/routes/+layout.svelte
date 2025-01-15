<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>Fitz Angelo</title>
	<meta name="description" content="Welcome to Fitz's developer portfolio, showcasing experience in software engineering, mobile development, and UI/UX design." />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta charset="UTF-8" />
	<link rel="icon" href="/favicon.ico" />
</svelte:head>

<main>
	{@render children()}
</main>