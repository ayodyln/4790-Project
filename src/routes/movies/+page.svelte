<script>
	export let data, errors;

	$: moviesArray = data.movies;
	// $: console.log(data);
</script>

{#if errors?.title}
	<p>{errors.title}</p>
{/if}

<main>
	<h1>Movies</h1>

	<!-- <div>
		<form action="POST">
			<input type="text" name="movieTitle" id="movieInput" />
		</form>
	</div> -->

	<div class="flex flex-wrap justify-center gap-1">
		{#if !data.movies.length}
			<div class="card">
				<div class="card-body">
					<h2 class="card-title">No Movies</h2>
				</div>
			</div>
		{:else}
			{#each moviesArray as movie}
				<div class="card w-56 bg-primary shadow-xl">
					<figure><img src={movie.Poster} alt="Shoes" /></figure>
					<div class="card-body">
						<h2 class="normal-case">{movie.Title}</h2>
					</div>
				</div>
			{/each}
		{/if}
	</div>
</main>

<style>
</style>
