<script>
	import { Auth, Storage } from 'aws-amplify'
	import { onMount } from 'svelte'
	import { user } from '$lib/stores/stores'
	import { tweened } from 'svelte/motion'
	import { cubicOut } from 'svelte/easing'
	import AvatarFileInput from './AvatarFileInput.svelte'
	import EditBioActions from './EditBioActions.svelte'
	import UserAttributeInputs from './UserAttributeInputs.svelte'

	let userData = JSON.parse($user)

	let image,
		email,
		website,
		localImage,
		uploading = false,
		fileMax = 100,
		editState = false

	const editStateHandler = () => (editState = !editState)

	let myUser

	onMount(async () => {
		myUser = await Auth.currentAuthenticatedUser()
	})

	async function saveProfileData(e) {
		await storageHandler()

		if (email) {
			await Auth.updateUserAttributes(myUser, {
				email: email
			})
			userData.email = email
		}

		if (website) {
			await Auth.updateUserAttributes(myUser, {
				website: website
			})
			userData.website = website
		}

		$user = JSON.stringify(userData)

		// Reset Inputs
		email = undefined
		website = undefined
		editStateHandler()
	}

	const storageHandler = async () => {
		if (!image.files[0]) return
		uploading = true

		const data = await Storage.put(`images/${$user.sub}`, image.files[0], {
			level: 'protected',
			async progressCallback(progress) {
				fileMax = progress.total
				await load.set(progress.loaded)
			}
		})

		const url = await Storage.get(data.key, {
			level: 'protected',
			pageSize: 1,
			download: false
		})

		await Auth.updateUserAttributes(myUser, {
			picture: data.key
		})

		userData.picture = url
		$user = JSON.stringify(userData)
		uploading = false
	}

	const load = tweened(0, {
		duration: 400,
		easing: cubicOut
	})
</script>

<section id="userBio" class="w-80 flex flex-col items-center gap-4 p-4">
	<div class="avatar justify-center items-center flex-col">
		{#if userData}
			{#if editState}
				<AvatarFileInput {userData} bind:image {localImage} />
				{#if uploading}
					<progress class="progress progress-primary w-full mt-4" value={$load} max={fileMax} />
				{/if}
			{:else}
				<div class="rounded-full bg-neutral bg-opacity-[20%] w-40">
					<img src={userData.picture} alt={userData.name} />
				</div>
			{/if}
		{:else}
			<div class="rounded-full w-40 animate-pulse bg-neutral bg-opacity-[20%]" />
		{/if}
	</div>

	<div id="UsersName" class="w-full text-center">
		{#if userData}
			<h2 class="text-2xl font-bold w-full">{userData.name}</h2>
		{:else}
			<div class="w-full h-[28px] bg-neutral bg-opacity-[20%] animate-pulse" />
		{/if}
	</div>

	<div class="flex flex-col justify-between h-full">
		<UserAttributeInputs {userData} {editState} bind:email bind:website />
		<EditBioActions {editState} {editStateHandler} {saveProfileData} />
	</div>
</section>
