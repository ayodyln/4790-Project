<script>
	import { DataStore } from 'aws-amplify'
	import { onMount } from 'svelte'
	import { Comic } from '../../../models'
	let heroes = []
	let drawerToggle = true
	let heroContent

	const getHeroes = async () => {
		const h = await DataStore.query(Comic)
		heroes = h
		console.log(heroes)
	}

	const heroRender = async (hero) => {
		heroContent = hero
		getSingleMarvelCharacter(hero.marvelID)
		drawerToggle = !drawerToggle
	}

	const getSingleMarvelCharacter = async (id) => {
		try {
			const data = await fetch(`api/singleMarvelHero?id=${id}`)
			const res = await data.json()
			console.log(res)
		} catch (err) {
			console.log(err)
		}
	}

	onMount(() => {
		getHeroes()
	})
</script>

<div id="myHeroes" class="flex h-full bg-base-100">
	<div class="drawer">
		<input id="my-drawer" type="checkbox" class="drawer-toggle" bind:checked={drawerToggle} />
		<div class="drawer-content">
			<!-- Page content here -->
			<div id="hero" class="p-2 relative">
				{#if !heroContent}
					<p>Select a Hero</p>
					<label for="my-drawer" class="btn btn-primary"> Open Drawer </label>
				{:else}
					<section class="flex flex-col gap-2">
						<div class="flex w-full justify-end">
							<label for="my-drawer" class="btn btn-circle btn-sm">
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

						<div class="border">
							<h2 class="text-xl font-bold">{heroContent.name}</h2>
						</div>
					</section>
				{/if}
			</div>
		</div>
		<div class="drawer-side">
			<label for="my-drawer" class="drawer-overlay" />
			<ul class="menu p-4 w-80 bg-base-100 text-base-content">
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

									{hero.name}
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
