<script>
	import '../app.css';
	import Header from '../lib/components/header/Header.svelte';
</script>

<Header />
<div class="slot">
	<slot />
</div>

<style>
	.slot {
		height: 93.5vh;
	}
</style>
