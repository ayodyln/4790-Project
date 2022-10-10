<script>
	export let data;

	$: console.log(data);
	let apodTitle, apodDescription, apodImage, apodImageHD, apodDate, apodCopyRight;
	const renderAPOD = (item) => {
		apodTitle = item.title;
		apodDescription = item.explanation;
		apodImage = item.url;
		apodImageHD = item.hdurl;
		apodDate = item.date;
		apodCopyRight = item?.copyright;
		console.log(item);
	};
</script>

<div class="drawer drawer-mobile">
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col items-center h-full">
		<label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
		<div class="h-full w-full bg-base-200 flex justify-center items-center p-6">
			{#if !apodDescription}
				<p>Pick APOD Story</p>
			{:else}
				<div class="flex flex-col gap-4 w-full h-full p-4">
					<div
						class="w-full h-3/5 flex items-end gap-4 bg-neutral-focus"
						style="background-image: url({apodImage}); background-size: fit; background-position: center; background-repeat: no-repeat"
					>
						<div id="imgData" class="text-neutral-content w-full flex flex-col gap-2 p-2">
							<h1 class="text-3xl">{apodTitle}</h1>
							<p>{apodDate}</p>
							{#if apodCopyRight}
								<p>{@html `&#169;`} {apodCopyRight}</p>
							{/if}
						</div>
					</div>

					<div class="text-current h-auto overflow-auto">
						<p>{apodDescription}</p>
					</div>
				</div>
			{/if}
		</div>
	</div>

	<div class="drawer-side overflow-x-hidden">
		<label for="my-drawer-2" class="drawer-overlay" />
		<ul class="menu p-6 overscroll-y-auto w-56 bg-base-100 text-base-content">
			{#each data.APOD as apod (apod.title)}
				<li class="card h-auto" on:click={renderAPOD(apod)}>
					<figure class="flex flex-col h-60">
						<!-- svelte-ignore a11y-img-redundant-alt -->
						<img src={apod.url} alt="apod image" class="h-full" />
						<figcaption>{apod.title}</figcaption>
					</figure>
				</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	#imgData {
		background-color: rgba(0, 0, 0, 0.5);
	}
</style>
