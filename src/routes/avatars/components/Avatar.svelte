<script>
	export let name, image;
</script>

<div class="card bg-current shadow-xl">
	<img src={image} alt={name} />
	<div class="card-body">
		<h3 class="card-title text-secondary">{name}</h3>
	</div>
</div>

<style>
	.card {
		height: 100%;
		width: 100%;
		padding: 6px;
	}

	.card-body {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
