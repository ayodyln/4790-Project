<script>
	import { enhance } from '$app/forms'
	import { tweened } from 'svelte/motion'
	import { cubicOut } from 'svelte/easing'

	// Props
	export let authStateHandler, cancelAuthUI

	let newUserInfo = {
		username: '',
		password: '',
		avatar: '',
		bio: ''
	}

	// Display Avatar Image to DOM
	let avatar, fileInput, files
	const getBase64 = async (image) => {
		let _
		const reader = new FileReader()
		reader.readAsDataURL(image)
		reader.onload = (e) => {
			avatar = e.target.result
		}
	}

	// Login Handler for UI
	let loginButton
	function loginHandler() {
		loginButton.classList.add('loading')

		setTimeout(() => {
			// authStateHandler()
		}, 1000)
	}

	// My Sign Up Form:Enhance function
	const formEnhance = ({ form, data, action, cancel }) => {
		console.log(data)
		return async ({ result, update }) => {
			// console.log(result)
			// await update()
		}
	}

	// Practicing multistep login form Data
	// Try displaying hidden on "completed" inputs, to show the next steps.
	let usernameRef,
		passwordRef,
		stepCounter = 0,
		steps = [
			{
				id: 1,
				text: 'Avatar'
			},
			{
				id: 2,
				text: 'Bio'
			}
		]
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

<div class="flex flex-col justify-center items-center h-full w-full gap-2">
	<div class="card h-auto w-80">
		<section
			class="card-body items-center justify-between bg-base-300 bg-opacity-80 rounded-lg p-4 gap-4">
			<div class="h-full flex flex-col w-full">
				<h1 class="w-full text-center text-2xl">Sign Up</h1>

				<ul class="steps h-full text-sm my-2">
					<li class="step step-primary" data-id="0">User Info</li>
					<li class={`step ${$progress >= 66 ? 'step-primary' : ''}`} data-id="0">Avatar</li>
					<li class={`step ${$progress === 100 ? 'step-primary' : ''}`} data-id="0">Bio</li>
				</ul>

				<section class="flex flex-col h-full w-full">
					<!-- MY FORM -->
					<form
						method="POST"
						class="form flex flex-col justify-between gap-4 w-full"
						action="?/signUp"
						autocomplete="off"
						on:submit|preventDefault={loginHandler}
						use:enhance={formEnhance}
						enctype="multipart/form-data">
						<section class="flex flex-col h-full gap-4 w-full">
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
									required
									on:change={(e) => {
										newUserInfo.username = e.target.value
									}}
									bind:this={usernameRef} />
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
									required
									on:change={(e) => {
										newUserInfo.password = e.target.value
									}}
									bind:this={passwordRef} />
							</div>

							<div class="form-control w-full max-w-xs flex flex-col">
								<label class="label" for="avatar">
									<span class="label-text">Avatar</span>
								</label>

								{#if avatar}
									<img class="avatar w-1/3 h-auto" src={avatar} alt="d" />
								{:else}
									<img
										class="avatar w-1/3 h-auto"
										src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png"
										alt="" />
								{/if}
								<!-- svelte-ignore a11y-click-events-have-key-events -->
								<input
									class="file-input w-full max-w-xs"
									id="file-to-upload"
									type="file"
									name="file"
									accept=".png,.jpg"
									bind:files
									bind:this={fileInput}
									on:change={() => getBase64(files[0])} />
							</div>
						</section>

						<div class="card-actions justify-end">
							{#if stepCounter === 0}
								<button
									id="next"
									class="btn btn-accent"
									type="button"
									on:click={(e) => {
										newUserInfo.username = usernameRef.value
										newUserInfo.password = passwordRef.value

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
</div>
