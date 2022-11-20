<script>
	import { fade, fly } from 'svelte/transition'

	export let toggleAlert
</script>

<!-- STATUS ALERTS -->
{#if toggleAlert === 'SUCCESS'}
	<div
		class="alert alert-success shadow-lg fixed bottom-0 right-0 z-10 w-96 m-8"
		in:fly={{ y: 200, duration: 300 }}
		out:fade={{ duration: 100 }}>
		<div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="stroke-current flex-shrink-0 h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				><path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
			<span>Succesfully created a new avatar!</span>
		</div>
	</div>
{:else if toggleAlert === 'SUCCESS DELETE'}
	<div
		class="alert alert-success shadow-lg fixed bottom-0 right-0 z-10 w-96 m-8"
		in:fly={{ y: 200, duration: 300 }}
		out:fade={{ duration: 100 }}>
		<div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="stroke-current flex-shrink-0 h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				><path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
			<span>Succesfully deleted a avatar!</span>
		</div>
	</div>
{:else if toggleAlert === 'FAIL'}
	<div
		class="alert alert-error shadow-lg fixed bottom-0 right-0 z-10 w-96 m-8"
		in:fly={{ y: 200, duration: 300 }}
		out:fade={{ duration: 100 }}>
		<div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="stroke-current flex-shrink-0 h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				><path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
			<span>Must provide a Avatar Name in input field!</span>
		</div>
	</div>
{/if}
