<script>
	import '../app.css'
	import { theme } from '$lib/stores/stores'

	import { Amplify } from 'aws-amplify'

	import awsExports from '../aws-exports'

	Amplify.configure(awsExports)
</script>

<div class="flex h-screen min-h-screen max-height-auto flex-col" data-theme={$theme}>
	<slot />
</div>
