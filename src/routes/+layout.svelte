<script>
	import '../app.css'
	import { theme } from '$lib/stores/stores'

	import { Amplify } from 'aws-amplify'
	import awsconfig from '../aws-exports.js'
	Amplify.configure(awsconfig)
</script>

<div class="flex h-screen min-h-screen max-height-auto flex-col" data-theme={$theme}>
	<slot />
</div>
