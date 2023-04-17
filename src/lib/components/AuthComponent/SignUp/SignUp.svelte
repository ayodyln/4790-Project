<script>
	import { goto } from '$app/navigation'
	import { localUser } from '$lib/stores/stores'
	import { Auth } from 'aws-amplify'

	// Props
	export let authStateHandler, authState

	const creds = {
		name: '',
		email: '',
		password: ''
	}

	// Login Handler for UI
	let loginButton, confirmPassword, email, name
	const signUpHandler = async () => {
		loginButton.classList.add('loading')

		if (!email.value || !name.value) {
			console.log('Please inlcude an Email and Name')
			loginButton.classList.remove('loading')
			loginButton.classList.add('btn-error')
			loginButton.textContent = 'Failed Sign Up'
			setTimeout(async () => {
				loginButton.classList.remove('btn-error')
				loginButton.textContent = 'Sign Up'
			}, 3000)
			return
		}

		if (!creds.password || !confirmPassword.value) {
			console.log('Please include a Password and Confirm it.')
			loginButton.classList.remove('loading')
			loginButton.classList.add('btn-error')
			loginButton.textContent = 'Failed Sign Up'
			setTimeout(async () => {
				loginButton.classList.remove('btn-error')
				loginButton.textContent = 'Sign Up'
			}, 3000)
			return
		}

		if (creds.password !== confirmPassword.value) {
			console.log('Password and Confirm-Password Do Not Match')
			loginButton.classList.remove('loading')
			loginButton.classList.add('btn-error')
			loginButton.textContent = 'Failed Sign Up'
			setTimeout(async () => {
				loginButton.classList.remove('btn-error')
				loginButton.textContent = 'Sign Up'
			}, 3000)
			return
		}

		try {
			const { user } = await Auth.signUp({
				username: creds.email,
				password: creds.password,
				attributes: {
					name: creds.name,
					email: creds.email
				},
				autoSignIn: {
					enabled: true
				}
			})

			$localUser = creds.email

			goto('/Auth/verify')
		} catch (error) {
			console.log(error)
			loginButton.classList.remove('loading')
			loginButton.classList.add('btn-error')
			loginButton.textContent = 'Failed Sign Up'
			setTimeout(async () => {
				loginButton.classList.remove('btn-error')
				loginButton.textContent = 'Sign Up'
			}, 3000)
		}
	}
</script>

<div class="flex flex-col justify-center items-center h-full w-full">
	<section
		class="flex flex-col items-center justify-between bg-base-300 bg-opacity-80 rounded-lg p-4 w-[18rem] h-fit">
		<div class="h-full flex flex-col w-full">
			<section class="w-full h-fit flex flex-col">
				<h1 class="w-full text-center text-3xl">Sign Up</h1>
			</section>

			<section class="flex flex-col h-full w-full gap-8">
				<!-- MY FORM -->
				<section id="INPUTS">
					<!-- Inputs -->
					<div class="form-control w-full max-w-xs">
						<label for="new_email" class="label">
							<span class="label-text">Email</span>
						</label>
						<input
							bind:value={creds.email}
							bind:this={email}
							id="new_email"
							autocomplete="off"
							name="email"
							type="email"
							placeholder="Email"
							class="input input-bordered w-full max-w-xs" />
					</div>

					<div class="form-control w-full max-w-xs">
						<label for="new_name" class="label">
							<span class="label-text">Name</span>
						</label>
						<input
							bind:value={creds.name}
							bind:this={name}
							id="new_name"
							autocomplete="off"
							name="new_name"
							type="text"
							placeholder="Name"
							class="input input-bordered w-full max-w-xs" />
					</div>

					<div class="form-control w-full max-w-xs">
						<label for="new-password" class="label">
							<span class="label-text">Password</span>
						</label>
						<input
							bind:value={creds.password}
							autocomplete="new-password"
							id="new_password"
							name="new_password"
							type="password"
							class="input input-bordered w-full max-w-xs" />
					</div>

					<div class="form-control w-full max-w-xs">
						<label for="confirm_password" class="label">
							<span class="label-text">Confirm Password</span>
						</label>
						<input
							bind:this={confirmPassword}
							autocomplete="new-password"
							id="confirm_password"
							name="confirm_password"
							type="password"
							class="input input-bordered w-full max-w-xs" />
					</div>
				</section>

				<section>
					<!-- buttons -->
					<button class="link">Cancel</button>
					<button bind:this={loginButton} class="btn btn-success" on:click={signUpHandler}
						>Create Account</button>
				</section>
				<!-- END OF MY FORM -->
			</section>
		</div>

		<p>
			Already have an account? <button
				class="btn btn-link p-0 text-current"
				on:click={authStateHandler}>Log In</button>
		</p>
	</section>
</div>
