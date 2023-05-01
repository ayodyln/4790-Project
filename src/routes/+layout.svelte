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

	onMount(() => {
		theme.subscribe((value) => {
			if (value === null) theme.set(true)
			console.log(value)
		})

		if ($theme === null) $theme = true
	})
</script>

<div
	class="flex h-auto min-h-screen max-height-auto flex-col"
	data-theme={$theme ? 'light' : 'dark'}>
	<slot />
	<ThemeChanger />
</div>
