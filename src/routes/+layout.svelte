<script>
	import { theme } from '$lib/stores/theme'

	import '../app.css'

	// let siteTheme
	// theme.subscribe((val) => {
	// 	siteTheme = val
	// })
</script>

<div class="flex h-full min-h-screen max-height-auto flex-col" data-theme={$theme}>
	<slot />
</div>
