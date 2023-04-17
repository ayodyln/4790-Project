<script>
	import '../../app.css'
	import Footer from '../../lib/components/footer/Footer.svelte'
	import Header from '../../lib/components/header/Header.svelte'

	// You can import data from server just like on +page, from +layout.server.js
	// export let data
</script>

<div class="flex h-full min-h-screen max-height-auto flex-col">
	<Header />
	<slot />
	<Footer />
</div>
