<script>
	import { onMount } from 'svelte'
	import { DataStore } from 'aws-amplify'
	import { Comic } from '../../models'

	let Comics = false
	let MarvelComics

	let SyncButtonState = true

	onMount(async () => {
		await queryMarvelDataBase()
	})

	const queryMarvelDataBase = async () => {
		try {
			const marvel = await fetch('api/marvel')
			MarvelComics = await marvel.json()
			const DATASTORE_COMICS = await DataStore.query(Comic)
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

	const desyncSingleComic = async (comic) => {
		const singleAWSComic = await DataStore.delete(Comic, (c) =>
			c.marvelID.eq(comic.target.dataset.id * 1)
		)
		const updateComic = Comics.find((comic) => comic.marvelID === singleAWSComic[0].marvelID)
		updateComic.synced = false
		Comics = [...Comics]
	}
</script>

<main class="flex flex-col w-full h-full overflow-auto p-4 gap-2">
	<section class="flex justify-between items-center">
		<h1 class="text-3xl">Marvel Comics</h1>
		<div>
			<button class="btn btn-primary" disabled={SyncButtonState} on:click={DataStoreHandler}
				>Sync Database</button>
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
						class="card m-auto w-56 bg-base-100 shadow-xl ring-primary overflow-hidden relative z-1"
						class:ring-2={comic.synced}>
						<div
							class="tooltip z-99 tooltip-warning tooltip-left absolute top-2 right-2"
							data-tip="Datastore Delete">
							<button data-id={comic.marvelID} on:click={desyncSingleComic} class="btn btn-warning"
								>X</button>
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
