<script>
	import { enhance } from '$app/forms'

	import 'chart.js/auto'
	import { Line, Doughnut } from 'svelte-chartjs'

	import Forcast from '../../lib/components/weather/CurrentWeather/Forcast.svelte'
	import TempatureData from '../../lib/components/weather/CurrentWeather/TempatureData.svelte'
	import TimeData from '../../lib/components/weather/CurrentWeather/TimeData.svelte'
	import Visibility from '../../lib/components/weather/CurrentWeather/Visibility.svelte'
	import WeatherHeader from '../../lib/components/weather/CurrentWeather/WeatherHeader.svelte'
	import WindData from '../../lib/components/weather/CurrentWeather/WindData.svelte'

	export let data

	let { weatherData, forcast } = data

	console.log(weatherData)

	const GetWeather =
		() =>
		async ({ result }) => {
			console.log(result)
		}

	let locations = [weatherData]
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
		<div class="w-44 h-full bg-primary rounded-l-lg p-1">
			{#each locations as location}
				<button class="btn text-md w-full">
					{location.name}
				</button>
			{/each}
		</div>

		<div class="flex flex-col w-full h-full p-4">
			<WeatherHeader {weatherData} />
			<div class="divider m-1" />
			<section class="flex flex-wrap gap-4">
				<Forcast {forcast} />
				<TimeData {weatherData} />
				<WindData {weatherData} />
				<Visibility {weatherData} />
				<TempatureData {weatherData} />
			</section>
		</div>
	</section>
</main>

<!-- <section class="flex justify-center items-center w-3/4 self-center">
	<canvas bind:this={barChartElement} />
</section> -->
