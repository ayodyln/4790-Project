<script>
	import { onMount } from 'svelte'
	import SignIn from '../lib/components/AuthComponent/SignIn/SignIn.svelte'
	import SignUp from '../lib/components/AuthComponent/SignUp/SignUp.svelte'
	import { Auth } from 'aws-amplify'
	import { goto } from '$app/navigation'
	import { Canvas, T } from '@threlte/core'
	import { GLTF, OrbitControls } from '@threlte/extras'

	$: authState = true

	function authStateHandler() {
		authState = !authState
	}

	onMount(async () => {
		try {
			await Auth.currentAuthenticatedUser()
			goto('/home')
		} catch (err) {
			console.log('Checking for user... ', err)
		}
	})
</script>

<!-- <section class="bg-black h-screen relative flex items-center justify-center" /> -->

<div class="hero min-h-screen" style="background-image: url(stars.jpg);">
	<div class="hero-overlay bg-opacity-60" />
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-md">
			<div class="w-fit h-fit">
				{#if authState}
					<SignIn {authStateHandler} />
				{:else}
					<SignUp {authStateHandler} />
				{/if}
			</div>
		</div>
	</div>
</div>
