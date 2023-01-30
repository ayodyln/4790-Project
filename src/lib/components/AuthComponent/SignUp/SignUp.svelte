<script>
	import { enhance } from '$app/forms'
	import { tweened } from 'svelte/motion'
	import { cubicOut } from 'svelte/easing'

	import { goto } from '$app/navigation'
	import { Storage } from 'aws-amplify'

	// Props
	export let authStateHandler, cancelAuthUI

	let newUserInfo = {
		avatar: ''
	}

	// Display Avatar Image to DOM || NEEDED FOR AWS STORAGE?
	let avatar, fileInput, files, testingImage
	const getBase64 = async (image) => {
		let _
		testingImage = image
		const reader = new FileReader()
		reader.readAsDataURL(image)
		reader.onload = (e) => {
			avatar = e.target.result
			newUserInfo.avatar = e.target.result
		}
	}

	// Login Handler for UI
	let loginButton
	function loginHandler() {
		loginButton.classList.add('loading')
	}

	// My Sign Up Form:Enhance function
	// const formEnhance = ({ form, data, action, cancel }) => {
	// 	return async ({ result, update }) => {
	// 		console.log(result)

	// 		try {
	// 			await Storage.put(`${result.data.username.toLowerCase()}-avatar`, files[0], {
	// 				level: 'public',
	// 				contentType: 'image/jpg'
	// 			})
	// 		} catch (error) {
	// 			console.error(error)
	// 		}

	// 		goto('Auth/confirm')
	// 	}
	// }

	// Practicing multistep login form Data
	// Try displaying hidden on "completed" inputs, to show the next steps.
	let stepCounter = 0

	const handleSteps = (e) => {
		const btnID = e.target.id
		if (btnID === 'next') {
			stepCounter++
			if ($progress === 66) {
				progress.set(100)
				return
			}
			progress.set(66)
			return
		}
		stepCounter--
		progress.set(33)
	}

	const progress = tweened(33, {
		duration: 100,
		easing: cubicOut
	})
</script>

<div class="flex flex-col justify-center items-center h-full w-full">
	<section
		class="flex flex-col items-center justify-between bg-base-300 bg-opacity-80 rounded-lg p-4 w-[18rem] h-fit min-h-[36rem]">
		<div class="h-full flex flex-col w-full">
			<section class="w-full h-fit flex flex-col">
				<h1 class="w-full text-center text-2xl">Sign Up</h1>
				<ul class="steps h-full text-sm my-2">
					<li class="step step-primary" data-id="0">User Info</li>
					<li class={`step ${$progress >= 66 ? 'step-primary' : ''}`} data-id="0">Avatar</li>
					<li class={`step ${$progress === 100 ? 'step-primary' : ''}`} data-id="0">Bio</li>
				</ul>
			</section>

			<section class="flex flex-col h-full w-full">
				<!-- MY FORM -->
				<form
					method="POST"
					class="form flex flex-col justify-between gap-4 w-full h-full"
					action="?/signUp"
					autocomplete="off"
					on:submit|preventDefault={loginHandler}
					enctype="multipart/form-data">
					<section class="flex flex-col h-full gap-4 w-full">
						<!-- User Info Section -->
						<div id="wrapper" class={stepCounter === 0 ? '' : 'hidden'}>
							<div class="form-control w-full max-w-xs">
								<label class="label" for="username">
									<span class="label-text">Username</span>
								</label>
								<input
									type="text"
									name="username"
									id="username"
									class="input input-bordered w-full max-w-xs"
									placeholder="Username"
									required />
							</div>
							<div class="form-control w-full max-w-xs">
								<label class="label" for="username">
									<span class="label-text">Email</span>
								</label>
								<input
									type="email"
									name="email"
									id="email"
									class="input input-bordered w-full max-w-xs"
									placeholder="Email"
									required />
							</div>
							<div class="form-control w-full max-w-xs">
								<label class="label" for="password">
									<span class="label-text">Password</span>
								</label>
								<input
									type="password"
									name="password"
									id="password"
									class="input input-bordered w-full max-w-xs"
									placeholder="Password"
									required />
							</div>
						</div>
						<!-- Avatar Section -->
						<section class={stepCounter === 1 ? '' : 'hidden'}>
							<div class="form-control w-full max-w-xs flex flex-col">
								<label class="label" for="avatar">
									<span class="label-text">Avatar</span>
								</label>

								<div class="w-full flex flex-col justify-center items-center h-56">
									{#if avatar}
										<img class="avatar w-auto h-full" src={avatar} alt="default" />
									{:else}
										<img
											class="avatar w-auto h-full"
											src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png"
											alt="" />
									{/if}

									<!-- svelte-ignore a11y-click-events-have-key-events -->
									<input
										class="file-input w-full max-w-xs"
										id="file-to-upload"
										type="file"
										name="file"
										accept=".jpg,"
										bind:files
										bind:this={fileInput}
										on:change={(e) => getBase64(files[0])} />
								</div>
							</div>
						</section>
						<!-- Bio Section -->
						<section class="h-full {stepCounter === 2 ? '' : 'hidden'}">
							<div class="form-control w-full h-full max-w-xs">
								<label class="label" for="password">
									<span class="label-text">Bio</span>
								</label>
								<textarea
									name="bio"
									id="bio"
									class="textarea textarea-bordered w-full h-full max-w-xs resize-none"
									placeholder="Bio..."
									required />
							</div>
						</section>
					</section>

					<div class="flex justify-end w-full">
						{#if stepCounter === 0}
							<button
								id="next"
								class="btn btn-accent"
								type="button"
								on:click={(e) => {
									handleSteps(e)
								}}>Next</button>
						{/if}
						{#if stepCounter < 2 && stepCounter !== 0}
							<button id="back" class="btn btn-ghost" type="button" on:click={handleSteps}
								>Back</button>
							<button id="next" class="btn btn-accent" type="button" on:click={handleSteps}
								>Next</button>
						{/if}
						{#if stepCounter === 2}
							<button id="back" class="btn btn-ghost" type="button" on:click={handleSteps}
								>Back</button>
							<button class="btn btn-ghost" type="button" on:click={cancelAuthUI}>Cancel</button>

							<button
								class="btn btn-accent"
								type="submit"
								bind:this={loginButton}
								name="userInput"
								value={JSON.stringify(newUserInfo)}>Sign Up</button>
						{/if}
					</div>
				</form>
				<!-- END OF MY FORM -->
			</section>
		</div>

		<p>
			Already have an account? <button class="btn btn-link p-0" on:click={authStateHandler}
				>Log In</button>
		</p>
	</section>
</div>
