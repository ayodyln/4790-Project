<script>
	import Header from '../../lib/components/header/Header.svelte';
	import Avatar from './components/Avatar.svelte';

	// Data is a prop
	export let data;

	// Reactive data, since the data we are getting from ./+page.ts is a async load function.
	$: {
		console.log(`%c[faker-js] %cFetching Data...`, 'color: cyan', 'color: white');
	}
</script>

<main class="avatarMain">
	<div>
		<!-- * Svelte Tutorial -> Logic: Each Blocks ✅
		<!-- * Svelte Tutorial -> Logic: Keyed each blocks ✅ -->
		{#each data.AvatarData as data (data.name)}
			<!-- * Svelte Tutorial -> Introduction: Nested Components ✅  -->
			<!-- *  Svelte Tutorial -> Props: Declaring Props ✅ -->
			<a href={`/avatars/${data.name}`}>
				<!-- * Svelte Tutorial -> Props: Spread Props ✅ -->
				<Avatar {...data} />
			</a>
		{/each}
	</div>
</main>

<style>
	.avatarMain {
	}
	div {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		width: 100%;
		height: 100%;
		gap: 1em;
		padding: 12px;
	}
	a {
		width: 20em;
		height: 20em;
	}
</style>
