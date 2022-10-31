<script>
	import { theme } from '$lib/stores/theme'
	import { user } from '$lib/stores/user'

	const themes = ['Light', 'Dark', 'Emerald', 'Corporate', 'Night']

	console.log($user)
</script>

<section class="h-full w-full flex justify-center items-center">
	<div class="card card-side w-1/2 h-96 bg-base-100 shadow-xl">
		<section class="flex flex-col bg-base-200 w-1/4 p-3">
			<div class="avatar w-full h-1/2 justify-center items-center">
				<div class="w-40 h-40 rounded-full">
					<!-- svelte-ignore a11y-img-redundant-alt -->
					<img src="https://placeimg.com/192/192/people" alt="Profile Image" />
				</div>
			</div>
			<div class="h-1/2 w-full text-center">
				<h2 class="text-lg">{$user.username}</h2>
				<p>Bio</p>
			</div>
		</section>

		<div class="card-body bg-base-300">
			<section class="h-full">
				<div>
					<div class="form-control w-full max-w-xs">
						<label class="label" for="themeOption">
							<span class="label-text">Theme</span>
						</label>
						<select id="themeOption" class="select select-bordered" bind:value={$theme}>
							{#each themes as t}
								{#if t.toLowerCase() === $theme}
									<option value={t.toLowerCase()} selected>{t}</option>
								{:else}
									<option value={t.toLowerCase()}>{t}</option>
								{/if}
							{/each}
						</select>
					</div>
				</div>
			</section>

			<div class="card-actions justify-end">
				<button class="btn btn-primary">Save</button>
			</div>
		</div>
	</div>
</section>
