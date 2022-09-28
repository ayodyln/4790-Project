<script>
	import '../app.css';
	import Footer from '../lib/components/footer/Footer.svelte';
	import Header from '../lib/components/header/Header.svelte';
	import { themeChange } from 'theme-change';
	import { onMount } from 'svelte';
	import Avatar from './avatars/components/Avatar.svelte';
	import Page from './svelteBasics/+page.svelte';

	const themes = [
		'Light',
		'Dark',
		'Cupcake',
		'Bumblebee',
		'Emerald',
		'Corporate',
		'Synthwave',
		'Retro',
		'Cyberpunk',
		'Valentine',
		'Halloween',
		'Garden',
		'Forest',
		'Aqua',
		'Pastel',
		'Fantasy',
		'Wireframe',
		'Black',
		'CMYK',
		'Acid',
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

<div class="flex h-full flex-col" data-theme={currTheme.toLowerCase()}>
	<Header {themes} {logTheme} />
	<slot />
	<Footer />
</div>
