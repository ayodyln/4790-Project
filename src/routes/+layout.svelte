<script>
	import '../app.css';
	import Footer from '../lib/components/footer/Footer.svelte';
	import Header from '../lib/components/header/Header.svelte';
	import { themeChange } from 'theme-change';
	import { onMount } from 'svelte';

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

<div class="flex h-full max-height-auto flex-col">
	<Header {themes} {logTheme} {currTheme} />
	<slot />
	<Footer />
</div>
