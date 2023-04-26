<script>
	import SignIn from '../lib/components/AuthComponent/SignIn/SignIn.svelte'
	import SignUp from '../lib/components/AuthComponent/SignUp/SignUp.svelte'

	$: authState = true

	function authStateHandler() {
		authState = !authState
	}
</script>

<div class="hero h-screen w-full overflow-hidden" style="background-image: url(/stars.jpg);">
	<div class="hero-overlay bg-opacity-40" />

	{#if authState}
		<SignIn {authStateHandler} />
	{:else}
		<SignUp {authStateHandler} />
	{/if}
</div>
