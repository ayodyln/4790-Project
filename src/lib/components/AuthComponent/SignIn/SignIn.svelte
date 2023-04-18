<script>
	import { goto } from '$app/navigation'
	import { Auth, DataStore } from 'aws-amplify'
	import { user, theme } from '$lib/stores/stores'
	import { Comic } from '../../../../models'

	export let authStateHandler

	const creds = {
		email: '',
		password: ''
	}

	let loginButton
	const loginHandler = async () => {
		loginButton.classList.add('loading')
		loginButton.textContent = 'Logging In...'

		try {
			const AWS_USER = await Auth.signIn(creds.email, creds.password)
			// Configure User Stores to pass along user data
			// Checking for current auth user
			$user = JSON.stringify(AWS_USER.attributes)
			$theme = AWS_USER.attributes['custom:theme']
			await DataStore.start(Comic)

			goto('/home')
		} catch (error) {
			console.log(error)
			loginButton.classList.remove('loading')
			loginButton.classList.add('btn-error')
			loginButton.textContent = 'Failed Login'

			setTimeout(async () => {
				loginButton.classList.remove('btn-error')
				loginButton.textContent = 'Log In'
			}, 3000)
		}
	}
</script>

<div class="flex flex-col justify-center items-center h-full w-full gap-2">
	<div class="card h-auto w-80">
		<section
			class="card-body items-center justify-between bg-base-300 bg-opacity-80 rounded-lg p-4 gap-0 h-full">
			<div class="h-full flex flex-col w-full">
				<h1 class="w-full text-center text-3xl mb-6">Log In</h1>

				<section class="flex flex-col h-full w-full">
					<form
						class="form flex flex-col justify-between gap-4"
						autocomplete="off"
						on:submit|preventDefault={loginHandler}>
						<section class="flex flex-col h-full gap-4">
							<div class="form-control w-full max-w-xs">
								<input
									type="text"
									name="email"
									id="email"
									class="input input-bordered w-full max-w-xs"
									placeholder="Email"
									autocomplete="off"
									bind:value={creds.email}
									required />
							</div>
							<div class="form-control w-full max-w-xs">
								<input
									type="password"
									name="password"
									id="password"
									class="input input-bordered w-full max-w-xs"
									placeholder="Password"
									autocomplete="off"
									bind:value={creds.password}
									required />
							</div>
						</section>

						<div class="card-actions justify-end">
							<button class="btn btn-accent" type="submit" bind:this={loginButton}>Log in</button>
						</div>
					</form>
				</section>
			</div>

			<div class="flex flex-col items-center mt-4">
				<p>
					Need an account? <button
						class="btn btn-link text-current w-fit m-0 p-0"
						on:click={authStateHandler}>Sign Up</button>
				</p>

				<a class="btn btn-link text-current" href="/Auth/verify">Verify Account</a>
			</div>
		</section>
	</div>
</div>
