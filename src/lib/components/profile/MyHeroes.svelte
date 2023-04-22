<script>
	import { DataStore } from 'aws-amplify'
	import { onMount } from 'svelte'
	import { Comic } from '../../../models'
	import { format } from 'date-fns'
	import { deleteComic } from '$lib/functions/AWS/Marvel'

	let heroes = []
	let drawerToggle = true
	let heroContent

	const heroRender = async (hero) => {
		heroContent = await getSingleMarvelCharacter(hero.marvelID)
		drawerToggle = !drawerToggle
	}

	const getSingleMarvelCharacter = async (id) => {
		try {
			const data = await fetch(`api/singleMarvelHero?id=${id}`)
			const res = await data.json()
			return res.marvel[0]
		} catch (err) {
			console.log(err)
		}
	}

	const deleteCharHandler = async (hero) => {
		await deleteComic(hero)
		drawerToggle = !drawerToggle
		heroContent = false
	}

	const getComicUrl = (hero) => {
		console.log(hero)
		const u = hero.filter((urls) => urls.type === 'comiclink')
		return u[0].url
	}

	onMount(() => {
		DataStore.observeQuery(Comic).subscribe(({ items, isSynced }) => {
			console.log(isSynced)
			heroes = items
		})

		if (heroes.length === 0) drawerToggle = false
	})
</script>

<div id="myHeroes" class="flex bg-base-100">
	<div class="drawer">
		<input id="my-drawer" type="checkbox" class="drawer-toggle" bind:checked={drawerToggle} />
		<div class="drawer-content">
			<!-- Page content here -->
			<div id="hero" class="relative overflow-hidden">
				{#if !heroContent}
					<section class="h-[525px] flex flex-col justify-center items-center gap-4">
						<p class="text-xl font-bold">Select a Hero</p>
						<label for="my-drawer" class="btn btn-primary">View Heroes</label>
					</section>
				{:else}
					<section class="flex flex-col gap-2 h-[590px] overflow-auto p-3">
						<div class="flex w-full justify-end">
							<label for="my-drawer" class="btn btn-primary btn-circle btn-sm">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M6 18L18 6M6 6l12 12" /></svg>
							</label>
						</div>

						<div class="flex flex-col gap-3">
							<section class="flex gap-2">
								<div class="avatar">
									<div class="w-52 rounded">
										<img
											src="{heroContent.thumbnail.path}.{heroContent.thumbnail.extension}"
											alt="Tailwind-CSS-Avatar-component" />
									</div>
								</div>

								<span>
									<h2 class="text-3xl font-bold">{heroContent.name}</h2>
									<p>Marvel ID: {heroContent.id}</p>
									<p>Last Updated: {format(new Date(heroContent.modified), 'MM/dd/yyyy')}</p>
									<div class="divider m-0 h-1" />
									<a
										class="btn btn-primary btn-sm mt-2"
										href={getComicUrl(heroContent.urls)}
										target="_blank"
										rel="noreferrer">View Comics</a>

									<button on:click={() => deleteCharHandler(heroContent)}>Delete Character</button>
								</span>
							</section>

							<section class="bg-base-300 p-2 rounded-lg min-h-[100px] h-auto">
								{#if !heroContent.description}
									<p>Hmmm.... This {heroContent.name} doesn't have a bio.</p>
								{:else}
									{heroContent.description}
								{/if}
							</section>

							<section id="comics" class="bg-base-300 p-2 rounded-lg">
								<h2 class="text-xl font-bold">
									Comics {heroContent.name} Appears in: {heroContent.comics.items.length}
								</h2>
								<ul class="pl-2">
									{#each heroContent.comics.items as comics}
										<li class="italic">- {comics.name}</li>
									{/each}
								</ul>
							</section>

							<section id="stories" class="bg-base-300 p-2 rounded-lg">
								<h2 class="text-xl font-bold">
									Stories {heroContent.name} Appears in: {heroContent.stories.available}
								</h2>
								<ul class="pl-2">
									{#each heroContent.stories.items as stories}
										<li class="italic">- {stories.name}</li>
									{/each}
								</ul>
							</section>

							<a class="link" href="http://marvel.com">Data provided by Marvel. © 2023 MARVEL</a>
						</div>
					</section>
				{/if}
			</div>
		</div>

		<div class="drawer-side h-[585px] overflow-hidden">
			<label for="my-drawer" class="drawer-overlay" />
			<ul class="menu w-80 bg-base-100 text-base-content">
				<!-- Sidebar content here -->
				{#if heroes.length === 0}
					<p>No heroes!</p>
				{:else}
					{#each heroes as hero, i}
						<li class="flex">
							<button class="justify-between" on:click={() => heroRender(hero)}>
								<span class="flex items-center gap-3">
									<div class="avatar">
										<div class="w-8 rounded">
											<img src={hero.thumbnail} alt="Tailwind-CSS-Avatar-component" />
										</div>
									</div>

									<p class="text-sm">{hero.name}</p>
								</span>

								<span class="text-xs">
									id: {i + 1}
								</span>
							</button>
						</li>

						{#if i + 1 < heroes.length}
							<div class="divider m-[4px] h-0" />
						{/if}
					{/each}
				{/if}
			</ul>
		</div>
	</div>
</div>
