<script>
	import { goto } from '$app/navigation'
	import { onMount } from 'svelte'
	import { renderVR } from '$lib/functions/ThreeJS/app'

	onMount(() => {
		renderVR()
	})
</script>

<div class="hero h-full w-full overflow-hidden">
	<div class="hero-overlay bg-opacity-40" />

	<div id="container" />

	<div class="hero-content flex-col lg:flex-row-reverse">
		<div class="card w-full bg-base-300 bg-opacity-90">
			<div class="card-body gap-8">
				<div class="flex flex-col gap-2">
					<h2 class="card-title">SvelteKit // AWS Amplify Fullstack App</h2>
					<p class="w-96">
						Working with the best framework, with an AWS backend, deployed on Vercel!
					</p>
				</div>
				<div class="card-actions justify-end">
					<button
						class="btn btn-primary"
						on:click={() => {
							goto('/Auth')
						}}>Visit Examples</button>
				</div>
			</div>
		</div>
	</div>
</div>
