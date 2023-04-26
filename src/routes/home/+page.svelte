<script>
	import image from '$lib/assets/Among_the_Stars-2560x1440_JoeyJazz.jpg'
	import { goto } from '$app/navigation'
	import { Auth } from 'aws-amplify'
	import { onMount } from 'svelte'

	onMount(() => {
		Auth.currentAuthenticatedUser({
			bypassCache: false // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
		})
			.then((user) => console.log(user))
			.catch((err) => {
				console.log(err)
				goto('/')
			})
	})
</script>

<section class="flex-grow">
	<div
		class="hero h-full overflow-hidden"
		style={`background-image: url(${image}); background-repeat: no-repeat;`}>
		<div class="hero-overlay bg-opacity-40" />

		<div class="hero-content flex-col lg:flex-row-reverse" />
	</div>
</section>
