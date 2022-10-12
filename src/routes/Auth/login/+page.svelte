<script>
	import { enhance } from '$app/forms';
	import { error } from '@sveltejs/kit';
	import AuthComponent from '../../../lib/components/AuthComponent/AuthComponent.svelte';
	// export let form;
	// $: console.log(form);

	let loginButton;
	function loginHandler() {
		// console.log(loginButton);
		loginButton.classList.add('loading');
	}
</script>

<div class="flex flex-col justify-center items-center h-full w-full gap-2">
	<div class="card h-96">
		<form
			method="POST"
			class="form flex flex-col justify-between card-body bg-base-300 h-full"
			action="?/login"
			on:submit|preventDefault={loginHandler}
			use:enhance={({ form, data, action, cancel }) => {
				// form is the actual <form> tag
				// data is the formData object
				// action is the URL the form is posted to
				// cancel() will prevent any submission

				// console.log(data)

				return async ({ result, update }) => {
					// result is an ActionResult object
					// update is a function that triggers the logic that would be triggered if this callback wasn't set
					// console.log(result);

					if (result.status === 303) {
						loginButton.classList.remove('loading');
						await update();
					}
				};
			}}
		>
			<h1 class="w-full text-center text-2xl">Log In</h1>

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
						required
					/>
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
					/>
				</div>
			</section>

			<div class="card-actions justify-end">
				<button class="btn btn-accent" bind:this={loginButton}>Log in</button>
			</div>
		</form>
	</div>

	<p>Need an account? <a class="btn btn-link p-0" href="/Auth/signup">Sign Up</a></p>
</div>
