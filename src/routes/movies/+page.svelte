<script>
	import { enhance } from '$app/forms';
	export let errors;
	export let form;
	// export let data;
	// $: console.log(data.movies);

	$: loading = false;
	$: modalTrue = 'modal-open';

	function onSubmitHandler(e) {}
</script>

{#if errors}
	<p class="error">{errors?.title}</p>
{/if}

<main class="flex flex-col w-full h-full overflow-hidden p-4">
	<div class="w-full flex justify-between items-center">
		<h1 class="text-xl">{!form ? '' : form.length} Movies</h1>

		<form method="POST" action="/movies" on:submit={onSubmitHandler} use:enhance>
			<div class="form-control">
				<div class="input-group">
					<input
						class="input input-bordered input-md"
						type="search"
						name="searchTerms"
						placeholder="Movie Search"
					/>

					<button class="btn btn-square" type="submit">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							><path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/></svg
						>
					</button>
				</div>
			</div>
		</form>
	</div>

	{#if !form}
		<h2 class="card-title">No movies loaded. Enter a valid movie title in the search box.</h2>
	{:else if form}
		<div class="flex flex-wrap w-full h-full items-center justify-center gap-4 overflow-auto p-2">
			{#each form as movie}
				<div
					id="bg"
					class="card w-56 md:w-68 h-96 shadow-xl hover:ring-4 ring-primary ring-inset hover:box-shadow-lg"
					style="background-image: url({movie.Poster});"
				>
					<div
						id="cardbg"
						class="card-body flex flex-col justify-end gap-4 h-full w-full p-4 glass"
					>
						<div class="text-neutral-content flex flex-col gap-2 w-full p-2">
							<h2 class="text-md">{movie.Title}</h2>
							<p>{movie.Year}</p>
						</div>

						<div class="card-actions justify-end w-full">
							<button class="btn btn-md">Read More...</button>
						</div>
					</div>
				</div>
			{/each}
		</div>
	{/if}

	{#if !modalTrue}
		<!-- Put this part before </body> tag -->
		<input type="checkbox" id="my-modal-4" class="modal-toggle" />
		<label for="my-modal-4" class="modal cursor-pointer {modalTrue}">
			<label class="modal-box relative" for="">
				<h3 class="text-lg font-bold">Congratulations random Internet user!</h3>
				<p class="py-4">
					You've been selected for a chance to get one year of subscription to use Wikipedia for
					free!
				</p>
			</label>
		</label>
	{/if}
</main>

<style>
	#bg {
		background: no-repeat;
		background-size: cover;
		background-position: center;
	}
	#cardbg {
		background-color: rgba(0, 0, 0, 0.4);
		backdrop-filter: blur(0px);
	}
</style>
