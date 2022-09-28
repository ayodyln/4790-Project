<script>
	export let data;

	$: console.log(data);

	function renderAPOD() {
		console.log('Hello APOD');
	}
</script>

{#if !data}
	<p>Loading...</p>
{/if}

<div class="drawer drawer-mobile">
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col items-center h-full">
		<!-- Page content here -->
		<label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
		<div class="bg-base-200">
			<!-- <p>{storyContent}</p> -->
		</div>
	</div>

	<div class="drawer-side overflow-x-hidden">
		<label for="my-drawer-2" class="drawer-overlay" />
		<ul class="menu p-6 overscroll-y-auto w-56 bg-base-100 text-base-content">
			{#each data.APOD as apod (apod.title)}
				<li class="card" on:click={renderAPOD}>
					<figure class="flex flex-col">
						<img src={apod.hdurl} alt="apod image" />
						<figcaption>{apod.title}</figcaption>
					</figure>
				</li>
			{/each}
		</ul>
	</div>
</div>
