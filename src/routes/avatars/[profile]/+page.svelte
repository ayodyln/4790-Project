<script>
	export let data;

	// Svelte Tutorial -> Props: Default Values ✅
	export let defaultValue = 'Hello World';

	// Svelte Tutorial -> Logic: If Blocks ✅
	let profile = { loggedIn: false };
	const toggledState = () =>
		profile.loggedIn ? (profile.loggedIn = false) : (profile.loggedIn = true);
</script>

<main>
	<h1>{defaultValue}</h1>
	<p>{data.avatarName}</p>

	<!-- * Svelte Tutorial -> Logic: If Blocks ✅ -->
	{#if profile.loggedIn}
		<button on:click={toggledState}> Sign Out </button>
		<!-- * Svelte Tutorial -> Logic: Else If Blocks ✅ -->
	{:else if profile.loggedIn === null}
		<button on:click={toggledState}>Null</button>
		<!-- * Svelte Tutorial -> Logic: Else Blocks ✅ -->
	{:else}
		<button on:click={toggledState}> Sign In </button>
	{/if}
</main>
