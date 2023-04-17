<script>
	import { onMount } from 'svelte'
	import { renderVR } from '$lib/functions/ThreeJS/app'

	import SignIn from '../lib/components/AuthComponent/SignIn/SignIn.svelte'
	import SignUp from '../lib/components/AuthComponent/SignUp/SignUp.svelte'

	$: authState = true

	function authStateHandler() {
		authState = !authState
	}

	onMount(() => {
		renderVR()
	})
</script>

<div class="hero h-full w-full overflow-hidden">
	<div class="hero-overlay bg-opacity-40" />

	<div id="container" />

	{#if authState}
		<SignIn {authStateHandler} />
	{:else}
		<SignUp {authStateHandler} />
	{/if}
</div>
