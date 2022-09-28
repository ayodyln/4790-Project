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
	<div class="w-full flex justify-between items-center">
		<h1 class="text-xl">{@html pageTitle}</h1>

		<div class="flex">
			<input
				type="text"
				placeholder="New Avatar Name"
				class="input input-bordered w-full max-w-xs"
			/>
			<button class="btn btn-success">+</button>
		</div>

		<!-- Wire this up with form actions? -->
		<!-- <form
			method="POST"
			class="flex"
			use:enhance={({ form, data, cancel }) => {
				return ({ result }) => {
					console.log(result);
				};
			}}
		>
			<input
				type="text"
				placeholder="New Avatar Name"
				class="input input-bordered w-full max-w-xs"
			/>
			<button class="btn btn-success">+</button>
		</form> -->
	</div>

	<div class="flex gap-4 flex-wrap justify-center">
		{#each data.AvatarData as data (data.name)}
			<a href={`/avatars/${data.name}`} class="w-1/3">
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
