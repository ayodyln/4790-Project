<script>
	import { goto } from '$app/navigation'
	import image from '$lib/assets/Among_the_Stars-2560x1440_JoeyJazz.jpg'
	import { Amplify } from 'aws-amplify'

	import awsExports from '../aws-exports'

	Amplify.configure({ awsExports })
</script>

<div
	class="hero h-full w-full overflow-hidden"
	style={`background-image: url(${image}); background-repeat: no-repeat;`}>
	<div class="hero-overlay bg-opacity-40" />

	<div class="hero-content flex-col lg:flex-row-reverse">
		<div class="card w-96 bg-base-300 bg-opacity-90">
			<div class="card-body gap-8">
				<div class="">
					<h2 class="card-title">SvelteKit Application Project</h2>
					<p>Practice with the coolest framework!</p>
				</div>
				<div class="card-actions justify-end">
					<button
						class="btn btn-primary"
						on:click={() => {
							goto('/Auth')
						}}>Log In</button>
				</div>
			</div>
		</div>
	</div>
</div>
