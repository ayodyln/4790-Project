<script>
	export let movieData, modalClose, modalRender
	import { fade } from 'svelte/transition'

	$: Genres = movieData.Genre.split(', ')

	function closeModalHandler(event) {
		if (event.target.classList.contains('modal')) modalRender()
	}

	console.log(movieData)
</script>

<div
	class="modal"
	class:modal-open={modalRender}
	on:keyup={modalClose}
	on:click={closeModalHandler}
	transition:fade={{ duration: 25 }}>
	<div
		class="modal-box w-[60rem] max-w-5xl p-0 flex justify-center bg-neutral-focus text-primary-content">
		<img src={movieData.Poster} alt={movieData.Title} />
		<div class="p-4 flex flex-col gap-4 overflow-hidden">
			<section class="flex flex-col gap-2 h-96 overflow-hidden">
				<div class="flex justify-between w-full items-center h-fit py-2">
					<section class="">
						<h1 class="font-bold text-3xl">{movieData.Title}</h1>
						<h3 class="font-bold text-lg">{movieData.Year}</h3>
					</section>
					<div
						class="bg-primary text-primary-content rounded-full w-20 h-20 flex flex-col justify-center items-center">
						<p class="text-2xl">{movieData.Metascore}</p>
						<p class="text-xs">Metascore</p>
					</div>
				</div>

				<div class="bg-neutral overflow-auto p-2 flex flex-col gap-4 rounded-lg text-current">
					<section>
						<h4 class="text-lg font-bold">Synopsis</h4>
						<div class="divider my-2 p-0 h-1 w-56" />

						<p class="">{movieData.Plot}</p>
					</section>

					<section>
						<h4 class="text-lg font-bold">Genre</h4>
						<div class="divider my-2 p-0 h-1 w-56" />

						<ul class="flex gap-2">
							{#each Genres as genre}
								<li class="badge badge-outline p-3">{genre}</li>
							{/each}
						</ul>
					</section>

					<section>
						<h4 class="text-lg font-bold">Cast & Crew</h4>
						<div class="divider my-2 p-0 h-1 w-56" />
						<p><span class="font-bold">Director</span>: {movieData.Director}</p>
						<p><span class="font-bold">Writers</span>: {movieData.Writer}</p>
						<p><span class="font-bold">Actors</span>: {movieData.Actors}</p>
					</section>

					<section>
						<h4 class="text-lg font-bold">Details</h4>
						<div class="divider my-2 p-0 h-1 w-56" />

						<p><span class="font-bold">Awards</span>: {movieData.Awards}</p>
						<p>
							<span class="font-bold">Box Office</span>: {movieData.BoxOffice} ({movieData.Country})
						</p>
						<p><span class="font-bold">DVD Release Date</span>: {movieData.DVD}</p>
						<p><span class="font-bold">Rated</span>: {movieData.Rated}</p>
						<p><span class="font-bold">Runtime</span>: {movieData.Runtime}</p>
						<p><span class="font-bold">IMDB Rating</span>: {movieData.imdbRating}</p>
					</section>
				</div>
			</section>

			<div class="flex justify-end">
				<button class="btn modalButton" on:click={modalRender}>Close</button>
			</div>
		</div>
	</div>
</div>
