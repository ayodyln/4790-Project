<script>
	export let name, image;
</script>

<div class="card bg-base-300 shadow-xl">
	<div class="card-body h-full w-full items-center">
		<img src={image} alt={name} />
		<h3 class="text-xl text-current">{name}</h3>
	</div>
</div>
