<script>
	import { enhance, applyAction } from '$app/forms';
	import { redirect } from '@sveltejs/kit';
	export let form, errors;
	// export let data;
	// $: console.log(data.movies);
	$: console.log(form);

	function onSubmitHandler(e) {
		console.log(e);
	}
</script>

{#if errors?.title}
	<p class="error">{errors.title}</p>
{/if}

<main class="flex flex-col w-full h-full">
	<div class="w-full flex justify-end">
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
		<div class="card">
			<div class="card-body">
				<!-- <img src="/images/adventurer.svg" alt="Adventurer"/> -->
				<h2 class="card-title">No movies loaded. Enter a valid movie title in the search box.</h2>
			</div>
		</div>
	{:else if form}
		<div class="flex flex-wrap w-full h-full items-center justify-center gap-4">
			{#each form as movie}
				<div class="card max-w-xs w-full h-1/2 bg-base-300 shadow-xl">
					<div class="card-body bg-base-100 flex flex-col justify-between">
						<figure class="h-64 w-full flex ">
							<img src={movie.Poster} alt="Movie poster" class="h-full" />
						</figure>

						<div>
							<div class="w-full">
								<h2 class="card-title">{movie.Title}</h2>
								<p>{movie.Year}</p>
							</div>

							<div class="card-actions justify-end">
								<button class="btn btn-primary">Buy Now</button>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	{:else}
		<div class="card">
			<div class="card-body">
				<!-- <img src="/images/adventurer.svg" alt="Adventurer"/> -->
				<h2 class="card-title">No movies loaded. Enter a valid movie title in the search box.</h2>
			</div>
		</div>
	{/if}
</main>
