<script>
	import { enhance } from '$app/forms'
	import { goto } from '$app/navigation'

	const confirmUser = {
		username: '',
		verification: ''
	}

	// My Sign Up Form:Enhance function
	const formEnhance = ({ form, data, action, cancel }) => {
		return async ({ result, update }) => {
			if (result.status === 200) goto('/Auth')
		}
	}
</script>

<div class="w-full h-full flex flex-col justify-center items-center">
	<div>
		<h2 class="w-full">Confirm Sign Up</h2>
		<form
			method="POST"
			class="form flex flex-col justify-between gap-4 w-fit"
			action="/Auth?/confirmSignUp"
			autocomplete="off"
			use:enhance={formEnhance}
			enctype="multipart/form-data">
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
					on:change={(e) => {
						confirmUser.username = e.target.value
					}} />
			</div>
			<div class="form-control w-full max-w-xs">
				<label class="label" for="username">
					<span class="label-text">Verification Code</span>
				</label>
				<input
					type="text"
					name="verification"
					id="verification"
					class="input input-bordered w-full max-w-xs"
					placeholder="xxxxxx"
					required
					on:change={(e) => {
						confirmUser.verification = e.target.value
					}} />
			</div>

			<section>
				<button on:click={() => goto('/')} class="btn btn-ghost" type="button">Cancel</button>
				<button class="btn btn-ghost" type="submit">Confirm</button>
			</section>
		</form>
	</div>
</div>
