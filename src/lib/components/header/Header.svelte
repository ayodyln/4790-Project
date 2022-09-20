<script>
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
		'Lofi',
		'Pastel',
		'Fantasy',
		'Wireframe',
		'Black',
		'Luxury',
		'Dracula',
		'CMYK',
		'Autumn',
		'Business',
		'Acid',
		'Lemonade',
		'Night',
		'Coffee',
		'Winter'
	];

	onMount(() => {
		themeChange(false);
	});
</script>

<header class="navbar text-current">
	<div class="navbar-start">
		<a class="btn btn-ghost normal-case text-xl" href="/">DGM 3790</a>
	</div>
	<div class="navbar-end">
		<a class="btn btn-ghost normal-case " href="/avatars">Avatars</a>
		<a class="btn btn-ghost normal-case " href="/movies">Movies</a>
		<a class="btn btn-ghost normal-case " href="/svelteBasics">SvelteBasics</a>
		<a class="btn btn-ghost normal-case" href="/dashboard">Dashboard</a>
		<a class="btn btn-ghost normal-case" href="/aggrigator">Aggrigator</a>

		<div>
			<form method="POST" action="/movies">
				<div class="form-control">
					<input type="text" name="movieTitle" id="movieInput" placeholder="Movie Search" />
				</div>
			</form>
		</div>
		
		<div class="dropdown dropdown-end" id="theme" data-choose-theme>
			<label tabindex="0" class="btn btn-ghost btn-active normal-case m-1" for="theme">Themes</label
			>
			<ul tabindex="0" class="dropdown-content shadow rounded-box bg-current">
				{#each themes as theme}
					<button class="btn btn-current" data-set-theme={theme.toLowerCase()}>{theme}</button>
				{/each}
			</ul>
		</div>
	</div>
</header>

<style>
	ul {
		display: flex;
		flex-direction: column;
		height: 25em;
		width: 20em;
		overflow-y: auto;
	}

	button {
		margin: 4px 4px;
	}
</style>
