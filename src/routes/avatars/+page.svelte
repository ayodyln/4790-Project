<script>
	import { enhance } from '$app/forms'
	import { goto } from '$app/navigation'
	import { onMount } from 'svelte'
	// Transitions have to be paired with my status functions and timeouts, svelte methods wont work (e.g., on:outroend)
	// Since my UI is dependent on my toggleAlert binding
	import { flip } from 'svelte/animate'
	import { cubicOut } from 'svelte/easing'
	import { tweened } from 'svelte/motion'
	import { NewFaker } from '../../lib/functions/AvatarFunctions/NewFaker'
	import StatusMsg from '../../lib/components/Avatar/StatusMsg.svelte'

	export let data

	let avatarArray = []

	const pageTitle = `<b>Random Avatars</b>`

	let inputField,
		toggleAlert = false,
		timer,
		avatarButton,
		AvatarWrapper

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

	function goToHandler(e, name) {
		goto(`/avatars/${name}`)
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

	const avatarForm = () => {
		return async ({ result, update }) => {
			console.log(result.data)
			avatarArray = result.data.Avatar_Database
		}
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

	<div
		bind:this={AvatarWrapper}
		class="flex gap-4 flex-wrap justify-center items-center w-full h-full">
		{#each avatarArray as { name, image }, index (name)}
			<button
				class="basis-72"
				type="button"
				data-id={index}
				bind:this={avatarButton}
				animate:flip={{ duration: 100 }}
				on:click={(_) => goToHandler(_, name)}>
				<div
					class="card bg-neutral text-neutral-content shadow-xl hover:ring-4 ring-primary ring-inset hover:drop-shadow-lg">
					<div class="card-body p-2 h-full w-full gap-2">
						<div class="h-1/4 w-full flex justify-end p-2">
							<form method="POST" action="?/updateAvatar" use:enhance={avatarForm}>
								<button
									type="submit"
									class="btn btn-circle btn-md"
									data-id={index}
									value={JSON.stringify({ name, index })}
									name="Name"
									on:click={(e) => {
										e.stopPropagation()
										deleteAvatar(e)
									}}>
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
							</form>
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
	<StatusMsg {toggleAlert} />
</main>
