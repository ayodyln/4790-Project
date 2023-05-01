<script>
	import { goto } from '$app/navigation'
	import { localUser } from '$lib/stores/stores'
	import { Auth } from 'aws-amplify'

	// Props
	export let authStateHandler

	const creds = {
		name: '',
		email: '',
		password: ''
	}

	// Login Handler for UI
	let loginButton,
		confirmPassword,
		email,
		name,
		errorState = []
	const signUpHandler = async () => {
		loginButton.classList.add('loading')

		if (!email.value || !name.value || !creds.password) {
			console.log('Please inlcude an Email and Name')
			loginButton.classList.remove('loading')
			loginButton.classList.add('btn-error')
			loginButton.textContent = 'Failed Sign Up'

			if (!email.value) errorState = [...new Set([...errorState, 'email'])]
			if (!name.value) errorState = [...new Set([...errorState, 'name'])]
			if (!creds.password) errorState = [...new Set([...errorState, 'password'])]

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

			errorState = [...new Set([...errorState, 'password', 'new-password'])]

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
					email: creds.email,
					picture: 'https://picsum.photos/200/300',
					website: '',
					'custom:theme': 'dark'
				},
				autoSignIn: {
					enabled: true
				}
			})

			$localUser = creds.email
			console.log(user)
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
		class="flex flex-col items-center justify-between bg-base-300 rounded-lg p-4 w-[18rem] h-fit">
		<div class="h-full flex flex-col w-full">
			<section class="w-full h-fit flex flex-col">
				<h1 class="w-full text-center text-3xl">Sign Up</h1>
			</section>

			<section class="flex flex-col h-full w-full gap-8">
				<!-- MY FORM -->
				<section id="INPUTS">
					<!-- Inputs -->
					<div
						class="form-control w-full max-w-xs tooltip tooltip-error {errorState.includes('email')
							? 'tooltip-open'
							: null} tooltip-right before:mt-4 before:p-4 after:mt-4"
						data-tip="Please input your Email.">
						<label for="new_email" class="label">
							<span class="label-text">Email</span>
						</label>
						<input
							bind:value={creds.email}
							bind:this={email}
							on:change={() => {
								errorState = errorState.filter((error) => error !== 'email')
							}}
							id="new_email"
							autocomplete="off"
							name="email"
							type="email"
							class="input input-bordered {errorState.includes('email')
								? 'input-error'
								: null} w-full max-w-xs" />
					</div>

					<div
						class="form-control w-full max-w-xs tooltip tooltip-error {errorState.includes('name')
							? 'tooltip-open'
							: null} tooltip-right before:mt-4 before:p-4 after:mt-4"
						data-tip="Please input your name.">
						<label for="new_name" class="label">
							<span class="label-text">Name</span>
						</label>
						<input
							bind:value={creds.name}
							bind:this={name}
							on:change={() => {
								errorState = errorState.filter((error) => error !== 'name')
							}}
							id="new_name"
							autocomplete="off"
							name="new_name"
							type="text"
							class="input input-bordered {errorState.includes('name')
								? 'input-error'
								: null} w-full max-w-xs" />
					</div>

					<div
						class="form-control w-full max-w-xs tooltip tooltip-error {errorState.includes(
							'password'
						)
							? 'tooltip-open'
							: null} tooltip-right before:mt-4 before:p-4 after:mt-4"
						data-tip="Please create a password">
						<label for="new-password" class="label">
							<span class="label-text">Password</span>
						</label>
						<input
							bind:value={creds.password}
							on:change={() => {
								errorState = errorState.filter((error) => error !== 'password')
							}}
							autocomplete="new-password"
							id="new_password"
							name="new_password"
							type="password"
							class="input input-bordered {errorState.includes('password')
								? 'input-error'
								: null} w-full max-w-xs" />
					</div>

					<div
						class="form-control w-full max-w-xs tooltip tooltip-error {errorState.includes(
							'new-password'
						)
							? 'tooltip-open'
							: null} tooltip-right before:mt-4 before:p-4 after:mt-4"
						data-tip="Please match passwords.">
						<label for="confirm_password" class="label">
							<span class="label-text">Confirm Password</span>
						</label>
						<input
							bind:this={confirmPassword}
							autocomplete="new-password"
							id="confirm_password"
							name="confirm_password"
							type="password"
							class="input input-bordered {errorState.includes('new-password')
								? 'input-error'
								: null} w-full max-w-xs" />
					</div>
				</section>

				<section class="flex justify-end gap-4">
					<!-- buttons -->
					<button class="link" on:click={authStateHandler}>Cancel</button>
					<button bind:this={loginButton} class="btn btn-success" on:click={signUpHandler}
						>Create Account</button>
				</section>
				<!-- END OF MY FORM -->
			</section>
		</div>
	</section>
</div>
