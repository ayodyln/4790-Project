<script>
	import { enhance } from '$app/forms';

	export let themes, logTheme, currTheme;
</script>

<header class="navbar text-current">
	<div class="navbar-start">
		<a class="btn btn-ghost normal-case text-xl" href="/">DGM 3790</a>
	</div>
	<div class="navbar-end">
		<a class="btn btn-ghost normal-case " href="/avatars">Avatars</a>
		<a class="btn btn-ghost normal-case " href="/movies">Movies</a>
		<a class="btn btn-ghost normal-case" href="/dashboard">Dashboard</a>
		<a class="btn btn-ghost normal-case" href="/apod">APOD</a>

		<form method="POST" action="/movies" use:enhance>
			<div class="form-control">
				<input
					class="input input-bordered input-lg w-80"
					type="search"
					name="searchTerms"
					placeholder="Movie Search"
				/>
			</div>
		</form>

		<div class="dropdown dropdown-end" id="theme">
			<label tabindex="0" class="btn btn-ghost btn-active normal-case m-1" for="theme"
				>{currTheme} Theme</label
			>
			<ul
				tabindex="0"
				class="dropdown-content shadow rounded-box bg-base-100 flex flex-col overflow-y-auto h-96 w-96 p-4"
			>
				{#each themes as theme}
					<button
						class="btn btn-current m-1"
						on:click={logTheme}
						data-set-theme={theme.toLowerCase()}>{theme}</button
					>
				{/each}
			</ul>
		</div>
	</div>
</header>
