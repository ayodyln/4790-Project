<script>
	import { enhance } from '$app/forms'
	import { goto } from '$app/navigation'
	import { user, theme } from '$lib/stores/stores'
	import { Auth } from 'aws-amplify'

	export let authStateHandler, cancelAuthUI

	const creds = {
		email: '',
		password: ''
	}

	let loginButton
	const loginHandler = async () => {
		try {
			const user = await Auth.signIn(creds.email, creds.password)
			console.log('User Logged In', user)
		} catch (error) {
			console.log(error)
		}
	}

	// async function loginHandler() {
	// 	loginButton.classList.add('loading')
	// 	loginButton.textContent = 'Logging In...'
	// }

	// const formEnhance = () => {
	// 	return async ({ result, update }) => {
	// 		if (result.status === 200) {
	// 			$user = JSON.stringify(result.data.user)
	// 			$theme = result.data.user.theme
	// 			goto('/home')
	// 		}

	// 		if (result.status !== 200) {
	// 			loginButton.classList.remove('loading')
	// 			loginButton.classList.add('btn-error')
	// 			loginButton.textContent = 'Failed Login'

	// 			setTimeout(async () => {
	// 				loginButton.classList.remove('btn-error')
	// 				loginButton.textContent = 'Log In'
	// 			}, 3000)
	// 		}
	// 	}
	// }
</script>

<div class="flex flex-col justify-center items-center h-full w-full gap-2">
	<div class="card h-auto w-80">
		<section
			class="card-body items-center justify-between bg-base-300 bg-opacity-80 rounded-lg p-4 gap-0 h-full">
			<div class="h-full flex flex-col w-full">
				<h1 class="w-full text-center text-2xl">Log In</h1>

				<section class="flex flex-col h-full w-full">
					<form
						class="form flex flex-col justify-between gap-4"
						autocomplete="off"
						on:submit|preventDefault={loginHandler}>
						<section class="flex flex-col h-full gap-4">
							<div class="form-control w-full max-w-xs">
								<label class="label" for="email">
									<span class="label-text">Email</span>
								</label>
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
								<label class="label" for="password">
									<span class="label-text">Password</span>
								</label>
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
							<button class="btn btn-ghost" type="button" on:click={cancelAuthUI}>Cancel</button>

							<button class="btn btn-accent" type="submit" bind:this={loginButton}>Log in</button>
						</div>
					</form>
				</section>
			</div>

			<div class="flex flex-col items-center">
				<p>
					Need an account? <button class="btn btn-link w-fit m-0 p-0" on:click={authStateHandler}
						>Sign Up</button>
				</p>

				<a class="btn btn-link" href="/Auth/confirm">Confirm Account</a>
			</div>
		</section>
	</div>
</div>
