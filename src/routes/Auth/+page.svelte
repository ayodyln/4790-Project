<script>
	import image from '$lib/assets/Among_the_Stars-2560x1440_JoeyJazz.jpg'

	import SignIn from '../../lib/components/AuthComponent/SignIn/SignIn.svelte'
	import SignUp from '../../lib/components/AuthComponent/SignUp/SignUp.svelte'

	let authState = true
	function authStateHandler() {
		authState = !authState
	}
</script>

<div
	class="hero h-full w-full overflow-hidden"
	style={`background-image: url(${image}); background-repeat: no-repeat;`}>
	<div class="hero-overlay bg-opacity-40" />

	{#if authState}
		<SignIn {authStateHandler} {authState} />
	{:else}
		<SignUp {authStateHandler} {authState} />
	{/if}
</div>
