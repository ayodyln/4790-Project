<script>
	import { onMount } from 'svelte'
	import { goto } from '$app/navigation'

	import {
		queryMarvelDataBase,
		DataStoreHandler,
		NukeDataBase,
		desyncSingleComic,
		syncSingleComic
	} from '$lib/functions/AWS/Marvel'
	import { Auth } from 'aws-amplify'

	let Characters = false
	let SyncButtonState = true

	onMount(async () => {
		try {
			await Auth.currentAuthenticatedUser()
			Characters = await queryMarvelDataBase(SyncButtonState)
		} catch (error) {
			console.log(error)
			goto('/')
		}

		setTimeout(() => {
			SyncButtonState = !SyncButtonState
		}, 1000)
	})
</script>

<main class="flex flex-col w-full h-full overflow-auto p-4 gap-2">
	<section class="flex justify-between items-center">
		<h1 class="text-3xl">Marvel Characters</h1>
		<div>
			<button
				class="btn btn-accent"
				disabled={SyncButtonState}
				on:click={async () => (Characters = await DataStoreHandler(Characters))}
				>Sync Database</button>
			<button
				class="btn btn-error"
				disabled={SyncButtonState}
				on:click={async () => (Characters = await NukeDataBase(Characters))}
				>Delete Database</button>
		</div>
	</section>

	<section class="mt-2 flex justify-center items-center h-full overflow-hidden">
		{#if !Characters}
			<svg class="animate-spin h-10 w-10 mr-3 fill-current" viewBox="0 0 24 24">
				<path
					class="opacity-75"
					d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
			</svg>
		{:else}
			<div class="w-full overflow-auto h-full">
				<div class="w-full h-full flex">
					<table class="table table-compact w-full h-full overflow-auto">
						<thead>
							<tr>
								<th>ID</th>
								<th>Image</th>
								<th>Character</th>
								<th>Comic Appearences</th>
								<th class="text-center">Sync</th>
							</tr>
						</thead>
						<tbody class="h-full">
							{#each Characters as char, i}
								<tr class="h-10">
									<th>{i + 1}</th>
									<th>
										<div class="flex drop-shadow-lg">
											<img
												loading="lazy"
												class="w-auto h-20 border rounded-lg"
												src={char.thumbnail}
												alt="{char.name} - Marvel Comics" />
										</div>
									</th>
									<td>{char.name}</td>
									<td>
										<div class="flex">
											<a
												class="btn w-1/2"
												href={char.urls.find((t) => t.type === 'comiclink').url}
												target="_blank"
												rel="noreferrer">View Comics</a>
										</div>
									</td>
									<td>
										<div class="flex flex-col gap-2">
											{#if char.synced}
												<button
													on:click={async () => {
														Characters = await desyncSingleComic({ Characters, charID: char.id })
													}}
													class="btn btn-error btn-outline">Desync</button>
											{:else}
												<button
													on:click={async () => {
														Characters = await syncSingleComic({ Characters, charID: char.id })
													}}
													class="btn btn-success btn-outline">Sync</button>
											{/if}
										</div>
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
		{/if}
	</section>
</main>
