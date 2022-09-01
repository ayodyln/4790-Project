<script>
	export let data;

	// Svelte Tutorial -> Props: Default Values ✅
	export let defaultValue = 'Hello World';
</script>

<main>
	<h1>{defaultValue}</h1>
	<p>{data.avatarName}</p>
</main>
