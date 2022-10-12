<script>
	import '../app.css';
	import Footer from '../lib/components/footer/Footer.svelte';
	import Header from '../lib/components/header/Header.svelte';
	import { themeChange } from 'theme-change';
	import { onMount } from 'svelte';

	import { navigating } from '$app/stores';
	import { loading } from '../lib/functions/loader/loading';
	import LoadingPage from '../lib/components/loadingPage/LoadingPage.svelte';

	$: $loading = !!$navigating;

	const themes = [
		'Light',
		'Dark',
		'Emerald',
		'Corporate',
		'Night'
	];

	onMount(() => {
		themeChange(false);
	});

	$: currTheme = themes[0];

	function logTheme(event) {
		currTheme = event.target.textContent;
	}
</script>

<div class="flex h-full min-h-screen max-height-auto flex-col">
	<Header {themes} {logTheme} {currTheme} />
	{#if $loading}
		<LoadingPage />
	{:else}
		<slot />   
	{/if}
	<Footer />
</div>
