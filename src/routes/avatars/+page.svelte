<script>
	export let data;

	import Avatar from './components/Avatar.svelte';
	import { NewFaker } from './lib/NewFaker';

	$: {
		console.log(
			`%c[faker-js] %cFetching %c${data.AvatarData.length} %cAvatars`,
			'color: cyan',
			'color: white',
			'color: yellow',
			'color: white'
		);
	}

	$: avatarArray = data.AvatarData;

	$: if (avatarArray.length > 50) {
		console.log(
			`%c[faker-js] %cLoading %c${avatarArray.length} %cAvatars`,
			'color: cyan',
			'color: white',
			'color: yellow',
			'color: white'
		);
	}

	const pageTitle = `<b>Random Avatars</b>`;

	let inputField;

	async function newAvatar() {
		const avatar = await NewFaker(inputField.value);
		avatarArray = [avatar, ...avatarArray];
		inputField.value = '';
	}
</script>

<main class="avatarMain flex flex-col gap-4">
	<div class="w-full flex justify-between items-center">
		<h1 class="text-xl">{avatarArray.length} {@html pageTitle}</h1>

		<div class="flex">
			<input
				type="text"
				placeholder="Full Name (First, Last)"
				class="input input-bordered w-full max-w-xs"
				bind:this={inputField}
			/>
			<button on:click={newAvatar} class="btn btn-success">+</button>
		</div>
	</div>

	<div class="flex gap-4 flex-wrap justify-center">
		{#each avatarArray as data (data.name)}
			<a href={`/avatars/${data.name}`} class="basis-72">
				<Avatar {...data} />
			</a>
		{/each}
	</div>
</main>

<style>
	main {
		padding: 1rem;
	}
</style>
