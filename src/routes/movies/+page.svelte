<script>
	import { enhance } from '$app/forms'
	import MovieModal from '../../lib/components/MovieModal/MovieModal.svelte'
	export let errors
	export let form

	import { tweened } from 'svelte/motion'
	import { cubicOut } from 'svelte/easing'

	import { Auth } from 'aws-amplify'
	import { goto } from '$app/navigation'
	import { onMount } from 'svelte'

	onMount(async () => {
		
	})

	const progress = tweened(0, {
		duration: 400,
		easing: cubicOut
	})

	let modalState = false

	$: movieData = {}
	const modalRender = () => {
		modalState = !modalState
	}

	function modalClose(e) {
		if (modalState && e.key === 'Escape') {
			modalState = ''
			movieData = {}
		}
	}

	const modalForm =
		() =>
		async ({ result, update }) => {
			movieData = await result.data
			modalRender()
		}

	// Simple solution to managing states with Data being sent from the server on Form Action.
	let moviesListState
	const getMovies = () => {
		moviesListState = false
		return async ({ update }) => {
			await progress.set(100)
			moviesListState = true
			await update()
		}
	}
</script>

{#if errors}
	<p class="error">{errors?.title}</p>
{/if}

<!-- PAGE WINDOW LISTNER FOR MODAL -->
<svelte:window on:keydown={modalClose} />

<main class="p-4 gap-2 max-w-7xl w-full m-auto flex-grow overflow-hidden flex flex-col">
	<div class="w-full flex justify-between items-center">
		<h1 class="text-xl">{!form ? '' : form.length} Movies</h1>

		<form method="POST" action="?/movies" use:enhance={getMovies}>
			<div class="form-control">
				<div class="input-group">
					<input
						class="input input-bordered input-md"
						type="search"
						name="searchTerms"
						placeholder="Movie Search" />

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
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
					</button>
				</div>
			</div>
		</form>
	</div>

	{#if moviesListState === undefined}
		<h2 class="card-title">No movies loaded. Enter a valid movie title in the search box.</h2>
	{:else if !moviesListState}
		<div class="w-full h-full flex justify-center items-center">
			<div class="radial-progress text-primary" style="--value:{$progress};">
				{Math.round(($progress * 100) / 100)}%
			</div>
		</div>
	{:else if moviesListState && form}
		<div class="flex flex-wrap w-full items-center justify-center gap-4 overflow-auto p-2">
			<form
				method="POST"
				action="?/singleMovie"
				use:enhance={modalForm}
				class="flex flex-wrap w-full justify-center gap-4">
				{#each form as movie, index (movie.imdbID)}
					<button
						id="bg"
						class="card w-60 md:w-68 h-96 shadow-xl ring-primary hover:box-shadow-lg text-left flex justify-end overflow-hidden"
						style="background-image: url({movie.Poster});"
						data-id={index}
						type="submit"
						name="MovieID"
						value={movie.imdbID}>
						<div id="cardbg" class="flex flex-col justify-end gap-4 h-1/4 w-full">
							<div
								class="text-neutral-content flex flex-col gap-2 h-full w-full p-2 bg-neutral bg-opacity-90">
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
