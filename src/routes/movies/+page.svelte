<script>
	import { enhance } from '$app/forms';
	import MovieModal from '../../lib/components/MovieModal/MovieModal.svelte';
	export let errors;
	export let form;
	// export let data;
	// $: console.log(data.movies);

	// $: loading = false;
	let modalState = false;

	$: movieData = {};
	const modalRender = (movie) => {
		// movieData = movie;
		modalState = !modalState;
	};

	function modalClose(e) {
		if (modalState && e.key === 'Escape') {
			modalState = '';
			movieData = {};
		}
	}

	const modalForm = ({ data, action, cancel }) => {
		// `data` is its `FormData` object
		// `action` is the URL to which the form is posted
		// `cancel()` will prevent the submission
		return async ({ result, update }) => {
			// `result` is an `ActionResult` object
			// `update` is a function which triggers the logic that would be triggered if this callback wasn't set    };
			// modalRender(result.data);
			movieData = result.data;
		};
	};
</script>

{#if errors}
	<p class="error">{errors?.title}</p>
{/if}

<!-- PAGE WINDOW LISTNER FOR MODAL -->
<svelte:window on:keydown={modalClose} />

<main class="flex flex-col w-full h-full overflow-hidden p-4">
	<div class="w-full flex justify-between items-center">
		<h1 class="text-xl">{!form ? '' : form.length} Movies</h1>

		<form method="POST" action="?/movies" use:enhance>
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
			<form method="POST" action="?/singleMovie" use:enhance={modalForm}>
				{#each form as movie, index (movie.imdbID)}
					<button
						id="bg"
						class="card w-60 md:w-68 h-96 shadow-xl hover:ring-4 ring-primary ring-inset hover:box-shadow-lg text-left flex justify-end"
						style="background-image: url({movie.Poster});"
						data-id={index}
						type="submit"
						name="MovieID"
						value={movie.imdbID}
						on:click={modalRender}
					>
						<div id="cardbg" class="flex flex-col justify-end gap-4 h-1/4 w-full ">
							<div
								class="text-neutral-content flex flex-col gap-2 h-full w-full p-2 bg-neutral bg-opacity-90"
							>
								<h2 class="text-md">{movie.Title}</h2>
								<p>{movie.Year}</p>
							</div>
						</div>
					</button>
				{/each}
			</form>
		</div>
	{/if}

	{#if modalState}
		<MovieModal {movieData} {modalClose} {modalRender} />
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
