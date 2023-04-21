<script>
	import SignIn from '../../lib/components/AuthComponent/SignIn/SignIn.svelte'
	import SignUp from '../../lib/components/AuthComponent/SignUp/SignUp.svelte'

	let authState = true
	function authStateHandler() {
		authState = !authState
	}
</script>

<div class="hero h-full w-full overflow-hidden">
	<div class="hero-overlay bg-opacity-40" />
	{#if authState}
		<SignIn {authStateHandler} />
	{:else}
		<SignUp {authStateHandler} {authState} />
	{/if}
</div>
