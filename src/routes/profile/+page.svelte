<script>
	import { themeChange } from 'theme-change';
	import { onMount } from 'svelte';

	const themes = ['Light', 'Dark', 'Emerald', 'Corporate', 'Night'];

	onMount(() => {
		themeChange(false);
	});
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
				<h2 class="text-lg">Username</h2>
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
						<select id="themeOption" class="select select-bordered" data-choose-theme>
							{#each themes as theme}
								<option value={theme.toLowerCase()}>{theme}</option>
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
