<script>
	export let name, image;
</script>

<div class="card bg-base-300 shadow-xl">
	<div class="card-body h-full w-full gap-4">
		<div class="flex w-56 h-56 sm:w-full">
			<img src={image} alt={name} class="w-full h-full" />
		</div>
		<div class="h-12 flex justify-center items-center">
			<h3 class="text-lg w-full text-center">{name}</h3>
		</div>
	</div>
</div>
