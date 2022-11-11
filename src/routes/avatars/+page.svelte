<script>
	import { goto } from '$app/navigation'
	import { onMount } from 'svelte'

	// Transitions have to be paired with my status functions and timeouts, svelte methods wont work (e.g., on:outroend)
	// Since my UI is dependent on my toggleAlert binding
	import { fly, fade, crossfade } from 'svelte/transition'
	import { flip } from 'svelte/animate'
	import { quintOut } from 'svelte/easing'

	export let data

	import { NewFaker } from '../../lib/functions/AvatarFunctions/NewFaker'

	import { tweened } from 'svelte/motion'
	import { cubicOut } from 'svelte/easing'

	let avatarArray = []

	const pageTitle = `<b>Random Avatars</b>`

	let inputField,
		toggleAlert = false,
		timer

	async function newAvatar() {
		clearTimeout(timer)
		if (inputField.value === '') {
			toggleAlert = 'FAIL'
		}

		if (inputField.value !== '') {
			const avatar = await NewFaker(inputField.value)
			avatarArray = [avatar, ...avatarArray]
			toggleAlert = 'SUCCESS'
			inputField.value = ''
		}

		timer = setTimeout(() => {
			toggleAlert = false
		}, 3000)
	}

	let avatarButton
	async function deleteAvatar(event) {
		event.stopPropagation()
		clearTimeout(timer)

		toggleAlert = false
		const avatarIndex = event.target.dataset.id * 1
		toggleAlert = 'SUCCESS DELETE'

		avatarArray = avatarArray.filter((avatar, i) => i !== avatarIndex)

		timer = setTimeout(() => {
			toggleAlert = false
		}, 3000)
	}

	const progress = tweened(0, {
		duration: 400,
		easing: cubicOut
	})

	onMount(async () => {
		setTimeout(async () => {
			if (data.AvatarData) {
				await progress.set(100)
				avatarArray = data.AvatarData
			}
		}, 500)
	})

	function goToHandler(e) {
		console.log(e.target)
		goto(`/avatars/${name}`)
	}
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
					bind:this={inputField}
					on:keydown={(e) => {
						if (e.key === 'Enter') newAvatar()
					}}
					on:focus />
				<button class="btn btn-square flex justify-center items-center btn-md" on:click={newAvatar}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="fill-current w-4"
						><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
							d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" /></svg>
				</button>
			</div>
		</div>
	</div>

	<div class="flex gap-4 flex-wrap justify-center items-center w-full h-full">
		{#each avatarArray as { name, image }, index (name)}
			<button
				on:click={goToHandler}
				class="basis-72"
				data-id={index}
				bind:this={avatarButton}
				in:fade={{ key: name }}
				out:fade={{ key: name }}
				animate:flip={{ duration: 100 }}>
				<div
					class="card bg-base-300 shadow-xl hover:ring-4 ring-primary ring-inset hover:drop-shadow-lg">
					<div class="card-body p-2 h-full w-full gap-2">
						<div class="h-1/4 w-full flex justify-end p-2">
							<button class="btn btn-circle btn-md" data-id={index} on:click={deleteAvatar}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-6 w-6 pointer-events-none"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M6 18L18 6M6 6l12 12" /></svg>
							</button>
						</div>
						<div class="flex w-44 h-44 sm:w-full">
							<img src={image} alt={name} class="w-full h-full" />
						</div>
						<div class="h-12 flex justify-center items-center">
							<h3 class="text-lg w-full text-center">{name}</h3>
						</div>
					</div>
				</div>
			</button>
		{:else}
			<progress class="progress w-56" value={$progress} max="100" />
		{/each}
	</div>

	<!-- STATUS ALERTS -->
	{#if toggleAlert === 'SUCCESS'}
		<div
			class="alert alert-success shadow-lg fixed bottom-0 right-0 z-10 w-96 m-8"
			in:fly={{ y: 200, duration: 300 }}
			out:fade={{ duration: 100 }}>
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
		<div
			class="alert alert-success shadow-lg fixed bottom-0 right-0 z-10 w-96 m-8"
			in:fly={{ y: 200, duration: 300 }}
			out:fade={{ duration: 100 }}>
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
		<div
			class="alert alert-error shadow-lg fixed bottom-0 right-0 z-10 w-96 m-8"
			in:fly={{ y: 200, duration: 300 }}
			out:fade={{ duration: 100 }}>
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
