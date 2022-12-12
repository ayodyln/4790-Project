<script>
	import '../app.css'
	import { theme } from '$lib/stores/stores'

	export let data

	console.log(data)
</script>

<div class="flex h-screen min-h-screen max-height-auto flex-col" data-theme={$theme}>
	<slot />
</div>
