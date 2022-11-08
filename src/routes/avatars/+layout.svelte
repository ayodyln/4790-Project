<script>
	import '../../app.css'
	import Footer from '../../lib/components/footer/Footer.svelte'
	import Header from '../../lib/components/header/Header.svelte'
	import LoadingPage from '../../lib/components/loadingPage/LoadingPage.svelte'

	import { navigating } from '$app/stores'
	import { loading } from '$lib/stores/loading'

	$: $loading = !!$navigating
</script>

<div class="flex h-full min-h-screen max-height-auto flex-col">
	<Header />
	{#if $loading}
		<LoadingPage />
	{:else}
		<slot />
	{/if}
	<Footer />
</div>
