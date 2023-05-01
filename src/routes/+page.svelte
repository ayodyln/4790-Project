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

<section class="bg-black h-screen relative flex items-center justify-center">
	<div class="absolute h-full w-full">
		<Canvas>
			<T.PerspectiveCamera makeDefault position={[20, 20, 20]} fov={25}>
				<OrbitControls enableRotate={false} autoRotate enableZoom={false} />
			</T.PerspectiveCamera>
			<!-- <T.AmbientLight /> -->
			<GLTF url="/galaxy.glb" scale={5} />
		</Canvas>
	</div>

	<div class="w-fit h-fit">
		{#if authState}
			<SignIn {authStateHandler} />
		{:else}
			<SignUp {authStateHandler} />
		{/if}
	</div>
</section>
