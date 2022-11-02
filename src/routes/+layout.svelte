<script>
	import '../app.css'
	import { theme } from '$lib/stores/theme'
</script>

<div class="flex h-screen min-h-screen max-height-auto flex-col" data-theme={$theme}>
	<slot />
</div>
