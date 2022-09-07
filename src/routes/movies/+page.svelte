<script>
	export let data;

	$: moviesArray = data.movies.Search;
	$: console.log(data.movies.Search);
</script>

<main class="">
	<h1>Movies</h1>

	{#each moviesArray as movie}
		<p>{movie.Title}</p>
	{/each}
</main>
