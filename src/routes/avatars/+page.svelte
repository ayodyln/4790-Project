<script>
	export let data;

	import Avatar from './components/Avatar.svelte';

	$: {
		console.log(
			`%c[faker-js] %cFetching ${data.AvatarData.length} Avatars`,
			'color: cyan',
			'color: white'
		);
	}

	const pageTitle = `Avatars`;
</script>

<main class="avatarMain">
	<h1>{@html pageTitle}</h1>

	<div>
		{#each data.AvatarData as data (data.name)}
			<a href={`/avatars/${data.name}`}>
				<Avatar {...data} />
			</a>
		{/each}
	</div>
</main>

<style>
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
