<script>
	import { goto } from '$app/navigation';
	import image from '$lib/assets/Among_the_Stars-2560x1440_JoeyJazz.jpg';
	import SignIn from '../../lib/components/AuthComponent/SignIn/SignIn.svelte';
	import SignUp from '../../lib/components/AuthComponent/SignUp/SignUp.svelte';

	export let form;
	$: console.log(form);

	let authState = true;
	function authStateHandler() {
		authState = !authState;
	}
	function cancelAuthUI() {
		authState = true;
		goto('/');
	}
</script>

<div
	class="hero h-full w-full overflow-hidden"
	style={`background-image: url(${image}); background-repeat: no-repeat;`}
>
	<div class="hero-overlay bg-opacity-40" />

	{#if authState}
		<SignIn {authStateHandler} {cancelAuthUI} />
	{:else}
		<SignUp {authStateHandler} {cancelAuthUI} />
	{/if}
</div>
