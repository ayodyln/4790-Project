<script>
	import { enhance } from '$app/forms'
	import { goto } from '$app/navigation'
	import { user, theme } from '$lib/stores/stores'

	export let authStateHandler, cancelAuthUI

	let loginButton
	function loginHandler() {
		// console.log(loginButton);
		loginButton.classList.add('loading')
		loginButton.textContent = 'Logging In...'
	}

	const formEnhance = () => {
		// loginButton.classList.remove('loading')

		return async ({ result, update }) => {
			if (result.status === 200) {
				$user = JSON.stringify(result.data)
				$theme = result.data.theme
				goto('/home')
			}

			if (result.status !== 200) {
				loginButton.classList.remove('loading')
				loginButton.classList.add('btn-error')
				loginButton.textContent = 'Failed Login'

				setTimeout(async () => {
					loginButton.classList.remove('btn-error')
					loginButton.textContent = 'Log In'
				}, 3000)
			}
		}
	}

</script>

<div class="flex flex-col justify-center items-center h-full w-full gap-2">
	<div class="card h-auto w-80">
		<section
			class="card-body items-center justify-between bg-base-300 bg-opacity-80 rounded-lg p-4 gap-4 h-full">
			<div class="h-full flex flex-col w-full">
				<h1 class="w-full text-center text-2xl">Log In</h1>

				<section class="flex flex-col h-full w-full">
					<form
						method="POST"
						class="form flex flex-col justify-between gap-4"
						action="?/login"
						autocomplete="off"
						on:submit={loginHandler}
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
									autocomplete="off"
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

			<p>
				Need an account? <button class="btn btn-link p-0" on:click={authStateHandler}
					>Sign Up</button>
			</p>
		</section>
	</div>
</div>
