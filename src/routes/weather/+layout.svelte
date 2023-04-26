<script>
	import '../../app.css'
	import Footer from '../../lib/components/footer/Footer.svelte'
	import Header from '../../lib/components/header/Header.svelte'
</script>

<div class="flex h-screen min-h-screen max-height-auto flex-col">
	<Header />
	<slot />
	<Footer />
</div>
