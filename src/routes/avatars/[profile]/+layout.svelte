<script>
	import '../../../app.css'

	import LoadingPage from '../../../lib/components/loadingPage/LoadingPage.svelte'

	import { navigating } from '$app/stores'
	import { loading } from '$lib/stores/loading'

	$: $loading = !!$navigating
</script>

<!-- {#if $loading}
	<LoadingPage />
{:else} -->
<slot />
<!-- {/if} -->
