<script>
	export let form, errors;
	export let data;
	$: console.log(data.movies);
</script>

{#if errors?.title}
	<p class="error">{errors.title}</p>
{/if}

<main class="flex flex-wrap justify-center">
	{#if !form}
		{#each data.movies as movie}
			<div class="card w-96 bg-base-100 shadow-xl m-4">
				<figure>
					<img src={movie.Poster} alt="Movie poster" />
				</figure>
				<div class="card-body">
					<h2 class="card-title">{movie.Title}</h2>
					<p>{movie.Year}</p>
					<div class="card-actions justify-end">
						<button class="btn btn-primary">Buy Now</button>
					</div>
				</div>
			</div>
		{/each}
	{:else if form}
		{#each form as movie}
			<div class="card w-96 bg-base-100 shadow-xl m-4">
				<figure>
					<img src={movie.Poster} alt="Movie poster" />
				</figure>
				<div class="card-body">
					<h2 class="card-title">{movie.Title}</h2>
					<p>{movie.Year}</p>
					<div class="card-actions justify-end">
						<button class="btn btn-primary">Buy Now</button>
					</div>
				</div>
			</div>
		{/each}
	{:else}
		<div class="card">
			<div class="card-body">
				<!-- <img src="/images/adventurer.svg" alt="Adventurer"/> -->
				<h2 class="card-title">No movies loaded. Enter a valid movie title in the search box.</h2>
			</div>
		</div>
	{/if}
</main>
