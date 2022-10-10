<script>
	import { enhance } from '$app/forms';
</script>

<div class="flex justify-center items-center h-full w-full">
	<div class="card">
		<form
			method="POST"
			class="form flex flex-col gap-4 card-body bg-base-300"
			use:enhance
			action="?/login"
		>
			<div class="form-control w-full max-w-xs">
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
				<input
					type="password"
					name="password"
					id="password"
					class="input input-bordered w-full max-w-xs"
					placeholder="Password"
					required
				/>
			</div>

			<div class="card-actions justify-end">
				<button class="btn btn-accent">Log in</button>
			</div>
		</form>
	</div>
</div>
