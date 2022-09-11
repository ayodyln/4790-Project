<script>
	// Svelte Tutorial -> Props: Spread Props ✅
	export let name, image;
</script>

<div class="card glass shadow-xl">
	<img src={image} alt={name} />
	<div class="card-body">
		<h3 class="card-title">{name}</h3>
	</div>
</div>

<!-- * Svelte Tutorial -> Introduction: Styling ✅  -->
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
