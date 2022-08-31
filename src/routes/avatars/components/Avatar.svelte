<script>
	export let avatarName, avatarImage;
</script>

<div class="avatarCard">
	<img src={avatarImage} alt="Avatar" />
	<p>{avatarName}</p>
</div>

<!-- * Svelte Tutorial -> Introduction: Styling ✅  -->
<style>
	.avatarCard {
		display: flex;
		flex-direction: column;
		width: 15em;
	}
</style>
