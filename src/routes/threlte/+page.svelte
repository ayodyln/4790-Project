<script>
	import { Canvas, T } from '@threlte/core'
	import Cube from '../../lib/components/threlte/Cube.svelte'
	import Object from '../../lib/components/threlte/Object.svelte'
	import { spring } from 'svelte/motion'
	import { Auth } from 'aws-amplify'
	import { goto } from '$app/navigation'
	import { onMount } from 'svelte'

	let toggle = false
	let s = 1
	const scale = spring(size)
	$: size = scale.set(s)

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

<main class="h-full overflow-hidden flex flex-col max-w-4xl w-full m-auto gap-4 justify-center">
	<section class="h-2/3 border w-full rounded-lg overflow-hidden bg-neutral">
		{#if toggle}
			<Canvas>
				<Object {s} {scale} />
			</Canvas>
		{:else}
			<Canvas>
				<Cube {s} {scale} />
			</Canvas>
		{/if}
	</section>

	<div class="flex items-center justify-between">
		<section class="w-52">
			<input type="range" min="0" max="5" class="range w-full" step="1" bind:value={s} />
			<div class="w-full flex justify-between text-xs px-2">
				<span>|</span>
				<span>|</span>
				<span>|</span>
				<span>|</span>
				<span>|</span>
			</div>
		</section>

		<div class="form-control">
			<label class="label cursor-pointer gap-4">
				<span class="label-text">Toggle Object</span>
				<input
					type="checkbox"
					class="toggle"
					bind:checked={toggle}
					on:change={() => {
						scale.set(1)
						s = 1
					}} />
			</label>
		</div>
	</div>
</main>
