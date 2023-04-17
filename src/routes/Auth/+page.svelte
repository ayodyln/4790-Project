<script>
	import SignIn from '../../lib/components/AuthComponent/SignIn/SignIn.svelte'
	import SignUp from '../../lib/components/AuthComponent/SignUp/SignUp.svelte'
	import { onMount } from 'svelte'
	

	let authState = true
	function authStateHandler() {
		authState = !authState
	}

	import { renderVR } from '$lib/functions/ThreeJS/app'

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
		<SignUp {authStateHandler} {authState} />
	{/if}
</div>
