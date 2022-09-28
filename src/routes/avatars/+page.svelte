<script>
	export let data;

	import Avatar from './components/Avatar.svelte';

	$: {
		console.log(
			`%c[faker-js] %cFetching %c${data.AvatarData.length} %cAvatars`,
			'color: cyan',
			'color: white',
			'color: yellow',
			'color: white'
		);
	}

	const pageTitle = `Random Avatars`;
</script>

<main class="avatarMain flex flex-col gap-4">
	<div class="container w-full">
		<h1 class="text-xl">{@html pageTitle}</h1>
	</div>

	<div class="flex gap-px flex-wrap justify-center">
		{#each data.AvatarData as data (data.name)}
			<a href={`/avatars/${data.name}`}>
				<Avatar {...data} />
			</a>
		{/each}
	</div>
</main>

<style>
	main {
		padding: 1rem;
	}

	a {
		width: 20em;
		height: 20em;
	}
</style>
