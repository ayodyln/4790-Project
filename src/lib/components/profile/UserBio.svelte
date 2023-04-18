<script>
	import { user } from '$lib/stores/stores'
	import AvatarFileInput from './AvatarFileInput.svelte'
	import EditBioActions from './EditBioActions.svelte'
	import UserAttributeInputs from './UserAttributeInputs.svelte'

	export let userData

	let editState = false
	const editStateHandler = () => (editState = !editState)
	async function saveProfileData(e) {
		console.log('Mimic Saving Profile Data...')
		console.log(JSON.parse($user))
	}
</script>

<section id="userBio" class="w-80 flex flex-col items-center gap-4 p-4">
	<div class="avatar justify-center items-center">
		{#if userData}
			{#if editState}
				<AvatarFileInput {userData} />
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
		<UserAttributeInputs {userData} {editState} />
		<EditBioActions {editState} {editStateHandler} {saveProfileData} />
	</div>
</section>
