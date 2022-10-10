<script>
	export let themes, logTheme, currTheme;
</script>

<header class="navbar text-current border-b-2 border-current">
	<div class="navbar-start">
		<a class="btn btn-ghost normal-case text-xl" href="/">DGM 3790</a>
	</div>

	<div class="navbar-end">
		<div class="dropdown dropdown-end">
			<label for="ul" tabindex="0" class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/></svg
				>
			</label>
			<ul
				id="ul"
				tabindex="0"
				class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
			>
				<li>
					<a class="btn btn-ghost normal-case " href="/avatars">Avatars</a>
				</li>
				<li>
					<a class="btn btn-ghost normal-case " href="/movies">Movies</a>
				</li>
				<li>
					<a class="btn btn-ghost normal-case" href="/weather">Weather</a>
				</li>
				<li>
					<a class="btn btn-ghost normal-case" href="/apod">APOD</a>
				</li>
				<li>
					<a href="/Auth/login" class="btn normal-case">Sign In</a>
				</li>
			</ul>
		</div>
	</div>

	<div class="navbar-end hidden lg:flex gap-2">
		<a class="btn btn-ghost normal-case " href="/avatars">Avatars</a>
		<a class="btn btn-ghost normal-case " href="/movies">Movies</a>
		<a class="btn btn-ghost normal-case" href="/weather">Weather</a>
		<a class="btn btn-ghost normal-case" href="/apod">APOD</a>

		<a href="/Auth/login" class="btn normal-case">Sign In</a>

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
<!-- 
<div class="navbar bg-base-100">
	<div class="navbar-start">
	  <div class="dropdown">
		<label tabindex="0" class="btn btn-ghost lg:hidden">
		  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
		</label>
		<ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
		  <li><a>Item 1</a></li>
		  <li tabindex="0">
			<a class="justify-between">
			  Parent
			  <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
			</a>
			<ul class="p-2">
			  <li><a>Submenu 1</a></li>
			  <li><a>Submenu 2</a></li>
			</ul>
		  </li>
		  <li><a>Item 3</a></li>
		</ul>
	  </div>
	  <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
	</div>

	<div class="navbar-center hidden lg:flex">
	  <ul class="menu menu-horizontal p-0">
		<li><a>Item 1</a></li>
		<li tabindex="0">
		  <a>
			Parent
			<svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
		  </a>
		  <ul class="p-2">
			<li><a>Submenu 1</a></li>
			<li><a>Submenu 2</a></li>
		  </ul>
		</li>
		<li><a>Item 3</a></li>
	  </ul>
	</div>
	<div class="navbar-end">
	  <a class="btn">Get started</a>
	</div>
  </div> -->
