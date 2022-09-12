<script>
	import '../app.css';
	import Header from '../lib/components/header/Header.svelte';
</script>

<div>
	<Header />
	<slot />
</div>

<style>
	div {
		height: 100vh;
		display: flex;
		flex-direction: column;
		overflow-y: auto;

		/* background: linear-gradient(-45deg, #000328, #003b79);
		background-size: 400% 400%;
		animation: gradient 30s ease infinite; */
	}

	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
</style>
