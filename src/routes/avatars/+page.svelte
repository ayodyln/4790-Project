<script>
	import { onMount } from 'svelte'

	export let data

	import Avatar from './components/Avatar.svelte'
	import { NewFaker } from './lib/NewFaker'

	import { tweened } from 'svelte/motion'
	import { cubicOut } from 'svelte/easing'

	$: {
		console.log(
			`%c[faker-js] %cFetching %c${data.AvatarData.length} %cAvatars`,
			'color: cyan',
			'color: white',
			'color: yellow',
			'color: white'
		)
	}

	// $: avatarArray = data.AvatarData
	let avatarArray = []

	$: if (avatarArray.length > 50) {
		console.log(
			`%c[faker-js] %cLoading %c${avatarArray.length} %cAvatars`,
			'color: cyan',
			'color: white',
			'color: yellow',
			'color: white'
		)
	}

	const pageTitle = `<b>Random Avatars</b>`

	let inputField

	$: toggleAlert = false

	async function newAvatar() {
		if (inputField.value === '') {
			toggleAlert = 'FAIL'
		}

		if (inputField.value !== '') {
			const avatar = await NewFaker(inputField.value)
			avatarArray = [avatar, ...avatarArray]
			toggleAlert = 'SUCCESS'
			inputField.value = ''
		}

		setTimeout(() => {
			toggleAlert = false
		}, 3000)
	}

	let avatarButton
	function deleteAvatar(event) {
		event.stopPropagation()
		const avatarIndex = event.target.dataset.id * 1
		toggleAlert = 'SUCCESS DELETE'
		avatarArray.splice(avatarIndex, 1)
		avatarArray = [...avatarArray]

		setTimeout(() => {
			toggleAlert = false
		}, 2000)
	}

	const progress = tweened(0, {
		duration: 400,
		easing: cubicOut
	})

	onMount(async () => {
		if (data.AvatarData) {
			await progress.set(100)
			avatarArray = data.AvatarData
		}
	})
</script>

<main class="relative p-4 flex flex-col gap-4 w-full h-full overflow-x-hidden">
	<div class="w-full flex justify-between items-center">
		<h1 class="text-xl">{avatarArray.length} {@html pageTitle}</h1>

		<div class="form-control">
			<div class="input-group flex items-center">
				<input
					type="text"
					placeholder="Name"
					class="input input-bordered input-md"
					bind:this={inputField} />
				<button class="btn btn-square flex justify-center items-center btn-md" on:click={newAvatar}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="fill-current w-4"
						><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
							d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" /></svg>
				</button>
			</div>
		</div>
	</div>

	<div class="flex gap-4 flex-wrap justify-center">
		{#each avatarArray as { name, image }, index (index)}
			<Avatar {name} {image} {index} {avatarButton} {deleteAvatar} />
		{:else}
			<progress class="progress w-56" value={$progress} max="100" />
		{/each}
	</div>

	<!-- STATUS ALERTS -->
	{#if toggleAlert === 'SUCCESS'}
		<div class="alert alert-success shadow-lg fixed bottom-0 right-0 z-10 w-96 m-8">
			<div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="stroke-current flex-shrink-0 h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					><path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
				<span>Succesfully created a new avatar!</span>
			</div>
		</div>
	{:else if toggleAlert === 'SUCCESS DELETE'}
		<div class="alert alert-success shadow-lg fixed bottom-0 right-0 z-10 w-96 m-8">
			<div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="stroke-current flex-shrink-0 h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					><path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
				<span>Succesfully deleted a avatar!</span>
			</div>
		</div>
	{:else if toggleAlert === 'FAIL'}
		<div class="alert alert-error shadow-lg fixed bottom-0 right-0 z-10 w-96 m-8">
			<div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="stroke-current flex-shrink-0 h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					><path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
				<span>Must provide a Avatar Name in input field!</span>
			</div>
		</div>
	{/if}
</main>
