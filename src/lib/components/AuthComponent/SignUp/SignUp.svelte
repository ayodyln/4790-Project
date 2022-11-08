<script>
	import { enhance } from '$app/forms'
	import { error } from '@sveltejs/kit'
	// export let form;
	// $: console.log(form);

	export let authStateHandler, cancelAuthUI

	let loginButton
	function loginHandler() {
		// console.log(loginButton);
		loginButton.classList.add('loading')

		setTimeout(() => {
			authStateHandler()
		}, 1000)
	}

	const formEnhance = ({ form, data, action, cancel }) => {
		return async ({ result, update }) => {
			await update()
		}
	}
</script>

<div class="flex flex-col justify-center items-center h-full w-full gap-2">
	<div class="card h-auto">
		<section
			class="card-body items-center justify-between bg-base-300 bg-opacity-80 rounded-lg p-4 gap-4">
			<div class="h-full flex flex-col h-full">
				<h1 class="w-full text-center text-2xl">Sign Up</h1>

				<section class="flex flex-col h-full">
					<form
						method="POST"
						class="form flex flex-col justify-between gap-4"
						action="?/signUp"
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
							<button class="btn btn-ghost" type="button" on:click={cancelAuthUI}>Cancel</button>

							<button class="btn btn-accent" type="submit" bind:this={loginButton}>Sign Up</button>
						</div>
					</form>
				</section>
			</div>

			<p>
				Already have an account? <button class="btn btn-link p-0" on:click={authStateHandler}
					>Log In</button>
			</p>
		</section>
	</div>
</div>
