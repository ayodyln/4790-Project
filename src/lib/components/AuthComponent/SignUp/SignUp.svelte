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

	const formEnhace = ({ form, data, action, cancel }) => {
		// form is the actual <form> tag
		// data is the formData object
		// action is the URL the form is posted to
		// cancel() will prevent any submission

		return async ({ result, update }) => {
			// result is an ActionResult object
			// update is a function that triggers the logic that would be triggered if this callback wasn't set
			await update()
		}
	}
</script>

<div class="flex flex-col justify-center items-center h-full w-full gap-2">
	<div class="card h-96">
		<div class="card-body bg-base-300">
			<h1 class="w-full text-center text-2xl">Sign Up</h1>
			<form
				method="POST"
				class="form flex flex-col justify-between h-full"
				action="?/signUp"
				autocomplete="off"
				on:submit|preventDefault={loginHandler}
				use:enhance={formEnhace}>
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

					<button class="btn btn-accent" bind:this={loginButton}>Sign Up</button>
				</div>
			</form>
		</div>
	</div>

	<p>
		Already have an account? <button class="btn btn-link p-0" on:click={authStateHandler}
			>Sign In</button>
	</p>
</div>
