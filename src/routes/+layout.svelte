<script>
	import '../app.css'
	import { theme } from '$lib/stores/stores'
	import { Amplify, AuthModeStrategyType } from 'aws-amplify'
	import awsconfig from '../aws-exports.js'
	Amplify.configure({
		...awsconfig,
		DataStore: { authModeStrategyType: AuthModeStrategyType.MULTI_AUTH }
	})
</script>

<div class="flex h-screen min-h-screen max-height-auto flex-col" data-theme={$theme}>
	<slot />
</div>
