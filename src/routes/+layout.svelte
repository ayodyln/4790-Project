<script>
	import '../app.css'
	import { theme } from '$lib/stores/stores'
	import { Amplify, AuthModeStrategyType } from 'aws-amplify'
	import awsconfig from '../aws-exports.js'
	import ThemeChanger from '../lib/components/layout/ThemeChanger.svelte'
	import { onMount } from 'svelte'
	Amplify.configure({
		...awsconfig,
		DataStore: { authModeStrategyType: AuthModeStrategyType.MULTI_AUTH }
	})

	let currTheme = 'light'
	onMount(() => {
		currTheme = $theme ? 'light' : 'dark'
	})
</script>

<div class="flex h-auto min-h-screen max-height-auto flex-col" data-theme={currTheme}>
	<slot />
	<ThemeChanger />
</div>
