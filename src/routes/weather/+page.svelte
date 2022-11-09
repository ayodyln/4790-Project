<script>
	import { enhance } from '$app/forms'

	import 'chart.js/auto'
	import { onMount } from 'svelte'
	import { Line, Doughnut } from 'svelte-chartjs'

	import { tweened } from 'svelte/motion'
	import { cubicOut } from 'svelte/easing'

	import Forcast from '../../lib/components/weather/CurrentWeather/Forcast.svelte'
	import TempatureData from '../../lib/components/weather/CurrentWeather/TempatureData.svelte'
	import TimeData from '../../lib/components/weather/CurrentWeather/TimeData.svelte'
	import Visibility from '../../lib/components/weather/CurrentWeather/Visibility.svelte'
	import WeatherHeader from '../../lib/components/weather/CurrentWeather/WeatherHeader.svelte'
	import WindData from '../../lib/components/weather/CurrentWeather/WindData.svelte'

	export let data

	let weatherData = data.weatherData,
		forcast = data.forcast

	let searchingState = false
	const GetWeather = () => {
		searchingState = true
		weatherData = null
		forcast = null
		return async ({ result, update }) => {
			await progress.set(100)
			weatherData = result.data.weatherJSON
			forcast = result.data.forcast
			progress.set(0)
		}
	}

	const progress = tweened(0, {
		duration: 400,
		easing: cubicOut
	})
</script>

<main class="main-container h-full p-6 flex flex-col gap-4 max-w-screen-2xl m-auto">
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

	<section class="h-full max-w-5xl bg-base-300 rounded-xl flex">
		{#if weatherData}
			<div class="flex flex-col w-full h-full p-4 overflow-auto gap-2">
				<WeatherHeader {weatherData} />
				<div class="divider m-1" />
				<section class="grid gap-3 grid-cols-6 grid-rows-2 h-full">
					<Forcast {forcast} />
					<TempatureData {weatherData} />
					<!-- Small Cards -->
					<TimeData {weatherData} />
					<WindData {weatherData} />
					<Visibility {weatherData} />
				</section>
			</div>
		{:else if searchingState}
			<section class="flex w-[1024px] h-full justify-center items-center">
				<div class="radial-progress text-primary-content" style="--value:{$progress};">
					{Math.round(($progress * 100) / 100)}%
				</div>
			</section>
		{/if}
	</section>
</main>
