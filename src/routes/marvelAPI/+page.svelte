<script>
	import { onMount } from 'svelte'

	import {
		queryMarvelDataBase,
		DataStoreHandler,
		NukeDataBase,
		desyncSingleComic,
		syncSingleComic
	} from '$lib/functions/AWS/Marvel'

	let Comics = false
	let SyncButtonState = true

	onMount(async () => {
		Comics = await queryMarvelDataBase(SyncButtonState)

		setTimeout(() => {
			SyncButtonState = !SyncButtonState
		}, 1000)
	})
</script>

<main class="flex flex-col w-full h-full overflow-auto p-4 gap-2">
	<section class="flex justify-between items-center">
		<h1 class="text-3xl">Marvel Comics</h1>
		<div>
			<button
				class="btn btn-accent"
				disabled={SyncButtonState}
				on:click={async () => (Comics = await DataStoreHandler(Comics))}>Sync Database</button>
			<button
				class="btn btn-error"
				disabled={SyncButtonState}
				on:click={async () => (Comics = await NukeDataBase(Comics))}>Delete Database</button>
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
									on:click={async (e) =>
										(Comics = await desyncSingleComic({
											Comics,
											comic_id: comic.marvelID
										}))}
									class="btn btn-warning">X</button>
							{:else}
								<button
									on:click={async () =>
										(Comics = await syncSingleComic({ Comics, comic_id: comic.marvelID }))}
									class="btn btn-accent">+</button>
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
