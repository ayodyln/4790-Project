<script>
	import { themeChange } from 'theme-change';
	import { onMount } from 'svelte';

	const themes = ['Light', 'Dark', 'Emerald', 'Corporate', 'Night'];

	onMount(() => {
		themeChange(false);
	});

	$: currTheme = themes[0];

	let subNavUL;

	function logTheme(event) {
		currTheme = event.target.textContent;
	}
</script>

<header class="navbar text-current border-b-2 border-current">
	<div class="navbar-start">
		<a class="btn btn-ghost normal-case text-xl p-2" href="/home">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 576 512"
				class="fill-current w-full h-full"
				><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
					d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
				/></svg
			>
		</a>
	</div>

	<div class="navbar-end">
		<div class="dropdown dropdown-end">
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
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
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<ul
				id="ul"
				tabindex="0"
				class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
			>
				<!--  -->
				<li
					on:mouseenter={() => {
						subNavUL.style.visibility = 'visible';
					}}
					on:mouseleave={() => {
						subNavUL.style.visibility = 'hidden';
					}}
					on:touchend={() => {
						subNavUL.style.visibility =
							subNavUL.style.visibility === 'visible' ? 'hidden' : 'visible';
					}}
					class="relative"
				>
					<div class="dropdown dropdown-end w-full flex justify-center">
						<!-- svelte-ignore a11y-mouse-events-have-key-events -->
						<label
							for="profileUL"
							id="profile"
							tabindex="0"
							class="btn btn-ghost btn-circle avatar"
						>
							<div class="w-10 rounded-full">
								<!-- svelte-ignore a11y-img-redundant-alt -->
								<img src="https://placeimg.com/80/80/people" alt="Profile Image" />
							</div>
						</label>

						<ul
							id="subNav"
							class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
							bind:this={subNavUL}
						>
							<li class="px-3 py-1 hover:bg-gray-100">Javascript</li>
							<li class="px-3 py-1 hover:bg-gray-100">Go</li>
							<li class="px-3 py-1 hover:bg-gray-100">Rust</li>
						</ul>
					</div>
				</li>
				<!--  -->
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
			</ul>
		</div>
	</div>

	<!-- LARGE -->
	<div class="navbar-end hidden lg:flex gap-2">
		<a class="btn btn-ghost normal-case " href="/avatars">Avatars</a>
		<a class="btn btn-ghost normal-case " href="/movies">Movies</a>
		<a class="btn btn-ghost normal-case" href="/weather">Weather</a>
		<a class="btn btn-ghost normal-case" href="/apod">APOD</a>

		<div class="dropdown dropdown-end" id="theme">
			<label tabIndex="0" class="btn btn-ghost btn-active normal-case m-1" for="theme"
				>{currTheme} Theme</label
			>
			<ul
				tabIndex="0"
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

		<div class="dropdown dropdown-end">
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<label for="profileUL" id="profile" tabindex="0" class="btn btn-ghost btn-circle avatar">
				<div class="w-10 rounded-full">
					<img src="https://placeimg.com/80/80/people" alt="Profile Image" />
				</div>
			</label>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<ul
				id="profileUL"
				for="profile"
				tabindex="0"
				class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
			>
				<li>
					<a class="justify-between">
						Profile
						<span class="badge">New</span>
					</a>
				</li>
				<li><a>Settings</a></li>
				<li><a>Logout</a></li>
			</ul>
		</div>
	</div>
</header>

<style>
	#subNav {
		visibility: hidden;
	}
</style>
