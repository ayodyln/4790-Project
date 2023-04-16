<script>
	import { goto } from '$app/navigation'

	import sveltelogo from '../lib/assets/sveltelogo.glb'
	import { onMount } from 'svelte'

	let logo

	onMount(() => {
		logo = sveltelogo
	})

	let obj = {
		position: { x: 0, y: -5, z: 0 },
		scale: 25
	}
</script>

<div class="hero h-full w-full overflow-hidden">
	<div class="hero-overlay bg-opacity-40" />

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

<!-- 
background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898;
background-blend-mode: multiply,multiply; -->
