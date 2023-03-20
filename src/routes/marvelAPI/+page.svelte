<script>
	import { onMount } from 'svelte'
	import { DataStore, Predicates } from 'aws-amplify'
	import { Comic } from '../../models'

	let Comics = false

	let SyncButtonState = true

	onMount(async () => {
		await queryMarvelDataBase()
	})

	const queryMarvelDataBase = async () => {
		try {
			const marvel = await fetch('api/marvel')
			const MarvelComics = await marvel.json()
			const DATASTORE_COMICS = await DataStore.query(Comic)
			if (!MarvelComics) {
				Comics = DATASTORE_COMICS
			} else {
				Comics = await MarvelComics.marvel.data.results.map((comic) => {
					return {
						title: comic.title,
						marvelID: comic.id,
						description: comic.description,
						pageCount: comic.pageCount,
						thumbnail: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
						synced: DATASTORE_COMICS.find((c) => c.marvelID === comic.id) ? true : false
					}
				})
			}
			setTimeout(() => {
				SyncButtonState = !SyncButtonState
			}, 1000)
		} catch (error) {
			console.log(error)
		}
	}

	const DataStoreHandler = async () => {
		let SyncComicDatastore
		Comics.forEach(async (comic) => {
			if (comic.synced) return
			comic.synced = true
			try {
				SyncComicDatastore = await DataStore.save(new Comic(comic))
			} catch (error) {
				console.log(error)
			}
		})
		Comics = [...Comics]
	}

	const NukeDataBase = async () => {
		await DataStore.delete(Comic, Predicates.ALL)
		Comics.forEach((c) => {
			c.synced = false
		})
		Comics = [...Comics]
	}

	const desyncSingleComic = async (comic) => {
		const [singleAWSComic] = await DataStore.delete(Comic, (c) =>
			c.marvelID.eq(comic.target.dataset.id * 1)
		)
		if (!singleAWSComic) return
		const updateComic = Comics.find((comic) => comic.marvelID === singleAWSComic.marvelID)
		updateComic.synced = false
		Comics = [...Comics]
	}

	const syncSingleComic = async (comic) => {
		const comicID = comic.target.dataset.id * 1
		const myComic = Comics.find((c) => c.marvelID === comicID)
		myComic.synced = true
		try {
			await DataStore.save(new Comic(myComic))
		} catch (error) {
			console.log(error)
		}
		Comics = [...Comics]
	}
</script>

<main class="flex flex-col w-full h-full overflow-auto p-4 gap-2">
	<section class="flex justify-between items-center">
		<h1 class="text-3xl">Marvel Comics</h1>
		<div>
			<button class="btn btn-primary" disabled={SyncButtonState} on:click={DataStoreHandler}
				>Sync Database</button>
			<button class="btn btn-primary" disabled={SyncButtonState} on:click={NukeDataBase}
				>Delete Database</button>
		</div>
	</section>

	<section class="mt-2">
		{#if !Comics}
			<svg class="animate-spin h-10 w-10 mr-3 fill-white" viewBox="0 0 24 24">
				<path
					class="opacity-75"
					d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
			</svg>
		{:else}
			<div class="flex flex-wrap gap-3">
				{#each Comics as comic}
					<div
						class="card m-auto w-56 bg-base-100 shadow-xl ring-accent overflow-hidden relative z-1"
						class:ring-4={comic.synced}>
						<div
							class="tooltip z-99 tooltip-left absolute top-2 right-2"
							class:tooltip-warning={comic.synced && true}
							class:tooltip-accent={!comic.synced && true}
							data-tip={comic.synced ? 'Datastore Delete' : 'Datastore Sync'}>
							{#if comic.synced}
								<button
									data-id={comic.marvelID}
									on:click={desyncSingleComic}
									class="btn btn-warning">X</button>
							{:else}
								<button data-id={comic.marvelID} on:click={syncSingleComic} class="btn btn-accent"
									>+</button>
							{/if}
						</div>

						<figure>
							<img src={comic.thumbnail} alt={comic.title} />
						</figure>
						<div class="card-body p-4 h-32 bg-base-300 rounded-b-xl">
							<h2 class="text-lg font-bold">{comic.title}</h2>
						</div>
					</div>
				{/each}
			</div>
		{/if}
	</section>
</main>
