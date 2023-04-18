<script>
	import { user } from '$lib/stores/stores'
	import { onMount } from 'svelte'

	let userData = JSON.parse($user)
	let editState = false

	async function saveProfileData(e) {
		console.log('Mimic Saving Profile Data...')
		console.log(JSON.parse($user))
	}

	const editStateHandler = () => (editState = !editState)

	onMount(() => {
		console.log(JSON.parse($user))
	})
</script>

<section class="max-w-4xl w-full h-1/2 m-auto flex mt-4 bg-base-300 rounded-3xl overflow-hidden">
	<!-- User Page -->
	<section id="userBio" class="w-80 flex flex-col items-center gap-4 p-4">
		<div class="avatar justify-center items-center">
			{#if userData}
				{#if editState}
					<div class="form-control rounded-full w-40">
						<label for="newProfilePic" class="input-group h-full">
							<div class="relative flex justify-center items-center w-full h-full">
								<div
									class="bg-neutral bg-opacity-[70%] absolute z-1 w-full h-full flex justify-center items-center fill-base-100 hover:fill-base-300 cursor-pointer">
									<svg xmlns="http://www.w3.org/2000/svg" class="w-1/3" viewBox="0 0 512 512">
										<!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
										<path
											d="M288 109.3V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3l-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352H192c0 35.3 28.7 64 64 64s64-28.7 64-64H448c35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V416c0-35.3 28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
									</svg>
								</div>

								<img src={userData.picture} alt={userData.name} />
							</div>
							<input id="newProfilePic" name="newProfilePic" type="file" hidden />
						</label>
					</div>
				{:else}
					<div class="rounded-full w-40">
						<img src={userData.picture} alt={userData.name} />
					</div>
				{/if}
			{:else}
				<div class="rounded-full w-40 animate-pulse bg-neutral bg-opacity-[20%]" />
			{/if}
		</div>

		<div class="w-full text-center">
			{#if userData}
				<h2 class="text-2xl font-bold w-full">{userData.name}</h2>
			{:else}
				<div class="w-full h-[28px] bg-neutral bg-opacity-[20%] animate-pulse" />
			{/if}
		</div>

		<div class="flex flex-col justify-between h-full">
			<div class="flex flex-col gap-4">
				<section id="Email" class="w-60">
					<span class="">
						<p class="font-bold">Email</p>
						<div class="divider m-0 h-fit mb-1" />
					</span>

					{#if editState}
						<input type="text" placeholder={userData.email} class="input input-sm w-full" />
					{:else}
						<h2>{userData.email}</h2>
					{/if}
				</section>

				<section id="name" class="w-60">
					<span class="mb-2">
						<p class="font-bold">Website</p>
						<div class="divider m-0 h-fit mb-1" />
					</span>

					{#if editState}
						<input type="text" placeholder={userData.email} class="input input-sm w-full" />
					{:else}
						<a class="link" target="_blank" rel="noreferrer" href={userData.website}
							>{userData.website}</a>
					{/if}
				</section>
			</div>

			<div id="buttons" class="self-end">
				{#if editState}
					<button class="btn btn-warning w-fit" on:click={editStateHandler}>Cancel</button>
					<button class="btn w-fit btn-success" on:click={saveProfileData}>Save</button>
				{:else}
					<button class="btn btn-primary w-fit" on:click={editStateHandler}>Edit</button>
				{/if}
			</div>
		</div>
	</section>

	<section
		id="editable_data"
		class="flex flex-col w-full h-full justify-between bg-base-200 rounded-r-3xl p-4 drop-shadow-lg">
		<div class="w-fit">
			<ul id="personal_actions" class="w-full">
				<li>
					<button class="btn w-full">My Comics</button>
				</li>
			</ul>
		</div>
	</section>
</section>
