<script>
	import { Auth } from 'aws-amplify'
	import { enhance } from '$app/forms'

	import { fade } from 'svelte/transition'
	import { tweened } from 'svelte/motion'
	import { cubicOut } from 'svelte/easing'

	import Forcast from '../../lib/components/weather/CurrentWeather/Forcast.svelte'
	import TempatureData from '../../lib/components/weather/CurrentWeather/TempatureData.svelte'
	import TimeData from '../../lib/components/weather/CurrentWeather/TimeData.svelte'
	import Visibility from '../../lib/components/weather/CurrentWeather/Visibility.svelte'
	import WeatherHeader from '../../lib/components/weather/CurrentWeather/WeatherHeader.svelte'
	import WindData from '../../lib/components/weather/CurrentWeather/WindData.svelte'

	export let data

	Auth.currentAuthenticatedUser({
		bypassCache: false // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
	})
		.then((user) => console.log(user))
		.catch((err) => console.log(err))

	let weatherData = data.weatherData,
		forcast = data.forcast

	let searchingState = false
	const GetWeather = () => {
		weatherData = null
		forcast = null

		return async ({ result, update }) => {
			// Calling in this order, just for the UI Visual Feedback.
			forcast = result.data.forcast
			await progress.set(100)
			weatherData = result.data.weatherJSON
			searchingState = false
			progress.set(0)
		}
	}

	const progress = tweened(0, {
		duration: 300,
		easing: cubicOut
	})
</script>

<div class="flex flex-col max-w-5xl w-full justify-center gap-4 p-4 pb-0 mx-auto h-full">
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

	<section class="h-[36rem]">
		{#if weatherData}
			<section class="bg-base-300 text-base-content rounded-xl w-full h-full">
				<div
					class="flex w-full flex-col h-full w-full p-4 gap-2"
					in:fade
					on:introstart={(e) => {
						searchingState = true
					}}>
					<WeatherHeader {weatherData} />
					<div class="divider before:bg-current after:bg-current" />
					<section class="grid gap-3 grid-cols-6 grid-rows-2 h-full">
						<Forcast {forcast} />
						<TempatureData {weatherData} />
						<!-- Small Cards -->
						<TimeData {weatherData} />
						<WindData {weatherData} />
						<Visibility {weatherData} />
					</section>
				</div>
			</section>
		{:else if searchingState}
			<section class="bg-base-300 rounded-xl flex w-full h-full justify-center items-center">
				<div class="radial-progress text-base-content" style="--value:{$progress};">
					{Math.round(($progress * 100) / 100)}%
				</div>
			</section>
		{/if}
	</section>
</div>
