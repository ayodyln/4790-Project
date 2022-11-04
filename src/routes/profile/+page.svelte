<script>
	import { theme } from '$lib/stores/theme'
	import { user, avatar } from '$lib/stores/user'

	let themeOptions = ['light', 'dark', 'cupcake', 'aqua', 'dracula', 'winter']

	let selectedTheme

	$: if (selectedTheme && selectedTheme !== 'Theme') $theme = selectedTheme
</script>

<section class="h-full w-full flex justify-center items-center">
	<div class="card card-side w-1/2 h-96 bg-base-100 shadow-xl">
		<section class="flex flex-col bg-base-200 w-1/4 p-3">
			<div class="avatar w-full h-1/2 justify-center items-center">
				<div class="w-40 h-40 rounded-full">
					<!-- svelte-ignore a11y-img-redundant-alt -->
					<img src={$avatar} alt="Profile Image" />
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
						<select bind:value={$theme} class="select w-full max-x-xs">
							<option disabled selected>Theme</option>
							{#each themeOptions as t}
								<option value={t}>{t}</option>
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
