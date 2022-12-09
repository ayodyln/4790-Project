<script>
	import { onMount } from 'svelte'

	import { tweened } from 'svelte/motion'
	import { cubicOut } from 'svelte/easing'

	const progress = tweened(0, {
		duration: 300,
		easing: cubicOut
	})

	onMount(async () => {
		await progress.set(100)
	})
</script>

<div class="w-full h-full flex justify-center items-center">
	<div class="radial-progress text-base-content" style="--value:{$progress};">
		{Math.round(($progress * 100) / 100)}%
	</div>
</div>
