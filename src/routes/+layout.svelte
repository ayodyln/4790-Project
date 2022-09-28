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
