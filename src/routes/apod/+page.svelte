<script>
	import { fade } from 'svelte/transition'
	import { enhance } from '$app/forms'
	import { onMount } from 'svelte'

	export let data

	import { goto } from '$app/navigation'
	import { Auth } from 'aws-amplify'
	// Auth.currentAuthenticatedUser({
	// 	bypassCache: false // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
	// })
	// 	.then((user) => console.log(user))
	// 	.catch((err) => {
	// 		console.log(err)
	// 		goto('/')
	// 	})

	$: arr = []

	let apodTitle, apodDescription, apodImage, apodImageHD, apodDate, apodCopyRight

	const renderAPOD = (item) => {
		apodTitle = item.title
		apodDescription = item.explanation
		apodImage = item.url
		apodImageHD = item.hdurl
		apodDate = item.date
		apodCopyRight = item?.copyright
		// console.log(item)
	}

	let errorState = false
	let errorMsg
	const renderError = (item) => {
		errorState = true
		errorMsg = item.msg
	}

	const apodForm = () => {
		return async ({ result, update }) => {
			if (result.data.code === 400) {
				renderError(result.data)
				return
			}

			renderAPOD(result.data)
		}
	}

	onMount(async () => {
		try {
			const apod = await fetch('api/apod')
			const res = await apod.json()
			arr = res.APOD
		} catch (error) {
			console.log(error)
		}
	})
</script>

<div class="h-full drawer drawer-mobile">
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col items-center h-full w-full">
		<label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

		<div class="h-full w-full bg-base-200 flex flex-col p-2 gap-2">
			<section class="w-full flex justify-end">
				<form method="POST" action="?/getAPOD" use:enhance={apodForm}>
					<div class="form-control">
						<div class="input-group">
							<input
								class="input input-bordered input-md"
								type="date"
								name="startDate"
								placeholder="APOD Search" />

							<button class="btn btn-square" type="submit">
								<svg
									class="h-6 w-6 fill-primary"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 448 512"
									><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
										d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
							</button>
						</div>
					</div>
				</form>
			</section>

			<div class="w-full h-full flex justify-center items-center">
				{#if !apodDescription && !errorState}
					<p>Pick APOD Story</p>
				{:else if errorState && !apodDescription}
					<p>{errorMsg}</p>
				{:else}
					{#key apodTitle}
						<div class="flex flex-col w-full h-full" in:fade>
							<div
								class="w-full h-3/5 flex items-end gap-4 bg-neutral-focus"
								style="background-image: url({apodImage}); background-size: fit; background-position: center; background-repeat: no-repeat">
								<div id="imgData" class="text-neutral-content w-full flex flex-col gap-2 p-2">
									<h1 class="text-3xl">{apodTitle}</h1>
									<p>{apodDate}</p>
									{#if apodCopyRight}
										<p>{@html `&#169;`} {apodCopyRight}</p>
									{/if}
								</div>
							</div>

							<div class="text-current h-auto overflow-auto p-2">
								<p>{apodDescription}</p>
							</div>
						</div>
					{/key}
				{/if}
			</div>
		</div>
	</div>

	<div class="drawer-side overflow-x-hidden">
		<label for="my-drawer-2" class="drawer-overlay" />
		<ul class="menu p-6 overscroll-y-auto w-56 bg-base-100 gap-4">
			{#each arr as apod (apod.title)}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<li
					class="card bg-primary hover:bg-primary-focus hover:outline hover:outline-secondary text-primary-content h-auto rounded-lg"
					on:click={renderAPOD(apod)}>
					<figure class="flex flex-col h-60">
						<!-- svelte-ignore a11y-img-redundant-alt -->
						<img src={apod.url} alt="apod image" class="h-full" />
						<figcaption>{apod.title}</figcaption>
					</figure>
				</li>
			{/each}
		</ul>
	</div>
</div>

<!-- {/each} -->
<style>
	#imgData {
		background-color: rgba(0, 0, 0, 0.5);
	}
</style>
