<script>
	import { enhance } from '$app/forms'

	import 'chart.js/auto'
	import { Line, Doughnut } from 'svelte-chartjs'

	import LocationData from '../../lib/components/weather/CurrentWeather/LocationData.svelte'

	export let data
	$: weatherData = data.weatherData
	$: forcast = data.forcast

	const GetWeather =
		() =>
		async ({ result }) => {
			console.log(result)
		}
</script>

<main class="main-container h-full p-6 flex flex-col gap-4">
	<div class="flex w-full justify-between items-center">
		<h1 class="text-3xl">Weather Dashboard</h1>
		<form method="POST" action="/weather" use:enhance={GetWeather}>
			<div class="form-control">
				<div class="input-group">
					<input
						class="input input-bordered input-md"
						type="search"
						name="searchTerms"
						placeholder="Search for a town..." />

					<button class="btn btn-square" type="submit">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							><path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
					</button>
				</div>
			</div>
		</form>
	</div>

	<section class="h-full w-full bg-base-200 rounded-lg flex">
		<LocationData {weatherData} {forcast} />
	</section>
</main>

<!-- <section class="flex justify-center items-center w-3/4 self-center">
	<canvas bind:this={barChartElement} />
</section> -->
