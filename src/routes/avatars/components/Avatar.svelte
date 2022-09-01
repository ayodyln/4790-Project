<script>
	// Svelte Tutorial -> Props: Spread Props ✅
	export let name;
	export let image;
</script>

<div class="avatarCard">
	<img src={image} alt="Avatar" />
	<p>{name}</p>
</div>

<!-- * Svelte Tutorial -> Introduction: Styling ✅  -->
<style>
	.avatarCard {
		display: flex;
		flex-direction: column;
		width: 15em;
	}
</style>
