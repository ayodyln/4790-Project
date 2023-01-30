<script>
	import { goto } from '$app/navigation'
	import { localUser } from '$lib/stores/stores'
	import { Auth } from 'aws-amplify'

	// Props
	export let authStateHandler, cancelAuthUI

	const creds = {
		name: '',
		email: '',
		password: ''
	}

	// Login Handler for UI
	let loginButton
	const signUpHandler = async () => {
		console.log('Signing up....')

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
			console.log(user)

			$localUser = creds.email

			// go to verification route on success
			goto('/Auth/verify')
		} catch (error) {
			console.log(error)
		}
	}
	// function loginHandler() {
	// 	loginButton.classList.add('loading')
	// }
</script>

<div class="flex flex-col justify-center items-center h-full w-full">
	<section
		class="flex flex-col items-center justify-between bg-base-300 bg-opacity-80 rounded-lg p-4 w-[18rem] h-fit">
		<div class="h-full flex flex-col w-full">
			<section class="w-full h-fit flex flex-col">
				<h1 class="w-full text-center text-2xl">Sign Up</h1>
			</section>

			<section class="flex flex-col h-full w-full">
				<!-- MY FORM -->
				<form
					class="form flex flex-col justify-between gap-4 w-full h-full"
					autocomplete="off"
					on:submit|preventDefault={signUpHandler}
					enctype="multipart/form-data">
					<section class="flex flex-col h-full gap-4 w-full">
						<!-- User Info Section -->
						<div id="wrapper">
							<div class="form-control w-full max-w-xs">
								<label class="label" for="username">
									<span class="label-text">Name</span>
								</label>
								<input
									type="name"
									name="name"
									id="name"
									class="input input-bordered w-full max-w-xs"
									placeholder="Name"
									required
									bind:value={creds.name} />
							</div>
							<div class="form-control w-full max-w-xs">
								<label class="label" for="username">
									<span class="label-text">Email</span>
								</label>
								<input
									type="email"
									name="email"
									id="email"
									class="input input-bordered w-full max-w-xs"
									placeholder="Email"
									required
									bind:value={creds.email} />
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
									bind:value={creds.password} />
							</div>
						</div>
					</section>

					<div class="flex justify-end w-full">
						<button class="btn btn-link text-current">Cancel</button>
						<button class="btn btn-accent" type="submit" name="userInput">Sign Up</button>
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
