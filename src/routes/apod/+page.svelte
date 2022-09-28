<script>
	export let data;

	// $: console.log(data);
	let apodStory;

	const renderAPOD = (item) => {
		apodStory = item.explanation;
	};
</script>

<div class="drawer drawer-mobile">
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col items-center h-full">
		<label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
		<div class="h-full bg-base-200">
			{#if !apodStory}
				<p>Pick APOD Story</p>
			{:else}
				{apodStory}
			{/if}
		</div>
	</div>

	<div class="drawer-side overflow-x-hidden">
		<label for="my-drawer-2" class="drawer-overlay" />
		<ul class="menu p-6 overscroll-y-auto w-56 bg-base-100 text-base-content">
			{#each data.APOD as apod (apod.title)}
				<li class="card" on:click={renderAPOD(apod)}>
					<figure class="flex flex-col">
						<img src={apod.url} alt="apod image" />
						<figcaption>{apod.title}</figcaption>
					</figure>
				</li>
			{/each}
		</ul>
	</div>
</div>
