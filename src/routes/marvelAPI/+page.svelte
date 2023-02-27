<script>
	import { onMount } from 'svelte'
	import { DataStore } from 'aws-amplify'
	import { Comic } from '../../models'

	let Comics = false

	let SyncButtonState = true

	onMount(async () => {
		// await syncComicData()
		await queryComicDatastore()
	})

	const syncComicData = async () => {
		try {
			const marvel = await fetch('api/marvel')
			const marvel_res = await marvel.json()
			Comics = marvel_res.marvel
			console.log(Comics)

			// SyncButtonState = !SyncButtonState
		} catch (error) {
			console.log(error)
		}
	}

	const queryComicDatastore = async () => {
		const models = await DataStore.query(Comic)
		console.log(models)
		Comics = models
		SyncButtonState = !SyncButtonState
	}

	const DataStoreHandler = async () => {
		const FormatedComicObjects = Comics.data.results.map((comic) => {
			return {
				title: comic.title,
				marvelID: comic.id,
				description: comic.description,
				pageCount: comic.pageCount,
				thumbnail: `${comic.thumbnail.path}.${comic.thumbnail.extension}`
			}
		})

		FormatedComicObjects.forEach(async (comic) => {
			try {
				const SyncComicDatastore = await DataStore.save(new Comic(comic))
				console.log(SyncComicDatastore)
			} catch (error) {
				console.log(error)
			}
		})
	}

	const GetSingleComic = async () => {
		const posts = await DataStore.query(Comic, (c) => c.marvelID(49007))
		console.log(posts)
	}
</script>

<main class="flex flex-col w-full h-full overflow-auto p-4 gap-2">
	<section class="flex justify-between items-center">
		<h1 class="text-3xl">Marvel</h1>
		<div>
			<button class="btn btn-primary" disabled={SyncButtonState} on:click={DataStoreHandler}
				>Sync Database</button>
			<button on:click={GetSingleComic} class="btn btn-accent">Fetch First Comic</button>
		</div>
	</section>

	<section>
		<h2>Comics</h2>

		{#if !Comics}
			<svg class="animate-spin h-10 w-10 mr-3 fill-white" viewBox="0 0 24 24">
				<path
					class="opacity-75"
					d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
			</svg>
		{:else}
			<div>
				{#each Comics as comic}
					<div class="card card-compact w-96 bg-base-100 shadow-xl">
						<figure>
							<img src={comic.thumbnail} alt={comic.title} />
						</figure>
						<div class="card-body">
							<h2 class="card-title">Shoes!</h2>
							<p>If a dog chews shoes whose shoes does he choose?</p>
							<div class="card-actions justify-end">
								<button class="btn btn-primary">Buy Now</button>
							</div>
						</div>
					</div>
				{/each}
			</div>
		{/if}
	</section>
</main>
