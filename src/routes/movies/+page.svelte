<script>
	export let data;

	$: moviesArray = data.movies.Search;
	// $: console.log(data.movies);
</script>

<main>
	<h1>Movies</h1>

	<div class="flex flex-wrap justify-center gap-1">
		{#each moviesArray as movie}
			<div class="card w-56 bg-primary shadow-xl">
				<figure><img src={movie.Poster} alt="Shoes" /></figure>
				<div class="card-body">
					<h2 class="normal-case">{movie.Title}</h2>
				</div>
			</div>
		{/each}
	</div>
</main>

<style>
</style>
