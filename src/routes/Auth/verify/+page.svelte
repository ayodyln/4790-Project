<script>
	import { Auth } from 'aws-amplify'
	import { localUser } from '$lib/stores/stores'
	import { goto } from '$app/navigation'

	let code, email
	const handleSubmit = async () => {
		console.log('About to verify code that was sent by email... ', code, $localUser || email)
		if ($localUser || email) {
			try {
				await Auth.confirmSignUp($localUser ? $localUser : email, code.toString())
				goto('/')
			} catch (error) {
				console.log('error confirming sign up', error)
			}
		} else {
			console.error('No email found for local user')
		}
	}
</script>

<div class="w-full h-full flex flex-col justify-center items-center">
	<div>
		<h2 class="w-full text-xl mb-4">Confirm Sign Up</h2>
		<form
			class="form flex flex-col justify-between gap-4 w-fit"
			autocomplete="off"
			on:submit|preventDefault={handleSubmit}
			enctype="multipart/form-data">
			{#if !$localUser}
				<div class="form-control w-full max-w-xs">
					<input
						type="text"
						name="Email"
						id="Email"
						class="input input-bordered w-full max-w-xs"
						placeholder="Email"
						required
						bind:value={email} />
				</div>
			{/if}
			<div class="form-control w-full max-w-xs">
				<input
					type="text"
					name="verification"
					id="verification"
					class="input input-bordered w-full max-w-xs"
					placeholder="Verification Code"
					required
					bind:value={code} />
			</div>

			<section>
				<button on:click={() => goto('/')} class="btn btn-ghost" type="button">Cancel</button>
				<button class="btn btn-ghost" type="submit">Confirm</button>
			</section>
		</form>
	</div>
</div>
