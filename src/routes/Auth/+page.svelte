<script>
	import SignIn from '../../lib/components/AuthComponent/SignIn/SignIn.svelte'
	import SignUp from '../../lib/components/AuthComponent/SignUp/SignUp.svelte'

	let authState = true
	function authStateHandler() {
		authState = !authState
	}

	import { goto } from '$app/navigation'
	import { Auth } from 'aws-amplify'
	import { onMount } from 'svelte'

	onMount(() => {
		Auth.currentAuthenticatedUser({
			bypassCache: false // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
		})
			.then((user) => console.log(user))
			.catch((err) => {
				console.log(err)
				goto('/')
			})
	})
</script>

<div class="hero h-full w-full overflow-hidden">
	<div class="hero-overlay bg-opacity-40" />
	{#if authState}
		<SignIn {authStateHandler} />
	{:else}
		<SignUp {authStateHandler} {authState} />
	{/if}
</div>
