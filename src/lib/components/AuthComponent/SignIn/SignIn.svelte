<script>
	import { enhance } from '$app/forms'
	import { goto } from '$app/navigation'
	import { user } from '$lib/stores/user'
	import { theme } from '$lib/stores/theme'

	export let authStateHandler, cancelAuthUI

	let loginButton
	function loginHandler() {
		// console.log(loginButton);
		loginButton.classList.add('loading')
		loginButton.textContent = 'Logging In...'
	}

	const formEnhance = () => {
		return async ({ result, update }) => {
			if (result.status === 200) {
				$user = result.data
				setTimeout(async () => {
					loginButton.classList.remove('loading')
					$theme = $user.theme
					goto('/home')
				}, 2000)
			}

			if (result.status !== 200) {
				loginButton.classList.remove('loading')
				loginButton.classList.add('btn-error')
				loginButton.textContent = 'Failed Login'

				setTimeout(async () => {
					loginButton.classList.remove('btn-error')
					loginButton.textContent = 'Log In'
					// await update()
				}, 3000)
			}
		}
	}
</script>

<div class="flex flex-col justify-center items-center h-full w-full gap-2">
	<div class="card h-96">
		<section class="card-body bg-base-300">
			<h1 class="w-full text-center text-2xl">Log In</h1>

			<form
				method="POST"
				class="form flex flex-col justify-between h-full"
				action="?/login"
				autocomplete="off"
				on:submit|preventDefault={loginHandler}
				use:enhance={formEnhance}>
				<section class="flex flex-col h-full gap-4">
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
				</section>

				<div class="card-actions justify-end">
					<button class="btn btn-ghost" on:click={cancelAuthUI}>Cancel</button>

					<button class="btn btn-accent" bind:this={loginButton}>Log in</button>
				</div>
			</form>
		</section>
	</div>

	<p>
		Need an account? <button class="btn btn-link p-0" on:click={authStateHandler}>Sign Up</button>
	</p>
</div>
