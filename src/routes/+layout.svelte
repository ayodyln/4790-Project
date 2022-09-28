<script>
	import '../app.css';
	import Footer from '../lib/components/footer/Footer.svelte';
	import Header from '../lib/components/header/Header.svelte';
</script>

<div class="flex h-full flex-col">
	<Header />

	<slot />

	<Footer />
</div>

<style>
	/* div {
		height: 100vh;
		display: flex;
		flex-direction: column;
		overflow-y: auto;
	} */
</style>
