<script>
	import { enhance } from '$app/forms';

	export let forms;
	$: console.log(forms);

	function navigate() {
		goto('/');
	}
</script>

<div class="flex justify-center items-center h-full w-full">
	<div class="card">
		<div class="card-body bg-base-300">
			<form method="POST" class="form" use:enhance>
				<div class="form-control w-full max-w-xs">
					<input
						type="text"
						id="username"
						class="input input-bordered w-full max-w-xs"
						placeholder="Username"
						required
					/>
				</div>
				<div class="form-control w-full max-w-xs">
					<input
						type="password"
						id="password"
						class="input input-bordered w-full max-w-xs"
						placeholder="Password"
						required
					/>
				</div>

				<div>
					<button class="btn btn-accent">Log in</button>
				</div>
			</form>
		</div>
	</div>
</div>
